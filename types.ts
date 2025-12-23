export interface User {
  id: string;
  name: string;
  isPro?: boolean;
  isVerified?: boolean;
  isNew?: boolean;
  isReliable?: boolean;
  avatarUrl: string;
  rating?: number;
  reviews?: number;
}

export interface ServiceItem {
  id: string;
  type: 'service' | 'request';
  title: string;
  description: string;
  user: User;
  distance: string; // e.g., "300m"
  price?: string; // e.g., "$15.000"
  tags?: string[];
  isUrgent?: boolean;
  image?: string;
  timeAgo?: string;
}

export enum AppRoute {
  WELCOME = '/',
  ONBOARDING_1 = '/onboarding/1',
  ONBOARDING_2 = '/onboarding/2',
  LOGIN = '/login',
  CREATE_PROFILE = '/profile/create',
  CONFIGURE_ZONE = '/profile/zone',
  HOME = '/home',
  REQUESTS = '/requests',
}