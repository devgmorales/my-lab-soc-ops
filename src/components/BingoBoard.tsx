import type { BingoSquareData } from '../types';
import { BingoSquare } from './BingoSquare';

interface BingoBoardProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  onSquareClick: (squareId: number) => void;
}

export function BingoBoard({ board, winningSquareIds, onSquareClick }: BingoBoardProps) {
  const hasBingo = winningSquareIds.size > 0;
  
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Outer chrome frame with 3D effect */}
      <div className="relative p-1 rounded-lg"
           style={{
             background: 'linear-gradient(135deg, #909090, #c0c0c0, #909090)',
             boxShadow: `
               0 8px 24px rgba(0, 0, 0, 0.8),
               0 4px 12px rgba(0, 0, 0, 0.6),
               inset 0 2px 4px rgba(255, 255, 255, 0.2),
               inset 0 -2px 4px rgba(0, 0, 0, 0.4)
               ${hasBingo ? ', 0 0 40px rgba(255, 215, 0, 0.6), 0 0 80px rgba(255, 215, 0, 0.3)' : ''}
             `,
             transition: 'box-shadow 0.5s ease'
           }}>
        
        {/* Inner container with neon grid glow */}
        <div className="relative p-2 rounded"
             style={{
               background: 'rgba(10, 10, 15, 0.95)',
               boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.8)'
             }}>
          
          {/* Grid with neon glow between cells */}
          <div className="grid grid-cols-5 aspect-square"
               style={{
                 gap: '6px',
                 background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.15), rgba(0, 255, 255, 0.05))',
                 padding: '4px',
                 borderRadius: '4px'
               }}>
            {board.map((square) => (
              <BingoSquare
                key={square.id}
                square={square}
                isWinning={winningSquareIds.has(square.id)}
                onClick={() => onSquareClick(square.id)}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Animated pulsing glow when bingo achieved */}
      {hasBingo && (
        <div className="absolute inset-0 rounded-lg pointer-events-none"
             style={{
               background: 'radial-gradient(circle at center, rgba(255, 215, 0, 0.2), transparent 70%)',
               animation: 'neon-pulse 2s ease-in-out infinite',
               filter: 'blur(20px)'
             }} />
      )}
    </div>
  );
}
