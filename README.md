# NextUp Calendar

A modern, responsive calendar application built with React, Vite, and Tailwind CSS. This project provides a clean and intuitive interface for calendar functionality with a focus on simplicity and user experience.

## Features

- **Modern UI Design**: Clean and responsive calendar interface
- **React-based**: Built with React 18 for optimal performance
- **Fast Development**: Powered by Vite for lightning-fast development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **TypeScript Support**: Full TypeScript integration for type safety
- **Responsive Design**: Mobile-first approach ensuring great experience across all devices

## Tech Stack

- **React 19** - Modern React with hooks and concurrent features
- **Vite** - Next generation frontend tooling
- **Tailwind CSS (v4)** - Utility-first CSS framework
- **TypeScript** - Static type checking
- **ESLint** - Code linting and formatting

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nextup-calendar
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Calendar/       # Calendar-specific components
│   └── ui/             # Generic UI components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── styles/             # Global styles and Tailwind config
└── App.tsx            # Main application component
```

## Development

### Vite Configuration

This project uses Vite with the following plugins:
- `@vitejs/plugin-react` - React support with Fast Refresh
- Hot Module Replacement (HMR) for instant updates during development

### ESLint Configuration

The project includes ESLint configuration for:
- React best practices
- TypeScript support
- Code quality and consistency

### Tailwind CSS

Tailwind CSS is configured with:
- Custom color palette
- Responsive design utilities
- Component-based styling approach

## Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, ready for deployment to any static hosting service.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Powered by [React](https://reactjs.org/)
