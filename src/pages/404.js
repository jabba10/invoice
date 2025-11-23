'use client';
import Link from 'next/link';
import Head from 'next/head';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | Free Online Invoice Generator</title>
        <meta 
          name="description" 
          content="The page you're looking for doesn't exist. Return to our homepage to create professional invoices instantly." 
        />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="errorContainer">
        <div className="errorContent">
          <div className="errorHero">
            <div className="errorHeroContent">
              <h1 className="errorTitle">404 - Page Not Found</h1>
              <p className="errorDescription">
                Oops! The page you're looking for seems to have gone missing. Don't worry, we'll help you get back on track.
              </p>
              <Link href="/" className="ctaButton ctaButtonPrimary">
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .errorContainer {
          --primary: #1f2937;
          --secondary: #2563eb;
          --accent: #10b981;
          --background: #ffffff;
          --text: #374151;
          
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          color: var(--text);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          min-height: 100vh;
          line-height: 1.6;
          scroll-behavior: smooth;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        /* Error Hero Section */
        .errorHero {
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          color: white;
          padding: 4rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          width: 100%;
        }

        .errorHero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.3;
        }

        .errorHeroContent {
          max-width: 500px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .errorTitle {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          background: linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .errorDescription {
          font-size: 1.125rem;
          margin-bottom: 2.5rem;
          opacity: 0.9;
          line-height: 1.6;
        }

        /* Enhanced Responsive Buttons */
        .ctaButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 2rem;
          background: var(--accent);
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
          text-align: center;
          min-height: 50px;
          min-width: 200px;
          position: relative;
          overflow: hidden;
          line-height: 1.2;
        }

        .ctaButtonPrimary {
          background: var(--accent);
          color: white;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
        }

        .ctaButton:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.35);
          background: #0da271;
        }

        .ctaButton:active {
          transform: translateY(0);
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2);
          transition: all 0.1s ease;
        }

        .ctaButton:focus-visible {
          outline: 2px solid var(--secondary);
          outline-offset: 2px;
        }

        /* Ripple Effect */
        .ctaButton::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transition: width 0.3s ease, height 0.3s ease, opacity 0.3s ease;
          transform: translate(-50%, -50%);
          opacity: 0;
        }

        .ctaButton:active::after {
          width: 100px;
          height: 100px;
          opacity: 0;
          transition: 0s;
        }

        /* Enhanced Mobile Responsiveness */
        @media (max-width: 1024px) {
          .errorTitle {
            font-size: 2.25rem;
          }
          
          .errorDescription {
            font-size: 1.0625rem;
          }
        }

        @media (max-width: 768px) {
          .errorHero {
            padding: 3rem 1.5rem;
          }
          
          .errorTitle {
            font-size: 2rem;
          }
          
          .errorDescription {
            font-size: 1rem;
            margin-bottom: 2rem;
          }
          
          .ctaButton {
            width: 100%;
            max-width: 280px;
            min-height: 48px;
            font-size: 0.9375rem;
          }
        }

        @media (max-width: 480px) {
          .errorContainer {
            padding: 16px;
          }

          .errorHero {
            padding: 2.5rem 1.25rem;
            border-radius: 8px;
          }
          
          .errorTitle {
            font-size: 1.75rem;
            margin-bottom: 1.25rem;
          }
          
          .errorDescription {
            font-size: 0.9375rem;
            margin-bottom: 2rem;
          }
          
          .ctaButton {
            padding: 0.6875rem 1.5rem;
            font-size: 0.875rem;
            min-height: 46px;
            min-width: 180px;
            width: 100%;
            max-width: 260px;
          }
        }

        @media (max-width: 320px) {
          .errorHero {
            padding: 2rem 1rem;
          }
          
          .errorTitle {
            font-size: 1.5rem;
          }
          
          .errorDescription {
            font-size: 0.875rem;
          }
          
          .ctaButton {
            min-width: 160px;
            font-size: 0.8125rem;
            padding: 0.625rem 1.25rem;
          }
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .ctaButton:hover {
            transform: none;
          }
          
          .ctaButton:active {
            transform: scale(0.98);
            box-shadow: 0 2px 6px rgba(16, 185, 129, 0.2);
          }
          
          @media (max-width: 480px) {
            .ctaButton {
              min-height: 44px;
            }
          }
        }

        /* Reduced Motion Support */
        @media (prefers-reduced-motion: reduce) {
          .errorContainer {
            scroll-behavior: auto;
          }
          
          .ctaButton {
            transition: none;
          }
          
          .ctaButton:hover,
          .ctaButton:active {
            transform: none;
          }
          
          .ctaButton::after {
            display: none;
          }
        }

        /* Dark Mode Support */
        @media (prefers-color-scheme: dark) {
          .errorContainer {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: #e2e8f0;
          }
          
          .errorHero {
            background: linear-gradient(135deg, #1e293b 0%, #2563eb 100%);
          }
          
          .errorTitle {
            background: linear-gradient(135deg, #e2e8f0 0%, #94a3b8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        }

        /* High Contrast Support */
        @media (prefers-contrast: high) {
          .ctaButton {
            border: 2px solid currentColor;
          }
        }

        /* Loading states */
        .ctaButton:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none !important;
          box-shadow: none !important;
        }
      `}</style>
    </>
  );
};

export default Custom404;