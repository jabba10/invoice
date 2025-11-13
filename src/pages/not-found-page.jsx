'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './not-found-page.module.css';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.notFoundContent}>
        {/* Animated Background Elements */}
        <div className={styles.backgroundElements}>
          <div className={styles.floatingShape1}></div>
          <div className={styles.floatingShape2}></div>
          <div className={styles.floatingShape3}></div>
        </div>

        {/* Main Content */}
        <div className={styles.errorCard}>
          <div className={styles.errorHeader}>
            <div className={styles.errorIcon}>
              <span className={styles.errorNumber}>4</span>
              <div className={styles.errorCircle}>
                <span className={styles.errorZero}>0</span>
              </div>
              <span className={styles.errorNumber}>4</span>
            </div>
            <h1 className={styles.errorTitle}>Page Not Found</h1>
            <p className={styles.errorDescription}>
              Oops! The page you're looking for seems to have wandered off into the digital void. 
              Don't worry, even the best invoices sometimes get lost in transit.
            </p>
          </div>

          <div className={styles.errorDetails}>
            <div className={styles.detailCard}>
              <div className={styles.detailIcon}>🔍</div>
              <h3>What happened?</h3>
              <p>The page may have been moved, deleted, or you entered an incorrect URL.</p>
            </div>
            
            <div className={styles.detailCard}>
              <div className={styles.detailIcon}>💡</div>
              <h3>What can you do?</h3>
              <p>Try checking the URL for errors, or use the navigation below to find your way back.</p>
            </div>
            
            <div className={styles.detailCard}>
              <div className={styles.detailIcon}>📄</div>
              <h3>Need invoices?</h3>
              <p>Get back to creating professional invoices with our easy-to-use generator.</p>
            </div>
          </div>

          <div className={styles.actionButtons}>
            <button 
              onClick={() => router.back()} 
              className={styles.backButton}
            >
              ← Go Back
            </button>
            
            <Link href="/" className={styles.homeButton}>
              🏠 Home Page
            </Link>
            
            <Link href="/invoice-generator" className={styles.invoiceButton}>
              📄 Create Invoice
            </Link>
          </div>

          {/* Quick Stats */}
          <div className={styles.statsSection}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>99.9%</span>
              <span className={styles.statLabel}>Uptime</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10K+</span>
              <span className={styles.statLabel}>Invoices Created</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Support</span>
            </div>
          </div>

          {/* Search Suggestion */}
          <div className={styles.searchSection}>
            <p className={styles.searchHint}>Can't find what you're looking for?</p>
            <div className={styles.searchBox}>
              <input 
                type="text" 
                placeholder="Search our website..." 
                className={styles.searchInput}
              />
              <button className={styles.searchButton}>Search</button>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}