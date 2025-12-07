import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi';
import LazyImage from '../components/common/LazyImage';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        }, 2000);
    };

    // Contact methods for floating icons
    const contactMethods = [
        { icon: <FiPhone />, label: 'اتصل بنا', method: 'tel:+966500000000' },
        { icon: <FiMail />, label: 'راسلنا', method: 'mailto:info@alnajm-travel.com' },
        { icon: <FiMapPin />, label: 'موقعنا', method: '#' }
    ];

    return (
        <div className="contact-page">
            {/* Enhanced Hero Section */}
            <section className="contact-hero" aria-label="تواصل معنا">
                <div className="contact-hero-background">
                    <LazyImage 
                        src="/dubai.png" 
                        alt="دبي - خلفية" 
                        className="contact-hero-image"
                    />
                    <div className="contact-hero-overlay"></div>
                    <div className="contact-hero-pattern"></div>
                </div>
                
                <div className="container contact-hero-content">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="contact-hero-badge"
                    >
                        <FiSend aria-hidden="true" />
                        <span>نحن هنا لمساعدتك</span>
                    </motion.div>

                    {/* Main Title with Animated Underline */}
                    <div className="contact-title-wrapper">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="contact-hero-title"
                        >
                            تواصل معنا
                            <motion.span
                                className="contact-title-underline"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                            />
                        </motion.h1>
                    </div>

                    {/* Floating Contact Methods */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="contact-methods-floating"
                        aria-label="طرق التواصل"
                    >
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index}
                                href={method.method}
                                className="contact-method-icon"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.1 }}
                                aria-label={method.label}
                            >
                                {method.icon}
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="contact-hero-subtitle"
                    >
                        نحن هنا للإجابة على استفساراتك ومساعدتك في تخطيط رحلتك القادمة
                    </motion.p>
                </div>
            </section>

            <div className="container section">
                <div className="contact-grid">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="contact-info-wrapper"
                    >
                        <h2 className="contact-title">معلومات الاتصال</h2>
                        <p className="contact-desc">يمكنك التواصل معنا عبر القنوات التالية أو زيارة مقرنا الرئيسي.</p>

                        <div className="contact-cards-grid">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="contact-card"
                            >
                                <div className="contact-card-icon">
                                    <FiPhone />
                                </div>
                                <h4 className="contact-card-title">الهاتف</h4>
                                <div className="contact-card-content">
                                    <a href="tel:+966500000000" className="contact-link">+966 50 000 0000</a>
                                    <a href="tel:+966110000000" className="contact-link">+966 11 000 0000</a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="contact-card"
                            >
                                <div className="contact-card-icon">
                                    <FiMail />
                                </div>
                                <h4 className="contact-card-title">البريد الإلكتروني</h4>
                                <div className="contact-card-content">
                                    <a href="mailto:info@alnajm-travel.com" className="contact-link">info@alnajm-travel.com</a>
                                    <a href="mailto:support@alnajm-travel.com" className="contact-link">support@alnajm-travel.com</a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="contact-card"
                            >
                                <div className="contact-card-icon">
                                    <FiMapPin />
                                </div>
                                <h4 className="contact-card-title">العنوان</h4>
                                <div className="contact-card-content">
                                    <p>شارع الملك فهد، الرياض</p>
                                    <p>المملكة العربية السعودية</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="contact-card"
                            >
                                <div className="contact-card-icon">
                                    <FiClock />
                                </div>
                                <h4 className="contact-card-title">ساعات العمل</h4>
                                <div className="contact-card-content">
                                    <p>السبت - الخميس: 9:00 ص - 10:00 م</p>
                                    <p>الجمعة: 4:00 م - 10:00 م</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="contact-form-wrapper"
                    >
                        <h2 className="contact-title">أرسل لنا رسالة</h2>

                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="success-message-box"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    className="success-icon-lg"
                                >
                                    <FiCheckCircle />
                                </motion.div>
                                <h3>تم إرسال رسالتك بنجاح!</h3>
                                <p>سيقوم فريقنا بالتواصل معك في أقرب وقت ممكن.</p>
                                <button
                                    className="btn btn-outline mt-md"
                                    onClick={() => setStatus('idle')}
                                >
                                    إرسال رسالة أخرى
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="contact-form">
                                <p className="form-intro">املأ النموذج أدناه وسنرد عليك في أقرب وقت ممكن. جميع الحقول المميزة بعلامة (*) مطلوبة.</p>
                                
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <span>الاسم الكامل</span>
                                        <span className="required-asterisk">*</span>
                                    </label>
                                    <div className="input-wrapper">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                            placeholder="أدخل اسمك الكامل"
                                            aria-required="true"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email">
                                            <span>البريد الإلكتروني</span>
                                            <span className="required-asterisk">*</span>
                                        </label>
                                        <div className="input-wrapper">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="form-input"
                                                placeholder="example@email.com"
                                                aria-required="true"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">
                                            <span>رقم الهاتف</span>
                                            <span className="required-asterisk">*</span>
                                        </label>
                                        <div className="input-wrapper">
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="form-input"
                                                placeholder="05xxxxxxxx"
                                                aria-required="true"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">الموضوع</label>
                                    <div className="input-wrapper">
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="form-input form-select"
                                        >
                                            <option value="">اختر الموضوع</option>
                                            <option value="booking">حجز جديد</option>
                                            <option value="inquiry">استفسار عام</option>
                                            <option value="complaint">شكوى أو اقتراح</option>
                                            <option value="other">أخرى</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">
                                        <span>الرسالة</span>
                                        <span className="required-asterisk">*</span>
                                    </label>
                                    <div className="input-wrapper">
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="form-textarea"
                                            rows="6"
                                            placeholder="اكتب رسالتك هنا..."
                                            maxLength={500}
                                            aria-required="true"
                                        ></textarea>
                                        <span className="char-counter">
                                            {formData.message.length} / 500
                                        </span>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className={`btn btn-primary w-full ${status === 'loading' ? 'loading' : ''}`}
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <span className="spinner"></span>
                                            جاري الإرسال...
                                        </>
                                    ) : (
                                        <>
                                            <FiSend style={{ marginLeft: '8px' }} />
                                            إرسال الرسالة
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
