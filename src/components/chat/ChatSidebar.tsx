
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Plus } from 'lucide-react';

type Conversation = {
  id: string;
  title: string;
  date: string;
};

const ChatSidebar = () => {
  // Mock conversations
  const conversations: Conversation[] = [
    { id: '1', title: 'How to design a logo', date: '2 days ago' },
    { id: '2', title: 'Chat about machine learning', date: '5 days ago' },
    { id: '3', title: 'Help with React hooks', date: 'Aug 24' },
    { id: '4', title: 'Website performance tips', date: 'Aug 22' },
    { id: '5', title: 'Career advice for developers', date: 'Aug 19' },
  ];

  return (
    <div className="h-screen w-64 bg-sidebar flex flex-col border-r border-gray-700">
      <div className="p-3">
        <Button 
          className="w-full bg-chat-accent hover:bg-chat-accent/90 text-white flex items-center justify-center gap-2" 
          size="sm"
        >
          <Plus size={16} /> New Chat
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-3 py-2">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Recent Conversations
          </h3>
          <div className="space-y-1">
            {conversations.map((conversation) => (
              <Button
                key={conversation.id}
                variant="ghost"
                className="w-full justify-start text-left text-sm font-medium text-gray-300 hover:bg-sidebar-accent group"
              >
                <div className="flex items-center w-full overflow-hidden">
                  <MessageSquare size={16} className="mr-2 flex-shrink-0 text-gray-400 group-hover:text-white" />
                  <div className="truncate">{conversation.title}</div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-3 border-t border-gray-700">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-sidebar-accent flex items-center justify-center text-white font-medium">
            U
          </div>
          <div className="ml-2">
            <div className="text-sm font-medium text-gray-200">User</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
