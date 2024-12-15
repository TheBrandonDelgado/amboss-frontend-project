# Amboss Frontend Project

A technical interview project for Amboss that demonstrates a modern web application for exploring and trading Lightning Network channels. Built with Next.js 15, React 19, and TypeScript to showcase frontend development skills and understanding of Lightning Network concepts.

## Features

- Real-time Lightning Network channel marketplace
- GraphQL integration for efficient data fetching
- Modern, responsive UI with Tailwind CSS
- Type-safe development with TypeScript
- Server-side rendering with Next.js
- React Query for powerful data management

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v18 or higher)
- npm (v9 or higher)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/TheBrandonDelgado/amboss-frontend-project.git
cd amboss-frontend-project
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api/graphql
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Available Scripts

- `npm run dev` - Starts the development server with Turbopack
- `npm run build` - Creates an optimized production build
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint for code quality checks

## Technology Stack

- **Framework**: Next.js 15.1.0
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Query
- **Data Fetching**: GraphQL with graphql-request
- **Icons**: Heroicons
- **Development Tools**:
  - ESLint for code linting
  - PostCSS for CSS processing
  - Turbopack for fast development builds

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # Reusable React components
├── lib/             # Utility functions and configurations
└── public/          # Static assets
```
