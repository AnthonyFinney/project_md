# Core Architecture: Next.js 16 & React 19

**Trigger:** Activate this skill when generating, modifying, or planning React components, Next.js routing, API routes, or state management.

## 1. Architectural Mandates

- **React Compiler First:** This environment runs `babel-plugin-react-compiler`. STRICTLY PROHIBITED: Manual use of `useMemo`, `useCallback`, or `React.memo` for standard DOM rendering. Allow the compiler to handle memoization automatically.
- **Server vs. Client:** Default to React Server Components (RSC). Only use `"use client"` directives at the lowest possible leaf nodes in the component tree where interactivity (hooks, event listeners) is strictly required.

## 2. Next.js Routing & Data Fetching

- **App Router Only:** Strictly use the `app/` directory. Do not write or suggest any `pages/` directory conventions.
- **Data Mutations:** Prefer React 19 Server Actions over custom API routes for form submissions and database mutations.
- **Documentation Override:** Next.js 16 contains breaking changes. Before utilizing complex Next.js APIs (e.g., advanced caching, parallel routes), you MUST read the local documentation via `node_modules/next/dist/docs/` to verify syntax.

## 3. Code Quality & Typing

- **Strict TypeScript:** All components and functions must have strictly typed props and return types. Avoid `any` completely.
- **Imports:** Keep imports clean. Group external dependencies first, followed by internal absolute paths, and local relative paths last.
