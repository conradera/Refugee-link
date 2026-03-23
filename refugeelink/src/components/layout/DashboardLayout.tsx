import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context/AuthContext';
import LanguageSwitcher from './LanguageSwitcher';
import {
  LayoutDashboard,
  ClipboardList,
  Compass,
  MessageCircle,
  FileText,
  Settings,
  HelpCircle,
  Bell,
  Search,
  LogOut,
  Users,
  Building2,
  BarChart3,
  ShieldCheck,
  Briefcase,
  Menu,
  X,
} from 'lucide-react';
import './DashboardLayout.css';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

export default function DashboardLayout() {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const refugeeNav: NavItem[] = [
    { icon: <LayoutDashboard size={20} />, label: t('nav.dashboard'), path: '/dashboard' },
    { icon: <ClipboardList size={20} />, label: t('nav.myTasks'), path: '/dashboard/applications' },
    { icon: <Compass size={20} />, label: t('nav.opportunities'), path: '/dashboard/opportunities' },
    { icon: <MessageCircle size={20} />, label: t('nav.messages'), path: '/dashboard/messages' },
    { icon: <FileText size={20} />, label: t('nav.documents'), path: '/dashboard/documents' },
  ];

  const orgNav: NavItem[] = [
    { icon: <LayoutDashboard size={20} />, label: t('nav.dashboard'), path: '/dashboard' },
    { icon: <Briefcase size={20} />, label: t('nav.myOpportunities'), path: '/dashboard/my-opportunities' },
    { icon: <Users size={20} />, label: t('nav.candidates'), path: '/dashboard/candidates' },
    { icon: <MessageCircle size={20} />, label: t('nav.messages'), path: '/dashboard/messages' },
    { icon: <BarChart3 size={20} />, label: t('nav.analytics'), path: '/dashboard/analytics' },
  ];

  const adminNav: NavItem[] = [
    { icon: <LayoutDashboard size={20} />, label: t('nav.dashboard'), path: '/dashboard' },
    { icon: <Users size={20} />, label: t('nav.users'), path: '/dashboard/users' },
    { icon: <Building2 size={20} />, label: t('nav.organizations'), path: '/dashboard/org-management' },
    { icon: <ShieldCheck size={20} />, label: t('nav.moderation'), path: '/dashboard/moderation' },
    { icon: <BarChart3 size={20} />, label: t('nav.analytics'), path: '/dashboard/analytics' },
  ];

  const navItems = user?.role === 'admin' ? adminNav : user?.role === 'organization' ? orgNav : refugeeNav;

  const bottomNav: NavItem[] = [
    { icon: <Settings size={20} />, label: t('nav.settings'), path: '/dashboard/settings' },
    { icon: <HelpCircle size={20} />, label: t('nav.help'), path: '/dashboard/help' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const initials = user?.fullName
    ?.split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2) || 'U';

  return (
    <div className="dashboard-layout">
      {/* Mobile overlay */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <div className="landing-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <div className="logo-icon">
              <svg viewBox="0 0 40 40" width="32" height="32">
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
          <button className="sidebar-close-mobile" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="sidebar-label">Menu</div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.path}
              className={`sidebar-nav-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => {
                navigate(item.path);
                setSidebarOpen(false);
              }}
            >
              {item.icon}
              <span>{item.label}</span>
              {item.label === t('nav.messages') && (
                <span className="nav-badge">3</span>
              )}
            </button>
          ))}
        </nav>

        <div className="sidebar-spacer" />

        {user?.role === 'refugee' && (
          <div className="sidebar-upgrade-card">
            <strong>Complete your profile</strong>
            <p>Add more skills and experience to get better matches!</p>
            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Update Profile
            </button>
          </div>
        )}

        <nav className="sidebar-nav sidebar-bottom-nav">
          {bottomNav.map((item) => (
            <button
              key={item.path}
              className={`sidebar-nav-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => {
                navigate(item.path);
                setSidebarOpen(false);
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
          <button className="sidebar-nav-item" onClick={handleLogout}>
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="dashboard-main">
        {/* Top Bar */}
        <header className="dashboard-topbar">
          <div className="topbar-left">
            <button className="mobile-menu-btn" onClick={() => setSidebarOpen(true)}>
              <Menu size={22} />
            </button>
            <div className="topbar-search">
              <Search size={18} />
              <input type="text" placeholder={t('dashboard.searchPlaceholder')} />
            </div>
          </div>
          <div className="topbar-right">
            <LanguageSwitcher />
            <button className="topbar-icon-btn">
              <Bell size={20} />
              <span className="topbar-notification-dot" />
            </button>
            <div className="topbar-avatar">
              {initials}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
