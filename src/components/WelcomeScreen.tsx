export const WelcomeScreen = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      padding: '32px'
    }}>
      {/* Google-style gradient logo */}
      <div style={{
        width: '80px',
        height: '80px',
        background: 'linear-gradient(135deg, #4285F4, #34A853, #FBBC05, #EA4335)',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '32px',
        marginBottom: '24px',
        boxShadow: 'var(--md-sys-elevation-level3)',
        animation: 'pulseGlow 3s ease-in-out infinite'
      }}>
        ✨
      </div>

      <h1 style={{
        fontSize: '48px',
        fontWeight: 400,
        color: `rgb(var(--md-sys-color-on-surface))`,
        marginBottom: '16px',
        fontFamily: '"Google Sans", sans-serif'
      }}>
        Hello
      </h1>

      <p style={{
        fontSize: '18px',
        color: `rgb(var(--md-sys-color-on-surface-variant))`,
        marginBottom: '32px',
        maxWidth: '600px',
        lineHeight: '1.6'
      }}>
        I'm Gemini, your helpful AI assistant. I can help you with questions, 
        creative tasks, analysis, and much more. What would you like to explore today?
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px',
        maxWidth: '800px',
        width: '100%'
      }}>
        {[
          {
            icon: '💡',
            title: 'Creative Writing',
            desc: 'Help with stories, poems, and creative content'
          },
          {
            icon: '🔍',
            title: 'Research & Analysis',
            desc: 'Deep dive into topics and analyze information'
          },
          {
            icon: '💻',
            title: 'Code & Development',
            desc: 'Programming help and technical solutions'
          },
          {
            icon: '🎯',
            title: 'Problem Solving',
            desc: 'Break down complex problems step by step'
          }
        ].map((item, index) => (
          <div
            key={index}
            style={{
              padding: '24px',
              backgroundColor: `rgb(var(--md-sys-color-surface-variant) / 0.3)`,
              borderRadius: '16px',
              border: `1px solid rgb(var(--md-sys-color-outline-variant) / 0.5)`,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = 'var(--md-sys-elevation-level2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{
              fontSize: '24px',
              marginBottom: '12px'
            }}>
              {item.icon}
            </div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 500,
              color: `rgb(var(--md-sys-color-on-surface))`,
              marginBottom: '8px',
              margin: 0
            }}>
              {item.title}
            </h3>
            <p style={{
              fontSize: '14px',
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