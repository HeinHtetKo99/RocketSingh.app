// app/layout.js
import './globals.css';
import Script from 'next/script';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidekick from '../components/Sidekick';
import Navbar from '../components/Navbar';
import RoadBlock from '../components/Roadblock';
// import BrowserCompatibilityWarning from '../components/BrowserCompatibilityWarning';
import CookieConsent from '../components/CookieConsent';
import { Suspense } from 'react';


export const metadata = {
  title: "RocketSingh | Professional cleaning Services in Kathmandu, Nepal",
  description: "Welcome to RocketSingh, your trusted partner in professional cleaning services in Kathmandu, Nepal.",
  keywords: "RocketSingh, Professional Cleaning, Kathmandu, Nepal",
  authors: [{ name: "RocketSingh" }],
  openGraph: {
    title: "RocketSingh | Professional Cleaning Services in Kathmandu, Nepal",
    description: "Welcome to RocketSingh, your trusted partner in professional cleaning services.",
    url: "https://cleaningsewa.com",
    images: [
      {
        url: "https://cleaningsewa.com/og/default.jpg",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RocketSingh | Professional Cleaning Services in Kathmandu, Nepal",
    description: "Welcome to RocketSingh, your trusted partner in professional cleaning services.",
    images: ["https://cleaningsewa.com/og/default.jpg"],
  },
};

export default function RootLayout({ children }:Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logo/rocketsingh-logo.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','YOUR-GTM-ID');
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=YOUR-GTM-ID"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* Facebook Pixel noscript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
          />
        </noscript>
        
        <CookieConsent />
        {/* <BrowserCompatibilityWarning /> */}
        <RoadBlock />
        <Navbar />
        <Header />
        <Sidekick />
        <main>
          <Suspense fallback={null}>{children}</Suspense>
        </main>
        <Footer />
      </body>
    </html>
  );
}
