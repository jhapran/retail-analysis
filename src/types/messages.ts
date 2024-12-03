export interface Message {
  id: string;
  sender: {
    name: string;
    avatar: string;
    role: string;
  };
  content: string;
  timestamp: string;
  read: boolean;
  category: 'support' | 'notification' | 'alert';
}

export interface Conversation {
  id: string;
  participant: {
    name: string;
    avatar: string;
    role: string;
    status: 'online' | 'offline' | 'away';
  };
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
}