# ✨ Modern Blog Platform

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5.3-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React](https://img.shields.io/badge/React-19.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)

*A beautiful, responsive, and feature-rich blog platform built with cutting-edge technologies*

[🚀 Demo](#demo) • [📦 Installation](#installation) • [🎯 Features](#features) • [📚 Documentation](#documentation)

</div>

---

## 🌟 Overview

**Modern Blog Platform** is a next-generation blogging application that combines elegant design with powerful functionality. Built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**, it offers a seamless reading and writing experience with stunning parallax effects and modern UI components.

### ✨ What Makes This Special?

- 🎨 **Beautiful Design** - Clean, modern interface with smooth animations
- 📱 **Fully Responsive** - Perfect experience on all devices
- ⚡ **Lightning Fast** - Optimized with Next.js 15 and Turbopack
- 🔧 **Type Safe** - Built with TypeScript for robust development
- 🎭 **Parallax Effects** - Engaging visual experiences
- 🛡️ **Error Handling** - Comprehensive error boundaries and validation
- ♿ **Accessible** - WCAG compliant with keyboard navigation
- 🎯 **Developer Friendly** - Clean code architecture and documentation

---

## 🎯 Features

### 📖 Reading Experience
- **Article Grid View** - Browse articles in a responsive grid layout
- **Detailed Article View** - Immersive reading experience with optimized typography
- **Fast Loading** - Optimized images and lazy loading
- **Smooth Navigation** - Intuitive breadcrumbs and navigation

### ✍️ Writing Experience
- **Rich Text Editor** - Easy-to-use article creation form
- **Real-time Validation** - Instant feedback on form inputs
- **Auto-save Draft** - Never lose your work
- **Image Support** - Upload and manage article thumbnails

### 🎨 Visual Design
- **Parallax Hero Section** - Eye-catching landing page with mouse parallax
- **Modern Typography** - Beautiful fonts with proper hierarchy
- **Smooth Animations** - CSS animations and transitions
- **Dark/Light Theme** - Automatic theme detection
- **Custom Scrollbars** - Polished scrolling experience

### 🔧 Technical Features
- **Server-Side Rendering** - SEO-optimized with Next.js App Router
- **Type Safety** - Full TypeScript coverage
- **Error Boundaries** - Graceful error handling
- **Loading States** - Skeleton screens and spinners
- **Performance Optimized** - Bundle splitting and lazy loading
- **Responsive Images** - WebP/AVIF support with multiple sizes

---

## 🚀 Demo

### 🏠 Home Page
Beautiful parallax hero section with smooth mouse tracking effects.

![Home Page Screenshot](/public/images/demo/home-page-screenshot.png)

### 📚 Blog Listing
Responsive grid layout showcasing all articles with hover effects.

![Blogs Page Screenshot](/public/images/demo/blogs-page-screenshot.png)

### 📝 Article View
Immersive reading experience with sticky navigation and optimized layout.

![Blog Page Screenshot](/public/images/demo/blog-page-screenshot.png)

### ✏️ Create Article
Clean, validated form with real-time feedback and error handling.

![Create Page Screenshot](/public/images/demo/create-page-screenshot.png)

---

## 📦 Installation

### Prerequisites
- **Node.js** >= 18.0.0
- **npm** >= 8.0.0 (or **pnpm**/yarn)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/modern-blog.git
cd modern-blog

# Install dependencies
npm install
# or
pnpm install

# Copy environment variables
cp .env.example .env.local

# Start the development servers
npm run dev:full
# or run separately:
# npm run json-server (in one terminal)
# npm run dev (in another terminal)
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **API Server**: http://localhost:3001

---

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev              # Start Next.js development server
npm run json-server      # Start JSON server for API
npm run dev:full         # Start both servers concurrently

# Production
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run lint:check       # Check for linting errors
npm run type-check       # Run TypeScript compiler
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting

# Utilities
npm run clean            # Clean build artifacts
npm run analyze          # Analyze bundle size
```

### Project Structure

```
modern-blog/
├── 📁 src/
│   ├── 📁 app/                 # Next.js App Router
│   │   ├── 📁 blogs/           # Blog-related pages
│   │   ├── 📁 create-blog/     # Article creation
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── 📁 components/          # Reusable components
│   │   ├── Article.tsx         # Article card component
│   │   ├── CreateArticle.tsx   # Article creation form
│   │   ├── ErrorBoundary.tsx   # Error handling
│   │   ├── HeroSection.tsx     # Parallax hero
│   │   ├── Loading.tsx         # Loading components
│   │   └── Navbar.tsx          # Navigation
│   ├── 📁 lib/                 # Utility functions
│   │   └── utils.ts            # Common utilities
│   ├── 📁 services/            # API services
│   │   └── api.ts              # Article API
│   ├── 📁 types/               # TypeScript definitions
│   │   └── index.ts            # Type definitions
│   └── 📁 database/            # Mock database
│       └── db.json             # JSON server data
├── 📁 public/                  # Static assets
│   └── 📁 images/              # Image assets
├── 📄 next.config.ts           # Next.js configuration
├── 📄 tailwind.config.js       # Tailwind CSS config
├── 📄 tsconfig.json            # TypeScript config
└── 📄 package.json             # Dependencies
```

---

## 🎨 Customization

### 🎯 Themes
Modify the CSS variables in `src/app/globals.css`:

```css
:root {
  --color-primary: 59 130 246;     /* Blue */
  --color-secondary: 107 114 128;  /* Gray */
  --color-accent: 16 185 129;      /* Emerald */
}
```

### 🖼️ Images
Add your images to the `public/images/` directory:
- `parallax/` - Hero section backgrounds
- Article thumbnails and content images

### 📝 Content
Modify `src/database/db.json` to customize initial articles or connect to a real database.

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker
```bash
# Build Docker image
docker build -t modern-blog .

# Run container
docker run -p 3000:3000 modern-blog
```

### Manual Deployment
```bash
# Build the application
npm run build

# Start production server
npm run start
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. 🍴 Fork the repository
2. 🌱 Create a feature branch: `git checkout -b feature/amazing-feature`
3. 💫 Commit changes: `git commit -m 'Add amazing feature'`
4. 🚀 Push to branch: `git push origin feature/amazing-feature`
5. 🎉 Submit a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js Team** - For the incredible framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Vercel** - For seamless deployment platform
- **React Team** - For the amazing UI library

---

## 📞 Support

- 📧 **Email**: p.amirabadi85@gmail.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/Parsa5436/blog/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/Parsa5436/blog/discussions)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ and ☕ by [Parsa](https://github.com/Parsa5436)

</div>
