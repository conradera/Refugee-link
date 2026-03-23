import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import LandingPage from './components/landing/LandingPage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import DashboardLayout from './components/layout/DashboardLayout';
import DashboardHome from './components/dashboard/DashboardHome';
import OpportunitiesPage from './components/dashboard/OpportunitiesPage';
import ApplicationsPage from './components/dashboard/ApplicationsPage';
import MessagesPage from './components/dashboard/MessagesPage';
import DocumentsPage from './components/dashboard/DocumentsPage';
import PlaceholderPage from './components/dashboard/PlaceholderPage';
import './i18n';
import './styles/index.css';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="opportunities" element={<OpportunitiesPage />} />
        <Route path="applications" element={<ApplicationsPage />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="documents" element={<DocumentsPage />} />
        <Route path="my-opportunities" element={<PlaceholderPage title="My Opportunities" />} />
        <Route path="candidates" element={<PlaceholderPage title="Candidates" />} />
        <Route path="analytics" element={<PlaceholderPage title="Analytics" />} />
        <Route path="users" element={<PlaceholderPage title="User Management" />} />
        <Route path="org-management" element={<PlaceholderPage title="Organization Management" />} />
        <Route path="moderation" element={<PlaceholderPage title="Moderation" />} />
        <Route path="settings" element={<PlaceholderPage title="Settings" />} />
        <Route path="help" element={<PlaceholderPage title="Help & Support" />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
