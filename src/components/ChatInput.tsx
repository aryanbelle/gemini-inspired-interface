import { useState, KeyboardEvent } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSendMessage, disabled = false }: ChatInputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim() && !disabled) {
      onSendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div style={{
      backgroundColor: `rgb(var(--md-sys-color-surface))`,
      borderTop: `1px solid rgb(var(--md-sys-color-outline-variant))`,
      padding: '16px 24px 24px'
    }}>
      <div 
        style={{
          padding: '12px',
          backgroundColor: `rgb(var(--md-sys-color-surface-container-low))`,
          borderRadius: '24px',
          border: `1px solid rgb(var(--md-sys-color-outline-variant))`,
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: 'var(--elevation-1)'
        }}
        className="input-card"
      >
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: '8px'
        }}>
          {/* Input Field */}
          <div style={{ flex: 1 }}>
            <textarea
              placeholder="Message AI Assistant..."
              value={inputValue}
              disabled={disabled}
              rows={1}
              style={{
                width: '100%',
                border: 'none',
                outline: 'none',
                backgroundColor: 'transparent',
                color: `rgb(var(--md-sys-color-on-surface))`,
                fontSize: '14px',
                lineHeight: '1.4',
                resize: 'none',
                fontFamily: 'inherit',
                padding: '8px 12px'
              }}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>

          {/* Send Button */}
          <button
            disabled={!inputValue.trim() || disabled}
            style={{
              backgroundColor: inputValue.trim() 
                ? `rgb(var(--md-sys-color-primary))` 
                : `rgb(var(--md-sys-color-surface-container))`,
              color: inputValue.trim()
                ? `rgb(var(--md-sys-color-on-primary))`
                : `rgb(var(--md-sys-color-on-surface-variant))`,
              width: '36px',
              height: '36px',
              borderRadius: '18px',
              border: 'none',
              cursor: inputValue.trim() && !disabled ? 'pointer' : 'default',
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: inputValue.trim() ? 'var(--elevation-2)' : 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={handleSend}
          >
            <Send size={16} />
          </button>
        </div>
      </div>

      {/* Quick Suggestions */}
      <div style={{
        display: 'flex',
        gap: '8px',
        marginTop: '12px',
        flexWrap: 'wrap'
      }}>
        {['What can you help me with?', 'Tell me a joke', 'Explain quantum computing'].map((suggestion, index) => (
          <button
            key={index}
            style={{
              backgroundColor: `rgb(var(--md-sys-color-surface-container))`,
              color: `rgb(var(--md-sys-color-on-surface-variant))`,
              fontSize: '12px',
              border: 'none',
              borderRadius: '16px',
              padding: '6px 12px',
              cursor: disabled ? 'default' : 'pointer',
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: disabled ? 0.5 : 1
            }}
            onClick={() => {
              if (!disabled) {
                setInputValue(suggestion);
              }
            }}
            onMouseEnter={(e) => {
              if (!disabled) {
                e.currentTarget.style.backgroundColor = `rgb(var(--md-sys-color-primary) / 0.1)`;
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = `rgb(var(--md-sys-color-surface-container))`;
            }}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};