import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context/AuthContext';
import type { UserRole } from '../../types';
import { Mail, Lock, User, Phone, Eye, EyeOff } from 'lucide-react';
import './Auth.css';

export default function RegisterPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'refugee' as UserRole,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register(formData.fullName, formData.email, formData.password, formData.role);
    navigate('/dashboard');
  };

  const update = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
          <h2>Join RefugeeLink Today</h2>
          <p>Create your account and get connected with opportunities that match your skills and needs.</p>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-container">
          <h1>{t('auth.registerTitle')}</h1>
          <p className="auth-subtitle">{t('auth.registerSubtitle')}</p>

          <form onSubmit={handleSubmit} className="auth-form">
            {/* Role Selection */}
            <div className="input-group">
              <label>{t('auth.selectRole')}</label>
              <div className="role-selector">
                <button
                  type="button"
                  className={`role-btn ${formData.role === 'refugee' ? 'active' : ''}`}
                  onClick={() => update('role', 'refugee')}
                >
                  {t('auth.refugee')}
                </button>
                <button
                  type="button"
                  className={`role-btn ${formData.role === 'organization' ? 'active' : ''}`}
                  onClick={() => update('role', 'organization')}
                >
                  {t('auth.organization')}
                </button>
              </div>
            </div>

            <div className="input-group">
              <label>{t('auth.fullName')}</label>
              <div className="input-with-icon">
                <User size={18} />
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => update('fullName', e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>{t('auth.email')}</label>
              <div className="input-with-icon">
                <Mail size={18} />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>{t('auth.phone')}</label>
              <div className="input-with-icon">
                <Phone size={18} />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="+254..."
                />
              </div>
            </div>

            <div className="input-group">
              <label>{t('auth.password')}</label>
              <div className="input-with-icon">
                <Lock size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => update('password', e.target.value)}
                  placeholder="Create a password"
                  required
                />
                <button type="button" className="input-icon-btn" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="input-group">
              <label>{t('auth.confirmPassword')}</label>
              <div className="input-with-icon">
                <Lock size={18} />
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => update('confirmPassword', e.target.value)}
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
              {t('common.signUp')}
            </button>
          </form>

          <p className="auth-switch">
            {t('auth.hasAccount')}{' '}
            <Link to="/login">{t('common.signIn')}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
