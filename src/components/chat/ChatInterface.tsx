
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send, User } from 'lucide-react';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: number;
};

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! How can I help you today?',
      sender: 'bot',
      timestamp: Date.now() - 60000,
    },
    {
      id: '2',
      content: 'I need help designing a logo for my new business.',
      sender: 'user',
      timestamp: Date.now() - 50000,
    },
    {
      id: '3',
      content: "I'd be happy to help with that! What kind of business is it, and do you have any specific ideas or requirements for the logo design?",
      sender: 'bot',
      timestamp: Date.now() - 40000,
    },
  ]);
  
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: input,
      sender: 'user',
      timestamp: Date.now(),
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    
    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content: "I'm an AI assistant, and this is a simulated response. In a real application, this would be replaced with an actual API call to a language model.",
        sender: 'bot',
        timestamp: Date.now(),
      };
      
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto pb-32">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`py-6 px-4 md:px-8 lg:px-16 xl:px-24 flex ${
              message.sender === 'bot' ? 'bg-chat-bot' : 'bg-chat-user'
            }`}
          >
            <div className="max-w-3xl mx-auto w-full flex gap-4 animate-fade-in">
              <div className="mt-1 flex-shrink-0">
                {message.sender === 'bot' ? (
                  <div className="w-7 h-7 rounded-full bg-chat-accent flex items-center justify-center text-white">
                    AI
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-full bg-gray-600 flex items-center justify-center text-white">
                    <User size={16} />
                  </div>
                )}
              </div>
              <div className="text-gray-200 whitespace-pre-wrap">{message.content}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Message input */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#0f1117]">
        <div className="max-w-3xl mx-auto">
          <div className="relative border border-gray-700 rounded-lg bg-sidebar-accent/50 shadow-lg">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Message ChatGPT..."
              className="resize-none min-h-[60px] max-h-[200px] pr-12 bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-200"
              rows={1}
            />
            <Button
              className="absolute bottom-2 right-2 h-8 w-8 p-0 bg-chat-accent text-white hover:bg-chat-accent/90 rounded-lg"
              onClick={handleSendMessage}
              disabled={input.trim() === ''}
            >
              <Send size={16} />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
          <div className="text-center text-xs text-gray-500 mt-2">
            ChatGPT can make mistakes. Consider checking important information.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
