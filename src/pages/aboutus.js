import Link from 'next/link';
import Head from 'next/head';
import styles from './AboutUs.module.css';

const AboutUs = ({ currentDate, lastModifiedDate }) => {
  const siteUrl = 'https://www.nofeesinvoice.com/about';
  const logoUrl = 'https://www.nofeesinvoice.com/images/logo.png';
  const imageUrl = 'https://www.nofeesinvoice.com/images/invoice-preview.jpg';

  // Structured Data Objects
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'InvoiceGenius',
    url: 'https://www.nofeesinvoice.com',
    logo: logoUrl,
    description:
      'A free, secure, and private online invoice generator that helps freelancers and small businesses create professional invoices instantly.',
    foundingDate: '2022',
    founder: 'The InvoiceGenius Team',
    datePublished: currentDate,
    dateModified: lastModifiedDate,
    sameAs: [
      'https://twitter.com/InvoiceGenius',
      'https://linkedin.com/company/invoicegenius',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'support@yourdomain.com',
      availableLanguage: 'English',
    },
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Free Online Invoice Generator',
    description:
      'Create professional invoices in seconds. No registration, no cost, secure, and supports PDF export, taxes, and multi-language.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    datePublished: currentDate,
    dateModified: lastModifiedDate,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '156',
    },
    featureList:
      'Free to use, No registration, Secure & private, PDF export, Custom templates, Mobile-friendly',
    url: 'https://www.nofeesinvoice.com',
    publisher: {
      '@type': 'Organization',
      name: 'InvoiceGenius',
    },
  };

  // Add FAQ Schema for better SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is this invoice generator really free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our invoice generator is 100% free with no hidden fees, no subscriptions, and no registration required. We believe in providing accessible tools for all businesses.',
          datePublished: currentDate,
        }
      },
      {
        '@type': 'Question',
        name: 'Is my data secure and private?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your data is never stored on our servers. All invoice generation happens in your browser, ensuring complete privacy and security.',
          datePublished: currentDate,
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need to create an account?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No account creation is required. You can start creating invoices immediately without any sign-up process.',
          datePublished: currentDate,
        }
      }
    ]
  };

  // Add NewsArticle Schema for content freshness
  const newsArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: 'About Us | Trusted Free Online Invoice Generator for Professionals',
    description: 'Learn about our mission to provide a fast, secure, and completely free online invoice generator.',
    image: [imageUrl],
    datePublished: currentDate,
    dateModified: lastModifiedDate,
    author: {
      '@type': 'Organization',
      name: 'InvoiceGenius',
      url: 'https://www.nofeesinvoice.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'InvoiceGenius',
      logo: {
        '@type': 'ImageObject',
        url: logoUrl
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': siteUrl
    }
  };

  return (
    <>
      {/* SEO Meta Tags with build-time dates */}
      <Head>
        <meta name="date" content={currentDate} />
        <meta name="last-modified" content={lastModifiedDate} />
        <meta property="article:published_time" content={lastModifiedDate} />
        <meta property="article:modified_time" content={lastModifiedDate} />
        
        {/* Additional freshness signals */}
        <meta name="googlebot-news" content="index,follow" />
        <meta name="robots" content="max-snippet:150, max-image-preview:large" />
      </Head>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        key="organization-schema"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        key="software-schema"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        key="faq-schema"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleSchema) }}
        key="newsarticle-schema"
      />

      <div className={styles.aboutUs}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Who We Are</h1>
            <p>Your trusted partner in creating professional invoices, fast and free.</p>
            <Link href="/free-invoice-generator" className={styles.ctaButton}>
              Start Creating Invoices
            </Link>
          </div>
        </section>

        {/* Mission Section */}
        <section className={styles.missionSection}>
          <div className={styles.missionContent}>
            <h2>Our Mission</h2>
            <p>
              We believe that creating professional invoices should be accessible to everyone—freelancers, 
              small business owners, and entrepreneurs alike. That&apos;s why we built a completely free, 
              secure, and easy-to-use invoice generator that puts you in control of your billing process.
            </p>
            <p>
              No hidden fees, no complex sign-up processes, and no data storage. Just a straightforward 
              tool that helps you get paid faster while maintaining your professional image.
            </p>
            {/* Hidden microdata for freshness */}
            <meta itemProp="datePublished" content={currentDate} />
            <meta itemProp="dateModified" content={lastModifiedDate} />
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50K+</span>
              <span className={styles.statLabel}>Invoices Created</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>99.9%</span>
              <span className={styles.statLabel}>Uptime</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Free Forever</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Available</span>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <h2 className={styles.sectionTitle}>Why Choose Our Free Invoice Generator?</h2>
          <div className={styles.cards}>
            {[
              {
                title: '✨ Easy to Use',
                description:
                  'Create and customize professional invoices in minutes with our intuitive interface. No design or accounting skills required.',
              },
              {
                title: '🔒 Secure & Private',
                description:
                  'Your data is never stored or shared. We respect your privacy and ensure your documents remain confidential.',
              },
              {
                title: '📄 Professional Templates',
                description:
                  'Choose from a variety of sleek, customizable invoice templates that match your brand and style.',
              },
              {
                title: '📥 Instant Download',
                description:
                  'Generate your invoice and download it instantly in PDF or printable format—ready to send to your clients.',
              },
              {
                title: '🌍 Access Anywhere',
                description:
                  'Use our invoice generator on any device—desktop, tablet, or mobile—without needing to install anything.',
              },
              {
                title: '💸 Completely Free',
                description:
                  'No hidden fees, no subscriptions. Just a powerful, free tool to help you get paid faster and more professionally.',
              },
            ].map((feature, index) => (
              <div className={styles.card} key={index}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                {/* Hidden freshness data for each feature card */}
                <meta itemProp="datePublished" content={currentDate} />
                <meta itemProp="dateModified" content={lastModifiedDate} />
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className={styles.footerCta}>
          <h2>Ready to Start Creating Invoices?</h2>
          <Link href="/free-invoice-generator" className={styles.ctaButton}>
            Generate Your First Invoice
          </Link>
          {/* Hidden freshness data */}
          <meta itemProp="datePublished" content={currentDate} />
          <meta itemProp="dateModified" content={lastModifiedDate} />
        </section>
      </div>
    </>
  );
};

// Static Generation with getStaticProps
export async function getStaticProps() {
  // Generate dates at build time
  const buildDate = new Date();
  const currentDate = buildDate.toISOString().split('T')[0]; // YYYY-MM-DD
  const lastModifiedDate = buildDate.toISOString(); // Full ISO 8601

  return {
    props: {
      currentDate,
      lastModifiedDate,
    },
    revalidate: 86400, // ISR: Revalidate every 24 hours
  };
}

// Metadata for SEO (Next.js App Router)
export const metadata = {
  title: 'About Us | Trusted Free Online Invoice Generator for Professionals',
  description:
    'Learn about our mission to provide a fast, secure, and completely free online invoice generator. No registration. No data storage. 100% private.',
  keywords:
    'about invoice generator, free invoicing tool, online invoice creator, secure invoice app, no-signup invoice, create professional invoices, about us invoicing',
  alternates: {
    canonical: 'https://www.nofeesinvoice.com/aboutus',
  },
  openGraph: {
    title: 'About Us | Free & Secure Invoice Generator for Freelancers & Small Businesses',
    description:
      'We believe invoicing should be fast, free, and private. Learn how our tool helps thousands create professional invoices in seconds.',
    url: 'https://www.nofeesinvoice.com/aboutus',
    siteName: 'InvoiceGenius',
    images: [
      {
        url: 'https://www.nofeesinvoice.com/images/invoice-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Invoice Generator - Clean, Professional Invoices in Seconds',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | The Free Invoice Tool Trusted by Thousands',
    description:
      'No registration. No fees. Just a simple, secure way to create professional invoices online. Learn about our mission.',
    images: ['https://www.nofeesinvoice.com/images/invoice-preview.jpg'],
    site: '@InvoiceGenius',
    creator: '@InvoiceGenius',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default AboutUs;