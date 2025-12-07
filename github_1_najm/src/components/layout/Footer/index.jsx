import { Link } from 'react-router-dom';
import { FiTwitter, FiInstagram, FiFacebook, FiLinkedin, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { SOCIAL_LINKS, COMPANY_INFO, CONTACT_INFO } from '../../../constants/company';
import './Footer.css';
import LazyImage from '../../common/LazyImage';

const Footer = () => {
    const socialMedia = [
        { icon: <FiTwitter />, href: SOCIAL_LINKS.twitter, label: 'تويتر', color: '#1DA1F2' },
        { icon: <FiInstagram />, href: SOCIAL_LINKS.instagram, label: 'إنستغرام', color: '#E4405F' },
        { icon: <FiFacebook />, href: SOCIAL_LINKS.facebook, label: 'فيسبوك', color: '#1877F2' },
        { icon: <FiLinkedin />, href: SOCIAL_LINKS.linkedin, label: 'لينكد إن', color: '#0077B5' }
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Company Info */}
                    <div className="footer-col footer-col-main">
                        <Link to="/" className="footer-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="الرجوع إلى الصفحة الرئيسية">
                            <LazyImage src="/logo.png" alt="النجم الأزرق للسياحة والسفر" className="footer-logo-img" />
                            <span className="footer-logo-text">{COMPANY_INFO.name}</span>
                        </Link>
                        <p className="footer-desc">
                            شريكك الموثوق في عالم السفر والسياحة. نقدم لك تجارب سفر استثنائية وخدمات راقية تليق بك.
                        </p>
                        <div className="social-links" role="list" aria-label="روابط التواصل الاجتماعي">
                            {socialMedia.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label={social.label}
                                    style={{ '--social-color': social.color }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h3 className="footer-title">روابط سريعة</h3>
                        <ul className="footer-links">
                            <li><Link to="/">الرئيسية</Link></li>
                             <li><Link to="/services">خدماتنا</Link></li>   
                            <li><Link to="/about">من نحن</Link></li>
                            <li><Link to="/destinations">الوجهات</Link></li>
                            <li><Link to="/contact">اتصل بنا</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-col">
                        <h3 className="footer-title">خدماتنا</h3>
                        <ul className="footer-links">
                            <li><Link to="/services">حجوزات الطيران</Link></li>
                            <li><Link to="/services">حجوزات الفنادق</Link></li>
                            <li><Link to="/services">البرامج السياحية</Link></li>
                            <li><Link to="/services">التأشيرات</Link></li>
                            <li><Link to="/services">السياحة العلاجية</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col">
                        <h3 className="footer-title">تواصل معنا</h3>
                        <ul className="footer-contact" role="list">
                            <li>
                                <FiPhone className="icon" aria-hidden="true" />
                                <a href="tel:+966500000000" aria-label="اتصل بنا">+966 50 000 0000</a>
                            </li>
                            <li>
                                <FiMail className="icon" aria-hidden="true" />
                                <a href="mailto:info@alnajm-travel.com" aria-label="أرسل بريد إلكتروني">info@alnajm-travel.com</a>
                            </li>
                            <li>
                                <FiMapPin className="icon" aria-hidden="true" />
                                <span>الرياض، المملكة العربية السعودية</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} النجم الأزرق للسفريات والسياحة. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

