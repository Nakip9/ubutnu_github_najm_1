# Deployment Guide - GitHub Pages

Complete step-by-step guide for deploying your travel agency website to GitHub Pages (FREE hosting).

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [GitHub Repository Setup](#github-repository-setup)
4. [Deployment Configuration](#deployment-configuration)
5. [Deploying Your Site](#deploying-your-site)
6. [Custom Domain Setup](#custom-domain-setup)
7. [Troubleshooting](#troubleshooting)
8. [Post-Deployment](#post-deployment)

## Prerequisites

Before starting, ensure you have:

- ✅ GitHub account (free)
- ✅ Git installed on your computer
- ✅ Node.js 18+ installed
- ✅ Your project code ready

## Initial Setup

### 1. Verify Your Project

```bash
# Navigate to your project directory
cd /path/to/alnajm_2_v_logo_apply

# Install dependencies (if not already done)
npm install

# Test the build locally
npm run build

# Preview the build
npm run preview
```

**Important:** Make sure the build completes without errors and the preview shows your site correctly.

### 2. Check Configuration Files

Verify these files exist and are correct:

- ✅ `vite.config.js` - Build configuration
- ✅ `.github/workflows/deploy.yml` - GitHub Actions workflow
- ✅ `404.html` - SPA routing for GitHub Pages
- ✅ `public/_redirects` - Netlify routing (if using Netlify)
- ✅ `public/logo_svg.svg` - Your logo file

## GitHub Repository Setup

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **+** icon in the top right
3. Select **New repository**
4. Fill in:
   - **Repository name**: `alnajm-travel-website` (or your preferred name)
   - **Description**: "Travel agency website"
   - **Visibility**: Public (required for free GitHub Pages)
   - **DO NOT** check "Initialize with README"
5. Click **Create repository**

### Step 2: Initialize Git (if not already done)

```bash
# Check if git is initialized
git status

# If not initialized, run:
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - Ready for GitHub Pages deployment"
```

### Step 3: Connect to GitHub

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Verify remote
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

## Deployment Configuration

### Step 1: Configure Base Path (IMPORTANT)

**For repository-based deployment** (e.g., `username.github.io/repo-name`):

1. Open `vite.config.js`
2. Uncomment and set the base path:
   ```js
   base: '/your-repo-name/',
   ```
   Replace `your-repo-name` with your actual repository name.

**For user/organization site** (e.g., `username.github.io`):

1. Repository name must match your username
2. Keep `base: '/'` in `vite.config.js`

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

### Step 3: Verify Workflow File

The deployment workflow is already configured in `.github/workflows/deploy.yml`. It will:
- Build your project automatically
- Deploy to GitHub Pages
- Run on every push to `main` branch

## Deploying Your Site

### Automatic Deployment

Once you push to GitHub, deployment happens automatically:

1. **Push your code:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. **Monitor deployment:**
   - Go to your repository on GitHub
   - Click **Actions** tab
   - Watch the workflow run
   - Wait for it to complete (usually 2-5 minutes)

3. **Access your site:**
   - After deployment completes, your site will be live at:
     - `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
   - Or if repository name matches username:
     - `https://YOUR_USERNAME.github.io/`

### Manual Deployment Trigger

You can also trigger deployment manually:

1. Go to **Actions** tab
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**
4. Select branch (usually `main`)
5. Click **Run workflow**

## Custom Domain Setup

### Step 1: Add CNAME File

1. Create a file named `CNAME` in the `public/` folder
2. Add your domain name (one per line):
   ```
   www.yourdomain.com
   yourdomain.com
   ```
3. Commit and push:
   ```bash
   git add public/CNAME
   git commit -m "Add custom domain"
   git push origin main
   ```

### Step 2: Configure DNS

1. **Go to your domain registrar** (e.g., Namecheap, GoDaddy)
2. **Add DNS records:**
   - Type: `CNAME`
   - Name: `www`
   - Value: `YOUR_USERNAME.github.io`
   - TTL: Automatic or 3600

   - Type: `A` (for root domain)
   - Name: `@`
   - Value: GitHub Pages IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

3. **Wait for DNS propagation** (can take up to 48 hours)

### Step 3: Update GitHub Pages Settings

1. Go to repository **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. Check **Enforce HTTPS** (after DNS propagates)
4. Click **Save**

## Troubleshooting

### Logo Not Updating / Old Logo Shows

**Problem:** Browser is caching the old logo.

**Solutions:**

1. **Clear browser cache:**
   - Chrome/Edge: `Ctrl+Shift+Delete` → Select "Cached images and files"
   - Firefox: `Ctrl+Shift+Delete` → Select "Cache"
   - Safari: `Cmd+Option+E`

2. **Hard refresh:**
   - Windows: `Ctrl+F5` or `Ctrl+Shift+R`
   - Mac: `Cmd+Shift+R`

3. **Clear service worker:**
   - Open DevTools (F12)
   - Application tab → Clear storage → Clear site data

4. **Update service worker cache:**
   - The service worker cache version is updated in `public/sw.js`
   - After deployment, the new cache will be used

### 404 Errors on Routes

**Problem:** React Router routes return 404.

**Solution:**
- The `404.html` file handles SPA routing
- Ensure it's in the root directory
- GitHub Pages will use it automatically

### Assets Not Loading

**Problem:** Images, CSS, or JS files not loading.

**Solutions:**

1. **Check base path:**
   - Verify `base` in `vite.config.js` matches your deployment path
   - For `/repo-name/`, ensure base is `/repo-name/`

2. **Check file paths:**
   - All assets should use absolute paths (starting with `/`)
   - Example: `/logo_svg.svg` not `./logo_svg.svg`

3. **Verify public folder:**
   - All static assets should be in `public/` folder
   - They will be copied to `dist/` during build

### Build Fails

**Problem:** GitHub Actions workflow fails.

**Solutions:**

1. **Check Node.js version:**
   - Workflow uses Node.js 18
   - Ensure your code is compatible

2. **Check build logs:**
   - Go to **Actions** tab
   - Click on failed workflow
   - Check error messages

3. **Test locally:**
   ```bash
   npm run build
   ```
   - Fix any errors locally first

4. **Check dependencies:**
   - Ensure `package.json` has all required dependencies
   - Run `npm install` locally to verify

### Deployment Takes Too Long

**Problem:** Deployment takes more than 10 minutes.

**Solutions:**

1. **Check workflow status:**
   - Go to **Actions** tab
   - Check if workflow is still running

2. **Optimize build:**
   - Reduce bundle size
   - Optimize images
   - Remove unused dependencies

3. **Check GitHub status:**
   - Visit [GitHub Status](https://www.githubstatus.com/)
   - Check if there are any issues

## Post-Deployment

### Step 1: Verify Deployment

1. **Check site is live:**
   - Visit your GitHub Pages URL
   - Verify all pages load correctly
   - Check logo displays correctly
   - Test navigation

2. **Test on different devices:**
   - Desktop
   - Mobile
   - Tablet

3. **Check performance:**
   - Use [PageSpeed Insights](https://pagespeed.web.dev/)
   - Optimize if needed

### Step 2: Update SEO Settings

1. **Update `index.html`:**
   - Replace `YOUR_NETLIFY_SITE_URL` with your GitHub Pages URL
   - Update Open Graph meta tags
   - Update Twitter Card meta tags
   - Update JSON-LD structured data

2. **Submit to search engines:**
   - Google Search Console
   - Bing Webmaster Tools

### Step 3: Set Up Monitoring

1. **Google Analytics:**
   - Add tracking code
   - Monitor traffic

2. **Uptime monitoring:**
   - Use free services like UptimeRobot
   - Get alerts if site goes down

### Step 4: Regular Updates

1. **Make changes locally:**
   ```bash
   npm run dev  # Test changes
   ```

2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```

3. **Deployment happens automatically:**
   - GitHub Actions will build and deploy
   - Usually takes 2-5 minutes

## Quick Reference

### Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Git
git add .            # Stage all changes
git commit -m "msg"  # Commit changes
git push origin main # Push to GitHub

# Deployment
# Just push to main branch - deployment is automatic!
```

### Important Files

- `vite.config.js` - Build configuration (base path)
- `.github/workflows/deploy.yml` - Deployment workflow
- `404.html` - SPA routing for GitHub Pages
- `public/logo_svg.svg` - Logo file
- `public/CNAME` - Custom domain (if used)

### Support Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)

---

## ✅ Deployment Checklist

Before deploying, ensure:

- [ ] Project builds successfully (`npm run build`)
- [ ] All assets are in `public/` folder
- [ ] Logo file is `public/logo_svg.svg`
- [ ] Base path configured correctly in `vite.config.js`
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled (GitHub Actions)
- [ ] Custom domain configured (if applicable)
- [ ] SEO meta tags updated with correct URLs
- [ ] Tested locally and everything works

**Ready?** Follow the steps above and your site will be live in minutes! 🚀
