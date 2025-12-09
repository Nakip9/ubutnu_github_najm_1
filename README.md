# Alnajm Alazrak Travel & Tourism

A modern, responsive website for a comprehensive travel and tourism agency.

## 🚀 Features

- Modern, responsive design
- Attractive and user-friendly interface
- Multiple pages: Home, About, Services, Destinations, Contact
- Smooth animations using Framer Motion
- Optimized for performance and speed
- SEO-friendly structure
- PWA-ready with service worker

## 📦 Installation

```bash
# Install dependencies
npm install

# Run the project in development mode
npm run dev

# Build the project for production
npm run build

# Preview the production build
npm run preview
```

## 🌐 Deployment to GitHub Pages

This project is configured for free deployment on GitHub Pages. Follow the instructions below to deploy your site.

### Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js 18+ installed

### Step-by-Step Deployment Instructions

#### 1. Prepare Your Repository

1. **Create a new repository on GitHub** (or use an existing one)
   - Go to [GitHub](https://github.com) and click "New repository"
   - Name it (e.g., `alnajm-travel-website`)
   - Make it public (required for free GitHub Pages)
   - Don't initialize with README (we already have one)

2. **Push your code to GitHub**
   ```bash
   # Initialize git if not already done
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial commit - Ready for deployment"
   
   # Add your GitHub repository as remote
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

#### 2. Configure GitHub Pages

1. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on **Settings** tab
   - Scroll down to **Pages** section (in the left sidebar)
   - Under **Source**, select **GitHub Actions**
   - Save the changes

2. **The deployment will start automatically**
   - GitHub Actions workflow is already configured in `.github/workflows/deploy.yml`
   - The workflow will build and deploy your site automatically
   - You can monitor the deployment in the **Actions** tab

#### 3. Access Your Deployed Site

- After deployment completes (usually 2-5 minutes), your site will be available at:
  - `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
- If your repository name is the same as your username, it will be:
  - `https://YOUR_USERNAME.github.io/`

#### 4. Custom Domain (Optional)

If you have a custom domain:

1. **Update `vite.config.js`**
   - If deploying to a subdirectory (e.g., `/your-repo-name/`), uncomment and set the `base` option:
     ```js
     base: '/your-repo-name/',
     ```
   - For root domain deployment, keep `base: '/'` or comment it out

2. **Add CNAME file** (for custom domain)
   - Create a file named `CNAME` in the `public` folder
   - Add your domain name (e.g., `www.yourdomain.com`)
   - Push to GitHub

3. **Configure DNS**
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
   - Wait for DNS propagation (can take up to 48 hours)

### Important Notes for GitHub Pages

1. **Base Path Configuration**
   - If your site is at `username.github.io/repo-name`, update `vite.config.js`:
     ```js
     base: '/repo-name/',
     ```
   - If your site is at `username.github.io` (repository name matches username), keep:
     ```js
     base: '/',
     ```

2. **Branch Name**
   - The workflow is configured for `main` branch
   - If your default branch is `master`, update `.github/workflows/deploy.yml`:
     ```yaml
     branches:
       - master  # Change from 'main' to 'master'
     ```

3. **Build Time**
   - First deployment may take 5-10 minutes
   - Subsequent deployments are usually faster (2-5 minutes)

## 🔧 Troubleshooting

### Issue: Logo Not Showing (Old Logo Appears)

**Solution:**
1. Clear browser cache:
   - Chrome/Edge: `Ctrl+Shift+Delete` (Windows) or `Cmd+Shift+Delete` (Mac)
   - Select "Cached images and files"
   - Clear cache

2. Hard refresh:
   - Windows: `Ctrl+F5` or `Ctrl+Shift+R`
   - Mac: `Cmd+Shift+R`

3. Clear service worker cache:
   - Open DevTools (F12)
   - Go to Application tab
   - Click "Clear storage"
   - Check "Cache storage" and "Service Workers"
   - Click "Clear site data"

4. Rebuild the project:
   ```bash
   npm run build
   ```

### Issue: 404 Errors on Routes

**Solution:**
- The `404.html` file is included for GitHub Pages SPA routing
- Ensure it's in the root directory
- The `_redirects` file in `public/` folder handles routing for Netlify

### Issue: Assets Not Loading

**Solution:**
- Check the `base` path in `vite.config.js` matches your deployment path
- Ensure all assets are in the `public/` folder
- Verify file paths use absolute paths (starting with `/`)

### Issue: Build Fails

**Solution:**
1. Check Node.js version (should be 18+):
   ```bash
   node --version
   ```

2. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. Check for errors in the build output

## 📁 Project Structure

```
alnajm_2_v_logo_apply/
├── public/          # Static files (images, logos, etc.)
├── src/
│   ├── components/  # Reusable components
│   ├── pages/       # Page components
│   ├── constants/   # Constants and data
│   └── data/        # Site data
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions deployment workflow
├── vite.config.js   # Vite configuration
├── 404.html         # GitHub Pages SPA routing
└── package.json     # Dependencies
```

## 🛠️ Technologies Used

- **React 19** - JavaScript library for building user interfaces
- **Vite** - Fast build tool
- **React Router** - Routing in React
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## 🔒 Security

- Security headers configured
- No known vulnerabilities
- Code optimized and minified for production

## 📝 Notes

- The `_redirects` file in `public/` folder is required for SPA routing on Netlify
- The `404.html` file handles SPA routing on GitHub Pages
- All images should be in the `public/` folder
- Logo file: `public/logo_svg.svg` (transparent SVG)

## 🚀 Quick Deployment Checklist

- [ ] Code pushed to GitHub repository
- [ ] GitHub Pages enabled (GitHub Actions)
- [ ] Base path configured in `vite.config.js` (if needed)
- [ ] Build tested locally (`npm run build`)
- [ ] All assets loading correctly
- [ ] Routes working properly
- [ ] Logo displaying correctly
- [ ] Custom domain configured (if applicable)

## 📄 License

All rights reserved © 2025 Alnajm Alazrak Travel & Tourism

## 🆘 Support

For deployment issues:
1. Check the GitHub Actions logs in the **Actions** tab
2. Verify all configuration files are correct
3. Ensure Node.js version is 18+
4. Clear browser cache if seeing old content

---

**Ready to deploy?** Follow the "Step-by-Step Deployment Instructions" above!
