# Palak Jaiswal — Portfolio 🎨

A retro-aesthetic animated portfolio with 3D elements, custom cursor, smooth scroll, and a graph-paper grid theme.

## ✨ Features

- 🖥️ **Retro Boot Loader** — terminal-style boot sequence animation
- 🖱️ **Custom Cursor** — olive ring cursor with hover states
- 📐 **Graph Paper Grid** — the aesthetic from your inspo image
- 🎮 **3D Hero Canvas** — Three.js floating shapes with mouse parallax
- 🪟 **Retro Windows** — Windows 95-style windowed UI components
- 🧭 **Dock Navbar** — macOS-style olive dock at the bottom
- 🌊 **Lenis Smooth Scroll** — buttery smooth scrolling
- ✨ **Framer Motion** — section enter animations throughout

## 🚀 Setup

### 1. Install dependencies

\`\`\`bash
npm install
\`\`\`

### 2. Start dev server

\`\`\`bash
npm run dev
\`\`\`

### 3. Open in browser

\`\`\`
http://localhost:5173
\`\`\`

### 4. Build for production

\`\`\`bash
npm run build
\`\`\`

## 📁 Project Structure

\`\`\`
src/
├── components/
│   ├── CustomCursor.tsx   — animated ring cursor
│   ├── FolderIcon.tsx     — retro yellow folder icon
│   ├── HeroCanvas.tsx     — Three.js 3D shapes
│   ├── Loader.tsx         — terminal boot loader
│   ├── Navbar.tsx         — dock navigation
│   └── RetroWindow.tsx    — Windows 95-style window
├── sections/
│   ├── Hero.tsx           — hero with 3D + big PORTFOLIO title
│   ├── About.tsx          — about me section
│   ├── Skills.tsx         — animated skill bars + tools
│   ├── Projects.tsx       — project cards
│   ├── Contact.tsx        — contact form
│   └── Footer.tsx         — footer
├── App.tsx                — root, Lenis smooth scroll
├── main.tsx               — entry point
└── index.css              — all global styles & CSS vars
\`\`\`

## 🎨 Color Palette

| Name         | Hex       |
|--------------|-----------|
| Background   | `#F2EDE4` |
| Olive        | `#6B7A50` |
| Amber        | `#D4920A` |
| Pink Accent  | `#D4607A` |
| Dark         | `#1E1C14` |

## 🛠️ Tech Stack

- **React 18** + **TypeScript** + **Vite**
- **Three.js** — 3D hero shapes
- **Framer Motion** — animations
- **Lenis** — smooth scroll
- **Google Fonts** — VT323, Press Start 2P, DM Serif Display, Space Mono

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Framework: **Vite** (auto-detected)
4. Hit Deploy ✅

---

Made with ♥ by Palak Jaiswal
