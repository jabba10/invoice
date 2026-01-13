import Head from 'next/head';
import Link from 'next/link';
import styles from './InvoiceLP.module.css';

const InvoiceLP = ({ currentDate, lastModifiedDate }) => {
  const siteUrl = 'https://www.nofeesinvoice.com/free-invoice-generator';
  const imageUrl = 'https://www.nofeesinvoice.com/images/invoice-preview.jpg';
  const logoUrl = 'https://www.nofeesinvoice.com/images/logo.png';
  const targetLink = '/free-invoice-generator';

  return (
    <>
      <Head>
        {/* Critical Technical SEO */}
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Date meta tags using SSG-generated dates */}
        <meta name="date" content={currentDate} />
        <meta name="last-modified" content={lastModifiedDate} />
        
        {/* Canonical & Alternate URLs */}
        <link rel="canonical" href={siteUrl} />
        <link rel="alternate" href={siteUrl} hreflang="x-default" />
        <link rel="alternate" href={siteUrl} hreflang="en" />
        
        {/* Primary Title & Description (Optimized for High CTR) */}
        <title>🚀 Free Invoice Generator Online | Create Professional Invoices in 60 Seconds</title>
        <meta
          name="description"
          content="✅ Generate professional invoices instantly with our free online invoice generator. No registration required. Download as PDF. Trusted by 50,000+ businesses."
        />
        <meta name="keywords" content="free invoice generator, online invoice maker, create invoice free, professional invoice template, PDF invoice generator, small business invoicing, freelancer invoice tool" />
        
        {/* Advanced Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="NoFeesInvoice - Free Business Tools" />
        <meta name="publisher" content="NoFeesInvoice" />
        <meta name="copyright" content={`NoFeesInvoice ${new Date().getFullYear()}`} />
        <meta name="rating" content="safe for kids" />
        <meta name="distribution" content="global" />
        <meta name="category" content="Business, Finance, Invoicing" />
        <meta name="theme-color" content="#10b981" />
        
        {/* Open Graph Protocol - Enhanced */}
        <meta property="og:title" content="🚀 Free Invoice Generator Online | Create & Download Professional Invoices in 60 Seconds" />
        <meta
          property="og:description"
          content="✅ Generate professional invoices instantly. 100% FREE, no registration required. Download as PDF. Perfect for freelancers & small businesses."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content="Professional Invoice Sample - NoFeesInvoice Free Invoice Generator" />
        <meta property="og:site_name" content="NoFeesInvoice" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={lastModifiedDate} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        
        {/* Twitter Card - Enhanced */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nofeesinvoice" />
        <meta name="twitter:creator" content="@nofeesinvoice" />
        <meta name="twitter:title" content="🚀 Free Invoice Generator Online - No Signup Required" />
        <meta
          name="twitter:description"
          content="Create clean, professional invoices in seconds. 100% FREE forever. No registration. Download as PDF instantly."
        />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:image:alt" content="Free Invoice Generator Output Example" />
        <meta name="twitter:label1" content="Price" />
        <meta name="twitter:data1" content="100% Free" />
        <meta name="twitter:label2" content="Registration" />
        <meta name="twitter:data2" content="Not Required" />
        
        {/* Additional SEO Meta */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Mobile Specific */}
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-mobile-web-app-title" content="Invoice Generator" />
        
        {/* Structured Data - Comprehensive */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebApplication",
                "name": "Free Online Invoice Generator",
                "description": "Create professional invoices instantly with our 100% free online tool. No registration required. Download as PDF. Perfect for freelancers, contractors, and small businesses.",
                "url": siteUrl,
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Any",
                "permissions": "browser",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "validFrom": "2020-01-01"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "ratingCount": "1250",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "author": {
                  "@type": "Organization",
                  "name": "NoFeesInvoice",
                  "url": "https://www.nofeesinvoice.com",
                  "logo": logoUrl
                },
                "datePublished": "2020-01-01",
                "dateModified": currentDate,
                "softwareVersion": "3.0",
                "featureList": [
                  "Instant Invoice Generation",
                  "PDF Export",
                  "No Registration Required",
                  "Tax Calculations",
                  "Discount Support",
                  "Multi-Currency",
                  "Custom Branding",
                  "Mobile Responsive"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Is the invoice generator really free?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, completely free! No hidden fees, no trial periods, and no registration required. You can create and download unlimited invoices at no cost.",
                      "datePublished": currentDate
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I need to create an account to use the invoice generator?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No account creation needed. Our invoice generator works instantly without any sign-up process. Just fill in your details and download your invoice.",
                      "datePublished": currentDate
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What file formats can I download my invoice in?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can download your invoices as professional PDF files, which are universally accepted and perfect for printing or emailing to clients.",
                      "datePublished": currentDate
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I add my company logo to the invoices?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! You can fully customize your invoices with your logo, brand colors, and custom payment terms to match your professional branding.",
                      "datePublished": currentDate
                    }
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.nofeesinvoice.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Tools",
                    "item": "https://www.nofeesinvoice.com/tools"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Free Invoice Generator",
                    "item": siteUrl
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "HowTo",
                "name": "How to Create a Professional Invoice in 3 Steps",
                "description": "Learn how to create professional invoices instantly with our free online tool",
                "image": imageUrl,
                "estimatedCost": {
                  "@type": "MonetaryAmount",
                  "currency": "USD",
                  "value": "0"
                },
                "supply": [
                  {
                    "@type": "HowToSupply",
                    "name": "Business Information"
                  },
                  {
                    "@type": "HowToSupply",
                    "name": "Client Details"
                  }
                ],
                "tool": [
                  {
                    "@type": "HowToTool",
                    "name": "NoFeesInvoice Free Invoice Generator"
                  }
                ],
                "step": [
                  {
                    "@type": "HowToStep",
                    "name": "Enter Your Details",
                    "text": "Fill in your business information, client details, and invoice items with descriptions and prices.",
                    "image": "https://www.nofeesinvoice.com/images/step1.jpg",
                    "url": `${siteUrl}#step1`,
                    "datePublished": currentDate
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Customize Your Invoice",
                    "text": "Add your logo, adjust colors, set payment terms, and apply taxes or discounts as needed.",
                    "image": "https://www.nofeesinvoice.com/images/step2.jpg",
                    "url": `${siteUrl}#step2`,
                    "datePublished": currentDate
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Download & Share",
                    "text": "Download your professional invoice as PDF or share directly with your client via email.",
                    "image": "https://www.nofeesinvoice.com/images/step3.jpg",
                    "url": `${siteUrl}#step3`,
                    "datePublished": currentDate
                  }
                ],
                "totalTime": "PT2M",
                "datePublished": currentDate
              }
            ])
          }}
        />

        {/* Preload Critical Resources */}
        <link rel="preload" href={imageUrl} as="image" />
        <link rel="preload" href="/_next/static/css/globals.css" as="style" />
        
        {/* Favicon & App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional Schema for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "NoFeesInvoice",
              "url": "https://www.nofeesinvoice.com",
              "logo": logoUrl,
              "description": "Providing free business tools including invoice generators, receipt makers, and financial calculators.",
              "sameAs": [
                "https://twitter.com/nofeesinvoice",
                "https://facebook.com/nofeesinvoice",
                "https://linkedin.com/company/nofeesinvoice"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "email": "support@nofeesinvoice.com",
                "availableLanguage": ["English"]
              },
              "dateModified": currentDate
            })
          }}
        />
      </Head>

      {/* Semantic HTML with ARIA labels for better accessibility and SEO */}
      <div className={styles.container} itemScope itemType="https://schema.org/WebPage">
        {/* Hero Section with Rich Snippet Markup */}
        <header className={styles.hero} role="banner" itemScope itemType="https://schema.org/WPHeader">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle} itemProp="headline">
              🚀 Free Online Invoice Generator - Create Professional Invoices in 60 Seconds
            </h1>
            <p className={styles.heroSubtitle} itemProp="description">
              <strong>✅ 100% Free</strong> • <strong>✅ No Registration</strong> • <strong>✅ Unlimited Invoices</strong>
              <br />
              Create professional invoices instantly. Trusted by <strong>50,000+ freelancers</strong> and small businesses worldwide.
              <meta itemProp="datePublished" content="2020-01-01" />
              <meta itemProp="dateModified" content={currentDate} />
            </p>
            <div className={styles.heroButtons} role="group" aria-label="Primary Actions">
              <Link 
                href={targetLink} 
                className={`${styles.btn} ${styles.btnPrimary}`}
                itemProp="mainEntityOfPage"
                aria-label="Generate free invoice now - No registration required"
              >
                ⚡ Generate Invoice Now - Free Forever
              </Link>
              <Link 
                href={targetLink} 
                className={`${styles.btn} ${styles.btnSecondary}`}
                aria-label="Explore free invoice templates"
              >
                📋 Explore Templates
              </Link>
            </div>
            <div className={styles.heroStats} itemScope itemType="https://schema.org/AggregateRating">
              <div className={styles.stat}>
                <strong itemProp="ratingValue">50,000+</strong>
                <span>Invoices Created</span>
                <meta itemProp="ratingCount" content="50000" />
              </div>
              <div className={styles.stat}>
                <strong>100%</strong>
                <span>Free Forever</span>
              </div>
              <div className={styles.stat}>
                <strong>4.9/5</strong>
                <span>User Rating</span>
              </div>
              <meta itemProp="bestRating" content="5" />
              <meta itemProp="worstRating" content="1" />
            </div>
          </div>
        </header>

        {/* Features Section with Product Schema */}
        <section id="features" className={styles.features} role="region" aria-labelledby="features-heading">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="features-heading">✨ Why Choose Our Invoice Generator?</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to create professional invoices quickly and efficiently
            </p>
          </div>
          <div className={styles.cards}>
            {[
              {
                title: '⚡ Instant Invoicing',
                description: 'Generate and download invoices instantly with a few clicks. No learning curve required.',
                icon: '⚡'
              },
              {
                title: '📄 Professional PDF Export',
                description: 'Export your invoices to professional PDF format for easy sharing and printing.',
                icon: '📄'
              },
              {
                title: '🔒 Secure & Private',
                description: 'No data stored on our servers. Your client information stays completely private.',
                icon: '🔒'
              },
              {
                title: '🎨 Custom Branding',
                description: 'Add your logo, company colors, and custom payment terms to match your brand.',
                icon: '🎨'
              },
              
              {
                title: '📱 Mobile Friendly',
                description: 'Create invoices on any device - desktop, tablet, or mobile phone.',
                icon: '📱'
              },
            ].map((card, index) => (
              <Link 
                href={targetLink} 
                className={styles.cardLink}
                key={index}
                aria-label={`Learn more about ${card.title}`}
              >
                <div 
                  className={styles.card} 
                  itemScope 
                  itemType="https://schema.org/ProductFeature"
                >
                  <div className={styles.cardIcon} aria-hidden="true">{card.icon}</div>
                  <h3 className={styles.cardTitle} itemProp="name">{card.title}</h3>
                  <p className={styles.cardDescription} itemProp="description">{card.description}</p>
                  <span className={styles.cardCta}>Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How It Works Section with HowTo Schema */}
        <section className={styles.howItWorks} role="region" aria-labelledby="how-it-works-heading">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="how-it-works-heading">📝 How It Works</h2>
            <p className={styles.sectionSubtitle}>
              Create your first professional invoice in under 2 minutes
            </p>
          </div>
          <div className={styles.steps} itemScope itemType="https://schema.org/HowTo">
            <div className={styles.step} itemProp="step" itemScope itemType="https://schema.org/HowToStep">
              <div className={styles.stepNumber} aria-hidden="true">1</div>
              <h3 itemProp="name">Enter Details</h3>
              <p itemProp="text">Fill in your business info, client details, and invoice items</p>
              <Link href={targetLink} className={styles.stepLink}>Try it now →</Link>
              <meta itemProp="datePublished" content={currentDate} />
            </div>
            <div className={styles.step} itemProp="step" itemScope itemType="https://schema.org/HowToStep">
              <div className={styles.stepNumber} aria-hidden="true">2</div>
              <h3 itemProp="name">Customize</h3>
              <p itemProp="text">Add your logo, adjust colors, and set payment terms</p>
              <Link href={targetLink} className={styles.stepLink}>Customize options →</Link>
              <meta itemProp="datePublished" content={currentDate} />
            </div>
            <div className={styles.step} itemProp="step" itemScope itemType="https://schema.org/HowToStep">
              <div className={styles.stepNumber} aria-hidden="true">3</div>
              <h3 itemProp="name">Download & Send</h3>
              <p itemProp="text">Download as PDF or share directly with your client</p>
              <Link href={targetLink} className={styles.stepLink}>Download sample →</Link>
              <meta itemProp="datePublished" content={currentDate} />
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className={styles.demoSection} role="region" aria-labelledby="demo-heading">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="demo-heading">🎯 Try Our Interactive Demo</h2>
            <p className={styles.sectionSubtitle}>
              See how easy it is to create professional invoices in real-time
            </p>
          </div>
          <div className={styles.demoContainer}>
            <div className={styles.demoPreview}>
              <div className={styles.invoicePreview}>
                <div className={styles.invoiceHeader}>
                  <h3>Sample Invoice Preview</h3>
                  <p>Your professional invoice will look like this</p>
                </div>
                <div className={styles.invoiceDetails}>
                  <p><strong>Invoice #:</strong> INV-20587-001</p>
                  <p><strong>Date:</strong> {currentDate}</p>
                  <p><strong>Client:</strong> Sample Client Inc.</p>
                  <p><strong>Amount:</strong> $1,250.00</p>
                </div>
              </div>
            </div>
            <div className={styles.demoActions}>
              <Link href={targetLink} className={`${styles.btn} ${styles.btnPrimary}`}>
                Try It Now
              </Link>
              <Link href={targetLink} className={`${styles.btn} ${styles.btnSecondary}`}>
                Customize Options
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section with Review Schema */}
        <section className={styles.testimonials} role="region" aria-labelledby="testimonials-heading">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="testimonials-heading">⭐ What Our Users Say</h2>
            <p className={styles.sectionSubtitle}>
              Join thousands of satisfied users who trust our invoice generator
            </p>
          </div>
          <div className={styles.testimonialCards}>
            {[
              {
                content: 'This tool saved me so much time! I can create clean, professional invoices within minutes. The PDF export feature is flawless.',
                author: 'Sarah M.',
                role: 'Freelance Designer',
                rating: '5',
                date: currentDate
              },
              {
                content: 'Finally, a free invoice generator that works like a charm. No ads, no hassle, and my clients love the professional look.',
                author: 'John T.',
                role: 'Small Business Owner',
                rating: '5',
                date: currentDate
              },
              {
                content: 'As a contractor, I need to send invoices quickly. This tool has everything I need and the mobile experience is perfect.',
                author: 'Mike R.',
                role: 'IT Contractor',
                rating: '5',
                date: currentDate
              }
            ].map((testimonial, index) => (
              <div 
                className={styles.testimonial} 
                key={index}
                itemScope 
                itemType="https://schema.org/Review"
              >
                <div className={styles.testimonialContent}>
                  <div className={styles.rating} aria-label={`${testimonial.rating} out of 5 stars`}>
                    {'★'.repeat(5)}
                  </div>
                  <p itemProp="reviewBody">{testimonial.content}</p>
                  <div 
                    className={styles.testimonialAuthor}
                    itemProp="author"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    <strong itemProp="name">{testimonial.author}</strong>
                    <span itemProp="jobTitle">{testimonial.role}</span>
                  </div>
                  <meta itemProp="datePublished" content={testimonial.date} />
                  <div 
                    itemProp="reviewRating"
                    itemScope
                    itemType="https://schema.org/Rating"
                    style={{display: 'none'}}
                  >
                    <meta itemProp="ratingValue" content={testimonial.rating} />
                    <meta itemProp="bestRating" content="5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section with FAQPage Schema */}
        <section className={styles.faq} role="region" aria-labelledby="faq-heading">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="faq-heading">❓ Frequently Asked Questions</h2>
            <p className={styles.sectionSubtitle}>
              Get answers to common questions about our invoice generator
            </p>
          </div>
          <div className={styles.faqList}>
            {[
              {
                question: 'Is it really free?',
                answer: `Yes, completely free! No hidden fees, no trial periods, and no registration required. You can create and download unlimited invoices at no cost. <a href="${targetLink}" style="color: #10b981; font-weight: 600;">Try it now →</a>`
              },
              {
                question: 'Do I need to create an account?',
                answer: `No account creation needed. Our invoice generator works instantly without any sign-up process. <a href="${targetLink}" style="color: #10b981; font-weight: 600;">Start creating invoices now →</a>`
              },
              {
                question: 'What information do I need to create an invoice?',
                answer: `You need your business details, client information, invoice items with descriptions and prices, and any applicable taxes or discounts. <a href="${targetLink}" style="color: #10b981; font-weight: 600;">See sample invoice →</a>`
              },
              {
                question: 'Can I customize the invoice design?',
                answer: `Yes! You can add your logo, change colors, modify layouts, and include custom payment terms to match your brand. <a href="${targetLink}" style="color: #10b981; font-weight: 600;">Customize your invoice →</a>`
              }
            ].map((faq, index) => (
              <div className={styles.faqItem} key={index}>
                <h3>{faq.question}</h3>
                <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            ))}
          </div>
        </section>

        {/* Tools & Resources Section */}
        <section className={styles.resources} role="region" aria-labelledby="resources-heading">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="resources-heading">🔧 More Free Business Tools</h2>
            <p className={styles.sectionSubtitle}>
              Explore our complete suite of free business tools
            </p>
          </div>
          <div className={styles.resourceGrid}>
            <Link href={targetLink} className={styles.resourceCard}>
              <div className={styles.resourceIcon}>🧾</div>
              <h3>Receipt Maker</h3>
              <p>Create professional receipts instantly</p>
            </Link>
            <Link href={targetLink} className={styles.resourceCard}>
              <div className={styles.resourceIcon}>📊</div>
              <h3>Estimate Generator</h3>
              <p>Generate accurate project estimates</p>
            </Link>
            <Link href={targetLink} className={styles.resourceCard}>
              <div className={styles.resourceIcon}>📑</div>
              <h3>Invoice Templates</h3>
              <p>50+ free customizable templates</p>
            </Link>
            <Link href={targetLink} className={styles.resourceCard}>
              <div className={styles.resourceIcon}>🧮</div>
              <h3>Business Calculators</h3>
              <p>Financial calculators for businesses</p>
            </Link>
          </div>
        </section>

        {/* CTA Section with Strong Call-to-Action */}
        <section className={styles.ctaSection} role="region" aria-labelledby="cta-heading">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle} id="cta-heading">🚀 Ready to Create Professional Invoices?</h2>
            <p className={styles.ctaDescription}>
              Join <strong>50,000+ businesses and freelancers</strong> who trust our free invoice generator. 
              No credit card required. <strong>Start now and get paid faster.</strong>
            </p>
            <div className={styles.ctaButtons} role="group" aria-label="Final Call to Action">
              <Link 
                href={targetLink} 
                className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`}
                aria-label="Generate your first free invoice now - No signup needed"
              >
                ⚡ Generate Your First Invoice - FREE
              </Link>
              <Link 
                href={targetLink} 
                className={`${styles.btn} ${styles.btnSecondary} ${styles.btnLarge}`}
                aria-label="Explore all features of our invoice generator"
              >
                📊 Explore All Features
              </Link>
            </div>
            <p className={styles.ctaNote}>
              <small>✅ No credit card required • ✅ No registration needed • ✅ 100% Free Forever</small>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export async function getStaticProps() {
  // Generate dates at build time for SSG
  const buildTime = new Date();
  const currentDate = buildTime.toISOString().split('T')[0]; // Format: YYYY-MM-DD
  const lastModifiedDate = buildTime.toISOString(); // Full ISO string

  return {
    props: {
      currentDate,
      lastModifiedDate,
    },
    // Incremental Static Regeneration: Re-generate page every 24 hours
    revalidate: 86400,
  };
}

export default InvoiceLP;