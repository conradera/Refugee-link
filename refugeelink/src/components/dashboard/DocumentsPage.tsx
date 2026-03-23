import { useTranslation } from 'react-i18next';
import {
  FileText,
  Upload,
  Download,
  Trash2,
  Eye,
  Clock,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import './Dashboard.css';

const documents = [
  { id: '1', name: 'Resume_Ahmed_Khalid.pdf', type: 'CV', size: '245 KB', uploaded: '2026-02-15', status: 'verified' },
  { id: '2', name: 'National_ID_Scan.jpg', type: 'ID', size: '1.2 MB', uploaded: '2026-02-10', status: 'verified' },
  { id: '3', name: 'Carpentry_Certificate.pdf', type: 'Certificate', size: '380 KB', uploaded: '2026-02-20', status: 'pending' },
  { id: '4', name: 'UNHCR_Registration.pdf', type: 'Registration', size: '520 KB', uploaded: '2026-01-05', status: 'verified' },
  { id: '5', name: 'Reference_Letter.pdf', type: 'Reference', size: '180 KB', uploaded: '2026-03-01', status: 'pending' },
];

const statusConfig: Record<string, { color: string; icon: React.ReactNode; label: string }> = {
  verified: { color: '#10B981', icon: <CheckCircle2 size={14} />, label: 'Verified' },
  pending: { color: '#F59E0B', icon: <Clock size={14} />, label: 'Pending Review' },
  rejected: { color: '#EF4444', icon: <AlertCircle size={14} />, label: 'Rejected' },
};

export default function DocumentsPage() {
  const { t } = useTranslation();

  return (
    <div className="dash-page">
      <div className="dash-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>{t('nav.documents')}</h1>
        <button className="btn btn-primary">
          <Upload size={16} />
          Upload Document
        </button>
      </div>

      {/* Upload Area */}
      <div className="upload-area" style={{
        border: '2px dashed var(--gray-300)',
        borderRadius: 'var(--radius-lg)',
        padding: '40px',
        textAlign: 'center',
        marginBottom: 24,
        background: 'var(--gray-50)',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}>
        <Upload size={32} style={{ color: 'var(--gray-400)', marginBottom: 12 }} />
        <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--gray-700)' }}>
          Drag and drop files here, or click to browse
        </p>
        <p style={{ fontSize: 12, color: 'var(--gray-400)', marginTop: 4 }}>
          PDF, JPG, PNG up to 10MB
        </p>
      </div>

      {/* Documents List */}
      <div className="dash-list">
        {documents.map((doc) => {
          const status = statusConfig[doc.status];
          return (
            <div key={doc.id} className="app-row">
              <div className="app-row-left">
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--primary-blue-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary-blue)',
                  flexShrink: 0,
                }}>
                  <FileText size={20} />
                </div>
                <div className="app-row-info">
                  <span className="app-row-title">{doc.name}</span>
                  <span className="app-row-category">{doc.type} - {doc.size}</span>
                </div>
              </div>
              <div className="app-row-meta">
                <span className="app-row-stat">
                  <Clock size={14} />
                  {doc.uploaded}
                </span>
                <span
                  className="app-row-badge"
                  style={{
                    background: `${status.color}15`,
                    color: status.color,
                    borderColor: `${status.color}30`,
                  }}
                >
                  {status.icon} {status.label}
                </span>
                <button className="toolbar-btn" style={{ padding: '6px 8px' }}>
                  <Eye size={16} />
                </button>
                <button className="toolbar-btn" style={{ padding: '6px 8px' }}>
                  <Download size={16} />
                </button>
                <button className="toolbar-btn" style={{ padding: '6px 8px', color: 'var(--error)' }}>
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
