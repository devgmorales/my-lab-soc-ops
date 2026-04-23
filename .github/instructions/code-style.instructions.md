---
description: "Code style and naming conventions for all TypeScript and React files. Read before writing or modifying any .ts or .tsx file."
applyTo: "**/*.{ts,tsx}"
---

# Code Style & Naming Conventions

These are **hard rules** — always enforce them when writing or modifying code.

## File Naming

- **Components**: PascalCase `.tsx` — `BingoBoard.tsx`, `GameScreen.tsx`
- **Hooks**: camelCase with `use` prefix `.ts` — `useBingoGame.ts`
- **Utilities**: camelCase `.ts` — `bingoLogic.ts`
- **Tests**: co-located with source, `.test.ts` suffix — `bingoLogic.test.ts`
- **Types**: barrel-export from `index.ts` in `src/types/`

## Components

- Named exports: `export function ComponentName() {}`
- Props interface named `ComponentNameProps`, defined in the same file
- Only `App` uses default export

```tsx
interface GameScreenProps {
  board: BingoSquareData[];
  onReset: () => void;
}

export function GameScreen({ board, onReset }: GameScreenProps) {
  return <div>...</div>;
}
```

## Functions

- Exported functions: function declarations (`export function name()`)
- Private helpers: function declarations without export
- Inline callbacks: arrow functions
- camelCase, verb-based names: `generateBoard`, `toggleSquare`, `handleSquareClick`
- Always annotate explicit return types on exported functions and hooks

## Variables & Constants

- camelCase for variables and state
- UPPER_SNAKE_CASE for module-level constants: `BOARD_SIZE`, `STORAGE_KEY`
- Event handler props: `on` prefix — `onStart`, `onSquareClick`

## Types & Interfaces

- No prefix (no `I`, `T`, or similar)
- Plain descriptive names: `BingoSquareData`, `GameState`, `BingoLine`
- Union types for finite states: `type GameState = 'start' | 'playing' | 'bingo'`
- Use `import type` for type-only imports

## Import Order

1. React imports
2. Type imports (with `type` keyword)
3. Local imports (utils, components, data)

```ts
import { useState, useCallback } from 'react';
import type { BingoSquareData } from '../types';
import { generateBoard } from '../utils/bingoLogic';
```

## Styling

- Tailwind CSS v4 utility classes inline in JSX — no CSS modules
- Custom theme tokens via `@theme` in `src/index.css`
- Reference custom colors as utilities: `bg-accent`, `bg-marked`

## Testing

- Vitest with `describe` / `it` blocks
- Descriptive test names that state expected behavior
- Co-locate test files next to source
