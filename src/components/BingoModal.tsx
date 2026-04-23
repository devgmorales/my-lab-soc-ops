interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-50"
         style={{
           background: 'radial-gradient(ellipse at center, rgba(255, 215, 0, 0.15), rgba(10, 10, 15, 0.95))',
           backdropFilter: 'blur(8px)'
         }}>
      {/* Animated scanlines */}
      <div className="scanlines absolute inset-0 pointer-events-none" />
      
      {/* Neon explosion rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute rounded-full"
             style={{
               width: '300px',
               height: '300px',
               border: '2px solid var(--color-neon-cyan)',
               boxShadow: '0 0 40px rgba(0, 255, 255, 0.6)',
               animation: 'neon-pulse 2s ease-in-out infinite'
             }} />
        <div className="absolute rounded-full"
             style={{
               width: '400px',
               height: '400px',
               border: '2px solid var(--color-neon-magenta)',
               boxShadow: '0 0 40px rgba(255, 0, 255, 0.6)',
               animation: 'neon-pulse 2s ease-in-out infinite 0.5s',
               opacity: 0.6
             }} />
        <div className="absolute rounded-full"
             style={{
               width: '500px',
               height: '500px',
               border: '2px solid var(--color-neon-gold)',
               boxShadow: '0 0 40px rgba(255, 215, 0, 0.6)',
               animation: 'neon-pulse 2s ease-in-out infinite 1s',
               opacity: 0.4
             }} />
      </div>

      {/* Victory card */}
      <div className="relative max-w-sm w-full text-center"
           style={{
             animation: 'slide-in-up 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
           }}>
        {/* Chrome border glow */}
        <div className="absolute inset-0 rounded-2xl opacity-80"
             style={{
               background: 'linear-gradient(135deg, var(--color-neon-cyan), var(--color-neon-magenta), var(--color-neon-gold))',
               filter: 'blur(20px)',
               animation: 'neon-border-rotate 6s linear infinite'
             }} />
        
        {/* Glass morphism card */}
        <div className="glass-morph rounded-2xl p-8 relative"
             style={{
               border: '2px solid transparent',
               borderImage: 'linear-gradient(135deg, rgba(192, 192, 192, 0.6), rgba(255, 255, 255, 0.8), rgba(192, 192, 192, 0.6)) 1',
               boxShadow: `
                 0 20px 60px rgba(0, 0, 0, 0.8),
                 0 0 40px rgba(255, 215, 0, 0.3),
                 inset 0 1px 0 rgba(255, 255, 255, 0.2)
               `
             }}>
          
          {/* Chrome gradient "BINGO" text */}
          <div className="mb-6"
               style={{
                 animation: 'neon-pulse 1.5s ease-in-out infinite'
               }}>
            <h2 className="chrome-text mb-2"
                style={{
                  fontFamily: 'var(--font-family-heading)',
                  fontSize: '4rem',
                  fontWeight: 900,
                  letterSpacing: '0.2em',
                  lineHeight: '1',
                  textShadow: `
                    0 0 20px rgba(255, 215, 0, 0.8),
                    0 0 40px rgba(255, 215, 0, 0.5),
                    0 0 60px rgba(255, 215, 0, 0.3)
                  `
                }}>
              BINGO!
            </h2>
            
            {/* Decorative stars */}
            <div className="flex justify-center gap-4 text-3xl"
                 style={{
                   color: 'var(--color-neon-gold)',
                   textShadow: 'var(--shadow-neon-gold)',
                   animation: 'neon-pulse 2s ease-in-out infinite'
                 }}>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>

          <p className="mb-8 text-lg"
             style={{
               fontFamily: 'var(--font-family-body)',
               fontWeight: 600,
               color: 'rgba(232, 232, 232, 0.9)',
               letterSpacing: '0.1em'
             }}>
            <span style={{ 
              color: 'var(--color-neon-cyan)',
              textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
            }}>
              YOU COMPLETED A LINE!
            </span>
          </p>
          
          {/* Holographic chrome button */}
          <button
            onClick={onDismiss}
            className="relative w-full font-bold py-4 px-8 rounded-lg text-lg overflow-hidden group"
            style={{
              fontFamily: 'var(--font-family-heading)',
              letterSpacing: '0.1em',
              background: 'linear-gradient(135deg, #909090, #c0c0c0, #ffffff, #c0c0c0, #909090)',
              backgroundSize: '200% auto',
              color: '#0a0a0f',
              border: '2px solid rgba(0, 255, 255, 0.5)',
              boxShadow: `
                var(--shadow-chrome-3d),
                0 0 20px rgba(0, 255, 255, 0.5)
              `,
              transition: 'all 0.3s ease',
              textShadow: '0 1px 0 rgba(255, 255, 255, 0.5)',
              animation: 'chrome-shift 4s ease-in-out infinite'
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'translateY(2px) scale(0.98)';
              e.currentTarget.style.boxShadow = `
                inset 0 4px 8px rgba(0, 0, 0, 0.5),
                0 0 30px rgba(0, 255, 255, 0.7)
              `;
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = `
                var(--shadow-chrome-3d),
                0 0 20px rgba(0, 255, 255, 0.5)
              `;
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `
                var(--shadow-chrome-3d),
                0 0 30px rgba(0, 255, 255, 0.7),
                0 0 50px rgba(255, 0, 255, 0.4)
              `;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `
                var(--shadow-chrome-3d),
                0 0 20px rgba(0, 255, 255, 0.5)
              `;
            }}
          >
            {/* Shimmer overlay */}
            <span className="absolute inset-0 opacity-50"
                  style={{
                    background: 'linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.5) 50%, transparent 70%)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 3s linear infinite',
                    mixBlendMode: 'overlay'
                  }} />
            <span className="relative">KEEP PLAYING</span>
          </button>
        </div>
      </div>
    </div>
  );
}
