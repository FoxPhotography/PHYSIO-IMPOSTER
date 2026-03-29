# Physio Imposter - Muscle Memory Game

A mobile-first Progressive Web App (PWA) designed for physiotherapy students to learn muscles in a fun, interactive way through the Imposter game format.

## Features

- 🎯 Choose muscle categories: Upper Limb, Lower Limb, or All Muscles
- 👥 Support for 3-12 players
- 🎭 Classic Imposter gameplay mechanics
- 💪 60+ anatomical muscles included
- 📱 Mobile-optimized interface
- 🔥 Modern black & red design
- 📴 Offline play support (PWA)
- 🚀 Installable as a mobile app

## Getting Started

### Development

```bash
cd physio-imposter
npm install
npm run dev
```

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Netlify will automatically detect the build settings from `netlify.toml`
4. Deploy!

Or use Netlify CLI:

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## How to Play

1. Select your muscle category (Upper Limb, Lower Limb, or All)
2. Set the number of players using +/- buttons
3. Enter player names
4. Pass the phone around - each player sees their role
5. One player is the IMPOSTER (doesn't see a muscle name)
6. Discuss and find the imposter!

## PWA Installation

When you first open the app, you'll see an installation prompt. Click "Install Now" to add the app to your home screen for offline play.

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS3 (Custom animations)
- Service Workers (PWA)
- Netlify (Hosting)

## License

MIT
