import { useTranslation } from 'react-i18next';
import {
  Briefcase,
  Users,
  BarChart3,
  Clock,
  Plus,
  MoreHorizontal,
  Filter,
  ArrowUpDown,
  MapPin,
  MessageSquare,
  Star,
} from 'lucide-react';
import './Dashboard.css';

const stats = [
  { label: 'Active Opportunities', value: 12, icon: <Briefcase size={22} />, color: 'blue' },
  { label: 'Total Candidates', value: 248, icon: <Users size={22} />, color: 'green' },
  { label: 'Applications Received', value: 89, icon: <BarChart3 size={22} />, color: 'purple' },
  { label: 'Avg. Response Time', value: '2.4d', icon: <Clock size={22} />, color: 'yellow' },
];

const opportunities = [
  {
    id: '1',
    title: 'Carpentry Instructor',
    applicants: 24,
    messages: 8,
    status: 'Active',
    statusColor: '#10B981',
    location: 'Nairobi, Kenya',
    daysLeft: 18,
    progress: 45,
  },
  {
    id: '2',
    title: 'Community Health Worker',
    applicants: 36,
    messages: 12,
    status: 'Active',
    statusColor: '#10B981',
    location: 'Kakuma, Kenya',
    daysLeft: 10,
    progress: 72,
  },
  {
    id: '3',
    title: 'Tailoring Workshop',
    applicants: 18,
    messages: 5,
    status: 'Draft',
    statusColor: '#6B7280',
    location: 'Kampala, Uganda',
    daysLeft: 30,
    progress: 15,
  },
];

const topCandidates = [
  { name: 'Ahmed K.', skill: 'Carpentry', score: 94, location: 'Nairobi' },
  { name: 'Fatima M.', skill: 'Healthcare', score: 91, location: 'Kakuma' },
  { name: 'Jean P.', skill: 'Tailoring', score: 88, location: 'Kampala' },
  { name: 'Sarah A.', skill: 'Construction', score: 85, location: 'Dadaab' },
];

export default function OrgDashboard() {
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

      {/* Toolbar */}
      <div className="dash-toolbar">
        <div className="dash-toolbar-left">
          <button className="toolbar-btn">
            <Filter size={16} />
            <span>{t('common.filter')}</span>
          </button>
          <button className="toolbar-btn">
            <ArrowUpDown size={16} />
            <span>{t('common.sort')}</span>
          </button>
        </div>
        <button className="btn btn-primary">
          <Plus size={16} />
          Post Opportunity
        </button>
      </div>

      {/* Active Opportunities */}
      <section className="dash-list-section">
        <div className="dash-list-header">
          <span className="dash-list-title">MY OPPORTUNITIES</span>
          <button className="dash-list-more"><MoreHorizontal size={16} /></button>
        </div>
        <div className="dash-list">
          {opportunities.map((opp) => (
            <div key={opp.id} className="app-row">
              <div className="app-row-left">
                <div className="app-row-info">
                  <span className="app-row-title">{opp.title}</span>
                  <span className="app-row-category">
                    <MapPin size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /> {opp.location}
                  </span>
                </div>
              </div>
              <div className="app-row-meta">
                <span className="app-row-stat">
                  <Users size={14} />
                  {opp.applicants}
                </span>
                <span className="app-row-stat">
                  <MessageSquare size={14} />
                  {opp.messages}
                </span>
                <span
                  className="app-row-badge"
                  style={{
                    background: `${opp.statusColor}15`,
                    color: opp.statusColor,
                    borderColor: `${opp.statusColor}30`,
                  }}
                >
                  {opp.status}
                </span>
                <span className="app-row-stat">
                  <Clock size={14} />
                  {opp.daysLeft} {t('dashboard.daysLeft')}
                </span>
                <div className="app-row-progress">
                  <div className="progress-bar" style={{ width: 80 }}>
                    <div className="progress-bar-fill" style={{ width: `${opp.progress}%` }} />
                  </div>
                  <span className="app-row-progress-text">{opp.progress}%</span>
                </div>
                <button className="app-row-more">
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Matched Candidates */}
      <section className="dash-list-section">
        <div className="dash-list-header">
          <span className="dash-list-title">TOP MATCHED CANDIDATES</span>
          <button className="dash-list-more"><MoreHorizontal size={16} /></button>
        </div>
        <div className="dash-list">
          {topCandidates.map((cand, i) => (
            <div key={i} className="app-row">
              <div className="app-row-left">
                <div className="admin-list-avatar">
                  {cand.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="app-row-info">
                  <span className="app-row-title">{cand.name}</span>
                  <span className="app-row-category">{cand.skill} - {cand.location}</span>
                </div>
              </div>
              <div className="app-row-meta">
                <span className="app-row-stat" style={{ color: 'var(--primary-green)', fontWeight: 600 }}>
                  <Star size={14} />
                  {cand.score}% Match
                </span>
                <button className="btn btn-primary" style={{ padding: '6px 14px', fontSize: 12 }}>
                  Invite
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
