import React from 'react';
import { Conversation } from '../../types/messages';

interface Props {
  conversations: Conversation[];
  activeConversation: string | null;
  onSelectConversation: (id: string) => void;
}

export const ConversationList: React.FC<Props> = ({ 
  conversations, 
  activeConversation, 
  onSelectConversation 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold">Messages</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {conversations.map((conversation) => (
          <button
            key={conversation.id}
            onClick={() => onSelectConversation(conversation.id)}
            className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
              activeConversation === conversation.id ? 'bg-blue-50' : ''
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="relative">
                <img
                  src={conversation.participant.avatar}
                  alt={conversation.participant.name}
                  className="w-10 h-10 rounded-full"
                />
                <span
                  className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                    conversation.participant.status === 'online'
                      ? 'bg-green-500'
                      : conversation.participant.status === 'away'
                      ? 'bg-yellow-500'
                      : 'bg-gray-500'
                  }`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium truncate">
                    {conversation.participant.name}
                  </h3>
                  <span className="text-xs text-gray-500">
                    {conversation.timestamp}
                  </span>
                </div>
                <p className="text-sm text-gray-600 truncate">
                  {conversation.lastMessage}
                </p>
                <span className="text-xs text-gray-500">
                  {conversation.participant.role}
                </span>
              </div>
              {conversation.unreadCount > 0 && (
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  {conversation.unreadCount}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};