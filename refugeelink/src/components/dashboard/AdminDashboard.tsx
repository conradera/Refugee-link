import { useTranslation } from 'react-i18next';
import {
  Users,
  Building2,
  Briefcase,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  Clock,
  TrendingUp,
} from 'lucide-react';
import './Dashboard.css';

const stats = [
  { label: 'Total Users', value: '12,450', icon: <Users size={22} />, color: 'blue' },
  { label: 'Organizations', value: 358, icon: <Building2 size={22} />, color: 'green' },
  { label: 'Active Opportunities', value: '1,240', icon: <Briefcase size={22} />, color: 'purple' },
  { label: 'Flagged Reports', value: 7, icon: <ShieldAlert size={22} />, color: 'yellow' },
];

const pendingOrgs = [
  { name: 'Hope Foundation', type: 'NGO', submitted: '2 days ago' },
  { name: 'BuildRight Kenya', type: 'Employer', submitted: '3 days ago' },
  { name: 'HealthFirst Africa', type: 'Healthcare', submitted: '5 days ago' },
  { name: 'LegalAid International', type: 'Legal Services', submitted: '1 week ago' },
];

const recentActivity = [
  { action: 'New user registered', detail: 'Fatima M. (Refugee)', time: '5 min ago', type: 'user' },
  { action: 'Organization approved', detail: 'SafeHaven Housing', time: '1 hour ago', type: 'org' },
  { action: 'Opportunity flagged', detail: 'Suspicious listing removed', time: '2 hours ago', type: 'flag' },
  { action: 'New application', detail: 'Healthcare Worker - Kakuma', time: '3 hours ago', type: 'app' },
];

const platformMetrics = [
  { label: 'Matches Made Today', value: 47, trend: '+12%' },
  { label: 'Applications Today', value: 128, trend: '+8%' },
  { label: 'Messages Sent', value: 342, trend: '+15%' },
  { label: 'Active Sessions', value: 89, trend: '-3%' },
];

export default function AdminDashboard() {
  const { t } = useTranslation();

  return (
    <div className="dash-page">
      <div className="dash-page-header">
        <h1>{t('nav.dashboard')}</h1>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <div className={`stat-icon ${stat.color}`}>{stat.icon}</div>
            <div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="admin-grid">
        {/* Pending Organization Approvals */}
        <div className="admin-card">
          <h3>Pending Organization Approvals</h3>
          {pendingOrgs.map((org, i) => (
            <div key={i} className="admin-list-item">
              <div className="admin-list-item-info">
                <div className="admin-list-avatar">
                  {org.name[0]}
                </div>
                <div>
                  <div className="admin-list-name">{org.name}</div>
                  <div className="admin-list-sub">{org.type} - {org.submitted}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="btn btn-primary" style={{ padding: '6px 12px', fontSize: 12 }}>
                  <CheckCircle2 size={14} /> Approve
                </button>
                <button className="btn btn-outline" style={{ padding: '6px 12px', fontSize: 12 }}>
                  <XCircle size={14} /> Reject
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="admin-card">
          <h3>Recent Activity</h3>
          {recentActivity.map((item, i) => (
            <div key={i} className="admin-list-item">
              <div className="admin-list-item-info">
                <div className="admin-list-avatar" style={{
                  background: item.type === 'flag' ? '#FEE2E2' : item.type === 'org' ? 'var(--primary-green-light)' : 'var(--primary-blue-light)',
                  color: item.type === 'flag' ? '#EF4444' : item.type === 'org' ? 'var(--primary-green)' : 'var(--primary-blue)',
                }}>
                  {item.type === 'user' ? <Users size={14} /> :
                   item.type === 'org' ? <Building2 size={14} /> :
                   item.type === 'flag' ? <ShieldAlert size={14} /> :
                   <Briefcase size={14} />}
                </div>
                <div>
                  <div className="admin-list-name">{item.action}</div>
                  <div className="admin-list-sub">{item.detail}</div>
                </div>
              </div>
              <span style={{ fontSize: 12, color: 'var(--gray-400)' }}>
                <Clock size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />
                {item.time}
              </span>
            </div>
          ))}
        </div>

        {/* Platform Metrics */}
        <div className="admin-card" style={{ gridColumn: '1 / -1' }}>
          <h3>Platform Metrics</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {platformMetrics.map((metric, i) => (
              <div key={i} style={{ textAlign: 'center', padding: 16, background: 'var(--gray-50)', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--gray-900)' }}>{metric.value}</div>
                <div style={{ fontSize: 13, color: 'var(--gray-500)', marginTop: 4 }}>{metric.label}</div>
                <div style={{
                  fontSize: 12,
                  fontWeight: 600,
                  marginTop: 8,
                  color: metric.trend.startsWith('+') ? 'var(--success)' : 'var(--error)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 4,
                }}>
                  <TrendingUp size={14} />
                  {metric.trend}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
