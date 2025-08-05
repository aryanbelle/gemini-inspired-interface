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
        marginBottom: '16px',
        paddingLeft: message.isUser ? '48px' : '0',
        paddingRight: message.isUser ? '0' : '48px'
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
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: message.isUser 
              ? `rgb(var(--md-sys-color-primary))` 
              : `rgb(var(--md-sys-color-surface-variant))`,
            color: message.isUser 
              ? `rgb(var(--md-sys-color-on-primary))` 
              : `rgb(var(--md-sys-color-on-surface-variant))`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px'
          }}>
            {message.isUser ? '👤' : '🤖'}
          </div>
          
          <span style={{
            fontSize: '12px',
            color: `rgb(var(--md-sys-color-on-surface-variant))`,
            fontWeight: 500
          }}>
            {message.isUser ? 'You' : 'AI Assistant'}
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
          padding: '16px 20px',
          backgroundColor: message.isUser 
            ? `rgb(var(--chat-user-bg))` 
            : `rgb(var(--chat-ai-bg))`,
          color: message.isUser 
            ? `rgb(var(--chat-user-text))` 
            : `rgb(var(--chat-ai-text))`,
          borderRadius: message.isUser ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
          boxShadow: message.isUser 
            ? 'var(--md-sys-elevation-level2)' 
            : 'var(--md-sys-elevation-level1)',
          border: 'none',
          fontSize: '15px',
          lineHeight: '1.5',
          wordBreak: 'break-word'
        }}>
          {message.content}
        </div>
      </div>
    </div>
  );
};