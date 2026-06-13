"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.pracas.rocketsingh";

function isMobileBrowser() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 768px)").matches;
}

function isStandaloneApp() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (window.navigator as Navigator & { standalone?: boolean }).standalone ===
      true
  );
}

export default function SmartAppBanner() {
  const [visible, setVisible] = useState(false);
  const [hostname, setHostname] = useState("rocketsingh.app");

  useEffect(() => {
    if (isStandaloneApp()) return;
    if (!isMobileBrowser()) return;

    setHostname(window.location.hostname.replace(/^www\./, ""));
    setVisible(true);
    document.documentElement.dataset.smartBanner = "visible";

    return () => {
      delete document.documentElement.dataset.smartBanner;
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="smart-app-banner" role="region" aria-label="Install RocketSingh app">
      <div className="smart-app-banner__card">
        <Image
          src="/logo/rocketsingh-logo.png"
          alt=""
          width={40}
          height={40}
          className="smart-app-banner__icon"
        />

        <div className="smart-app-banner__copy">
          <p className="smart-app-banner__title">Install RocketSingh</p>
          <p className="smart-app-banner__domain">{hostname}</p>
        </div>

        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="smart-app-banner__install"
        >
          Install
        </a>
      </div>
    </div>
  );
}
