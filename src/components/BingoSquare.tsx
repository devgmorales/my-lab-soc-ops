import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  // Determine the visual state
  const getSquareStyle = () => {
    // Winning state (marked + in winning line)
    if (square.isMarked && isWinning) {
      return {
        background: 'linear-gradient(135deg, #c0c0c0, #ffd700, #ffffff, #ffd700, #c0c0c0)',
        backgroundSize: '200% 200%',
        border: '2px solid var(--color-neon-gold)',
        color: '#0a0a0f',
        boxShadow: `
          var(--shadow-chrome-inset),
          0 0 20px rgba(255, 215, 0, 0.8),
          0 0 40px rgba(255, 215, 0, 0.4),
          inset 0 0 20px rgba(255, 215, 0, 0.2)
        `,
        animation: 'chrome-shift 3s ease-in-out infinite, neon-pulse 2s ease-in-out infinite',
        fontWeight: 700,
        textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
      };
    }
    
    // Marked state (not winning yet)
    if (square.isMarked) {
      return {
        background: 'linear-gradient(135deg, #909090, #c0c0c0, #ffffff, #c0c0c0, #909090)',
        backgroundSize: '200% 200%',
        border: '2px solid var(--color-neon-cyan)',
        color: '#0a0a0f',
        boxShadow: `
          var(--shadow-chrome-inset),
          0 0 15px rgba(0, 255, 255, 0.6),
          0 0 30px rgba(0, 255, 255, 0.3)
        `,
        animation: 'chrome-shift 4s ease-in-out infinite',
        fontWeight: 600,
        textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
      };
    }
    
    // Free space (unmarked)
    if (square.isFreeSpace) {
      return {
        background: 'linear-gradient(135deg, #1a1a24, #242430, #1a1a24)',
        border: '2px solid rgba(192, 192, 192, 0.4)',
        color: 'var(--color-chrome-light)',
        boxShadow: `
          inset 0 0 20px rgba(0, 255, 255, 0.1),
          0 2px 8px rgba(0, 0, 0, 0.6)
        `,
        fontWeight: 900,
        fontSize: '0.9rem',
        letterSpacing: '0.1em',
        textShadow: '0 0 10px rgba(0, 255, 255, 0.5), 0 2px 4px rgba(0, 0, 0, 0.8)',
        animation: 'hologram-flicker 3s ease-in-out infinite',
        opacity: 0.8
      };
    }
    
    // Unmarked state (default)
    return {
      background: 'linear-gradient(135deg, #1a1a24, #242430)',
      border: '1px solid rgba(96, 96, 96, 0.6)',
      color: 'rgba(232, 232, 232, 0.9)',
      boxShadow: `
        inset 0 1px 2px rgba(0, 0, 0, 0.4),
        0 2px 4px rgba(0, 0, 0, 0.5)
      `,
      fontWeight: 500
    };
  };

  const squareStyle = getSquareStyle();

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className="relative flex items-center justify-center p-2 text-center rounded select-none min-h-[60px] text-xs leading-tight overflow-hidden"
      style={{
        ...squareStyle,
        fontFamily: 'var(--font-family-body)',
        transition: 'all 0.3s ease',
        transform: 'perspective(100px) rotateX(0deg)',
        cursor: square.isFreeSpace ? 'default' : 'pointer'
      }}
      onMouseDown={(e) => {
        if (!square.isFreeSpace) {
          e.currentTarget.style.transform = 'perspective(100px) rotateX(2deg) scale(0.95)';
        }
      }}
      onMouseUp={(e) => {
        if (!square.isFreeSpace) {
          e.currentTarget.style.transform = 'perspective(100px) rotateX(0deg) scale(1)';
        }
      }}
      onMouseEnter={(e) => {
        if (!square.isFreeSpace && !square.isMarked) {
          e.currentTarget.style.boxShadow = `
            inset 0 1px 2px rgba(0, 0, 0, 0.4),
            0 2px 4px rgba(0, 0, 0, 0.5),
            0 0 15px rgba(0, 255, 255, 0.3)
          `;
          e.currentTarget.style.borderColor = 'rgba(0, 255, 255, 0.4)';
        }
      }}
      onMouseLeave={(e) => {
        if (!square.isFreeSpace && !square.isMarked) {
          e.currentTarget.style.boxShadow = `
            inset 0 1px 2px rgba(0, 0, 0, 0.4),
            0 2px 4px rgba(0, 0, 0, 0.5)
          `;
          e.currentTarget.style.borderColor = 'rgba(96, 96, 96, 0.6)';
        }
      }}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      {/* Text content */}
      <span className="relative z-10 wrap-break-word hyphens-auto">
        {square.text}
      </span>
      
      {/* Checkmark with magenta glow for marked squares */}
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-base font-bold z-20"
              style={{
                color: isWinning ? 'var(--color-neon-gold)' : 'var(--color-neon-magenta)',
                textShadow: isWinning 
                  ? '0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.5)'
                  : '0 0 10px rgba(255, 0, 255, 0.8), 0 0 20px rgba(255, 0, 255, 0.5)',
                animation: 'neon-pulse 1.5s ease-in-out infinite'
              }}>
          ✓
        </span>
      )}
      
      {/* Shimmer overlay for marked squares */}
      {square.isMarked && (
        <div className="absolute inset-0 pointer-events-none"
             style={{
               background: 'linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
               backgroundSize: '200% 100%',
               animation: 'shimmer 3s linear infinite',
               mixBlendMode: 'overlay'
             }} />
      )}
    </button>
  );
}
