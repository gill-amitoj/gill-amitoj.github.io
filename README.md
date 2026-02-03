# Amitoj Singh Portfolio

Minimal brutalist portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to GitHub Pages

### Option 1: Automatic (GitHub Actions)

1. Push your code to GitHub repository named `gill-amitoj.github.io`
2. Go to repository Settings → Pages
3. Under "Build and deployment", select "GitHub Actions" as the source
4. Push to `main` branch - deployment happens automatically

### Option 2: Manual

```bash
# Build the project
npm run build

# The dist folder contains your production build
# Upload the contents of dist to your hosting provider
```

## Project Structure

```
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── hooks/
│   │   │   └── useInView.js
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion 11

## License

MIT
