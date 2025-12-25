import Head from 'next/head';
import Link from 'next/link';
import styles from './InvoiceLP.module.css';

const InvoiceLP = () => {
  const siteUrl = 'https://www.nofeesinvoice.com/free-invoice-generator';
  const imageUrl = 'https://www.nofeesinvoice.com/images/invoice-preview.jpg';
  const logoUrl = 'https://www.nofeesinvoice.com/images/logo.png';
  const currentDate = new Date().toISOString().split('T')[0];

  // Comprehensive keyword list for invoice generator
  const primaryKeywords = [
    'free invoice generator',
    'online invoice maker',
    'create invoice free',
    'professional invoice template',
    'PDF invoice generator',
    'small business invoicing',
    'freelancer invoice tool',
    'instant invoice creator',
    'business invoice software',
    'invoice generator online',
    'free billing software',
    'invoice creator tool',
    'digital invoice maker',
    'quick invoice generator',
    'invoice template PDF'
  ];

  const secondaryKeywords = [
    'no registration invoice tool',
    'free invoice maker for small business',
    'online invoice creator free',
    'generate invoice PDF',
    'custom invoice generator',
    'invoice software free',
    'create professional invoices',
    'invoice generator 2024',
    'best free invoice generator',
    'invoice maker no sign up',
    'free invoice template generator',
    'business invoice creator',
    'invoice generating tool',
    'free online invoicing',
    'make invoice online free'
  ];

  return (
    <>
      <Head>
        {/* Critical Technical SEO */}
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Canonical & Alternate URLs */}
        <link rel="canonical" href={siteUrl} />
        <link rel="alternate" href={siteUrl} hreflang="x-default" />
        <link rel="alternate" href={siteUrl} hreflang="en" />
        
        {/* Primary Title & Description (Optimized for High CTR) */}
        <title>🚀 Free Invoice Generator Online | Create Professional Invoices in 60 Seconds</title>
        <meta
          name="description"
          content="✅ Generate professional invoices INSTANTLY with our 100% FREE online invoice generator. No registration required. Download as PDF. Trusted by 50,000+ businesses. Create invoices for freelancers, contractors, small businesses. Includes taxes, discounts, multi-currency."
        />
        <meta name="keywords" content={[...primaryKeywords, ...secondaryKeywords].join(', ')} />
        
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
        <meta name="theme-color" content="#2d6ae3" />
        
        {/* Open Graph Protocol - Enhanced */}
        <meta property="og:title" content="🚀 Free Invoice Generator Online | Create & Download Professional Invoices in 60 Seconds" />
        <meta
          property="og:description"
          content="✅ Generate professional invoices INSTANTLY. 100% FREE, no registration, secure, supports taxes, discounts, multi-currency. Download as PDF. Perfect for freelancers & small businesses."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content="Professional Invoice Sample - NoFeesInvoice Free Invoice Generator" />
        <meta property="og:site_name" content="NoFeesInvoice" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={currentDate} />
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
          content="Create clean, professional invoices in seconds. 100% FREE forever. No registration. Download as PDF instantly. #InvoiceGenerator #FreeTool"
        />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:image:alt" content="Free Invoice Generator Output Example" />
        <meta name="twitter:label1" content="Price" />
        <meta name="twitter:data1" content="100% Free" />
        <meta name="twitter:label2" content="Registration" />
        <meta name="twitter:data2" content="Not Required" />
        
        {/* Facebook Meta Tags */}
        <meta property="fb:app_id" content="YOUR_FB_APP_ID" />
        <meta property="fb:pages" content="YOUR_FB_PAGE_ID" />
        
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
                      "text": "Yes, completely free! No hidden fees, no trial periods, and no registration required. You can create and download unlimited invoices at no cost."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I need to create an account to use the invoice generator?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No account creation needed. Our invoice generator works instantly without any sign-up process. Just fill in your details and download your invoice."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What file formats can I download my invoice in?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can download your invoices as professional PDF files, which are universally accepted and perfect for printing or emailing to clients."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I add my company logo to the invoices?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! You can fully customize your invoices with your logo, brand colors, and custom payment terms to match your professional branding."
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
                    "url": `${siteUrl}#step1`
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Customize Your Invoice",
                    "text": "Add your logo, adjust colors, set payment terms, and apply taxes or discounts as needed.",
                    "image": "https://www.nofeesinvoice.com/images/step2.jpg",
                    "url": `${siteUrl}#step2`
                  },
                  {
                    "@type": "HowToStep",
                    "name": "Download & Share",
                    "text": "Download your professional invoice as PDF or share directly with your client via email.",
                    "image": "https://www.nofeesinvoice.com/images/step3.jpg",
                    "url": `${siteUrl}#step3`
                  }
                ],
                "totalTime": "PT2M"
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
        
        {/* Additional Schema for Local Business (if applicable) */}
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
              }
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
              🚀 <span itemProp="name">Free Online Invoice Generator</span> - Create Professional Invoices in 60 Seconds
            </h1>
            <p className={styles.heroSubtitle} itemProp="description">
              <strong>✅ 100% Free</strong> | <strong>✅ No Registration</strong> | <strong>✅ Unlimited Invoices</strong>
              <br />
              Create professional invoices instantly. Trusted by <strong>50,000+ freelancers</strong> and small businesses worldwide.
              <meta itemProp="datePublished" content="2020-01-01" />
              <meta itemProp="dateModified" content={currentDate} />
            </p>
            <div className={styles.heroButtons} role="group" aria-label="Primary Actions">
              <Link 
                href="/free-invoice-generator" 
                className={`${styles.btn} ${styles.btnPrimary}`}
                itemProp="mainEntityOfPage"
                aria-label="Generate free invoice now - No registration required"
              >
                ⚡ Generate Invoice Now - Free Forever
              </Link>
              <Link 
                href="#features" 
                className={`${styles.btn} ${styles.btnSecondary}`}
                aria-label="View all features of our invoice generator"
              >
                📋 View All Features
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
                <strong>0</strong>
                <span>Registration Required</span>
              </div>
              <meta itemProp="bestRating" content="100" />
              <meta itemProp="worstRating" content="0" />
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
                icon: '⚡',
                schema: 'Speed'
              },
              {
                title: '📄 Professional PDF Export',
                description: 'Export your invoices to professional PDF format for easy sharing and printing.',
                icon: '📄',
                schema: 'DigitalDocument'
              },
              {
                title: '🔒 Secure & Private',
                description: 'No data stored on our servers. Your client information stays completely private.',
                icon: '🔒',
                schema: 'Security'
              },
              {
                title: '🎨 Custom Branding',
                description: 'Add your logo, company colors, and custom payment terms to match your brand.',
                icon: '🎨',
                schema: 'Brand'
              },
              {
                title: '💰 Tax & Discounts',
                description: 'Automatically calculate taxes, apply discounts, and handle multiple currency options.',
                icon: '💰',
                schema: 'PriceSpecification'
              },
              {
                title: '📱 Mobile Friendly',
                description: 'Create invoices on any device - desktop, tablet, or mobile phone.',
                icon: '📱',
                schema: 'MobileApplication'
              },
            ].map((card, index) => (
              <div 
                className={styles.card} 
                key={index}
                itemScope 
                itemType="https://schema.org/ProductFeature"
              >
                <div className={styles.cardIcon} aria-hidden="true">{card.icon}</div>
                <h3 className={styles.cardTitle} itemProp="name">{card.title}</h3>
                <p className={styles.cardDescription} itemProp="description">{card.description}</p>
              </div>
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
            </div>
            <div className={styles.step} itemProp="step" itemScope itemType="https://schema.org/HowToStep">
              <div className={styles.stepNumber} aria-hidden="true">2</div>
              <h3 itemProp="name">Customize</h3>
              <p itemProp="text">Add your logo, adjust colors, and set payment terms</p>
            </div>
            <div className={styles.step} itemProp="step" itemScope itemType="https://schema.org/HowToStep">
              <div className={styles.stepNumber} aria-hidden="true">3</div>
              <h3 itemProp="name">Download & Send</h3>
              <p itemProp="text">Download as PDF or share directly with your client</p>
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
                content: '"This tool saved me so much time! I can create clean, professional invoices within minutes. The PDF export feature is flawless."',
                author: 'Sarah M.',
                role: 'Freelance Designer',
                rating: '5',
                date: '2024-01-15'
              },
              {
                content: '"Finally, a free invoice generator that works like a charm. No ads, no hassle, and my clients love the professional look."',
                author: 'John T.',
                role: 'Small Business Owner',
                rating: '5',
                date: '2024-01-10'
              },
              {
                content: '"As a contractor, I need to send invoices quickly. This tool has everything I need and the mobile experience is perfect."',
                author: 'Mike R.',
                role: 'IT Contractor',
                rating: '5',
                date: '2024-01-05'
              }
            ].map((testimonial, index) => (
              <div 
                className={styles.testimonial} 
                key={index}
                itemScope 
                itemType="https://schema.org/Review"
              >
                <div className={styles.testimonialContent}>
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
          </div>
          <div className={styles.faqList}>
            {[
              {
                question: 'Is it really free?',
                answer: 'Yes, completely free! No hidden fees, no trial periods, and no registration required. You can create and download unlimited invoices at no cost.'
              },
              {
                question: 'Do I need to create an account?',
                answer: 'No account creation needed. Our invoice generator works instantly without any sign-up process.'
              },
              {
                question: 'What information do I need to create an invoice?',
                answer: 'You need your business details, client information, invoice items with descriptions and prices, and any applicable taxes or discounts.'
              },
              {
                question: 'Can I customize the invoice design?',
                answer: 'Yes! You can add your logo, change colors, modify layouts, and include custom payment terms to match your brand.'
              }
            ].map((faq, index) => (
              <div className={styles.faqItem} key={index}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
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
                href="/free-invoice-generator" 
                className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`}
                aria-label="Generate your first free invoice now - No signup needed"
              >
                ⚡ Generate Your First Invoice - FREE
              </Link>
              <Link 
                href="#features" 
                className={`${styles.btn} ${styles.btnSecondary} ${styles.btnLarge}`}
                aria-label="Explore all features of our invoice generator"
              >
                📊 View All Features
              </Link>
            </div>
            <p className={styles.ctaNote}>
              <small>✅ No credit card required • ✅ No registration needed • ✅ 100% Free Forever</small>
            </p>
          </div>
        </section>

        {/* Hidden SEO Content for Additional Keywords (Accessible but not visible) */}
        <div className="sr-only" aria-hidden="true">
          <h2>Free Invoice Generator Features</h2>
          <p>Our free online invoice generator helps freelancers, contractors, and small businesses create professional invoices instantly. 
          Key features include instant PDF generation, tax calculations, discount support, multi-currency options, and custom branding. 
          Perfect for creating invoices for clients, managing billing, and improving cash flow.</p>
          
          <h3>Related Search Terms</h3>
          <ul>
            <li>free invoice maker online</li>
            <li>create invoice pdf free</li>
            <li>professional invoice template free</li>
            <li>online billing software free</li>
            <li>invoice generator for small business</li>
            <li>freelance invoice creator</li>
            <li>instant invoice maker</li>
            <li>digital invoice generator</li>
            <li>free invoice software</li>
            <li>quick invoice creator</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default InvoiceLP;