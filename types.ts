import { LucideIcon } from 'lucide-react';

export interface ServerConfig {
  name: string;
  ip: string;
  version: string;
  type: string; // e.g., "MMORPG", "Survival"
  description: string;
  hero: {
    headline: string;
    subheadline: string;
    backgroundImage: string;
  };
  features: Feature[];
  gameplayDetails: GameplayDetail[]; // New detailed section
  gallery: string[];
  staff: StaffMember[];
  contact: ContactOption[];
  footer: {
    copyright: string;
  };
}

export interface Feature {
  title: string;
  description: string;
  // Use Extract to ensure icon is a string, filtering out number/symbol from keyof module
  icon: Extract<keyof typeof import('lucide-react'), string>;
}

export interface GameplayDetail {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface StaffMember {
  name: string;
  role: string;
  avatar: string;
  description: string;
}

export interface ContactOption {
  type: 'qq' | 'discord' | 'website' | 'other';
  label: string;
  value: string; // URL or Group ID
  primary?: boolean;
}