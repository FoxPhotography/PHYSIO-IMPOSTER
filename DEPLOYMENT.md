# Deployment Guide

## Deploy to Netlify

### Option 1: GitHub Integration (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your repository
5. Netlify will auto-detect settings from `netlify.toml`
6. Click "Deploy site"

### Option 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
cd physio-imposter
netlify deploy --prod
```

### Option 3: Drag & Drop

```bash
# Build the project
cd physio-imposter
npm run build

# Go to Netlify and drag the 'dist' folder to deploy
```

## Important Notes

- The app is configured for mobile-only view
- PWA features require HTTPS (Netlify provides this automatically)
- Service Worker will cache assets for offline use
- Users can install the app to their home screen

## Custom Domain (Optional)

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow the instructions to configure DNS

## Environment Variables

No environment variables are required for this app.

## Testing PWA Features

After deployment:
1. Open the site on a mobile device
2. You should see the install prompt
3. Install the app to home screen
4. Test offline functionality by turning off internet

## Troubleshooting

- If PWA doesn't work, ensure the site is served over HTTPS
- Clear browser cache if updates don't appear
- Check browser console for Service Worker errors
