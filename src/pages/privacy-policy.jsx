'use client';

import { useEffect, useRef } from 'react';
import styles from './PrivacyPolicy.module.css';

export default function PrivacyPolicy() {
  const sectionsRef = useRef([]);

  // Animate sections on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const cards = [
    {
      title: "✅ No Data Collection",
      desc: "We do not collect, store, or track any personal information including names, email addresses, phone numbers, or IP addresses."
    },
    {
      title: "🔒 No Data Storage",
      desc: "All invoices are generated locally in your browser and are not stored on our servers or any third-party systems."
    },
    {
      title: "🌐 No Cookies or Tracking",
      desc: "Our site does not use cookies, analytics, or any tracking technologies. Your use of the site is completely anonymous."
    },
    {
      title: "📄 Invoice Data",
      desc: "Any invoice data you create is stored only temporarily in your browser memory and is cleared once you close the tab."
    },
    {
      title: "📱 Fully Client-Side",
      desc: "The entire invoice generation process happens in your browser. No data is sent to or processed by any external server."
    },
    {
      title: "🔐 Secure by Design",
      desc: "Since we never collect or store data, there's no risk of data breaches, leaks, or misuse of your personal information."
    }
  ];

  return (
    <div className={styles.privacyPolicyContainer}>
      <header className={`${styles.header} ${styles.visible}`}>
        <h1>Privacy Policy</h1>
      </header>

      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className={styles.intro}
      >
        <h2>Introduction</h2>
        <p>
          At <strong>FreeInvoiceGenerator.com</strong>, we are committed to protecting your privacy.
          This Privacy Policy explains how we handle your information when you use our free invoice generator service.
        </p>
      </section>

      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className={styles.cardsSection}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index + 2] = el)}
            className={styles.card}
          >
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </section>

      <section
        ref={(el) => (sectionsRef.current[8] = el)}
        className={styles.conclusion}
      >
        <h2>Have Questions?</h2>
        <p>
          If you have any questions about our privacy practices, feel free to reach out via our{' '}
          <a href="/contact-us" className={styles.link}>contact page</a>. We're always happy to help!
        </p>
      </section>
    </div>
  );
}

// SEO Metadata
export const metadata = {
  title: 'Privacy Policy | Free Invoice Generator',
  description: 'We respect your privacy. Our free invoice generator collects no data, uses no cookies, and stores nothing on servers.',
};