
import React, { useState } from 'react';
import ChatSidebar from './ChatSidebar';
import ChatInterface from './ChatInterface';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const ChatLayout = () => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile menu toggle */}
      {isMobile && (
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-3 left-3 z-50 text-gray-200 hover:bg-sidebar-accent/50"
          onClick={toggleSidebar}
        >
          <Menu size={24} />
        </Button>
      )}

      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transform transition-transform duration-300 ease-in-out md:translate-x-0 fixed md:relative z-40 h-full`}
      >
        <ChatSidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 relative overflow-hidden">
        <ChatInterface />
      </div>

      {/* Overlay for mobile */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30" 
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default ChatLayout;
