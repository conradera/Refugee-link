import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  Heart,
  Building2,
  CheckCircle2,
  ArrowRight,
  Shield,
  Globe,
  Sparkles,
  Users,
  Briefcase,
  MapPin,
  Quote,
  ChevronRight,
  Zap,
} from 'lucide-react';
import LanguageSwitcher from '../layout/LanguageSwitcher';
import VercelDeployBanner from '../common/VercelDeployBanner';
import './LandingPage.css';

export default function LandingPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="landing">
      {/* Navbar */}
      <nav className="landing-nav">
        <div className="landing-nav-inner container">
          <div className="landing-logo">
            <div className="logo-icon">
              <svg viewBox="0 0 40 40" width="36" height="36">
                <circle cx="14" cy="8" r="4" fill="#8DC63F"/>
                <circle cx="26" cy="8" r="4" fill="#29ABE2"/>
                <path d="M8 16 C8 16, 8 28, 20 28 C14 28, 10 24, 10 20 Z" fill="#8DC63F" opacity="0.9"/>
                <path d="M32 16 C32 16, 32 28, 20 28 C26 28, 30 24, 30 20 Z" fill="#29ABE2" opacity="0.9"/>
                <path d="M14 18 C14 14, 26 14, 26 18 C26 22, 20 26, 20 28 C20 26, 14 22, 14 18Z" fill="#29ABE2" opacity="0.6"/>
              </svg>
            </div>
            <span className="logo-text">
              <span className="logo-refugee">Refugee</span>
              <span className="logo-link">Link</span>
            </span>
          </div>
          <div className="landing-nav-right">
            <LanguageSwitcher />
            <button className="btn btn-outline" onClick={() => navigate('/login')}>
              {t('common.signIn')}
            </button>
            <button className="btn btn-primary" onClick={() => navigate('/register')}>
              {t('common.getStarted')}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient-1" />
          <div className="hero-gradient-2" />
        </div>
        <div className="hero-content container">
          <div className="hero-badge animate-fadeIn">
            <Heart size={14} />
            <span>{t('landing.badge')}</span>
          </div>
          <h1 className="hero-title animate-fadeIn">
            {t('landing.heroTitle')}{' '}
            <span className="hero-highlight">{t('landing.heroHighlight')}</span>
          </h1>
          <p className="hero-subtitle animate-fadeIn">{t('landing.heroSubtitle')}</p>
          <div className="hero-actions animate-fadeIn">
            <button className="btn btn-primary btn-lg" onClick={() => navigate('/register')}>
              {t('landing.startJourney')} <ArrowRight size={18} />
            </button>
            <button className="btn btn-secondary btn-lg" onClick={() => navigate('/register')}>
              {t('landing.imOrganization')}
            </button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">12,000+</span>
              <span className="hero-stat-label">{t('landing.statsRefugees')}</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">350+</span>
              <span className="hero-stat-label">{t('landing.statsOrgs')}</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">8,500+</span>
              <span className="hero-stat-label">{t('landing.statsOpportunities')}</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">28</span>
              <span className="hero-stat-label">{t('landing.statsCountries')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">{t('landing.howItWorks')}</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-icon step-icon-blue">
                <Heart size={24} />
              </div>
              <div className="step-number">01</div>
              <h3>{t('landing.step1Title')}</h3>
              <p>{t('landing.step1Desc')}</p>
            </div>
            <div className="step-connector">
              <ChevronRight size={24} />
            </div>
            <div className="step-card">
              <div className="step-icon step-icon-green">
                <Building2 size={24} />
              </div>
              <div className="step-number">02</div>
              <h3>{t('landing.step2Title')}</h3>
              <p>{t('landing.step2Desc')}</p>
            </div>
            <div className="step-connector">
              <ChevronRight size={24} />
            </div>
            <div className="step-card">
              <div className="step-icon step-icon-blue">
                <CheckCircle2 size={24} />
              </div>
              <div className="step-number">03</div>
              <h3>{t('landing.step3Title')}</h3>
              <p>{t('landing.step3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">{t('landing.featuresTitle')}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrap blue">
                <Sparkles size={22} />
              </div>
              <h3>{t('landing.feature1Title')}</h3>
              <p>{t('landing.feature1Desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrap green">
                <CheckCircle2 size={22} />
              </div>
              <h3>{t('landing.feature2Title')}</h3>
              <p>{t('landing.feature2Desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrap blue">
                <Globe size={22} />
              </div>
              <h3>{t('landing.feature3Title')}</h3>
              <p>{t('landing.feature3Desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrap green">
                <Shield size={22} />
              </div>
              <h3>{t('landing.feature4Title')}</h3>
              <p>{t('landing.feature4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Organizations */}
      <section className="org-section">
        <div className="container">
          <div className="org-content">
            <div className="org-badge">
              <Users size={14} />
              <span>{t('landing.forOrganizations')}</span>
            </div>
            <h2>{t('landing.orgTitle')}</h2>
            <p>{t('landing.orgDesc')}</p>
            <button className="btn btn-secondary btn-lg" onClick={() => navigate('/register')}>
              {t('landing.registerOrg')}
            </button>
            <div className="org-features">
              <div className="org-feature-item">
                <Briefcase size={18} />
                <span>Post unlimited opportunities</span>
              </div>
              <div className="org-feature-item">
                <Zap size={18} />
                <span>AI-powered candidate matching</span>
              </div>
              <div className="org-feature-item">
                <MapPin size={18} />
                <span>Location-based filtering</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">{t('landing.testimonialsTitle')}</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <Quote size={24} className="quote-icon" />
              <p>{t('landing.testimonial1')}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">AK</div>
                <div>
                  <strong>{t('landing.testimonial1Author')}</strong>
                  <span>{t('landing.testimonial1Role')}</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card featured">
              <Quote size={24} className="quote-icon" />
              <p>{t('landing.testimonial2')}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">SM</div>
                <div>
                  <strong>{t('landing.testimonial2Author')}</strong>
                  <span>{t('landing.testimonial2Role')}</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <Quote size={24} className="quote-icon" />
              <p>{t('landing.testimonial3')}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">JP</div>
                <div>
                  <strong>{t('landing.testimonial3Author')}</strong>
                  <span>{t('landing.testimonial3Role')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{t('landing.ctaTitle')}</h2>
            <p>{t('landing.ctaDesc')}</p>
            <button className="btn btn-primary btn-lg" onClick={() => navigate('/register')}>
              {t('landing.ctaButton')} <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <VercelDeployBanner />
      <footer className="landing-footer">
        <div className="landing-footer-inner container">
          <div className="footer-left">
            <div className="landing-logo">
              <div className="logo-icon">
                <svg viewBox="0 0 40 40" width="28" height="28">
                  <circle cx="14" cy="8" r="4" fill="#8DC63F"/>
                  <circle cx="26" cy="8" r="4" fill="#29ABE2"/>
                  <path d="M8 16 C8 16, 8 28, 20 28 C14 28, 10 24, 10 20 Z" fill="#8DC63F" opacity="0.9"/>
                  <path d="M32 16 C32 16, 32 28, 20 28 C26 28, 30 24, 30 20 Z" fill="#29ABE2" opacity="0.9"/>
                </svg>
              </div>
              <span className="footer-copyright">{t('landing.footer')}</span>
            </div>
          </div>
          <div className="footer-right">
            <Shield size={14} />
            <span>{t('landing.footerPrivacy')}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
