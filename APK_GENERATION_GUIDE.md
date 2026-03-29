# Generate APK for Physio SUS

## Method 1: Using PWABuilder (EASIEST - Recommended)

1. **Deploy your app to Netlify first**
   ```bash
   npm run build
   # Deploy the dist folder to Netlify
   ```

2. **Go to PWABuilder**
   - Visit: https://www.pwabuilder.com/
   - Enter your deployed URL (e.g., https://physio-sus.netlify.app)
   - Click "Start"

3. **Generate Android Package**
   - Click on "Android" tab
   - Choose "Trusted Web Activity" (TWA)
   - Click "Generate Package"
   - Download the APK file

4. **Upload APK**
   - Upload the APK to your server or Google Drive
   - Get the download link
   - Update the link in `InstallPrompt.tsx`

---

## Method 2: Using Bubblewrap CLI (Advanced)

### Prerequisites
- Node.js installed
- Java JDK 8 or higher
- Android SDK (optional, Bubblewrap can download it)

### Steps

1. **Initialize Bubblewrap**
   ```bash
   cd physio-imposter
   bubblewrap init --manifest=https://your-deployed-url.com/manifest.json
   ```

2. **Build the APK**
   ```bash
   bubblewrap build
   ```

3. **Find your APK**
   - Located in: `./app-release-signed.apk`

4. **Upload and Update Link**
   - Upload APK to your hosting
   - Update the download link in `InstallPrompt.tsx`

---

## Method 3: Using Android Studio (Most Control)

1. **Install Android Studio**
   - Download from: https://developer.android.com/studio

2. **Create TWA Project**
   - Use the TWA template
   - Configure with your PWA URL

3. **Build APK**
   - Build → Build Bundle(s) / APK(s) → Build APK(s)

---

## Update Download Link

After generating the APK, update the link in:
`src/components/InstallPrompt.tsx`

```typescript
const handleInstall = async () => {
  // Replace with your actual APK download link
  window.open('https://your-domain.com/physio-sus.apk', '_blank');
  
  setIsVisible(false);
  onDismiss();
};
```

---

## Hosting Options for APK

1. **GitHub Releases**
   - Free
   - Create a release and attach APK
   - Get direct download link

2. **Google Drive**
   - Upload APK
   - Get shareable link
   - Make sure it's set to "Anyone with link can view"

3. **Your Own Server**
   - Upload to your hosting
   - Direct link: `https://yourdomain.com/downloads/physio-sus.apk`

4. **Netlify/Vercel**
   - Put APK in `public` folder
   - Access at: `https://yoursite.com/physio-sus.apk`

---

## Testing the APK

1. Enable "Install from Unknown Sources" on Android
2. Download the APK on your phone
3. Install and test

---

## Important Notes

- APK must be signed for distribution
- For Google Play Store, you need a signed AAB (Android App Bundle)
- PWABuilder generates signed APKs automatically
- Keep your signing keys secure!

---

## Quick Start (Recommended Path)

1. Deploy to Netlify: `npm run build` → upload dist folder
2. Go to https://www.pwabuilder.com/
3. Enter your Netlify URL
4. Download Android APK
5. Upload APK to GitHub Releases or Google Drive
6. Update download link in code
7. Rebuild and redeploy

Done! 🎉
