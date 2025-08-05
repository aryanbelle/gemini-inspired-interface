import { useState, useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { ChatHeader } from './ChatHeader';
import { WelcomeScreen } from './WelcomeScreen';

export interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Thank you for your message! This is a demo response. In a real implementation, this would be connected to an AI service.',
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="chat-interface">
      <ChatHeader />
      
      <div style={{
        height: 'calc(100vh - 72px)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Messages Container */}
        <div 
          className="chat-container"
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '24px',
            scrollBehavior: 'smooth'
          }}
        >
          {messages.length === 0 ? (
            <WelcomeScreen />
          ) : (
            <>
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              
              {isTyping && (
                <div className="typing-indicator" style={{ padding: '16px 0' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 20px',
                    backgroundColor: `rgb(var(--chat-ai-bg))`,
                    borderRadius: '20px',
                    maxWidth: '200px',
                    boxShadow: 'var(--md-sys-elevation-level1)'
                  }}>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <div 
                        className="typing-dot"
                        style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: `rgb(var(--md-sys-color-primary))`,
                          borderRadius: '50%'
                        }}
                      />
                      <div 
                        className="typing-dot"
                        style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: `rgb(var(--md-sys-color-primary))`,
                          borderRadius: '50%'
                        }}
                      />
                      <div 
                        className="typing-dot"
                        style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: `rgb(var(--md-sys-color-primary))`,
                          borderRadius: '50%'
                        }}
                      />
                    </div>
                    <span style={{ 
                      fontSize: '14px', 
                      color: `rgb(var(--chat-ai-text))`,
                      opacity: 0.7 
                    }}>
                      AI is typing...
                    </span>
                  </div>
                </div>
              )}
            </>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input Container */}
        <div style={{ marginTop: 'auto' }}>
          <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
        </div>
      </div>
    </div>
  );
};