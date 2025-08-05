import { useEffect } from 'react';
import { ChatInterface } from '../components/ChatInterface';


const Index = () => {
  useEffect(() => {
    // Initialize MDUI theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    document.documentElement.setAttribute('theme', theme);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: `rgb(var(--md-sys-color-background))`,
      color: `rgb(var(--md-sys-color-on-background))`,
      fontFamily: '"Google Sans", "Roboto", -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      <ChatInterface />
    </div>
  );
};

export default Index;
