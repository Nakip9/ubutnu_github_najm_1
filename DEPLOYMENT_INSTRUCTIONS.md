# Quick Deployment Instructions - GitHub Pages

## 🚀 Fast Track Deployment (5 Minutes)

### Step 1: Push to GitHub
```bash
# If not already done, initialize git
git init
git add .
git commit -m "Ready for deployment"

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Click **Save**

### Step 3: Wait for Deployment
- Go to **Actions** tab
- Wait 2-5 minutes for deployment to complete
- Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## ⚙️ Configuration

### Base Path Setup

**If your site URL is:** `username.github.io/repo-name/`
- Open `vite.config.js`
- Uncomment and set: `base: '/repo-name/',`

**If your site URL is:** `username.github.io/` (repository name = username)
- Keep `base: '/'` in `vite.config.js`

## 🔧 Fix Logo Caching Issue

If you see the old logo after deployment:

1. **Clear browser cache:**
   - Windows: `Ctrl+Shift+Delete`
   - Mac: `Cmd+Shift+Delete`
   - Select "Cached images and files"

2. **Hard refresh:**
   - Windows: `Ctrl+F5`
   - Mac: `Cmd+Shift+R`

3. **Clear service worker:**
   - Open DevTools (F12)
   - Application tab → Clear storage → Clear site data

## ✅ Pre-Deployment Checklist

- [x] Build tested successfully (`npm run build`)
- [x] Logo file updated to `logo_svg.svg`
- [x] Service worker cache version updated
- [x] GitHub Actions workflow configured
- [x] 404.html file for SPA routing created
- [x] Base path configured (if needed)

## 📚 Full Documentation

For detailed instructions, see:
- `README.md` - Complete project documentation
- `DEPLOYMENT.md` - Comprehensive deployment guide

## 🆘 Need Help?

1. Check GitHub Actions logs in **Actions** tab
2. Verify `vite.config.js` base path is correct
3. Ensure all files are committed and pushed
4. Clear browser cache if seeing old content

---

**Your site is ready for deployment!** 🎉

