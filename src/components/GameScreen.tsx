import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="relative flex flex-col min-h-full overflow-hidden"
         style={{ background: 'var(--gradient-dark-bg)' }}>
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5"
           style={{
             backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.4) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0, 255, 255, 0.4) 1px, transparent 1px)`,
             backgroundSize: '40px 40px',
             animation: 'scanlines 20s linear infinite'
           }} />
      
      {/* Scanlines overlay */}
      <div className="scanlines absolute inset-0 pointer-events-none z-0" />

      {/* HUD Header */}
      <header className="relative flex items-center justify-between p-4 z-10"
              style={{
                background: 'linear-gradient(180deg, rgba(20, 20, 26, 0.95) 0%, rgba(20, 20, 26, 0.8) 100%)',
                borderBottom: '2px solid transparent',
                borderImage: 'linear-gradient(90deg, transparent, var(--color-neon-cyan), transparent) 1',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.6), 0 1px 0 rgba(0, 255, 255, 0.3)'
              }}>
        {/* Back button - chrome with cyan glow */}
        <button
          onClick={onReset}
          className="relative px-4 py-2 rounded font-semibold text-sm overflow-hidden group"
          style={{
            fontFamily: 'var(--font-family-heading)',
            letterSpacing: '0.05em',
            background: 'linear-gradient(135deg, #606060, #909090, #606060)',
            color: 'var(--color-neon-cyan)',
            border: '1px solid rgba(0, 255, 255, 0.3)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            transition: 'all 0.2s ease',
            textShadow: '0 0 8px rgba(0, 255, 255, 0.8)'
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'translateY(1px) scale(0.98)';
            e.currentTarget.style.boxShadow = 'inset 0 2px 6px rgba(0, 0, 0, 0.6), 0 0 15px rgba(0, 255, 255, 0.6)';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.4), 0 0 15px rgba(0, 255, 255, 0.6)';
          }}
        >
          <span className="relative">← BACK</span>
        </button>

        {/* Title - chrome gradient */}
        <h1 className="chrome-text"
            style={{
              fontFamily: 'var(--font-family-heading)',
              fontSize: '1.25rem',
              fontWeight: 900,
              letterSpacing: '0.15em'
            }}>
          BINGO MIXER
        </h1>
        
        {/* Spacer */}
        <div className="w-20"></div>
      </header>

      {/* Instructions with neon glow */}
      <p className="relative text-center py-3 px-4 z-10"
         style={{
           fontFamily: 'var(--font-family-body)',
           fontSize: '0.95rem',
           fontWeight: 500,
           color: 'rgba(232, 232, 232, 0.8)',
           letterSpacing: '0.05em'
         }}>
        <span style={{ color: 'var(--color-neon-cyan)', textShadow: '0 0 10px rgba(0, 255, 255, 0.6)' }}>TAP</span>
        {' '}a square when you find someone who matches it
      </p>

      {/* Bingo indicator - animated neon stripe */}
      {hasBingo && (
        <div className="relative py-3 text-center font-bold overflow-hidden z-10"
             style={{
               fontFamily: 'var(--font-family-heading)',
               fontSize: '1.1rem',
               letterSpacing: '0.2em',
               color: 'var(--color-neon-gold)',
               textShadow: 'var(--shadow-neon-gold)',
               background: 'linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.2), transparent)',
               borderTop: '1px solid var(--color-neon-gold)',
               borderBottom: '1px solid var(--color-neon-gold)',
               boxShadow: '0 0 20px rgba(255, 215, 0, 0.3), inset 0 0 20px rgba(255, 215, 0, 0.1)',
               animation: 'neon-pulse 1.5s ease-in-out infinite'
             }}>
          {/* Animated scanning line */}
          <div className="absolute inset-0 opacity-50"
               style={{
                 background: 'linear-gradient(90deg, transparent, var(--color-neon-gold), transparent)',
                 animation: 'shimmer 2s linear infinite'
               }} />
          <span className="relative">
            🏆 BINGO! YOU GOT A LINE! 🏆
          </span>
        </div>
      )}

      {/* Board container */}
      <div className="relative flex-1 flex items-center justify-center p-4 z-10">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
