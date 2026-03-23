import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  register: (name: string, email: string, password: string, role: UserRole) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo users for each role
const demoUsers: Record<UserRole, User> = {
  refugee: {
    id: '1',
    email: 'refugee@demo.com',
    fullName: 'Ahmed Khalid',
    phone: '+254712345678',
    role: 'refugee',
    preferredLanguage: 'en',
    isActive: true,
    createdAt: '2026-01-15',
  },
  organization: {
    id: '2',
    email: 'org@demo.com',
    fullName: 'BuildRight NGO',
    phone: '+254798765432',
    role: 'organization',
    preferredLanguage: 'en',
    isActive: true,
    createdAt: '2026-01-10',
  },
  admin: {
    id: '3',
    email: 'admin@demo.com',
    fullName: 'Platform Admin',
    role: 'admin',
    preferredLanguage: 'en',
    isActive: true,
    createdAt: '2026-01-01',
  },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, _password: string) => {
    // Demo: match by email prefix
    if (email.includes('admin')) {
      setUser(demoUsers.admin);
    } else if (email.includes('org')) {
      setUser(demoUsers.organization);
    } else {
      setUser(demoUsers.refugee);
    }
  };

  const register = (name: string, email: string, _password: string, role: UserRole) => {
    setUser({
      id: crypto.randomUUID(),
      email,
      fullName: name,
      role,
      preferredLanguage: 'en',
      isActive: true,
      createdAt: new Date().toISOString(),
    });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
