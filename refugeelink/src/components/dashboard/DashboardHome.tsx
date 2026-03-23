import { useAuth } from '../../context/AuthContext';
import RefugeeDashboard from './RefugeeDashboard';
import OrgDashboard from './OrgDashboard';
import AdminDashboard from './AdminDashboard';

export default function DashboardHome() {
  const { user } = useAuth();

  if (user?.role === 'admin') return <AdminDashboard />;
  if (user?.role === 'organization') return <OrgDashboard />;
  return <RefugeeDashboard />;
}
