import Head from 'next/head';
import Link from 'next/link';
import styles from './InvoiceLP.module.css';

const InvoiceLP = () => {
  const siteUrl = 'https://www.nofeesinvoice.com/free-invoice-generator';
  const imageUrl = 'https://www.nofeesinvoice.com/images/invoice-preview.jpg';

  return (
    <>
      <Head>
        {/* Primary SEO Tags */}
        <title>Free Online Invoice Generator | Create Professional Invoices Instantly</title>
        <meta
          name="description"
          content="Create professional invoices in seconds with our free online invoice generator. No registration, no cost, no hassle. Download as PDF instantly. Perfect for freelancers, small businesses, and contractors."
        />
        <meta
          name="keywords"
          content="free invoice generator, online invoice maker, create invoice free, invoice template, PDF invoice generator, small business invoicing, freelancer invoice tool, professional invoices, business invoices, invoice creator, billing software"
        />
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Free Online Invoice Generator | Create & Download Invoices Instantly" />
        <meta
          property="og:description"
          content="Generate professional invoices in seconds. 100% free, no registration, secure, and supports taxes, discounts, and multi-language."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content="Free Invoice Generator - Sample Invoice Output" />
        <meta property="og:site_name" content="NoFeesInvoice" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Online Invoice Generator | No Signup Required" />
        <meta
          name="twitter:description"
          content="Create clean, professional invoices in seconds. Free forever. No registration. Download as PDF instantly."
        />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:site" content="@nofeesinvoice" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Free Online Invoice Generator",
              "description": "Create professional invoices instantly with our free online tool. No registration required.",
              "url": siteUrl,
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Any",
              "permissions": "browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Organization",
                "name": "NoFeesInvoice"
              }
            })
          }}
        />

        {/* Language & Charset */}
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.container}>
        {/* Hero Section */}
        <header className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Free Online Invoice Generator</h1>
            <p className={styles.heroSubtitle}>
              Create professional invoices in seconds. No registration required. 
              Trusted by 50,000+ freelancers and small businesses worldwide.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/free-invoice-generator" className={`${styles.btn} ${styles.btnPrimary}`}>
                Generate Invoice Now
              </Link>
              <Link href="#features" className={`${styles.btn} ${styles.btnSecondary}`}>
                Learn More
              </Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <strong>50,000+</strong>
                <span>Invoices Created</span>
              </div>
              <div className={styles.stat}>
                <strong>100%</strong>
                <span>Free Forever</span>
              </div>
              <div className={styles.stat}>
                <strong>0</strong>
                <span>Registration Required</span>
              </div>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section id="features" className={styles.features}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose Our Invoice Generator?</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to create professional invoices quickly and efficiently
            </p>
          </div>
          <div className={styles.cards}>
            {[
              {
                title: 'Instant Invoicing',
                description: 'Generate and download invoices instantly with a few clicks. No learning curve required.',
                icon: '⚡',
              },
              {
                title: 'PDF Export',
                description: 'Export your invoices to professional PDF format for easy sharing and printing.',
                icon: '📄',
              },
              {
                title: 'Secure & Private',
                description: 'No data stored on our servers. Your client information stays completely private.',
                icon: '🔒',
              },
              {
                title: 'Custom Branding',
                description: 'Add your logo, company colors, and custom payment terms to match your brand.',
                icon: '🎨',
              },
              {
                title: 'Tax & Discounts',
                description: 'Automatically calculate taxes, apply discounts, and handle multiple currency options.',
                icon: '💰',
              },
              {
                title: 'Mobile Friendly',
                description: 'Create invoices on any device - desktop, tablet, or mobile phone.',
                icon: '📱',
              },
            ].map((card, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.cardIcon}>{card.icon}</div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className={styles.howItWorks}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <p className={styles.sectionSubtitle}>
              Create your first professional invoice in under 2 minutes
            </p>
          </div>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Enter Details</h3>
              <p>Fill in your business info, client details, and invoice items</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Customize</h3>
              <p>Add your logo, adjust colors, and set payment terms</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Download & Send</h3>
              <p>Download as PDF or share directly with your client</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What Our Users Say</h2>
            <p className={styles.sectionSubtitle}>
              Join thousands of satisfied users who trust our invoice generator
            </p>
          </div>
          <div className={styles.testimonialCards}>
            <div className={styles.testimonial}>
              <div className={styles.testimonialContent}>
                <p>"This tool saved me so much time! I can create clean, professional invoices within minutes. The PDF export feature is flawless."</p>
                <div className={styles.testimonialAuthor}>
                  <strong>Sarah M.</strong>
                  <span>Freelance Designer</span>
                </div>
              </div>
            </div>
            <div className={styles.testimonial}>
              <div className={styles.testimonialContent}>
                <p>"Finally, a free invoice generator that works like a charm. No ads, no hassle, and my clients love the professional look."</p>
                <div className={styles.testimonialAuthor}>
                  <strong>John T.</strong>
                  <span>Small Business Owner</span>
                </div>
              </div>
            </div>
            <div className={styles.testimonial}>
              <div className={styles.testimonialContent}>
                <p>"As a contractor, I need to send invoices quickly. This tool has everything I need and the mobile experience is perfect."</p>
                <div className={styles.testimonialAuthor}>
                  <strong>Mike R.</strong>
                  <span>IT Contractor</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faq}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          </div>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3>Is it really free?</h3>
              <p>Yes, completely free! No hidden fees, no trial periods, and no registration required. You can create and download unlimited invoices at no cost.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Do I need to create an account?</h3>
              <p>No account creation needed. Our invoice generator works instantly without any sign-up process.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>What information do I need to create an invoice?</h3>
              <p>You'll need your business details, client information, invoice items with descriptions and prices, and any applicable taxes or discounts.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Can I customize the invoice design?</h3>
              <p>Yes! You can add your logo, change colors, modify layouts, and include custom payment terms to match your brand.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Create Professional Invoices?</h2>
            <p className={styles.ctaDescription}>
              Join thousands of businesses and freelancers who trust our free invoice generator. 
              No credit card required. Start now and get paid faster.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/free-invoice-generator" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`}>
                Generate Your First Invoice
              </Link>
              <Link href="#features" className={`${styles.btn} ${styles.btnSecondary} ${styles.btnLarge}`}>
                View All Features
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        
      </div>
    </>
  );
};

export default InvoiceLP;