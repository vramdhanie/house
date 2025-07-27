# 🏠 House Listing Website

A modern, responsive web application built with React and TypeScript to showcase house listings for sale. Features a clean, professional design with Tailwind CSS styling.

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-10.8.1-F69220?logo=pnpm&logoColor=white)](https://pnpm.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**🌐 Live Demo:** [house.vincentramdhanie.com](https://house.vincentramdhanie.com)

## ✨ Features

- **Modern React 19** with TypeScript for type safety
- **Fast Development** with Vite build tool
- **Responsive Design** using Tailwind CSS
- **Professional UI** optimized for real estate listings
- **Component-Based Architecture** for maintainable code
- **Testing Ready** with Vitest and React Testing Library
- **Auto-Deployment** to custom domain via GitHub Actions

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd house
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm test` - Run tests with Vitest

## 🏗️ Project Structure

```
house/
├── src/
│   ├── components/     # React components
│   ├── types/         # TypeScript type definitions
│   ├── utils/         # Utility functions
│   ├── App.tsx        # Main application component
│   └── index.tsx      # Application entry point
├── public/            # Static assets
│   └── CNAME          # Custom domain configuration
├── index.html         # HTML template
├── vite.config.ts     # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
└── package.json       # Project dependencies
```

## 🎨 Tech Stack

- **Frontend Framework**: React 19.1.0
- **Language**: TypeScript 4.9.5
- **Build Tool**: Vite 7.0.6
- **Styling**: Tailwind CSS 4.1.11
- **Package Manager**: pnpm
- **Testing**: Vitest + React Testing Library
- **Deployment**: GitHub Actions + Custom Domain

## 🌐 Deployment

This application is automatically deployed to [house.vincentramdhanie.com](https://house.vincentramdhanie.com) via GitHub Actions. Every push to the `main` branch triggers a new deployment.

### Deployment Process:
1. Code is pushed to `main` branch
2. GitHub Actions workflow builds the project
3. Built files are deployed to GitHub Pages
4. Custom domain serves the application

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Bundled with [Vite](https://vitejs.dev/)
- Icons from [Heroicons](https://heroicons.com/)
