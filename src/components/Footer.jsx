import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* About Us Card */}
        <div className={styles.footerCard}>
          <h3 className={styles.footerTitle}>About Us</h3>
          <p className={styles.footerText}>
            We provide a free, fast, and user-friendly invoice generator to help freelancers and small businesses create professional invoices in seconds.
          </p>
        </div>

        {/* Quick Links Card */}
        <div className={styles.footerCard}>
          <h3 className={styles.footerTitle}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li><Link href="/" className={styles.footerLink}>Home</Link></li>
            <li><Link href="/free-invoice-generator" className={styles.footerLink}>Generate Invoice</Link></li>
            <li><Link href="/aboutus" className={styles.footerLink}>About Us</Link></li>
            <li><Link href="/contact-us" className={styles.footerLink}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal Card */}
        <div className={styles.footerCard}>
          <h3 className={styles.footerTitle}>Legal</h3>
          <ul className={styles.footerLinks}>
            <li><Link href="/privacy-policy" className={styles.footerLink}>Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className={styles.footerLink}>Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      {/* Features Section */}
      <div className={styles.footerFeatures}>
        <div className={styles.featureItem}>
          <span className={styles.featureIcon}>⚡</span>
          <span className={styles.featureText}>Fast & Free</span>
        </div>
        <div className={styles.featureItem}>
          <span className={styles.featureIcon}>🔒</span>
          <span className={styles.featureText}>Secure & Private</span>
        </div>
        <div className={styles.featureItem}>
          <span className={styles.featureIcon}>📄</span>
          <span className={styles.featureText}>PDF Export</span>
        </div>
        <div className={styles.featureItem}>
          <span className={styles.featureIcon}>🌍</span>
          <span className={styles.featureText}>No Signup Required</span>
        </div>
      </div>

      {/* Social Links */}
      

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Free Invoice Generator. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;