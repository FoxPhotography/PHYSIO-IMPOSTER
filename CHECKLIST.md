# 🚀 Deployment Checklist

Use this checklist before deploying to production.

## ✅ Pre-Deployment

### 1. Test Locally
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Test on mobile device or Chrome DevTools mobile emulator
- [ ] Test all game flows:
  - [ ] Category selection works
  - [ ] Player count +/- buttons work
  - [ ] Player name input works
  - [ ] Game reveals work correctly
  - [ ] Imposter is randomly assigned
  - [ ] Play again works
  - [ ] New game works

### 2. Build Test
- [ ] Run `npm run build`
- [ ] No TypeScript errors
- [ ] No build warnings
- [ ] Run `npm run preview`
- [ ] Test the production build

### 3. PWA Features
- [ ] Install prompt appears on first visit
- [ ] App can be installed to home screen
- [ ] Service worker registers successfully
- [ ] App works offline after first visit
- [ ] Manifest.json is accessible

### 4. Icons (Optional but Recommended)
- [ ] Open `public/icon-generator.html` in browser
- [ ] Download generated icons
- [ ] Replace `public/icon-192.png`
- [ ] Replace `public/icon-512.png`
- [ ] Rebuild: `npm run build`

### 5. Content Review
- [ ] All muscle names are correct
- [ ] No typos in UI text
- [ ] Game instructions are clear
- [ ] Colors look good on mobile

## 🌐 Deployment

### Option A: Netlify via GitHub
- [ ] Create GitHub repository
- [ ] Push code to GitHub:
  ```bash
  git init
  git add .
  git commit -m "Initial commit"
  git branch -M main
  git remote add origin YOUR_REPO_URL
  git push -u origin main
  ```
- [ ] Go to [Netlify](https://app.netlify.com)
- [ ] Click "Add new site" → "Import an existing project"
- [ ] Select your GitHub repo
- [ ] Netlify auto-detects settings from `netlify.toml`
- [ ] Click "Deploy site"
- [ ] Wait for deployment to complete

### Option B: Netlify CLI
- [ ] Install Netlify CLI: `npm install -g netlify-cli`
- [ ] Login: `netlify login`
- [ ] Deploy: `netlify deploy --prod`
- [ ] Follow prompts

### Option C: Drag & Drop
- [ ] Build: `npm run build`
- [ ] Go to [Netlify Drop](https://app.netlify.com/drop)
- [ ] Drag the `dist` folder
- [ ] Wait for deployment

## ✅ Post-Deployment

### 1. Test Live Site
- [ ] Open deployed URL
- [ ] Test on real mobile device
- [ ] Test install prompt
- [ ] Install to home screen
- [ ] Test offline functionality
- [ ] Play a complete game

### 2. PWA Validation
- [ ] Open Chrome DevTools
- [ ] Go to "Application" tab
- [ ] Check "Manifest" - should show app details
- [ ] Check "Service Workers" - should be registered
- [ ] Run Lighthouse audit (PWA score should be high)

### 3. Share & Test
- [ ] Share URL with friends
- [ ] Get feedback on gameplay
- [ ] Test on different devices:
  - [ ] iPhone (Safari)
  - [ ] Android (Chrome)
  - [ ] Tablet

### 4. Optional Enhancements
- [ ] Set up custom domain (Netlify settings)
- [ ] Add analytics (Google Analytics, etc.)
- [ ] Set up continuous deployment
- [ ] Add error monitoring (Sentry, etc.)

## 🐛 Troubleshooting

### PWA Not Installing
- Ensure site is HTTPS (Netlify provides this)
- Check browser console for errors
- Verify manifest.json is accessible
- Try Chrome/Edge on mobile

### Service Worker Issues
- Clear browser cache
- Unregister old service workers
- Check sw.js is accessible
- Verify HTTPS

### Build Errors
- Delete node_modules and reinstall
- Check Node version (18+)
- Clear Vite cache: `rm -rf node_modules/.vite`

### Icons Not Showing
- Verify icon files exist in public/
- Check manifest.json paths
- Clear browser cache
- Rebuild and redeploy

## 📊 Success Metrics

After deployment, your app should have:
- ✅ Lighthouse PWA score: 90+
- ✅ Mobile-friendly test: Pass
- ✅ Load time: < 2s on 4G
- ✅ Offline functionality: Working
- ✅ Install prompt: Appearing

## 🎉 You're Done!

Share your game with classmates and enjoy learning muscles the fun way!

---

**Need Help?**
- Check documentation in the project
- Review error messages carefully
- Test in Chrome DevTools first
- Ensure all files are committed

**Happy Gaming! 🎭💪**
