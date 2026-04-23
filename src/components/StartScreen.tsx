interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-full p-6 scanlines overflow-hidden"
         style={{ 
           background: 'radial-gradient(ellipse at top, #14141a 0%, #0a0a0f 100%)'
         }}>
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10"
           style={{
             backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }} />
      
      <div className="relative text-center max-w-sm z-10">
        {/* Chrome gradient animated title */}
        <h1 className="chrome-text mb-2"
            style={{
              fontFamily: 'var(--font-family-heading)',
              fontSize: '3.5rem',
              fontWeight: 900,
              letterSpacing: '0.05em',
              textShadow: '0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3)',
              lineHeight: '1.1'
            }}>
          BINGO<br/>MIXER
        </h1>
        
        <p className="text-lg mb-8"
           style={{
             color: 'var(--color-neon-cyan)',
             fontFamily: 'var(--font-family-heading)',
             fontWeight: 400,
             letterSpacing: '0.15em',
             textShadow: '0 0 10px rgba(0, 255, 255, 0.6)',
             animation: 'neon-pulse 2s ease-in-out infinite'
           }}>
          FIND YOUR PEOPLE
        </p>
        
        {/* Glass morphism card with neon pulse ring */}
        <div className="relative mb-8">
          {/* Pulsing neon ring */}
          <div className="absolute inset-0 rounded-xl opacity-60"
               style={{
                 background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
                 filter: 'blur(12px)',
                 animation: 'neon-pulse-glow 3s ease-in-out infinite',
                 transform: 'scale(1.02)'
               }} />
          
          {/* Glass card */}
          <div className="glass-morph rounded-xl p-6 relative"
               style={{
                 borderImage: 'linear-gradient(135deg, rgba(0, 255, 255, 0.6), rgba(255, 0, 255, 0.6)) 1',
                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
               }}>
            <h2 className="font-bold mb-4"
                style={{
                  fontFamily: 'var(--font-family-heading)',
                  fontSize: '1.25rem',
                  color: 'var(--color-chrome-light)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}>
              How to Play
            </h2>
            <ul className="text-left space-y-3"
                style={{
                  fontFamily: 'var(--font-family-body)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'rgba(232, 232, 232, 0.9)'
                }}>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: 'var(--color-neon-cyan)' }}>▸</span>
                <span>Find people who match the questions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: 'var(--color-neon-cyan)' }}>▸</span>
                <span>Tap a square when you find a match</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: 'var(--color-neon-cyan)' }}>▸</span>
                <span>Get 5 in a row to win!</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3D Chrome button with neon glow */}
        <button
          onClick={onStart}
          className="relative w-full font-bold py-5 px-8 rounded-lg text-lg overflow-hidden group"
          style={{
            fontFamily: 'var(--font-family-heading)',
            letterSpacing: '0.1em',
            background: 'linear-gradient(135deg, #c0c0c0 0%, #ffffff 50%, #c0c0c0 100%)',
            backgroundSize: '200% auto',
            color: '#0a0a0f',
            boxShadow: 'var(--shadow-chrome-3d), 0 0 20px rgba(0, 255, 255, 0.4)',
            transition: 'all 0.3s ease',
            textShadow: '0 1px 0 rgba(255, 255, 255, 0.5)'
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'translateY(2px) scale(0.98)';
            e.currentTarget.style.boxShadow = 'inset 0 4px 8px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 255, 255, 0.6)';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'var(--shadow-chrome-3d), 0 0 20px rgba(0, 255, 255, 0.4)';
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundPosition = '100% center';
            e.currentTarget.style.boxShadow = 'var(--shadow-chrome-3d), 0 0 30px rgba(0, 255, 255, 0.6), 0 0 50px rgba(0, 255, 255, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundPosition = '0% center';
            e.currentTarget.style.boxShadow = 'var(--shadow-chrome-3d), 0 0 20px rgba(0, 255, 255, 0.4)';
          }}
        >
          {/* Neon glow overlay on hover */}
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.3), transparent 70%)'
                }} />
          <span className="relative">START GAME</span>
        </button>
      </div>
    </div>
  );
}
