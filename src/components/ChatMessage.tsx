import { User, Bot } from 'lucide-react';
import { Message } from './ChatInterface';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const formatTime = (timestamp: Date) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div 
      className="message-enter"
      style={{
        display: 'flex',
        justifyContent: message.isUser ? 'flex-end' : 'flex-start',
        marginBottom: '24px',
        paddingLeft: message.isUser ? '64px' : '0',
        paddingRight: message.isUser ? '0' : '64px'
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: message.isUser ? 'flex-end' : 'flex-start',
        maxWidth: '70%'
      }}>
        {/* Avatar and Name */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '8px',
          flexDirection: message.isUser ? 'row-reverse' : 'row'
        }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '14px',
            backgroundColor: message.isUser 
              ? `rgb(var(--md-sys-color-primary))` 
              : `rgb(var(--md-sys-color-surface-container))`,
            color: message.isUser 
              ? `rgb(var(--md-sys-color-on-primary))` 
              : `rgb(var(--md-sys-color-on-surface-variant))`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {message.isUser ? <User size={16} /> : <Bot size={16} />}
          </div>
          
          <span style={{
            fontSize: '12px',
            color: `rgb(var(--md-sys-color-on-surface-variant))`,
            fontWeight: 500
          }}>
            {message.isUser ? 'You' : 'Gemini'}
          </span>
          
          <span style={{
            fontSize: '11px',
            color: `rgb(var(--md-sys-color-outline))`,
            opacity: 0.7
          }}>
            {formatTime(message.timestamp)}
          </span>
        </div>

        {/* Message Bubble */}
        <div style={{
          padding: '12px 16px',
          backgroundColor: message.isUser 
            ? `rgb(var(--chat-user-bg))` 
            : `rgb(var(--chat-ai-bg))`,
          color: message.isUser 
            ? `rgb(var(--chat-user-text))` 
            : `rgb(var(--chat-ai-text))`,
          borderRadius: '18px',
          boxShadow: 'var(--elevation-1)',
          fontSize: '14px',
          lineHeight: '1.5',
          wordBreak: 'break-word'
        }}>
          {message.content}
        </div>
      </div>
    </div>
  );
};