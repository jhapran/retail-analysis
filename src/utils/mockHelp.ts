import { HelpArticle, FAQ, SupportResource } from '../types/help';

export const generateHelpArticles = (): HelpArticle[] => [
  {
    id: '1',
    title: 'Getting Started with RetailAI Analytics',
    category: 'Basics',
    content: 'Welcome to RetailAI Analytics! This guide will help you understand the basic features and how to make the most of our platform.',
    lastUpdated: '2024-03-15'
  },
  {
    id: '2',
    title: 'Understanding Analytics Dashboard',
    category: 'Analytics',
    content: 'Learn how to interpret the various metrics and charts in your analytics dashboard for better decision-making.',
    lastUpdated: '2024-03-14'
  },
  {
    id: '3',
    title: 'Managing User Permissions',
    category: 'Administration',
    content: 'A comprehensive guide to setting up and managing user roles and permissions in your organization.',
    lastUpdated: '2024-03-13'
  }
];

export const generateFAQs = (): FAQ[] => [
  {
    id: '1',
    question: 'How do I reset my password?',
    answer: 'Go to Settings > Security, click on "Change Password" and follow the instructions.',
    category: 'Account'
  },
  {
    id: '2',
    question: 'Can I export analytics data?',
    answer: 'Yes, you can export data in CSV or PDF format using the export button in the Analytics dashboard.',
    category: 'Analytics'
  },
  {
    id: '3',
    question: 'How often is the data updated?',
    answer: 'Data is updated in real-time for most metrics. Historical data is processed and updated every 24 hours.',
    category: 'Data'
  }
];

export const generateSupportResources = (): SupportResource[] => [
  {
    id: '1',
    title: 'Video Tutorials',
    description: 'Watch step-by-step guides on using RetailAI Analytics',
    link: '#',
    icon: 'video'
  },
  {
    id: '2',
    title: 'API Documentation',
    description: 'Technical documentation for developers',
    link: '#',
    icon: 'code'
  },
  {
    id: '3',
    title: 'Community Forum',
    description: 'Connect with other RetailAI Analytics users',
    link: '#',
    icon: 'users'
  }
];