import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context/AuthContext';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import './Auth.css';

export default function LoginPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    navigate('/dashboard');
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-left-content">
          <div className="landing-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
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
          <h2>Your Bridge to What's Next</h2>
          <p>Connect with verified opportunities, build your skills, and track your journey — all in one place.</p>
          <div className="auth-demo-info">
            <strong>Demo Accounts:</strong>
            <div className="auth-demo-accounts">
              <button onClick={() => { setEmail('refugee@demo.com'); setPassword('demo'); }}>
                Refugee
              </button>
              <button onClick={() => { setEmail('org@demo.com'); setPassword('demo'); }}>
                Organization
              </button>
              <button onClick={() => { setEmail('admin@demo.com'); setPassword('demo'); }}>
                Admin
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-container">
          <h1>{t('auth.loginTitle')}</h1>
          <p className="auth-subtitle">{t('auth.loginSubtitle')}</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="input-group">
              <label>{t('auth.email')}</label>
              <div className="input-with-icon">
                <Mail size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>{t('auth.password')}</label>
              <div className="input-with-icon">
                <Lock size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <button type="button" className="input-icon-btn" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="auth-options">
              <label className="auth-checkbox">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="auth-forgot">{t('auth.forgotPassword')}</a>
            </div>

            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
              {t('common.signIn')}
            </button>
          </form>

          <p className="auth-switch">
            {t('auth.noAccount')}{' '}
            <Link to="/register">{t('common.signUp')}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
