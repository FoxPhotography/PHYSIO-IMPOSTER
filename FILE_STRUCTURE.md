# 📁 Complete File Structure

```
physio-imposter/
│
├── 📄 Configuration Files
│   ├── .gitignore                    # Git ignore rules
│   ├── eslint.config.js              # ESLint configuration
│   ├── index.html                    # Main HTML entry point
│   ├── netlify.toml                  # Netlify deployment config
│   ├── package.json                  # NPM dependencies & scripts
│   ├── package-lock.json             # Locked dependency versions
│   ├── tsconfig.json                 # TypeScript config (root)
│   ├── tsconfig.app.json             # TypeScript config (app)
│   ├── tsconfig.node.json            # TypeScript config (node)
│   └── vite.config.ts                # Vite build configuration
│
├── 📚 Documentation
│   ├── README.md                     # Project overview
│   ├── QUICKSTART.md                 # Quick start guide
│   ├── DEPLOYMENT.md                 # Deployment instructions
│   ├── PROJECT_SUMMARY.md            # Complete project summary
│   ├── CHECKLIST.md                  # Pre-deployment checklist
│   ├── FEATURES.md                   # Feature overview & design
│   ├── ICONS.md                      # Icon generation guide
│   └── FILE_STRUCTURE.md             # This file
│
├── 📱 Public Assets (Copied to dist/)
│   ├── public/
│   │   ├── favicon.svg               # Browser favicon
│   │   ├── icon-192.png              # PWA icon (192x192)
│   │   ├── icon-512.png              # PWA icon (512x512)
│   │   ├── icon-generator.html       # Tool to generate icons
│   │   ├── icons.svg                 # Additional icons
│   │   ├── manifest.json             # PWA manifest
│   │   └── sw.js                     # Service worker
│
├── 💻 Source Code
│   └── src/
│       │
│       ├── 🎨 Styles
│       │   ├── index.css             # Global base styles
│       │   └── App.css               # App-level styles & animations
│       │
│       ├── 🧩 Components
│       │   ├── components/
│       │   │   ├── InstallPrompt.tsx      # PWA install screen
│       │   │   ├── InstallPrompt.css      # Install prompt styles
│       │   │   ├── CategorySelect.tsx     # Muscle category picker
│       │   │   ├── CategorySelect.css     # Category styles
│       │   │   ├── PlayerSetup.tsx        # Player configuration
│       │   │   ├── PlayerSetup.css        # Setup styles
│       │   │   ├── GameScreen.tsx         # Main game logic
│       │   │   └── GameScreen.css         # Game styles
│       │   │
│       │   └── assets/                    # Static assets (if any)
│       │
│       ├── 📊 Data
│       │   └── data/
│       │       └── muscles.ts             # Muscle database (60+ muscles)
│       │
│       ├── 🚀 Entry Points
│       │   ├── main.tsx              # React entry point
│       │   └── App.tsx               # Main app component
│       │
│       └── 📝 Type Definitions
│           └── (TypeScript types defined in components)
│
├── 🏗️ Build Output (Generated)
│   └── dist/                         # Production build
│       ├── assets/                   # Bundled JS/CSS
│       ├── index.html                # Built HTML
│       ├── manifest.json             # PWA manifest
│       ├── sw.js                     # Service worker
│       └── icons/                    # App icons
│
└── 📦 Dependencies
    └── node_modules/                 # NPM packages (not committed)
```

## 📄 Key Files Explained

### Configuration

**package.json**
- Dependencies: React, React-DOM
- Dev dependencies: TypeScript, Vite, ESLint
- Scripts: dev, build, preview, lint

**vite.config.ts**
- React plugin configuration
- Build optimization settings
- Dev server configuration

**netlify.toml**
- Build command: `npm run build`
- Publish directory: `dist`
- Redirects for SPA routing
- Headers for PWA files

**tsconfig.json**
- TypeScript compiler options
- Module resolution settings
- Type checking rules

### Source Code

**src/main.tsx**
- React app initialization
- Root DOM rendering
- Entry point for bundler

**src/App.tsx**
- Main app component
- State management (game state, category, players)
- Component orchestration
- Navigation logic

**src/components/InstallPrompt.tsx**
- PWA install prompt UI
- beforeinstallprompt event handling
- Install/dismiss actions
- First-visit experience

**src/components/CategorySelect.tsx**
- Muscle category selection
- Three options: Upper, Lower, All
- Card-based UI
- Category icons

**src/components/PlayerSetup.tsx**
- Player count selector (+/-)
- Player name inputs
- Validation & defaults
- Start game action

**src/components/GameScreen.tsx**
- Game state management
- Role assignment (random imposter)
- Pass-and-play logic
- Reveal mechanics
- Play again / restart

**src/data/muscles.ts**
- Upper limb muscles (30)
- Lower limb muscles (30)
- Category filtering function
- Type-safe muscle data

### Styles

**src/index.css**
- CSS reset
- Base typography
- Root variables
- Body styles

**src/App.css**
- Global animations (fadeIn, slideUp, pulse, glow)
- App container styles
- Button base styles
- Input base styles

**Component CSS Files**
- Scoped styles for each component
- Responsive layouts
- Animations & transitions
- Theme colors

### PWA Files

**public/manifest.json**
- App name & description
- Icons configuration
- Display mode: standalone
- Theme colors
- Orientation: portrait

**public/sw.js**
- Service worker logic
- Cache strategy
- Offline support
- Asset caching
- Update handling

### Documentation

**README.md** - Main project documentation
**QUICKSTART.md** - Get started in 3 steps
**DEPLOYMENT.md** - Deploy to Netlify guide
**PROJECT_SUMMARY.md** - Complete feature list
**CHECKLIST.md** - Pre-deployment checklist
**FEATURES.md** - Detailed feature overview
**ICONS.md** - Icon generation instructions
**FILE_STRUCTURE.md** - This file

## 📊 File Statistics

- **Total Components**: 4 (+ App)
- **Total CSS Files**: 5
- **Total TypeScript Files**: 7
- **Total Documentation**: 8 files
- **Total Muscles**: 60
- **Lines of Code**: ~1,500
- **Build Size**: ~200KB (63KB gzipped)

## 🎯 File Purposes

### Must Edit
- `src/data/muscles.ts` - Add/edit muscles
- `src/App.css` - Change theme colors
- `public/icon-*.png` - Replace icons

### Rarely Edit
- Component files - Modify game logic
- CSS files - Adjust styling
- `manifest.json` - Change app metadata

### Never Edit
- `node_modules/` - Auto-managed
- `dist/` - Auto-generated
- `package-lock.json` - Auto-managed

## 🔍 Finding Things

**Want to change colors?**
→ Search for `#dc2626` in CSS files

**Want to add muscles?**
→ Edit `src/data/muscles.ts`

**Want to modify game rules?**
→ Edit `src/components/GameScreen.tsx`

**Want to change player limits?**
→ Edit `src/components/PlayerSetup.tsx`

**Want to customize install prompt?**
→ Edit `src/components/InstallPrompt.tsx`

## 📦 Dependencies

### Production
- `react` (19.2.4) - UI framework
- `react-dom` (19.2.4) - React DOM renderer

### Development
- `typescript` (5.9.3) - Type checking
- `vite` (8.0.3) - Build tool
- `@vitejs/plugin-react` - React support
- `eslint` - Code linting
- Various TypeScript types

### Zero Runtime Dependencies
- No UI libraries (pure CSS)
- No state management libraries
- No routing libraries
- No utility libraries

## 🚀 Build Process

1. **Development**: `npm run dev`
   - Vite dev server
   - Hot module replacement
   - Fast refresh

2. **Production**: `npm run build`
   - TypeScript compilation
   - Vite bundling
   - Asset optimization
   - Output to `dist/`

3. **Preview**: `npm run preview`
   - Serve production build
   - Test before deployment

## 📝 Notes

- All paths are relative to project root
- CSS is component-scoped (no CSS-in-JS)
- TypeScript strict mode enabled
- ESLint configured for React
- Git ignores node_modules and dist
- Netlify auto-deploys from git

---

**This structure is optimized for:**
- 🚀 Fast development
- 📦 Small bundle size
- 🎯 Easy maintenance
- 📱 Mobile performance
- 🔧 Simple deployment
