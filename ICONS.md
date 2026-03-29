# Icon Generation Guide

The app currently uses placeholder SVG icons. For production, you should create proper PNG icons.

## Quick Method: Use an Online Tool

1. Go to https://www.pwabuilder.com/imageGenerator
2. Upload a 512x512 image with your logo/icon
3. Download the generated icons
4. Replace the files in `/public/`:
   - `icon-192.png`
   - `icon-512.png`

## Design Recommendations

- Use a red (#dc2626) background
- Add a white mask/theater icon (🎭) or muscle icon (💪)
- Ensure the icon is clear at small sizes
- Keep important elements centered
- Use high contrast for visibility

## Manual Creation

If you have design software (Photoshop, Figma, etc.):

1. Create a 512x512px canvas
2. Background: #dc2626 (red)
3. Add your icon/logo in white
4. Export as PNG at:
   - 192x192px → `icon-192.png`
   - 512x512px → `icon-512.png`

## Current Placeholders

The current icons are SVG data URIs that will work but aren't optimal. Replace them before production deployment.
