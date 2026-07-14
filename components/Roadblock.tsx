"use client";

import { useEffect, useState, useCallback } from "react";

const COOKIE_NAME = "roadblock_seen";
const IMAGE_LOAD_BUDGET_MS = 6_000;
const CLOSE_UNLOCK_SECONDS = 6;
const AUTO_CLOSE_SECONDS = 6;

const MONTH_NAMES = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
] as const;

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function getCookie(name: string) {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}=([^;]*)`)
  );
  return match ? decodeURIComponent(match[1]) : null;
}

function setDailyCookie(name: string, value: string) {
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=86400; Path=/; SameSite=Lax`;
}

function loadImage(src: string, signal: AbortSignal) {
  return new Promise<boolean>((resolve) => {
    if (signal.aborted) {
      resolve(false);
      return;
    }

    const img = new Image();
    const done = (ok: boolean) => {
      img.onload = null;
      img.onerror = null;
      resolve(ok);
    };

    img.onload = () => done(true);
    img.onerror = () => done(false);
    signal.addEventListener("abort", () => done(false), { once: true });
    img.src = src;
  });
}

type RoadBlockProps = {
  onSettled?: () => void;
};

const RoadBlock = ({ onSettled }: RoadBlockProps) => {
  const today = new Date();
  const day = today.getDate();
  const month = MONTH_NAMES[today.getMonth()];

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [imageReady, setImageReady] = useState(false);
  const [showRoadBlock, setShowRoadBlock] = useState(false);
  const [displayTimeLeft, setDisplayTimeLeft] = useState(CLOSE_UNLOCK_SECONDS);
  const [isNarrow, setIsNarrow] = useState(false);

  const settle = useCallback(() => {
    onSettled?.();
  }, [onSettled]);

  const onClose = useCallback(() => {
    document.body.classList.remove("hideScroll");
    document.body.classList.add("showScroll");
    setShowRoadBlock(false);
    settle();
  }, [settle]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 549px)");
    const sync = () => setIsNarrow(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Preload image (6s budget), then show roadblock — once per day via cookie
  useEffect(() => {
    const seen = getCookie(COOKIE_NAME);
    if (seen === todayKey()) {
      settle();
      return;
    }

    const controller = new AbortController();
    let finished = false;

    const finish = (src: string | null) => {
      if (finished) return;
      finished = true;
      window.clearTimeout(timeout);

      if (!src) {
        settle();
        return;
      }

      setDailyCookie(COOKIE_NAME, todayKey());
      setImageSrc(src);
      setShowRoadBlock(true);
      document.body.classList.add("hideScroll");
    };

    const timeout = window.setTimeout(() => {
      controller.abort();
      finish(null);
    }, IMAGE_LOAD_BUDGET_MS);

    (async () => {
      const primary = `/roadblock/${month}/${day}.jpg`;
      if (await loadImage(primary, controller.signal)) {
        finish(primary);
        return;
      }
      if (controller.signal.aborted || finished) return;

      const fallback = "/roadblock/default/default.jpg";
      if (await loadImage(fallback, controller.signal)) {
        finish(fallback);
        return;
      }
      if (controller.signal.aborted || finished) return;

      finish(null);
    })();

    return () => {
      finished = true;
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, [month, day, settle]);

  useEffect(() => {
    if (!showRoadBlock) return;
    const timer = window.setTimeout(onClose, AUTO_CLOSE_SECONDS * 1000);
    return () => window.clearTimeout(timer);
  }, [showRoadBlock, onClose]);

  useEffect(() => {
    if (!showRoadBlock || !imageReady) return;
    const timer = setInterval(() => {
      setDisplayTimeLeft((prev: number) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [showRoadBlock, imageReady]);

  if (!showRoadBlock || !imageSrc) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#D0D0D0]">
      <div className="relative">
        {imageReady && (
          <button
            type="button"
            onClick={displayTimeLeft <= 0 ? onClose : undefined}
            aria-label={displayTimeLeft <= 0 ? "Close advertisement" : undefined}
            className={
              isNarrow
                ? "absolute top-10 right-0"
                : "absolute -top-2.5 -right-2.5 sm:-top-2.5 sm:-right-2.5"
            }
            style={{
              backgroundColor: "#055d59",
              borderRadius: "50%",
              border: "0px",
              width: "40px",
              height: "40px",
              textAlign: "center",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              cursor: displayTimeLeft <= 0 ? "pointer" : "not-allowed",
            }}
          >
            {displayTimeLeft <= 0 ? "X" : displayTimeLeft}
          </button>
        )}

        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src={imageSrc}
            ref={(el) => {
              if (el?.complete && el.naturalWidth > 0) setImageReady(true);
            }}
            onLoad={() => setImageReady(true)}
            className="img-fluid rounded"
            style={{
              borderRadius: "3%",
              objectFit: "contain",
              height: "550px",
              width: "550px",
              opacity: imageReady ? 1 : 0,
              display: "block",
            }}
            alt="Advertisement"
          />
        </a>
      </div>
    </div>
  );
};

export default RoadBlock;
