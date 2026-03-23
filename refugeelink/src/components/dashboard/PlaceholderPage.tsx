import { Construction } from 'lucide-react';
import './Dashboard.css';

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="dash-page" style={{ textAlign: 'center', paddingTop: 80 }}>
      <Construction size={48} style={{ color: 'var(--gray-300)', marginBottom: 16 }} />
      <h2 style={{ fontSize: 22, fontWeight: 600, color: 'var(--gray-700)', marginBottom: 8 }}>{title}</h2>
      <p style={{ fontSize: 14, color: 'var(--gray-500)' }}>This page is under development.</p>
    </div>
  );
}
