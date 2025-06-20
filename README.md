# HNW Education - Next.js Website

A modern, responsive educational consultancy website built with Next.js, TypeScript, and Tailwind CSS. Optimized for GitHub Codespaces and Vercel deployment.

## 🚀 Quick Start

### GitHub Codespaces (Recommended)

1. **Open in Codespaces**: Click the "Code" button → "Codespaces" → "Create codespace on main"
2. **Auto-setup**: The devcontainer will automatically install dependencies
3. **Start development**: Run `npm run codespaces` (configured for Codespaces networking)
4. **View website**: Open the forwarded port 3000 in your browser

### Local Development

```bash
# Clone the repository
git clone <your-repo-url>
cd hnw-education

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 📁 Project Structure

```
/
├── .devcontainer/          # GitHub Codespaces configuration
│   └── devcontainer.json
├── .vscode/               # VS Code settings and extensions
│   ├── settings.json
│   └── extensions.json
├── public/                # Static assets
│   ├── favicon.ico
│   ├── images/
│   └── robots.txt
├── src/
│   ├── components/        # React components
│   │   ├── Layout.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── pages/            # Next.js pages
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx
│   │   └── about.tsx
│   ├── styles/           # Global styles
│   │   └── globals.css
│   └── lib/              # Utilities and configuration
│       ├── config.ts
│       └── utils.ts
├── package.json          # Dependencies and scripts
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── vercel.json           # Vercel deployment configuration
└── README.md
```

## 🛠 Available Scripts

```bash
# Development
npm run dev          # Start development server (localhost)
npm run codespaces   # Start development server (Codespaces)

# Production
npm run build        # Build for production
npm run start        # Start production server
npm run export       # Export static site

# Code Quality
npm run lint         # Run ESLint
```

## 🎨 Features

### ✅ **Modern Tech Stack**
- **Next.js 14** - React framework with SSG/SSR
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

### ✅ **GitHub Codespaces Ready**
- **Auto-setup** with devcontainer configuration
- **VS Code extensions** auto-install
- **Port forwarding** configured for development
- **Zero-config** development environment

### ✅ **Deployment Ready**
- **Vercel** - Zero-config deployment
- **Static export** support
- **SEO optimized** with meta tags
- **Performance optimized** images and fonts

### ✅ **Professional Design**
- **Responsive** design for all devices
- **Accessible** with ARIA labels and keyboard navigation
- **Interactive** animations and hover effects
- **Modern** typography with Google Fonts

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository** to Vercel
2. **Auto-deploy** - Vercel will automatically detect Next.js
3. **Custom domain** - Add your domain in Vercel dashboard

### Manual Deployment

```bash
# Build and export static site
npm run build
npm run export

# Deploy the 'out' folder to any static hosting
```

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=info@hnweducation.com
NEXT_PUBLIC_CONTACT_PHONE="+44 (0) 20 7000 0000"
```

### Customization

- **Colors**: Edit `tailwind.config.js` for brand colors
- **Content**: Update `src/lib/config.ts` for site content
- **Styling**: Modify `src/styles/globals.css` for global styles
- **Components**: Customize React components in `src/components/`

## 📱 Pages

- **Homepage** (`/`) - Hero, services, about, contact
- **About** (`/about`) - Company philosophy and principles
- **Process** (`/process`) - Step-by-step consultation process
- **Services** (`/services`) - Additional service offerings
- **Global Reach** (`/global`) - International presence

## 🎯 SEO & Performance

- **Meta tags** configured for all pages
- **Open Graph** and Twitter Card support
- **Sitemap** and robots.txt included
- **Image optimization** with Next.js Image component
- **Font optimization** with Google Fonts
- **Core Web Vitals** optimized

## 🔒 Best Practices

- **TypeScript** for type safety
- **ESLint** for code quality
- **Prettier** for code formatting
- **Responsive design** for all devices
- **Accessibility** with semantic HTML and ARIA
- **Performance** with optimized images and lazy loading

## 📞 Support

For questions or support, contact:
- **Email**: info@hnweducation.com
- **Phone**: +44 (0) 20 7000 0000

## 📄 License

MIT License - see LICENSE file for details.

---

**Built with ❤️ for HNW Education**

