# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
cd physio-imposter
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

The app will open at `http://localhost:5173`

### 3. Test on Mobile
- Open the URL on your mobile device (make sure you're on the same network)
- Or use Chrome DevTools mobile emulator (F12 → Toggle device toolbar)

## 📱 Testing PWA Features

1. Build the project:
```bash
npm run build
npm run preview
```

2. Open in Chrome/Edge on mobile
3. You should see the install prompt
4. Install to home screen
5. Test offline by turning off WiFi

## 🚀 Deploy to Netlify

### Quick Deploy
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Or use GitHub
1. Push to GitHub
2. Connect to Netlify
3. Auto-deploy on push

## 🎮 How to Play

1. Choose muscle category (Upper/Lower/All)
2. Set player count (3-12)
3. Enter names
4. Pass phone around
5. Each player sees their role
6. Find the imposter!

## 🎨 Customization

- Colors: Edit `src/App.css` (search for `#dc2626`)
- Muscles: Edit `src/data/muscles.ts`
- Icons: See `ICONS.md` for guide

## 🐛 Troubleshooting

- **Port already in use**: Change port in `vite.config.ts`
- **PWA not working**: Ensure HTTPS (Netlify provides this)
- **Icons not showing**: Replace placeholder icons (see ICONS.md)

## 📚 Project Structure

```
physio-imposter/
├── src/
│   ├── components/        # React components
│   ├── data/             # Muscle data
│   ├── App.tsx           # Main app
│   └── main.tsx          # Entry point
├── public/
│   ├── manifest.json     # PWA manifest
│   ├── sw.js            # Service worker
│   └── icons/           # App icons
└── netlify.toml         # Netlify config
```

## 🎯 Next Steps

- [ ] Replace placeholder icons (see ICONS.md)
- [ ] Test on real mobile devices
- [ ] Deploy to Netlify
- [ ] Share with your classmates!

Enjoy the game! 🎭💪
