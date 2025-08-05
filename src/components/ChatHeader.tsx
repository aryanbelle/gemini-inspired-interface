import { useState, useEffect } from 'react';

export const ChatHeader = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    setTheme(initialTheme);
    document.documentElement.setAttribute('theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div style={{
      backgroundColor: `rgb(var(--md-sys-color-surface))`,
      borderBottom: `1px solid rgb(var(--md-sys-color-outline-variant) / 0.3)`,
      backdropFilter: 'blur(8px)',
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '80px'
    }}>
      {/* Logo and Title */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flex: 1
      }}>
        <div style={{
          width: '32px',
          height: '32px',
          background: 'linear-gradient(135deg, #4285F4, #34A853, #FBBC05, #EA4335)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px'
        }}>
          ✨
        </div>
        
        <div>
          <div style={{
            fontSize: '20px',
            fontWeight: 500,
            color: `rgb(var(--md-sys-color-on-surface))`,
            fontFamily: '"Google Sans", "Roboto", sans-serif'
          }}>
            Gemini
          </div>
          <div style={{
            fontSize: '12px',
            color: `rgb(var(--md-sys-color-on-surface-variant))`,
            opacity: 0.8
          }}>
            AI Assistant
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        {/* Status Indicator */}
        <div style={{
          backgroundColor: `rgb(34 197 94 / 0.1)`,
          color: `rgb(34 197 94)`,
          fontSize: '11px',
          fontWeight: 500,
          padding: '4px 8px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <div style={{ 
            width: '8px',
            height: '8px',
            backgroundColor: 'rgb(34 197 94)',
            borderRadius: '50%'
          }} />
          Online
        </div>

        {/* Theme Toggle */}
        <button 
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: `rgb(var(--md-sys-color-on-surface-variant))`,
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            transition: 'background-color 0.2s'
          }}
          onClick={toggleTheme}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = `rgb(var(--md-sys-color-surface-variant) / 0.5)`}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        {/* More Options */}
        <button 
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: `rgb(var(--md-sys-color-on-surface-variant))`,
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = `rgb(var(--md-sys-color-surface-variant) / 0.5)`}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          ⋮
        </button>
      </div>
    </div>
  );
};