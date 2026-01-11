'use client';
import { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import styles from './Invoice.module.css';

export default function InvoiceGenerator() {
  const [isClient, setIsClient] = useState(false);
  const [invoice, setInvoice] = useState({
    invoiceNumber: `INV-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`,
    date: new Date().toISOString().split('T')[0],
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    from: {
      name: 'Your Company Name',
      address: '123 Business Ave, Suite 100',
      city: 'New York, NY 10001',
      email: 'accounting@yourcompany.com',
      phone: '(555) 123-4567'
    },
    to: {
      name: '',
      address: '',
      city: '',
      email: '',
      phone: ''
    },
    items: [
      { id: 1, description: 'Professional Services', quantity: 1, rate: 0, amount: 0 }
    ],
    taxRate: 0,
    discount: 0,
    notes: 'Thank you for your business!',
    terms: 'Payment due within 30 days. Late payments subject to 1.5% monthly interest.',
    paymentInstructions: 'Make checks payable to: Your Company Name\nBank Transfer: Account #123456789 • Routing #987654321\nPayPal: payments@yourcompany.com'
  });
  const [colorScheme, setColorScheme] = useState({
    primary: '#1f2937',
    secondary: '#2563eb',
    accent: '#10b981',
    background: '#ffffff',
    text: '#374151'
  });
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [logo, setLogo] = useState(null);
  const [signature, setSignature] = useState(null);
  const [activeTab, setActiveTab] = useState('details');
  const [logoError, setLogoError] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const previewRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [showDownloadCard, setShowDownloadCard] = useState(false);

  // Comprehensive currency list
  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
    { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF' },
    { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
    { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
    { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$' },
    { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$' },
    { code: 'KRW', name: 'South Korean Won', symbol: '₩' },
    { code: 'BRL', name: 'Brazilian Real', symbol: 'R$' },
    { code: 'RUB', name: 'Russian Ruble', symbol: '₽' },
    { code: 'MXN', name: 'Mexican Peso', symbol: 'MX$' },
    { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$' },
    { code: 'SEK', name: 'Swedish Krona', symbol: 'kr' },
    { code: 'NOK', name: 'Norwegian Krone', symbol: 'kr' },
    { code: 'DKK', name: 'Danish Krone', symbol: 'kr' },
    { code: 'ZAR', name: 'South African Rand', symbol: 'R' },
    { code: 'TRY', name: 'Turkish Lira', symbol: '₺' },
    { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ' },
    { code: 'SAR', name: 'Saudi Riyal', symbol: '﷼' },
    { code: 'THB', name: 'Thai Baht', symbol: '฿' },
    { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM' },
    { code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp' },
    { code: 'PHP', name: 'Philippine Peso', symbol: '₱' },
    { code: 'PLN', name: 'Polish Złoty', symbol: 'zł' },
    { code: 'CZK', name: 'Czech Koruna', symbol: 'Kč' },
    { code: 'HUF', name: 'Hungarian Forint', symbol: 'Ft' },
    { code: 'ILS', name: 'Israeli Shekel', symbol: '₪' },
    { code: 'EGP', name: 'Egyptian Pound', symbol: 'E£' },
    { code: 'PKR', name: 'Pakistani Rupee', symbol: '₨' },
    { code: 'BDT', name: 'Bangladeshi Taka', symbol: '৳' },
    { code: 'NGN', name: 'Nigerian Naira', symbol: '₦' },
    { code: 'KES', name: 'Kenyan Shilling', symbol: 'KSh' },
    { code: 'VND', name: 'Vietnamese Dong', symbol: '₫' },
    { code: 'ARS', name: 'Argentine Peso', symbol: 'ARS$' },
    { code: 'CLP', name: 'Chilean Peso', symbol: 'CLP$' },
    { code: 'COP', name: 'Colombian Peso', symbol: 'COL$' },
    { code: 'PEN', name: 'Peruvian Sol', symbol: 'S/' },
    { code: 'UAH', name: 'Ukrainian Hryvnia', symbol: '₴' },
    { code: 'RON', name: 'Romanian Leu', symbol: 'lei' },
    { code: 'BGN', name: 'Bulgarian Lev', symbol: 'лв' },
    { code: 'HRK', name: 'Croatian Kuna', symbol: 'kn' },
    { code: 'ISK', name: 'Icelandic Króna', symbol: 'kr' }
  ];

  useEffect(() => {
    setIsClient(true);
    
    // Detect touch device and screen size
    const checkDeviceAndScreen = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(isTouch);
      
      // Show download card on small screens (mobile devices)
      const isSmallScreen = window.innerWidth <= 768;
      setShowDownloadCard(isSmallScreen || isTouch);
      
      if (isTouch) {
        document.body.classList.add('touch-device');
        document.body.classList.add('touch-friendly');
      } else {
        document.body.classList.remove('touch-device');
        document.body.classList.remove('touch-friendly');
      }
    };
    
    checkDeviceAndScreen();
    
    // Add event listeners
    window.addEventListener('resize', checkDeviceAndScreen);
    
    // Add SEO meta tags
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Free professional invoice generator. Create, customize, and download beautiful invoices for your business. Supports multiple currencies and PDF export.';
    document.head.appendChild(metaDescription);
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'invoice generator, professional invoices, PDF invoices, business invoices, free invoice maker, online invoice creator';
    document.head.appendChild(metaKeywords);
    
    return () => {
      window.removeEventListener('resize', checkDeviceAndScreen);
      document.body.classList.remove('touch-device');
      document.body.classList.remove('touch-friendly');
    };
  }, []);

  // Calculate totals
  const subtotal = invoice.items.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
  const taxAmount = subtotal * (invoice.taxRate / 100);
  const discountAmount = subtotal * (invoice.discount / 100);
  const total = subtotal + taxAmount - discountAmount;

  const handleInputChange = (e, section, field) => {
    if (section) {
      setInvoice(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: e.target.value
        }
      }));
    } else {
      setInvoice(prev => ({
        ...prev,
        [field]: e.target.value
      }));
    }
  };

  const handleItemChange = (id, field, value) => {
    setInvoice(prev => {
      const updatedItems = prev.items.map(item => {
        if (item.id === id) {
          const updatedItem = {
            ...item,
            [field]: field === 'quantity' || field === 'rate' || field === 'amount' ? parseFloat(value) || 0 : value
          };
          // If quantity or rate changes, auto-calculate amount
          if (field === 'quantity' || field === 'rate') {
            updatedItem.amount = updatedItem.quantity * updatedItem.rate;
          }
          // If amount is manually entered, calculate rate based on quantity
          else if (field === 'amount') {
            if (updatedItem.quantity > 0) {
              updatedItem.rate = parseFloat(value) / updatedItem.quantity;
            }
          }
          return updatedItem;
        }
        return item;
      });
      return { ...prev, items: updatedItems };
    });
  };

  const addItem = () => {
    setInvoice(prev => {
      const newId = Math.max(...prev.items.map(item => item.id), 0) + 1;
      return {
        ...prev,
        items: [...prev.items, { id: newId, description: '', quantity: 1, rate: 0, amount: 0 }]
      };
    });
  };

  const removeItem = (id) => {
    setInvoice(prev => {
      if (prev.items.length <= 1) return prev;
      return {
        ...prev,
        items: prev.items.filter(item => item.id !== id)
      };
    });
  };

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    const input = previewRef.current;
    if (!input) {
      setIsDownloading(false);
      return;
    }

    try {
      const canvas = await html2canvas(input, {
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        scrollX: 0,
        scrollY: 0,
        windowWidth: document.documentElement.offsetWidth,
        windowHeight: document.documentElement.offsetHeight,
      });
      
      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 190;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 10;

      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save(`invoice_${invoice.invoiceNumber}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      setLogoError('File size must be less than 2MB');
      return;
    }
    const validTypes = ['image/jpeg', 'image/png', 'image/svg+xml', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      setLogoError('Only JPG, PNG, SVG, and GIF files are allowed');
      return;
    }

    setLogoError('');
    const reader = new FileReader();
    reader.onloadend = () => {
      const img = new Image();
      img.onload = () => {
        if (img.width > 2000 || img.height > 2000) {
          setLogoError('Image dimensions too large. Max 2000x2000px');
          return;
        }
        setLogo(reader.result);
      };
      img.onerror = () => {
        setLogoError('Invalid image file');
      };
      img.src = reader.result;
    };
    reader.onerror = () => setLogoError('Error reading file');
    reader.readAsDataURL(file);
  };

  const handleSignatureUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setSignature(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const formatCurrency = (amount) => {
    const currencyObj = currencies.find(c => c.code === currency);
    const symbol = currencyObj ? currencyObj.symbol : '$';
    const noDecimalCurrencies = ['JPY', 'KRW', 'VND', 'IDR', 'ISK'];
    const minimumFractionDigits = noDecimalCurrencies.includes(currency) ? 0 : 2;

    if (currency === 'JPY') {
      return `${symbol}${amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: minimumFractionDigits,
      maximumFractionDigits: 2
    }).format(amount);
  };

  if (!isClient) {
    return null;
  }

  return (
    <div
      className={`${styles.invoiceGenerator} ${isTouchDevice ? styles.touchDevice : ''}`}
      style={{
        '--primary': colorScheme.primary,
        '--secondary': colorScheme.secondary,
        '--accent': colorScheme.accent,
        '--background': colorScheme.background,
        '--text': colorScheme.text
      }}
    >
      {/* SEO Optimized Header Section */}
      <header className={styles.seoHeader}>
        <div className={styles.seoContainer}>
          <h1 className={styles.seoTitle}>Professional Invoice Generator - Create Free Custom Invoices</h1>
          <p className={styles.seoDescription}>
            Generate professional invoices instantly with our free online invoice generator.
            Customize templates, add your logo, calculate taxes, and export to PDF.
            Perfect for freelancers, small businesses, and enterprises.
          </p>
          <div className={styles.seoFeatures}>
            <span>✅ Free Forever</span>
            <span>✅ No Signup Required</span>
            <span>✅ Multiple Currencies</span>
            <span>✅ PDF Export</span>
            <span>✅ Custom Branding</span>
          </div>
        </div>
      </header>

      <div className={styles.generatorHeader}>
        <div className={styles.headerLeft}>
          <h2>Professional Invoice Generator</h2>
          <p className={styles.subtitle}>Create and customize professional invoices in minutes</p>
        </div>
        <div className={`${styles.headerActions} ${showDownloadCard ? styles.hidden : ''}`}>
          <button 
            className={`${styles.downloadBtn} ${isDownloading ? styles.loading : ''}`} 
            onClick={handleDownloadPDF}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <>
                <span className={styles.downloadSpinner}></span>
                Generating PDF...
              </>
            ) : (
              <>
                <span className={styles.downloadIcon}>📄</span>
                Download PDF Invoice
              </>
            )}
          </button>
        </div>
      </div>

      <div className={styles.generatorContainer}>
        <div className={`${styles.formSection} ${isTouchDevice ? styles.touchFormSection : ''}`}>
          <div className={styles.formTabs}>
            <button
              className={`${styles.tabButton} ${activeTab === 'details' ? styles.active : ''}`}
              onClick={() => setActiveTab('details')}
              aria-label="Client Details"
            >
              <span className={styles.tabIcon}>👤</span>
              <span className={styles.tabText}>Client Details</span>
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'items' ? styles.active : ''}`}
              onClick={() => setActiveTab('items')}
              aria-label="Invoice Items"
            >
              <span className={styles.tabIcon}>📋</span>
              <span className={styles.tabText}>Invoice Items</span>
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'settings' ? styles.active : ''}`}
              onClick={() => setActiveTab('settings')}
              aria-label="Company Settings"
            >
              <span className={styles.tabIcon}>⚙</span>
              <span className={styles.tabText}>Settings</span>
            </button>
          </div>
          {activeTab === 'details' && (
            <div className={`${styles.detailsForm} ${isTouchDevice ? styles.touchForm : ''}`}>
              <h3 className={styles.formTitle}>
                <span className={styles.formTitleIcon}>👤</span>
                Client Information
              </h3>
              {['name', 'email', 'address', 'city', 'phone'].map(field => (
                <div key={field} className={styles.formGroup}>
                  <label className={styles.touchLabel}>
                    {field === 'name' ? 'Client Name' :
                      field === 'email' ? 'Client Email' :
                        field === 'address' ? 'Client Address' :
                          field === 'city' ? 'City/State/Zip' : 'Client Phone'}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    value={invoice.to[field] || ''}
                    onChange={(e) => handleInputChange(e, 'to', field)}
                    placeholder={
                      field === 'name' ? 'Client Company Name' :
                        field === 'email' ? 'client@company.com' :
                          field === 'address' ? '123 Client Street' :
                            field === 'city' ? 'City, State ZIP' : '(555) 123-4567'
                    }
                    className={`${styles.input} ${isTouchDevice ? styles.touchInput : ''}`}
                    inputMode={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                  />
                </div>
              ))}
              <h3 className={styles.formTitle}>
                <span className={styles.formTitleIcon}>📅</span>
                Invoice Details
              </h3>
              <div className={styles.dateRow}>
                <div className={styles.formGroup}>
                  <label className={styles.touchLabel}>Invoice Number</label>
                  <input
                    type="text"
                    value={invoice.invoiceNumber || ''}
                    onChange={(e) => handleInputChange(e, null, 'invoiceNumber')}
                    className={`${styles.input} ${isTouchDevice ? styles.touchInput : ''}`}
                    inputMode="text"
                  />
                </div>
                <div className={styles.dateInputs}>
                  <div className={styles.formGroup}>
                    <label className={styles.touchLabel}>Invoice Date</label>
                    <input
                      type="date"
                      value={invoice.date || ''}
                      onChange={(e) => handleInputChange(e, null, 'date')}
                      className={`${styles.input} ${isTouchDevice ? styles.touchInput : ''}`}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.touchLabel}>Due Date</label>
                    <input
                      type="date"
                      value={invoice.dueDate || ''}
                      onChange={(e) => handleInputChange(e, null, 'dueDate')}
                      className={`${styles.input} ${isTouchDevice ? styles.touchInput : ''}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'items' && (
            <div className={`${styles.itemsForm} ${isTouchDevice ? styles.touchForm : ''}`}>
              <h3 className={styles.formTitle}>
                <span className={styles.formTitleIcon}>📋</span>
                Invoice Items & Services
              </h3>
              <div className={styles.itemsContainer}>
                <div className={styles.itemsHeader}>
                  <div className={styles.headerDescription}>Item Description</div>
                  <div className={styles.headerQty}>Qty</div>
                  <div className={styles.headerRate}>Unit Price</div>
                  <div className={styles.headerAmount}>Amount</div>
                  <div className={styles.headerActions}></div>
                </div>
                {invoice.items.map((item) => (
                  <div key={item.id} className={`${styles.itemRow} ${isTouchDevice ? styles.touchItemRow : ''}`}>
                    <div className={styles.itemDescription}>
                      <input
                        type="text"
                        value={item.description || ''}
                        onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                        placeholder="Service or product description"
                        className={`${styles.input} ${isTouchDevice ? styles.touchInput : ''}`}
                        inputMode="text"
                      />
                    </div>
                    <div className={styles.itemQuantity}>
                      <input
                        type="number"
                        min="0"
                        step="1"
                        value={item.quantity || 0}
                        onChange={(e) => handleItemChange(item.id, 'quantity', e.target.value)}
                        className={`${styles.input} ${isTouchDevice ? styles.touchInput : ''}`}
                        inputMode="numeric"
                      />
                    </div>
                    <div className={styles.itemRate}>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={item.rate || 0}
                        onChange={(e) => handleItemChange(item.id, 'rate', e.target.value)}
                        className={`${styles.input} ${isTouchDevice ? styles.touchInput : ''}`}
                        inputMode="decimal"
                      />
                    </div>
                    <div className={styles.itemAmount}>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={item.amount || 0}
                        onChange={(e) => handleItemChange(item.id, 'amount', e.target.value)}
                        className={`${styles.input} ${isTouchDevice ? styles.touchInput : ''}`}
                        inputMode="decimal"
                      />
                    </div>
                    <div className={styles.itemActions}>
                      <button 
                        onClick={() => removeItem(item.id)} 
                        className={`${styles.removeItemBtn} ${isTouchDevice ? styles.touchActionBtn : ''}`}
                        aria-label="Remove item"
                      >
                        🗑
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={addItem} 
                className={`${styles.addItemBtn} ${isTouchDevice ? styles.touchActionBtn : ''}`}
              >
                <span className={styles.btnIcon}>➕</span>
                <span className={styles.btnText}>Add Line Item</span>
              </button>
              <div className={styles.totalsSection}>
                <div className={styles.totalRow}>
                  <span>Subtotal:</span>
                  <span className={styles.totalValue}>{formatCurrency(subtotal)}</span>
                </div>
                <div className={styles.totalRow}>
                  <div className={styles.taxInput}>
                    <span>Tax (%):</span>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      step="0.1"
                      value={invoice.taxRate || 0}
                      onChange={(e) => handleInputChange(e, null, 'taxRate')}
                      className={`${styles.smallInput} ${isTouchDevice ? styles.touchInput : ''}`}
                      inputMode="decimal"
                    />
                  </div>
                  <span className={styles.totalValue}>{formatCurrency(taxAmount)}</span>
                </div>
                <div className={styles.totalRow}>
                  <div className={styles.discountInput}>
                    <span>Discount (%):</span>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      step="0.1"
                      value={invoice.discount || 0}
                      onChange={(e) => handleInputChange(e, null, 'discount')}
                      className={`${styles.smallInput} ${isTouchDevice ? styles.touchInput : ''}`}
                      inputMode="decimal"
                    />
                  </div>
                  <span className={styles.totalValue}>-{formatCurrency(discountAmount)}</span>
                </div>
                <div className={`${styles.totalRow} ${styles.grandTotal}`}>
                  <span>Total Amount Due:</span>
                  <span className={styles.totalValue}>{formatCurrency(total)}</span>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'settings' && (
            <div className={`${styles.settingsForm} ${isTouchDevice ? styles.touchForm : ''}`}>
              <h3 className={styles.formTitle}>
                <span className={styles.formTitleIcon}>⚙</span>
                Company & Branding
              </h3>
              {['name', 'address', 'city', 'email', 'phone'].map(field => (
                <div key={field} className={styles.formGroup}>
                  <label className={styles.touchLabel}>
                    {field === 'name' ? 'Your Company Name' :
                      field === 'address' ? 'Company Address' :
                        field === 'city' ? 'City/State/Zip' :
                          field === 'email' ? 'Contact Email' : 'Contact Phone'}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    value={invoice.from[field] || ''}
                    onChange={(e) => handleInputChange(e, 'from', field)}
                    className={`${styles.input} ${isTouchDevice ? styles.touchInput : ''}`}
                    inputMode={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                  />
                </div>
              ))}
              <div className={styles.formGroup}>
                <label className={styles.touchLabel}>Currency</label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className={`${styles.select} ${isTouchDevice ? styles.touchSelect : ''}`}
                >
                  {currencies.map(currency => (
                    <option key={currency.code} value={currency.code}>
                      {currency.name} ({currency.symbol})
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.touchLabel}>Payment Instructions</label>
                <textarea
                  value={invoice.paymentInstructions || ''}
                  onChange={(e) => handleInputChange(e, null, 'paymentInstructions')}
                  rows="3"
                  className={`${styles.textarea} ${isTouchDevice ? styles.touchTextarea : ''}`}
                  placeholder="Enter payment instructions..."
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.touchLabel}>Company Logo</label>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/svg+xml,image/gif"
                  onChange={handleLogoUpload}
                  className={`${styles.fileInput} ${isTouchDevice ? styles.touchFileInput : ''}`}
                />
                {logoError && <div className={styles.errorMessage}>{logoError}</div>}
                {logo && (
                  <div className={styles.logoPreview}>
                    <img src={logo} alt="Company Logo" />
                    <button 
                      onClick={() => setLogo(null)} 
                      className={`${styles.removeLogoBtn} ${isTouchDevice ? styles.touchActionBtn : ''}`}
                    >
                      🗑 Remove
                    </button>
                  </div>
                )}
              </div>
              <div className={styles.formGroup}>
                <label className={styles.touchLabel}>Signature</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleSignatureUpload}
                  className={`${styles.fileInput} ${isTouchDevice ? styles.touchFileInput : ''}`}
                />
                {signature && (
                  <div className={styles.signaturePreview}>
                    <img src={signature} alt="Signature" />
                    <button 
                      onClick={() => setSignature(null)} 
                      className={`${styles.removeSignatureBtn} ${isTouchDevice ? styles.touchActionBtn : ''}`}
                    >
                      🗑 Remove
                    </button>
                  </div>
                )}
              </div>
              <div className={styles.formGroup}>
                <label className={styles.touchLabel}>Notes</label>
                <textarea
                  value={invoice.notes || ''}
                  onChange={(e) => handleInputChange(e, null, 'notes')}
                  rows="2"
                  className={`${styles.textarea} ${isTouchDevice ? styles.touchTextarea : ''}`}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.touchLabel}>Terms & Conditions</label>
                <textarea
                  value={invoice.terms || ''}
                  onChange={(e) => handleInputChange(e, null, 'terms')}
                  rows="2"
                  className={`${styles.textarea} ${isTouchDevice ? styles.touchTextarea : ''}`}
                />
              </div>
            </div>
          )}
        </div>

        <div className={`${styles.previewSection} ${isTouchDevice ? styles.touchPreviewSection : ''}`}>
          <div ref={previewRef} className={`${styles.invoicePreview} ${isTouchDevice ? styles.touchInvoicePreview : ''}`}>
            {/* Beautiful Watermark */}
            <div className={styles.watermark}>
              {invoice.from.name || 'Your Company Name'}
            </div>
            {/* Professional Invoice Header */}
            <div className={styles.invoiceHeader}>
              <div className={styles.headerLeft}>
                {logo && <img src={logo} alt="Company Logo" className={styles.invoiceLogo} />}
                <div className={styles.companyInfo}>
                  <h2 className={styles.companyName}>{invoice.from.name || 'Your Company Name'}</h2>
                  <p className={styles.companyAddress}>{invoice.from.address || '123 Business Ave'}</p>
                  <p className={styles.companyCity}>{invoice.from.city || 'New York, NY 10001'}</p>
                </div>
              </div>
              <div className={styles.invoiceTitleSection}>
                <h1 className={styles.invoiceTitle}>INVOICE</h1>
                <div className={styles.invoiceMeta}>
                  <div className={styles.metaRow}>
                    <strong>Invoice #:</strong>
                    <span>{invoice.invoiceNumber || 'INV-0000'}</span>
                  </div>
                  <div className={styles.metaRow}>
                    <strong>Date Issued:</strong>
                    <span>{invoice.date ? new Date(invoice.date).toLocaleDateString() : '—'}</span>
                  </div>
                  <div className={styles.metaRow}>
                    <strong>Due Date:</strong>
                    <span>{invoice.dueDate ? new Date(invoice.dueDate).toLocaleDateString() : '—'}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Bill From / Bill To Sections */}
            <div className={styles.invoiceParties}>
              <div className={styles.partySection}>
                <h3 className={styles.partyTitle}>From:</h3>
                <div className={styles.partyDetails}>
                  <p className={styles.partyName}>{invoice.from.name || 'Your Company Name'}</p>
                  <p>{invoice.from.address || '123 Business Ave'}</p>
                  <p>{invoice.from.city || 'New York, NY 10001'}</p>
                  <p>{invoice.from.email || 'accounting@company.com'}</p>
                  <p>{invoice.from.phone || '(555) 123-4567'}</p>
                </div>
              </div>
              <div className={styles.partySection}>
                <h3 className={styles.partyTitle}>Bill To:</h3>
                <div className={styles.partyDetails}>
                  <p className={styles.partyName}>{invoice.to.name || "Client Name"}</p>
                  <p>{invoice.to.address || "Client Address"}</p>
                  <p>{invoice.to.city || "City, State ZIP"}</p>
                  <p>{invoice.to.email || "client@company.com"}</p>
                  <p>{invoice.to.phone || "(555) 123-4567"}</p>
                </div>
              </div>
            </div>
            {/* Invoice Items Table */}
            <div className={styles.invoiceItemsTable}>
              <div className={styles.tableHeader}>
                <div className={styles.colDescription}>Description</div>
                <div className={styles.colQuantity}>Qty</div>
                <div className={styles.colRate}>Unit Price</div>
                <div className={styles.colAmount}>Amount</div>
              </div>
              {invoice.items.map((item, index) => (
                <div key={item.id} className={styles.tableRow}>
                  <div className={styles.colDescription}>
                    {item.description || "Professional Services"}
                  </div>
                  <div className={styles.colQuantity}>
                    {item.quantity}
                  </div>
                  <div className={styles.colRate}>
                    {formatCurrency(item.rate)}
                  </div>
                  <div className={styles.colAmount}>
                    {formatCurrency(item.amount)}
                  </div>
                </div>
              ))}
            </div>
            {/* Invoice Totals */}
            <div className={styles.invoiceTotals}>
              <div className={styles.totalsContainer}>
                <div className={styles.totalLine}>
                  <span>Subtotal:</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                {invoice.taxRate > 0 && (
                  <div className={styles.totalLine}>
                    <span>Tax ({invoice.taxRate}%):</span>
                    <span>{formatCurrency(taxAmount)}</span>
                  </div>
                )}
                {invoice.discount > 0 && (
                  <div className={styles.totalLine}>
                    <span>Discount ({invoice.discount}%):</span>
                    <span>-{formatCurrency(discountAmount)}</span>
                  </div>
                )}
                <div className={styles.grandTotalLine}>
                  <span>TOTAL DUE:</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>
            </div>
            {/* Payment Instructions, Notes, Terms & Conditions at Bottom */}
            <div className={styles.invoiceBottomSections}>
              <div className={styles.bottomGrid}>
                <div className={styles.paymentInfo}>
                  <h4>Payment Instructions</h4>
                  <div className={styles.paymentContent}>
                    {invoice.paymentInstructions ? (
                      invoice.paymentInstructions.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                      ))
                    ) : (
                      <>
                        <p>Make checks payable to: <strong>{invoice.from.name || 'Your Company'}</strong></p>
                        <p>Bank Transfer: Account #123456789 • Routing #987654321</p>
                        <p>PayPal: payments@yourcompany.com</p>
                      </>
                    )}
                  </div>
                </div>
                <div className={styles.notesTermsColumn}>
                  {invoice.notes && (
                    <div className={styles.notesSection}>
                      <h4>Notes</h4>
                      <div className={styles.notesContent}>
                        <p>{invoice.notes}</p>
                      </div>
                    </div>
                  )}
                  {invoice.terms && (
                    <div className={styles.termsSection}>
                      <h4>Terms & Conditions</h4>
                      <div className={styles.termsContent}>
                        <p>{invoice.terms}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {signature && (
                <div className={styles.signatureSection}>
                  <img src={signature} alt="Authorized Signature" className={styles.signatureImage} />
                  <div className={styles.signatureLine}></div>
                  <p className={styles.signatureLabel}>Authorized Signature</p>
                </div>
              )}
            </div>
            {/* Invoice Footer Note */}
            <div className={styles.invoiceEndNote}>
              <p>Thank you for your business. Please contact us with any questions regarding this invoice.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Download Button Card - Always visible on small screens and touch devices */}
      {showDownloadCard && (
        <div className={`${styles.downloadCard} ${isTouchDevice ? styles.touchDownloadCard : ''}`}>
          <button 
            className={`${styles.downloadBtn} ${isDownloading ? styles.loading : ''} ${isTouchDevice ? styles.touchDownloadBtn : styles.mobileDownloadBtn}`} 
            onClick={handleDownloadPDF}
            disabled={isDownloading}
            aria-label={isDownloading ? 'Generating PDF...' : 'Download PDF Invoice'}
          >
            {isDownloading ? (
              <span className={styles.downloadBtnContent}>
                <span className={styles.downloadSpinner}></span>
                <span>Generating PDF...</span>
              </span>
            ) : (
              <span className={styles.downloadBtnContent}>
                <span className={styles.downloadIcon}>📄</span>
                <span>Download PDF Invoice</span>
              </span>
            )}
          </button>
        </div>
      )}

      {/* SEO Footer Section */}
      <footer className={styles.seoFooter}>
        <div className={styles.seoContainer}>
          <h3>Why Use Our Invoice Generator?</h3>
          <div className={styles.seoBenefits}>
            <div className={styles.benefitItem}>
              <h4>🚀 Time Saving</h4>
              <p>Create professional invoices in minutes instead of hours. No design skills required.</p>
            </div>
            <div className={styles.benefitItem}>
              <h4>💼 Professional</h4>
              <p>Impress clients with clean, branded invoices that build trust and credibility.</p>
            </div>
            <div className={styles.benefitItem}>
              <h4>🌍 Global Ready</h4>
              <p>Support for 45+ currencies and international tax calculations.</p>
            </div>
            <div className={styles.benefitItem}>
              <h4>📱 Mobile Friendly</h4>
              <p>Create and send invoices from anywhere on any device.</p>
            </div>
          </div>
          <div className={styles.seoTags}>
            <span>#InvoiceGenerator</span>
            <span>#FreeInvoices</span>
            <span>#PDFInvoice</span>
            <span>#SmallBusiness</span>
            <span>#FreelancerTools</span>
          </div>
        </div>
      </footer>
    </div>
  );
}