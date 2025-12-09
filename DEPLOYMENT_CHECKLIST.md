# 🚀 Deployment Checklist - Critical Items

## ✅ Completed Automatically

- ✅ Placeholder URLs marked for replacement (YOUR_NETLIFY_SITE_URL)
- ✅ Console.log statements wrapped in dev checks
- ✅ Font loading optimized (reduced to essential weights)
- ✅ Unused code removed

## ⚠️ Manual Steps Required Before Deployment

### 1. Replace Placeholder URL (CRITICAL)
**File:** `index.html`

Find and replace `YOUR_NETLIFY_SITE_URL` with your actual Netlify domain:
- Example: `https://alnajm-travel.netlify.app`
- Or your custom domain: `https://www.yourdomain.com`

**Locations to update:**
- Line 22: `og:url` meta tag
- Line 33: `canonical` link
- Line 51: JSON-LD `url` field
- Line 52: JSON-LD `logo` field
- Line 96: Organization schema `url` field
- Line 97: Organization schema `logo` field

**Quick find & replace:**
```bash
# In your editor, find: YOUR_NETLIFY_SITE_URL
# Replace with: https://your-actual-domain.netlify.app
```

### 2. Compress Images (CRITICAL - Performance Impact: 70%)
**Location:** `public/` folder

**Current images that need compression:**
- adisababa.png
- almadina.png
- beach.png
- cairo.png
- delhi.png
- dubai.png
- flight.png
- hajj.png
- hero_makkah_background_1764893075599.png
- hero_mountain_background_1764893090134.png
- hero-bg.png
- hotel.png
- istanbul.jpeg
- london.jpeg
- paris.png
- Riyadh.png
- logo.jpg
- logo.png

**How to compress:**
1. **Online tools (easiest):**
   - Go to https://tinypng.com/
   - Upload images (drag & drop)
   - Download compressed versions
   - Replace originals in `public/` folder

2. **Command line (advanced):**
   ```bash
   # Install sharp-cli
   npm install -g sharp-cli
   
   # Compress all PNG files
   sharp -i public/*.png -o public/ --quality 80
   
   # Compress all JPG files
   sharp -i public/*.jpg -o public/ --quality 80
   ```

**Target sizes:**
- Hero images: < 300KB
- Destination images: < 200KB
- Icons/logos: < 50KB
- Background images: < 400KB

### 3. Update Contact Information
**File:** `src/constants/company.js`

Replace placeholder values:
- Phone: `+966 XX XXX XXXX` → Your actual phone
- WhatsApp: `+966XXXXXXXXX` → Your actual WhatsApp
- Email: Verify `info@alnajm-travel.com` is correct

### 4. Update Social Media Links
**File:** `src/constants/company.js`

Replace placeholder URLs with your actual social media profiles:
- Facebook: Update the URL
- Twitter/X: Update the URL
- Instagram: Update the URL
- LinkedIn: Update the URL

### 5. Test Build
Before deploying, test the production build:

```bash
npm run build
npm run preview
```

Check for:
- ✅ No console errors
- ✅ All images load
- ✅ All routes work
- ✅ Service worker registers (check browser console)
- ✅ No broken links

### 6. Verify Service Worker
After deployment:
1. Open browser DevTools → Application → Service Workers
2. Verify service worker is registered
3. Test offline mode (DevTools → Network → Offline)

## 📊 Performance Targets

After compression, you should achieve:
- **Lighthouse Performance Score:** 90+
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Total Bundle Size:** < 500KB (gzipped)
- **Image Total Size:** < 3MB (all images combined)

## 🔍 Quick Verification Commands

```bash
# Check build size
npm run build
du -sh dist/

# Check for console.log in production build
grep -r "console.log" dist/ || echo "No console.log found ✅"

# Check image sizes
find public -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) -exec ls -lh {} \; | awk '{print $5, $9}'
```

## 📝 Notes

- The placeholder URL `YOUR_NETLIFY_SITE_URL` is intentionally obvious so you don't miss it
- Image compression is the #1 performance improvement you can make
- All console.log statements are now dev-only (won't appear in production)
- Font loading is optimized to only load essential weights

