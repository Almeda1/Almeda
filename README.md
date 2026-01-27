# React + Vite + TypeScript Template
### Bishop-X's Production-Ready Frontend Template

A production-ready React template with Vite, TypeScript, testing, and modern development tools.

## Features

✅ **React 19** with TypeScript  
✅ **Vite 7** for lightning-fast HMR  
✅ **Vitest** + React Testing Library for unit tests  
✅ **ESLint** + **Prettier** for code quality  
✅ **React Router** for routing  
✅ **Path aliases** configured (`@components`, `@hooks`, `@utils`, etc.)  
✅ **Example components** with tests  
✅ **Custom hooks** (useLocalStorage, useWindowSize)  
✅ **Utility functions** with tests  
✅ **Environment variables** support  

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run typecheck` | Run TypeScript type checking |
| `npm test` | Run tests in watch mode |
| `npm run test:ui` | Open Vitest UI |
| `npm run test:coverage` | Generate test coverage report |

## Project Structure

```
src/
├── assets/          # Images, fonts, static files
├── components/      # Reusable React components
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.module.css
│   │   ├── Button.test.tsx
│   │   └── index.ts
│   └── index.ts
├── hooks/           # Custom React hooks
│   ├── useLocalStorage.ts
│   ├── useWindowSize.ts
│   └── index.ts
├── types/           # TypeScript type definitions
│   └── index.ts
├── utils/           # Utility functions
│   ├── helpers.ts
│   ├── helpers.test.ts
│   └── index.ts
├── test/            # Test setup
│   └── setup.ts
├── App.tsx
├── App.css
├── main.tsx
└── index.css
```

## Path Aliases

Import using clean aliases instead of relative paths:

```tsx
// Instead of: import { Button } from '../../components/Button'
import { Button } from '@components';

// Available aliases:
import { useLocalStorage } from '@hooks';
import { formatDate } from '@utils/helpers';
import type { User } from '@types';
import logo from '@assets/logo.svg';
```

## Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Add your variables (prefix with `VITE_`):
   ```env
   VITE_API_URL=https://api.example.com
   VITE_APP_NAME=My App
   ```

3. Access in code:
   ```tsx
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

## Testing

Write tests alongside your components:

```tsx
// Button.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

Run tests:
```bash
npm test              # Watch mode
npm run test:ui       # Visual UI
npm run test:coverage # Coverage report
```

## Component Example

```tsx
// src/components/Card/Card.tsx
import styles from './Card.module.css';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
```

## ESLint & Prettier

Code is automatically checked for:
- TypeScript errors
- React best practices
- Accessibility issues
- Code formatting

Format all files:
```bash
npm run format
```

## Using This Template

### Option 1: Clone and Modify
```bash
git clone <your-repo-url> my-project
cd my-project
npm install
npm run dev
```

### Option 2: Use as GitHub Template
1. Click "Use this template" on GitHub
2. Create your repository
3. Clone and start building

### Customize for Your Project
1. Update `package.json` name and version
2. Replace this README with your project docs
3. Update `.env.example` with your variables
4. Modify or remove example components
5. Add your own components, hooks, and utilities

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite 7** - Build tool
- **Vitest** - Testing framework
- **React Testing Library** - Component testing
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **React Router** - Client-side routing

## Resources

- [Vite Documentation](https://vite.dev)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vitest Documentation](https://vitest.dev)
- [React Testing Library](https://testing-library.com/react)

## Author

Created by **Bishop-X** - A versatile, production-ready template for all your React projects.

## License

MIT - Use freely for your projects!
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
