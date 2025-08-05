import { Lightbulb, Search, Code, Target } from 'lucide-react';

export const WelcomeScreen = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '65vh',
      textAlign: 'center',
      padding: '48px 24px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      {/* Modern Gemini Logo */}
      <div style={{
        width: '48px',
        height: '48px',
        backgroundColor: `rgb(var(--md-sys-color-primary))`,
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '32px',
        boxShadow: 'var(--elevation-2)'
      }}>
        <div style={{
          width: '24px',
          height: '24px',
          backgroundColor: `rgb(var(--md-sys-color-on-primary))`,
          borderRadius: '50%'
        }} />
      </div>

      <h1 style={{
        fontSize: '32px',
        fontWeight: 400,
        color: `rgb(var(--md-sys-color-on-surface))`,
        marginBottom: '12px',
        fontFamily: '"Google Sans", sans-serif',
        letterSpacing: '-0.5px'
      }}>
        Hello
      </h1>

      <p style={{
        fontSize: '16px',
        color: `rgb(var(--md-sys-color-on-surface-variant))`,
        marginBottom: '40px',
        maxWidth: '480px',
        lineHeight: '1.5'
      }}>
        I'm Gemini, a helpful AI assistant. I can help with questions, analysis, creative tasks, and more.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '12px',
        maxWidth: '640px',
        width: '100%'
      }}>
        {[
          {
            icon: Lightbulb,
            title: 'Creative Writing',
            desc: 'Help with stories, poems, and creative content'
          },
          {
            icon: Search,
            title: 'Research & Analysis',
            desc: 'Deep dive into topics and analyze information'
          },
          {
            icon: Code,
            title: 'Code & Development',
            desc: 'Programming help and technical solutions'
          },
          {
            icon: Target,
            title: 'Problem Solving',
            desc: 'Break down complex problems step by step'
          }
        ].map((item, index) => (
          <div
            key={index}
            style={{
              padding: '20px',
              backgroundColor: `rgb(var(--md-sys-color-surface-container-low))`,
              borderRadius: '12px',
              border: `1px solid rgb(var(--md-sys-color-outline-variant))`,
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `rgb(var(--md-sys-color-surface-container))`;
              e.currentTarget.style.boxShadow = 'var(--elevation-1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = `rgb(var(--md-sys-color-surface-container-low))`;
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{
              marginBottom: '12px',
              color: `rgb(var(--md-sys-color-primary))`
            }}>
              <item.icon size={20} />
            </div>
            <h3 style={{
              fontSize: '14px',
              fontWeight: 500,
              color: `rgb(var(--md-sys-color-on-surface))`,
              marginBottom: '4px',
              margin: 0
            }}>
              {item.title}
            </h3>
            <p style={{
              fontSize: '13px',
              color: `rgb(var(--md-sys-color-on-surface-variant))`,
              lineHeight: '1.4',
              margin: 0
            }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};