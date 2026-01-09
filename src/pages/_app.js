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
  
  const GA_MEASUREMENT_ID = 'G-QZEY33HRX6';

  // Track page views
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag?.('config', GA_MEASUREMENT_ID, {
        page_path: url,
        anonymize_ip: true, // GDPR compliance
      });
    };
    
    // Track initial load
    handleRouteChange(router.asPath);
    
    // Track route changes
    router.events.on('routeChangeComplete', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, router.asPath]);

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} key="canonical" />
      </Head>
      
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
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
              anonymize_ip: true
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