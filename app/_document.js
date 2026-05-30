import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon and manifest */}
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />

        {/* Primary Meta Tags */}
        <meta name="title" content="RocketSingh | Professional Cleaning Services in Kathmandu, Nepal" />
        <meta name="description" content="Welcome to RocketSingh, your trusted partner in professional cleaning services." />
        <meta name="keywords" content="RocketSingh, Professional Cleaning, Kathmandu, Nepal" />
        <meta name="author" content="RocketSingh" />

        {/* Open Graph */}
        <meta property="og:url" content="https://cleaningsewa.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RocketSingh | Professional Cleaning Services in Kathmandu, Nepal" />
        <meta property="og:description" content="Welcome to RocketSingh, your trusted partner in professional cleaning services." />
        <meta property="og:image" content="https://cleaningsewa.com/og/default.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="cleaningsewa.com" />
        <meta property="twitter:url" content="https://cleaningsewa.com" />
        <meta name="twitter:title" content="RocketSingh | Professional Cleaning Services in Kathmandu, Nepal" />
        <meta name="twitter:description" content="Welcome to RocketSingh, your trusted partner in professional cleaning services." />
        <meta name="twitter:image" content="https://cleaningsewa.com/og/default.jpg" />
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=YOUR-GTM-ID"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
