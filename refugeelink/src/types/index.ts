export type UserRole = 'refugee' | 'organization' | 'admin';

export interface User {
  id: string;
  email: string;
  fullName: string;
  phone?: string;
  role: UserRole;
  preferredLanguage: 'en' | 'sw' | 'fr';
  isActive: boolean;
  avatarUrl?: string;
  createdAt: string;
}

export interface RefugeeProfile {
  id: string;
  userId: string;
  nationality: string;
  currentLocation: string;
  yearsExperience: number;
  urgencyLevel: 1 | 2 | 3;
  bio: string;
  skills: Skill[];
  createdAt: string;
}

export interface Organization {
  id: string;
  userId: string;
  organizationName: string;
  organizationType: string;
  website?: string;
  description: string;
  verificationStatus: 'pending' | 'approved' | 'rejected' | 'suspended';
  createdAt: string;
}

export interface Skill {
  id: number;
  skillName: string;
}

export interface Opportunity {
  id: string;
  organizationId: string;
  organizationName?: string;
  title: string;
  description: string;
  category: 'job' | 'training' | 'housing' | 'healthcare' | 'legal' | 'sme_support';
  location: string;
  deadline: string;
  status: 'active' | 'closed' | 'draft';
  requiredSkills: Skill[];
  matchScore?: number;
  createdAt: string;
}

export interface Application {
  id: string;
  refugeeId: string;
  opportunityId: string;
  opportunity?: Opportunity;
  refugee?: RefugeeProfile & { user?: User };
  status: 'applied' | 'under_review' | 'interview' | 'approved' | 'rejected';
  appliedAt: string;
  progress: number;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  applicationId?: string;
  messageText: string;
  createdAt: string;
}

export interface Conversation {
  id: string;
  participantName: string;
  participantAvatar?: string;
  lastMessage: string;
  lastMessageAt: string;
  unreadCount: number;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  body: string;
  isRead: boolean;
  createdAt: string;
}

export interface DashboardStats {
  totalMatches: number;
  activeApplications: number;
  messagesUnread: number;
  profileCompletion: number;
}
