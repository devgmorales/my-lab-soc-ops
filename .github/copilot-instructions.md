# Bingo Mixer

Social bingo game for in-person mixers. Players find matches for questions to get 5 in a row.

**Workshop Lab**: This project is a hands-on VS Code Copilot Agent Mode lab. See [`workshop/GUIDE.md`](../workshop/GUIDE.md) for learning objectives and lab structure.

## Tech Stack

- **React 19** with TypeScript
- **Vite** for dev server and build
- **Tailwind CSS v4** (utility-first, `@theme` config in `src/index.css`)
- **Vitest** + Testing Library
- **localStorage** for game state persistence

## Architecture

Simple React SPA:
- `src/components/` — React components (named exports)
- `src/hooks/` — Custom hooks (`useBingoGame` manages game state)
- `src/utils/` — Pure functions (board generation, win detection)
- `src/types/` — TypeScript interfaces (barrel export from `index.ts`)
- `src/data/` — Static data (bingo questions)

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Dev server (Vite)
npm test           # Run tests (Vitest)
npm run build      # Production build
```

## Key Conventions

- See [`.github/instructions/code-style.instructions.md`](.github/instructions/code-style.instructions.md) for naming, file organization, and TypeScript patterns
- See [`.github/instructions/tailwind-4.instructions.md`](.github/instructions/tailwind-4.instructions.md) for Tailwind v4 features
- Contribution guidelines: [`CONTRIBUTING.md`](../CONTRIBUTING.md)

## Deployment

Automatically deploys to GitHub Pages on push to `main` via GitHub Actions.
