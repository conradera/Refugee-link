import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Clock,
  MoreHorizontal,
  CheckCircle2,
  XCircle,
  Eye,
  AlertCircle,
  Inbox,
} from 'lucide-react';
import './Dashboard.css';

const applications = [
  {
    id: '1',
    title: 'Carpentry Instructor',
    org: 'BuildRight NGO',
    status: 'interview',
    appliedAt: '2026-02-20',
    daysLeft: 8,
    progress: 65,
  },
  {
    id: '2',
    title: 'Healthcare Training Program',
    org: 'HealthFirst Africa',
    status: 'under_review',
    appliedAt: '2026-02-25',
    daysLeft: 12,
    progress: 35,
  },
  {
    id: '3',
    title: 'Housing Assistance - Nairobi',
    org: 'SafeHaven Housing',
    status: 'applied',
    appliedAt: '2026-03-01',
    daysLeft: 28,
    progress: 10,
  },
  {
    id: '4',
    title: 'Construction Worker',
    org: 'BuildRight NGO',
    status: 'approved',
    appliedAt: '2026-01-15',
    daysLeft: 0,
    progress: 100,
  },
  {
    id: '5',
    title: 'Tailoring Workshop',
    org: 'SkillsForAll',
    status: 'rejected',
    appliedAt: '2026-02-10',
    daysLeft: 0,
    progress: 100,
  },
];

const statusConfig: Record<string, { color: string; bg: string; icon: React.ReactNode; label: string }> = {
  applied: { color: '#3B82F6', bg: '#EFF6FF', icon: <Inbox size={14} />, label: 'Applied' },
  under_review: { color: '#F59E0B', bg: '#FEF3C7', icon: <Eye size={14} />, label: 'Under Review' },
  interview: { color: '#8B5CF6', bg: '#F3E8FF', icon: <AlertCircle size={14} />, label: 'Interview' },
  approved: { color: '#10B981', bg: '#D1FAE5', icon: <CheckCircle2 size={14} />, label: 'Approved' },
  rejected: { color: '#EF4444', bg: '#FEE2E2', icon: <XCircle size={14} />, label: 'Rejected' },
};

export default function ApplicationsPage() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<string | null>(null);

  const filtered = filter ? applications.filter((a) => a.status === filter) : applications;

  return (
    <div className="dash-page">
      <div className="dash-page-header">
        <h1>{t('applications.title')}</h1>
      </div>

      {/* Status Filter Chips */}
      <div className="opp-filter-chips" style={{ marginBottom: 20 }}>
        <button
          className={`filter-chip ${!filter ? 'active' : ''}`}
          onClick={() => setFilter(null)}
        >
          All ({applications.length})
        </button>
        {Object.entries(statusConfig).map(([key, config]) => (
          <button
            key={key}
            className={`filter-chip ${filter === key ? 'active' : ''}`}
            onClick={() => setFilter(key === filter ? null : key)}
            style={filter === key ? { borderColor: config.color, color: config.color, background: config.bg } : {}}
          >
            {config.icon}
            {config.label}
          </button>
        ))}
      </div>

      {/* Applications List */}
      <div className="dash-list">
        {filtered.map((app) => {
          const status = statusConfig[app.status];
          return (
            <div key={app.id} className="app-row">
              <div className="app-row-left">
                <div className="app-row-info">
                  <span className="app-row-title">{app.title}</span>
                  <span className="app-row-category">{app.org}</span>
                </div>
              </div>
              <div className="app-row-meta">
                <span className="app-row-stat">
                  <Clock size={14} />
                  Applied {app.appliedAt}
                </span>
                <span
                  className="app-row-badge"
                  style={{
                    background: status.bg,
                    color: status.color,
                    borderColor: `${status.color}30`,
                  }}
                >
                  {status.icon} {status.label}
                </span>
                {app.daysLeft > 0 && (
                  <span className="app-row-stat">
                    <Clock size={14} />
                    {app.daysLeft} {t('dashboard.daysLeft')}
                  </span>
                )}
                <div className="app-row-progress">
                  <div className="progress-bar" style={{ width: 80 }}>
                    <div className="progress-bar-fill" style={{ width: `${app.progress}%` }} />
                  </div>
                  <span className="app-row-progress-text">{app.progress}%</span>
                </div>
                <button className="app-row-more">
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
