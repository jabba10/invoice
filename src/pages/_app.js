// src/pages/_app.js
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = `https://www.nofeesinvoice.com${router.asPath}`;
  
  // Use environment variable with fallback to new GA ID
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-QZEY33HRX6';

  // Track page views
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag?.('config', GA_MEASUREMENT_ID, {
        page_path: url,
        anonymize_ip: true, // GDPR compliance
        allow_google_signals: false, // Disable ad personalization
        allow_ad_personalization_signals: false,
      });
    };
    
    // Track initial load
    handleRouteChange(router.asPath);
    
    // Track route changes
    router.events.on('routeChangeComplete', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, router.asPath, GA_MEASUREMENT_ID]);

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} key="canonical" />
        {/* Additional meta tags for security */}
        <meta httpEquiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;" />
      </Head>
      
      {/* Google Analytics Script - EXACT match to your provided code */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        async
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false
            });
          `,
        }}
      />
      
      <Navbar />
      <main className="app-wrapper">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}