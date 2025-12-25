'use client';
import { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import styles from './InvoiceCertificate.module.css';

export default function ColorfulInvoiceGenerator() {
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
    items: [{ id: 1, description: 'Professional Services', quantity: 1, rate: 0, amount: 0 }],
    taxRate: 0,
    discount: 0,
    notes: 'Thank you for your business!',
    terms: 'Payment due within 30 days.',
    paymentInstructions: ''
  });

  const [currency, setCurrency] = useState('USD');
  const [logo, setLogo] = useState(null);
  const [signature, setSignature] = useState(null);
  const [activeTab, setActiveTab] = useState('details');
  const [logoError, setLogoError] = useState('');
  const previewRef = useRef(null);

  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
    { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' }
  ];

  useEffect(() => setIsClient(true), []);

  // Calculations
  const subtotal = invoice.items.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
  const taxAmount = subtotal * (invoice.taxRate / 100);
  const discountAmount = subtotal * (invoice.discount / 100);
  const total = subtotal + taxAmount - discountAmount;

  const handleInputChange = (e, section, field) => {
    if (section) {
      setInvoice(prev => ({ ...prev, [section]: { ...prev[section], [field]: e.target.value } }));
    } else {
      setInvoice(prev => ({ ...prev, [field]: e.target.value }));
    }
  };

  const handleItemChange = (id, field, value) => {
    setInvoice(prev => {
      const updatedItems = prev.items.map(item => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: field === 'quantity' || field === 'rate' || field === 'amount' ? parseFloat(value) || 0 : value };
          if (field === 'quantity' || field === 'rate') updatedItem.amount = updatedItem.quantity * updatedItem.rate;
          else if (field === 'amount' && updatedItem.quantity > 0) updatedItem.rate = parseFloat(value) / updatedItem.quantity;
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
      return { ...prev, items: [...prev.items, { id: newId, description: '', quantity: 1, rate: 0, amount: 0 }] };
    });
  };

  const removeItem = (id) => {
    if (invoice.items.length <= 1) return;
    setInvoice(prev => ({ ...prev, items: prev.items.filter(item => item.id !== id) }));
  };

  const handleDownloadPDF = () => {
    const input = previewRef.current;
    if (!input) return;
    html2canvas(input, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      scrollX: 0,
      scrollY: 0,
      windowWidth: document.documentElement.offsetWidth,
      windowHeight: document.documentElement.offsetHeight
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 10;
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= 287;
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= 287;
      }
      pdf.save(`invoice_${invoice.invoiceNumber}.pdf`);
    });
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      setLogoError('File must be < 2MB');
      return;
    }
    const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      setLogoError('Only JPG, PNG, GIF allowed');
      return;
    }
    setLogoError('');
    const reader = new FileReader();
    reader.onloadend = () => setLogo(reader.result);
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
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: currency === 'JPY' ? 0 : 2
    }).format(amount);
  };

  if (!isClient) return null;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>🎨 Colorful Invoice Generator</h1>
        <p className={styles.subtitle}>Vibrant, modern invoices with clean spacing & thin borders</p>
      </header>

      <div className={styles.actions}>
        <button className={styles.downloadBtn} onClick={handleDownloadPDF}>
          📥 Download PDF
        </button>
      </div>

      <div className={styles.mainGrid}>
        {/* Form Panel */}
        <div className={styles.formPanel}>
          <div className={styles.tabs}>
            {['details', 'items', 'settings'].map(tab => (
              <button
                key={tab}
                className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'details' ? '👤 Client' : tab === 'items' ? '🧾 Items' : '⚙️ Branding'}
              </button>
            ))}
          </div>

          <div className={styles.formContent}>
            {activeTab === 'details' && (
              <div className={styles.formSection}>
                <h3 className={styles.formSectionTitle}>Client Information</h3>
                <div className={styles.formGrid}>
                  {['name', 'email', 'address', 'city', 'phone'].map(field => (
                    <div key={field} className={styles.inputGroup}>
                      <label className={styles.inputLabel}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                      <input
                        type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                        value={invoice.to[field] || ''}
                        onChange={(e) => handleInputChange(e, 'to', field)}
                        className={styles.input}
                        placeholder={`Enter ${field.replace('_', ' ')}`}
                      />
                    </div>
                  ))}
                </div>

                <h3 className={styles.formSectionTitle}>Invoice Details</h3>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Invoice Number</label>
                  <input
                    type="text"
                    value={invoice.invoiceNumber}
                    onChange={(e) => handleInputChange(e, null, 'invoiceNumber')}
                    className={styles.input}
                  />
                </div>

                <div className={styles.row}>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Date</label>
                    <input
                      type="date"
                      value={invoice.date}
                      onChange={(e) => handleInputChange(e, null, 'date')}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Due Date</label>
                    <input
                      type="date"
                      value={invoice.dueDate}
                      onChange={(e) => handleInputChange(e, null, 'dueDate')}
                      className={styles.input}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'items' && (
              <div className={styles.formSection}>
                <h3 className={styles.formSectionTitle}>Line Items</h3>
                <div className={styles.itemsContainer}>
                  {invoice.items.map(item => (
                    <div key={item.id} className={styles.itemRow}>
                      <div className={styles.itemInputGroup}>
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                          placeholder="Description"
                          className={styles.itemInput}
                        />
                      </div>
                      <div className={styles.itemInputGroup}>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => handleItemChange(item.id, 'quantity', e.target.value)}
                          className={styles.qtyInput}
                          min="0"
                          step="1"
                          placeholder="Qty"
                        />
                      </div>
                      <div className={styles.itemInputGroup}>
                        <input
                          type="number"
                          value={item.rate}
                          onChange={(e) => handleItemChange(item.id, 'rate', e.target.value)}
                          className={styles.rateInput}
                          min="0"
                          step="0.01"
                          placeholder="Rate"
                        />
                      </div>
                      <div className={styles.amountDisplay}>
                        {formatCurrency(item.amount)}
                      </div>
                      <button onClick={() => removeItem(item.id)} className={styles.removeBtn}>
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

                <button onClick={addItem} className={styles.addBtn}>
                  + Add Item
                </button>

                <div className={styles.totalsBox}>
                  <div className={styles.totalRow}>
                    <span className={styles.totalLabel}>Subtotal</span>
                    <span className={styles.totalValue}>{formatCurrency(subtotal)}</span>
                  </div>
                  <div className={styles.totalRow}>
                    <div className={styles.totalInputGroup}>
                      <span className={styles.totalLabel}>Tax (%)</span>
                      <input
                        type="number"
                        value={invoice.taxRate}
                        onChange={(e) => handleInputChange(e, null, 'taxRate')}
                        className={styles.smallInput}
                        min="0"
                        max="100"
                        step="0.1"
                      />
                    </div>
                    <span className={styles.totalValue}>{formatCurrency(taxAmount)}</span>
                  </div>
                  <div className={styles.totalRow}>
                    <div className={styles.totalInputGroup}>
                      <span className={styles.totalLabel}>Discount (%)</span>
                      <input
                        type="number"
                        value={invoice.discount}
                        onChange={(e) => handleInputChange(e, null, 'discount')}
                        className={styles.smallInput}
                        min="0"
                        max="100"
                        step="0.1"
                      />
                    </div>
                    <span className={styles.totalValue}>-{formatCurrency(discountAmount)}</span>
                  </div>
                  <div className={styles.grandTotalRow}>
                    <span className={styles.grandTotalLabel}>Total</span>
                    <span className={styles.grandTotalValue}>{formatCurrency(total)}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className={styles.formSection}>
                <h3 className={styles.formSectionTitle}>Company Branding</h3>
                <div className={styles.formGrid}>
                  {['name', 'address', 'city', 'email', 'phone'].map(field => (
                    <div key={field} className={styles.inputGroup}>
                      <label className={styles.inputLabel}>Your {field.charAt(0).toUpperCase() + field.slice(1)}</label>
                      <input
                        type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                        value={invoice.from[field] || ''}
                        onChange={(e) => handleInputChange(e, 'from', field)}
                        className={styles.input}
                      />
                    </div>
                  ))}
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Currency</label>
                  <select value={currency} onChange={(e) => setCurrency(e.target.value)} className={styles.select}>
                    {currencies.map(c => (
                      <option key={c.code} value={c.code}>{c.name} ({c.symbol})</option>
                    ))}
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Notes</label>
                  <textarea
                    value={invoice.notes}
                    onChange={(e) => handleInputChange(e, null, 'notes')}
                    className={styles.textarea}
                    rows="3"
                  />
                </div>

                <div className={styles.uploadGroup}>
                  <label className={styles.inputLabel}>Logo</label>
                  <input type="file" accept="image/*" onChange={handleLogoUpload} className={styles.fileInput} />
                  {logoError && <p className={styles.error}>{logoError}</p>}
                  {logo && (
                    <div className={styles.logoPreview}>
                      <img src={logo} alt="Logo" className={styles.logoImage} />
                      <button onClick={() => setLogo(null)} className={styles.removeImageBtn}>Remove</button>
                    </div>
                  )}
                </div>

                <div className={styles.uploadGroup}>
                  <label className={styles.inputLabel}>Signature</label>
                  <input type="file" accept="image/*" onChange={handleSignatureUpload} className={styles.fileInput} />
                  {signature && (
                    <div className={styles.logoPreview}>
                      <img src={signature} alt="Signature" className={styles.logoImage} />
                      <button onClick={() => setSignature(null)} className={styles.removeImageBtn}>Remove</button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Preview */}
        <div className={styles.previewPanel}>
          <div ref={previewRef} className={styles.invoicePreview}>
            <div className={styles.watermark}>PAID</div>

            <div className={styles.previewHeader}>
              {logo && <img src={logo} alt="Logo" className={styles.previewLogo} />}
              <div className={styles.companyInfo}>
                <h2 className={styles.companyName}>{invoice.from.name || 'Your Company'}</h2>
                <p className={styles.companyMeta}>{invoice.from.address}, {invoice.from.city}</p>
              </div>
              <div className={styles.invoiceIdBox}>
                <span className={styles.invoiceLabel}>INVOICE</span>
                <p>#{invoice.invoiceNumber}</p>
                <p>{new Date(invoice.date).toLocaleDateString()}</p>
              </div>
            </div>

            <div className={styles.parties}>
              <div className={styles.partySection}>
                <h4 className={styles.partyTitle}>Bill From</h4>
                <p className={styles.partyDetail}>{invoice.from.name}</p>
                <p className={styles.partyDetail}>{invoice.from.address}</p>
                <p className={styles.partyDetail}>{invoice.from.city}</p>
                <p className={styles.partyDetail}>{invoice.from.email}</p>
              </div>
              <div className={styles.partySection}>
                <h4 className={styles.partyTitle}>Bill To</h4>
                <p className={styles.partyDetail}>{invoice.to.name || '—'}</p>
                <p className={styles.partyDetail}>{invoice.to.address || '—'}</p>
                <p className={styles.partyDetail}>{invoice.to.city || '—'}</p>
                <p className={styles.partyDetail}>{invoice.to.email || '—'}</p>
              </div>
            </div>

            <div className={styles.itemsTable}>
              <div className={styles.tableHeader}>
                <div className={styles.tableCell}>Description</div>
                <div className={styles.tableCell}>Qty</div>
                <div className={styles.tableCell}>Rate</div>
                <div className={styles.tableCell}>Total</div>
              </div>
              {invoice.items.map(item => (
                <div key={item.id} className={styles.tableRow}>
                  <div className={styles.tableCell}>{item.description || '—'}</div>
                  <div className={styles.tableCell}>{item.quantity}</div>
                  <div className={styles.tableCell}>{formatCurrency(item.rate)}</div>
                  <div className={styles.tableCell}>{formatCurrency(item.amount)}</div>
                </div>
              ))}
            </div>

            <div className={styles.totalsFooter}>
              <div className={styles.totalLine}>
                <span className={styles.totalLabel}>Subtotal</span>
                <span className={styles.totalValue}>{formatCurrency(subtotal)}</span>
              </div>
              {invoice.taxRate > 0 && (
                <div className={styles.totalLine}>
                  <span className={styles.totalLabel}>Tax ({invoice.taxRate}%)</span>
                  <span className={styles.totalValue}>{formatCurrency(taxAmount)}</span>
                </div>
              )}
              {invoice.discount > 0 && (
                <div className={styles.totalLine}>
                  <span className={styles.totalLabel}>Discount</span>
                  <span className={styles.totalValue}>-{formatCurrency(discountAmount)}</span>
                </div>
              )}
              <div className={styles.grandTotal}>
                <span className={styles.grandTotalLabel}>TOTAL</span>
                <span className={styles.grandTotalValue}>{formatCurrency(total)}</span>
              </div>
            </div>

            {signature && (
              <div className={styles.signatureBox}>
                <img src={signature} alt="Signature" className={styles.signatureImg} />
                <p className={styles.signatureLabel}>Authorized Signature</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}