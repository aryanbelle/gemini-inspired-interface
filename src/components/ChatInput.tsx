import { useState, KeyboardEvent } from 'react';

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
      position: 'sticky',
      bottom: 0,
      backgroundColor: `rgb(var(--md-sys-color-surface))`,
      padding: '16px',
      borderTop: `1px solid rgb(var(--md-sys-color-outline-variant) / 0.3)`,
      backdropFilter: 'blur(8px)'
    }}>
      <div 
        style={{
          padding: '8px',
          backgroundColor: `rgb(var(--md-sys-color-surface-variant) / 0.5)`,
          borderRadius: '28px',
          border: `2px solid transparent`,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: 'var(--md-sys-elevation-level1)'
        }}
        className="input-card"
      >
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: '12px',
          padding: '8px 16px'
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
                fontSize: '16px',
                lineHeight: '1.5',
                resize: 'none',
                fontFamily: 'inherit',
                padding: '12px 16px'
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
                : `rgb(var(--md-sys-color-surface-variant))`,
              color: inputValue.trim()
                ? `rgb(var(--md-sys-color-on-primary))`
                : `rgb(var(--md-sys-color-on-surface-variant))`,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: 'none',
              cursor: inputValue.trim() && !disabled ? 'pointer' : 'default',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: inputValue.trim() ? 'scale(1.05)' : 'scale(1)',
              boxShadow: inputValue.trim() 
                ? 'var(--md-sys-elevation-level3)' 
                : 'var(--md-sys-elevation-level1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px'
            }}
            onClick={handleSend}
          >
            ➤
          </button>
        </div>
      </div>

      {/* Input Suggestions */}
      <div style={{
        display: 'flex',
        gap: '8px',
        marginTop: '12px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {['What can you help me with?', 'Tell me a joke', 'Explain quantum computing'].map((suggestion, index) => (
          <button
            key={index}
            style={{
              backgroundColor: `rgb(var(--md-sys-color-surface-variant) / 0.7)`,
              color: `rgb(var(--md-sys-color-on-surface-variant))`,
              fontSize: '13px',
              border: 'none',
              borderRadius: '20px',
              padding: '8px 16px',
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
                e.currentTarget.style.backgroundColor = `rgb(var(--md-sys-color-surface-variant))`;
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = `rgb(var(--md-sys-color-surface-variant) / 0.7)`;
            }}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};