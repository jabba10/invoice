'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const formRef = useRef(null);

  // Replace with your real email
  const YOUR_EMAIL = 'your-email@example.com';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // FormSubmit.co handles submission via native form POST
    // You can add additional validation or tracking here
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  // Auto-hide success/error after 5 seconds
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => setSubmitStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const faqItems = [
    {
      question: "Is the invoice generator really free?",
      answer: "Yes, completely free! No hidden fees, no subscriptions, and no credit card required. You can create and download unlimited invoices at no cost."
    },
    {
      question: "Do I need to create an account?",
      answer: "No account creation is needed. Our invoice generator works instantly without any sign-up process. Just fill in your details and download your invoice."
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely. We don't store any of your personal information or invoice data. Everything is processed locally in your browser and never saved on our servers."
    },
    {
      question: "What file formats can I download?",
      answer: "Currently, we support PDF format which is perfect for emailing to clients or printing. The PDFs are professional and print-ready."
    }
  ];

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Need Help? Get in Touch</h1>
          <p>
            We're here to help you create professional invoices in seconds. Reach out to us for any queries or feedback.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Why Choose Our Invoice Generator?</h2>
        <div className={styles.cards}>
          {[
            { title: 'Fast & Free', desc: 'Generate unlimited invoices at no cost. No sign-up required.' },
            { title: 'Professional Templates', desc: 'Use clean, modern templates that impress your clients and look great in print or email.' },
            { title: 'Instant Download', desc: 'Create and download your invoice as a PDF in just a few clicks.' }
          ].map((card, i) => (
            <div key={i} className={styles.card}>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Information */}
      <section className={styles.contactInfo}>
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>📧</span>
            <h3>Email Support</h3>
            <p>Get quick answers to your questions via email</p>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>⚡</span>
            <h3>Fast Response</h3>
            <p>We typically respond within 24 hours</p>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>🔒</span>
            <h3>Secure & Private</h3>
            <p>Your information is always protected</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.contactFormSection}>
        <h2 className={styles.sectionTitle}>Send Us a Message</h2>
        <form
          ref={formRef}
          className={styles.contactForm}
          action={`https://formsubmit.co/${YOUR_EMAIL}`}
          method="POST"
          onSubmit={handleSubmit}
        >
          {/* Hidden FormSubmit.co fields */}
          <input type="hidden" name="_subject" value="New Contact Form Submission - Invoice Generator" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="/thank-you" />

          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Your full name" 
              required 
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="your.email@example.com" 
              required 
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              placeholder="What is this regarding?" 
              required 
              value={formData.subject}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Your Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              placeholder="Please describe your inquiry in detail..." 
              required
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className={`${styles.alert} ${styles.success}`}>
              ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className={`${styles.alert} ${styles.error}`}>
              ❌ Sorry, there was an error. Please try again or email us directly.
            </div>
          )}

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqGrid}>
          {faqItems.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <div className={styles.faqQuestion}>
                {faq.question}
              </div>
              <div className={styles.faqAnswer}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;