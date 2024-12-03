import React, { useState } from 'react';
import { ConversationList } from '../Messages/ConversationList';
import { MessageThread } from '../Messages/MessageThread';
import { generateMockConversations, generateMockMessages } from '../../utils/mockMessages';

export const MessagesView: React.FC = () => {
  const conversations = generateMockConversations();
  const [activeConversationId, setActiveConversationId] = useState<string | null>(
    conversations[0]?.id || null
  );

  const activeConversation = conversations.find(
    (conv) => conv.id === activeConversationId
  );
  const messages = activeConversationId
    ? generateMockMessages(activeConversationId)
    : [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        <ConversationList
          conversations={conversations}
          activeConversation={activeConversationId}
          onSelectConversation={setActiveConversationId}
        />
      </div>
      <div className="md:col-span-2">
        {activeConversation && (
          <MessageThread
            messages={messages}
            conversation={activeConversation}
          />
        )}
      </div>
    </div>
  );
};