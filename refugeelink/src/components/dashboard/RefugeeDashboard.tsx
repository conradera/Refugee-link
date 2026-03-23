import { useTranslation } from 'react-i18next';
import {
  Briefcase,
  GraduationCap,
  Home,
  HeartPulse,
  Scale,
  Store,
  Link2,
  MessageSquare,
  Clock,
  MoreHorizontal,
  Plus,
  Filter,
  ArrowUpDown,
  EyeOff,
} from 'lucide-react';
import './Dashboard.css';

const categories = [
  { icon: <Briefcase size={20} />, label: 'Jobs', color: '#29ABE2' },
  { icon: <GraduationCap size={20} />, label: 'Training', color: '#8DC63F' },
  { icon: <Home size={20} />, label: 'Housing', color: '#F59E0B' },
  { icon: <HeartPulse size={20} />, label: 'Healthcare', color: '#EF4444' },
  { icon: <Scale size={20} />, label: 'Legal Aid', color: '#8B5CF6' },
  { icon: <Store size={20} />, label: 'SME Support', color: '#EC4899' },
];

interface ApplicationItem {
  id: string;
  title: string;
  category: string;
  links: number;
  comments: number;
  status: string;
  statusColor: string;
  priority: string;
  priorityColor: string;
  daysLeft: number;
  progress: number;
}

const todoApplications: ApplicationItem[] = [
  {
    id: '1',
    title: 'Apply for Carpentry Position at Build...',
    category: 'Employment',
    links: 12,
    comments: 21,
    status: 'In Review',
    statusColor: '#F59E0B',
    priority: 'High',
    priorityColor: '#EF4444',
    daysLeft: 15,
    progress: 0,
  },
  {
    id: '2',
    title: 'Complete Skills Assessment',
    category: 'Training',
    links: 4,
    comments: 32,
    status: 'Drafts',
    statusColor: '#6B7280',
    priority: 'Medium',
    priorityColor: '#F59E0B',
    daysLeft: 12,
    progress: 0,
  },
];

const activeApplications: ApplicationItem[] = [
  {
    id: '3',
    title: 'Housing Application - Nairobi',
    category: 'Housing',
    links: 11,
    comments: 8,
    status: 'In Progress',
    statusColor: '#29ABE2',
    priority: 'Mid',
    priorityColor: '#F59E0B',
    daysLeft: 32,
    progress: 26,
  },
  {
    id: '4',
    title: 'Healthcare Registration',
    category: 'Healthcare',
    links: 7,
    comments: 12,
    status: 'In Progress',
    statusColor: '#29ABE2',
    priority: 'Medium',
    priorityColor: '#F59E0B',
    daysLeft: 4,
    progress: 74,
  },
  {
    id: '5',
    title: 'Legal Documentation Review',
    category: 'Legal',
    links: 4,
    comments: 16,
    status: 'Input Needed',
    statusColor: '#8B5CF6',
    priority: 'Low',
    priorityColor: '#8DC63F',
    daysLeft: 22,
    progress: 38,
  },
];

export default function RefugeeDashboard() {
  const { t } = useTranslation();

  return (
    <div className="dash-page">
      <div className="dash-page-header">
        <h1>{t('nav.myTasks')}</h1>
      </div>

      {/* Recommended Categories */}
      <section className="dash-section">
        <h2 className="dash-section-title">{t('dashboard.recommendedCategories')}</h2>
        <div className="category-grid">
          {categories.map((cat) => (
            <button key={cat.label} className="category-card">
              <span className="category-icon" style={{ color: cat.color }}>
                {cat.icon}
              </span>
              <span className="category-label">{cat.label}</span>
            </button>
          ))}
        </div>
      </section>

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
          <button className="toolbar-btn">
            <EyeOff size={16} />
            <span>Hide</span>
          </button>
          <button className="toolbar-btn">
            <MoreHorizontal size={16} />
          </button>
        </div>
        <button className="btn btn-primary">
          <Plus size={16} />
          {t('dashboard.newProject')}
        </button>
      </div>

      {/* TODO Section */}
      <section className="dash-list-section">
        <div className="dash-list-header">
          <span className="dash-list-title">{t('dashboard.todo')}</span>
          <button className="dash-list-more"><MoreHorizontal size={16} /></button>
        </div>
        <div className="dash-list">
          {todoApplications.map((app) => (
            <ApplicationRow key={app.id} item={app} />
          ))}
        </div>
        <button className="dash-add-row">
          <Plus size={16} />
          <span>{t('dashboard.addNew')}</span>
        </button>
      </section>

      {/* Active Section */}
      <section className="dash-list-section">
        <div className="dash-list-header">
          <span className="dash-list-title">{t('dashboard.active')}</span>
          <button className="dash-list-more"><MoreHorizontal size={16} /></button>
        </div>
        <div className="dash-list">
          {activeApplications.map((app) => (
            <ApplicationRow key={app.id} item={app} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ApplicationRow({ item }: { item: ApplicationItem }) {
  const { t } = useTranslation();

  return (
    <div className="app-row">
      <div className="app-row-left">
        <div className="app-row-info">
          <span className="app-row-title">{item.title}</span>
          <span className="app-row-category">{item.category}</span>
        </div>
      </div>
      <div className="app-row-meta">
        <span className="app-row-stat">
          <Link2 size={14} />
          {item.links}
        </span>
        <span className="app-row-stat">
          <MessageSquare size={14} />
          {item.comments}
        </span>
        <span className="app-row-badge" style={{ background: `${item.statusColor}15`, color: item.statusColor, borderColor: `${item.statusColor}30` }}>
          {item.status}
        </span>
        <span className="app-row-badge" style={{ background: `${item.priorityColor}15`, color: item.priorityColor, borderColor: `${item.priorityColor}30` }}>
          {item.priority}
        </span>
        <span className="app-row-stat">
          <Clock size={14} />
          {item.daysLeft} {t('dashboard.daysLeft')}
        </span>
        <div className="app-row-progress">
          <div className="progress-bar" style={{ width: 80 }}>
            <div className="progress-bar-fill" style={{ width: `${item.progress}%` }} />
          </div>
          <span className="app-row-progress-text">{item.progress}%</span>
        </div>
        <button className="app-row-more">
          <MoreHorizontal size={16} />
        </button>
      </div>
    </div>
  );
}
