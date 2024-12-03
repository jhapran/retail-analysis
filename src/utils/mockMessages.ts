import { Message, Conversation } from '../types/messages';

export const generateMockConversations = (): Conversation[] => [
  {
    id: '1',
    participant: {
      name: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      role: 'Store Manager',
      status: 'online'
    },
    lastMessage: 'Can you review the latest sales report?',
    timestamp: '5 min ago',
    unreadCount: 2
  },
  {
    id: '2',
    participant: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      role: 'Inventory Manager',
      status: 'away'
    },
    lastMessage: 'Stock levels updated for Q2',
    timestamp: '2 hours ago',
    unreadCount: 0
  },
  {
    id: '3',
    participant: {
      name: 'Emma Davis',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      role: 'Customer Support',
      status: 'offline'
    },
    lastMessage: 'New customer feedback received',
    timestamp: '1 day ago',
    unreadCount: 1
  }
];

export const generateMockMessages = (conversationId: string): Message[] => {
  const messages: Record<string, Message[]> = {
    '1': [
      {
        id: '1',
        sender: {
          name: 'Sarah Wilson',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          role: 'Store Manager'
        },
        content: "Hi, can you review the latest sales report? There are some interesting trends we should discuss.",
        timestamp: '5 min ago',
        read: false,
        category: 'notification'
      },
      {
        id: '2',
        sender: {
          name: 'Alex Johnson',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          role: 'Admin'
        },
        content: "Sure, I will take a look right away. Can you point out the specific areas you would like me to focus on?",
        timestamp: '4 min ago',
        read: true,
        category: 'notification'
      }
    ],
    '2': [
      {
        id: '1',
        sender: {
          name: 'Michael Chen',
          avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          role: 'Inventory Manager'
        },
        content: "Stock levels for Q2 have been updated in the system. Please review when you have a moment.",
        timestamp: '2 hours ago',
        read: false,
        category: 'notification'
      }
    ],
    '3': [
      {
        id: '1',
        sender: {
          name: 'Emma Davis',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          role: 'Customer Support'
        },
        content: "We received some important customer feedback about the new feature. Should we schedule a meeting to discuss?",
        timestamp: '1 day ago',
        read: false,
        category: 'notification'
      }
    ]
  };

  return messages[conversationId] || [];
};