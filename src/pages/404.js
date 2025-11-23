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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </Head>

      <div className="errorContainer">
        <div className="errorContent">
          <div className="errorHero">
            <div className="errorHeroContent">
              {/* 404 Number with responsive sizing */}
              <div className="errorNumber">404</div>
              
              <h1 className="errorTitle">Page Not Found</h1>
              
              <p className="errorDescription">
                Oops! The page you're looking for seems to have gone missing. Don't worry, we'll help you get back on track.
              </p>
              
              <div className="buttonContainer">
                <Link href="/" className="ctaButton ctaButtonPrimary">
                  Return to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* CSS Variables for consistent theming */
        :root {
          --primary: #1f2937;
          --secondary: #2563eb;
          --accent: #10b981;
          --button-bg: #1e40af; /* Dark blue color */
          --button-hover: #1e3a8a; /* Darker blue for hover */
          --background: #ffffff;
          --text: #374151;
          --error-bg: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          --hero-bg: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          --shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          --border-radius: 12px;
        }

        /* Base Container - Mobile First */
        .errorContainer {
          background: var(--error-bg);
          color: var(--text);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          min-height: 100vh;
          min-height: 100dvh; /* Dynamic viewport height for mobile */
          line-height: 1.6;
          scroll-behavior: smooth;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          width: 100%;
          box-sizing: border-box;
        }

        /* Error Content Wrapper */
        .errorContent {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Error Hero Section */
        .errorHero {
          background: var(--hero-bg);
          color: white;
          padding: 3rem 1.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow);
          width: 100%;
          box-sizing: border-box;
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
          pointer-events: none;
        }

        .errorHeroContent {
          max-width: 500px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          width: 100%;
        }

        /* 404 Number Styling */
        .errorNumber {
          font-size: 5rem;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0.9;
        }

        /* Error Title */
        .errorTitle {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.3;
          color: white;
          letter-spacing: -0.02em;
        }

        /* Error Description */
        .errorDescription {
          font-size: 1.0625rem;
          margin-bottom: 2.5rem;
          opacity: 0.9;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.95);
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Button Container */
        .buttonContainer {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        /* Enhanced Responsive Button - Dark Blue with White Text */
        .ctaButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.875rem 2.5rem;
          background: var(--button-bg);
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1.0625rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(30, 64, 175, 0.4);
          text-align: center;
          min-height: 56px;
          min-width: 220px;
          position: relative;
          overflow: hidden;
          line-height: 1.2;
          width: auto;
          max-width: 280px;
        }

        .ctaButtonPrimary {
          background: var(--button-bg);
          color: white;
        }

        /* Button States */
        .ctaButton:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(30, 64, 175, 0.5);
          background: var(--button-hover);
        }

        .ctaButton:active {
          transform: translateY(0);
          box-shadow: 0 2px 10px rgba(30, 64, 175, 0.3);
          transition: all 0.1s ease;
        }

        .ctaButton:focus-visible {
          outline: 3px solid rgba(255, 255, 255, 0.8);
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
          width: 120px;
          height: 120px;
          opacity: 0;
          transition: 0s;
        }

        /* ===== RESPONSIVE BREAKPOINTS ===== */

        /* Small Phones (320px - 374px) */
        @media (max-width: 374px) {
          .errorContainer {
            padding: 12px;
          }

          .errorHero {
            padding: 2rem 1rem;
            border-radius: 10px;
          }

          .errorNumber {
            font-size: 3.5rem;
            margin-bottom: 0.75rem;
          }

          .errorTitle {
            font-size: 1.375rem;
            margin-bottom: 0.875rem;
          }

          .errorDescription {
            font-size: 0.9375rem;
            margin-bottom: 2rem;
            line-height: 1.5;
          }

          .ctaButton {
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
            min-height: 48px;
            min-width: 180px;
            width: 100%;
            max-width: none;
          }
        }

        /* Medium Phones (375px - 424px) */
        @media (min-width: 375px) and (max-width: 424px) {
          .errorHero {
            padding: 2.5rem 1.25rem;
          }

          .errorNumber {
            font-size: 4rem;
          }

          .errorTitle {
            font-size: 1.5rem;
          }

          .errorDescription {
            font-size: 1rem;
          }

          .ctaButton {
            min-width: 200px;
          }
        }

        /* Large Phones (425px - 767px) */
        @media (min-width: 425px) and (max-width: 767px) {
          .errorHero {
            padding: 3rem 1.5rem;
          }

          .errorNumber {
            font-size: 4.5rem;
          }

          .errorTitle {
            font-size: 1.625rem;
          }

          .errorDescription {
            font-size: 1.0625rem;
          }
        }

        /* Tablets (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .errorContainer {
            padding: 24px;
          }

          .errorHero {
            padding: 4rem 2rem;
          }

          .errorNumber {
            font-size: 5.5rem;
          }

          .errorTitle {
            font-size: 2rem;
          }

          .errorDescription {
            font-size: 1.125rem;
            margin-bottom: 3rem;
          }

          .ctaButton {
            padding: 1rem 3rem;
            font-size: 1.125rem;
            min-height: 60px;
            min-width: 240px;
          }
        }

        /* Desktop (1024px - 1439px) */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .errorContent {
            max-width: 650px;
          }

          .errorHero {
            padding: 5rem 3rem;
          }

          .errorNumber {
            font-size: 6rem;
          }

          .errorTitle {
            font-size: 2.25rem;
          }

          .errorDescription {
            font-size: 1.25rem;
            margin-bottom: 3.5rem;
          }
        }

        /* Large Desktop (1440px and above) */
        @media (min-width: 1440px) {
          .errorContent {
            max-width: 700px;
          }

          .errorHero {
            padding: 6rem 4rem;
          }

          .errorNumber {
            font-size: 7rem;
          }

          .errorTitle {
            font-size: 2.5rem;
          }

          .errorDescription {
            font-size: 1.375rem;
            margin-bottom: 4rem;
          }

          .ctaButton {
            padding: 1.125rem 3.5rem;
            font-size: 1.25rem;
            min-height: 64px;
            min-width: 260px;
          }
        }

        /* Ultra-wide screens (1920px and above) */
        @media (min-width: 1920px) {
          .errorContent {
            max-width: 800px;
          }

          .errorHero {
            padding: 7rem 5rem;
          }
        }

        /* ===== ACCESSIBILITY & ENHANCEMENTS ===== */

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .ctaButton:hover {
            transform: none;
          }
          
          .ctaButton:active {
            transform: scale(0.98);
            box-shadow: 0 2px 8px rgba(30, 64, 175, 0.3);
          }
          
          /* Larger touch targets for mobile */
          @media (max-width: 768px) {
            .ctaButton {
              min-height: 52px;
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
          :root {
            --error-bg: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            --hero-bg: linear-gradient(135deg, #1e293b 0%, #2563eb 100%);
            --button-bg: #1e40af;
            --button-hover: #1e3a8a;
          }
        }

        /* High Contrast Support */
        @media (prefers-contrast: high) {
          .ctaButton {
            border: 2px solid currentColor;
          }
          
          .errorDescription {
            opacity: 1;
          }
        }

        /* Loading states */
        .ctaButton:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none !important;
          box-shadow: none !important;
        }

        /* Portrait Orientation Optimizations */
        @media (max-height: 600px) and (orientation: portrait) {
          .errorContainer {
            padding: 20px;
            align-items: flex-start;
            padding-top: 40px;
          }
          
          .errorHero {
            padding: 2rem 1.5rem;
          }
        }

        /* Landscape Orientation Optimizations */
        @media (max-height: 500px) and (orientation: landscape) {
          .errorContainer {
            padding: 10px;
          }
          
          .errorHero {
            padding: 1.5rem 2rem;
          }
          
          .errorNumber {
            font-size: 3rem;
            margin-bottom: 0.5rem;
          }
          
          .errorTitle {
            font-size: 1.375rem;
            margin-bottom: 0.5rem;
          }
          
          .errorDescription {
            font-size: 0.9375rem;
            margin-bottom: 1.5rem;
          }
          
          .ctaButton {
            min-height: 44px;
            padding: 0.625rem 1.5rem;
          }
        }

        /* Very small height screens */
        @media (max-height: 400px) {
          .errorHero {
            padding: 1rem 1.5rem;
          }
          
          .errorNumber {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default Custom404;