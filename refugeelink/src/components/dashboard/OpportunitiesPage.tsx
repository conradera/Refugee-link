import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Search,
  MapPin,
  Clock,
  Star,
  Briefcase,
  GraduationCap,
  Home,
  HeartPulse,
  Scale,
  Store,
} from 'lucide-react';
import './Dashboard.css';

const opportunities = [
  {
    id: '1',
    title: 'Carpentry Instructor',
    org: 'BuildRight NGO',
    category: 'job',
    location: 'Nairobi, Kenya',
    deadline: '2026-04-15',
    matchScore: 94,
    skills: ['Carpentry', 'Teaching'],
    description: 'Join our team to teach carpentry skills to community members. 2+ years experience required.',
  },
  {
    id: '2',
    title: 'Healthcare Training Program',
    org: 'HealthFirst Africa',
    category: 'training',
    location: 'Kakuma, Kenya',
    deadline: '2026-04-01',
    matchScore: 88,
    skills: ['Healthcare', 'First Aid'],
    description: 'A 6-month training program for community health workers.',
  },
  {
    id: '3',
    title: 'Housing Assistance - Nairobi',
    org: 'SafeHaven Housing',
    category: 'housing',
    location: 'Nairobi, Kenya',
    deadline: '2026-05-10',
    matchScore: 82,
    skills: [],
    description: 'Affordable housing program for refugee families in the Nairobi area.',
  },
  {
    id: '4',
    title: 'Legal Documentation Support',
    org: 'LegalAid International',
    category: 'legal',
    location: 'Kampala, Uganda',
    deadline: '2026-04-20',
    matchScore: 76,
    skills: [],
    description: 'Free legal assistance for refugees seeking documentation and asylum support.',
  },
  {
    id: '5',
    title: 'Tailoring Workshop',
    org: 'SkillsForAll',
    category: 'training',
    location: 'Dadaab, Kenya',
    deadline: '2026-03-30',
    matchScore: 71,
    skills: ['Tailoring', 'Design'],
    description: 'Learn professional tailoring skills with certification.',
  },
  {
    id: '6',
    title: 'Construction Worker',
    org: 'BuildRight NGO',
    category: 'job',
    location: 'Nairobi, Kenya',
    deadline: '2026-04-25',
    matchScore: 68,
    skills: ['Construction', 'Welding'],
    description: 'Full-time construction work with competitive pay and benefits.',
  },
];

const categoryIcons: Record<string, React.ReactNode> = {
  job: <Briefcase size={16} />,
  training: <GraduationCap size={16} />,
  housing: <Home size={16} />,
  healthcare: <HeartPulse size={16} />,
  legal: <Scale size={16} />,
  sme_support: <Store size={16} />,
};

const categoryColors: Record<string, string> = {
  job: '#29ABE2',
  training: '#8DC63F',
  housing: '#F59E0B',
  healthcare: '#EF4444',
  legal: '#8B5CF6',
  sme_support: '#EC4899',
};

export default function OpportunitiesPage() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filtered = opportunities.filter((opp) => {
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opp.org.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || opp.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="dash-page">
      <div className="dash-page-header">
        <h1>{t('opportunities.title')}</h1>
      </div>

      {/* Search and Filters */}
      <div className="opp-search-bar">
        <div className="topbar-search" style={{ flex: 1, minWidth: 0 }}>
          <Search size={18} />
          <input
            type="text"
            placeholder="Search opportunities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="opp-filter-chips">
          <button
            className={`filter-chip ${!selectedCategory ? 'active' : ''}`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          {Object.keys(categoryIcons).map((cat) => (
            <button
              key={cat}
              className={`filter-chip ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
              style={selectedCategory === cat ? { borderColor: categoryColors[cat], color: categoryColors[cat], background: `${categoryColors[cat]}10` } : {}}
            >
              {categoryIcons[cat]}
              <span>{cat.replace('_', ' ')}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Opportunities Grid */}
      <div className="opp-grid">
        {filtered.map((opp) => (
          <div key={opp.id} className="opp-card">
            <div className="opp-card-header">
              <div>
                <div className="opp-card-title">{opp.title}</div>
                <div className="opp-card-org">{opp.org}</div>
              </div>
              <span
                className="badge"
                style={{
                  background: `${categoryColors[opp.category]}15`,
                  color: categoryColors[opp.category],
                }}
              >
                {categoryIcons[opp.category]} {opp.category}
              </span>
            </div>
            <p style={{ fontSize: 13, color: 'var(--gray-500)', lineHeight: 1.6, marginBottom: 12 }}>
              {opp.description}
            </p>
            <div className="opp-card-body">
              <span className="badge badge-blue">
                <MapPin size={12} /> {opp.location}
              </span>
              {opp.skills.map((skill) => (
                <span key={skill} className="badge badge-green">{skill}</span>
              ))}
            </div>
            <div className="opp-card-footer">
              <div className="opp-match-score">
                <Star size={16} />
                {opp.matchScore}% {t('opportunities.matchScore')}
              </div>
              <div className="opp-deadline">
                <Clock size={14} />
                {opp.deadline}
              </div>
            </div>
            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 12 }}>
              {t('opportunities.applyNow')}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
