import { useState, useEffect } from 'react';
import { Sparkles, Moon, Sun, MoreVertical } from 'lucide-react';

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
      borderBottom: `1px solid rgb(var(--md-sys-color-outline-variant))`,
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '72px'
    }}>
      {/* Logo and Title */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flex: 1
      }}>
        <div style={{
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '12px'
        }}>
          <Sparkles 
            size={24} 
            color={`rgb(var(--md-sys-color-primary))`}
          />
        </div>
        
        <div>
          <div style={{
            fontSize: '18px',
            fontWeight: 500,
            color: `rgb(var(--md-sys-color-on-surface))`,
            fontFamily: '"Google Sans", sans-serif'
          }}>
            Gemini
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        {/* Theme Toggle */}
        <button 
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: `rgb(var(--md-sys-color-on-surface-variant))`,
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '20px',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.2s ease'
          }}
          onClick={toggleTheme}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = `rgb(var(--md-sys-color-surface-variant) / 0.4)`}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {/* More Options */}
        <button 
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: `rgb(var(--md-sys-color-on-surface-variant))`,
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '20px',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = `rgb(var(--md-sys-color-surface-variant) / 0.4)`}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <MoreVertical size={20} />
        </button>
      </div>
    </div>
  );
};