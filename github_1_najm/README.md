# النجم الأزرق للسفريات والسياحة

موقع إلكتروني حديث لوكالة سفر وسياحة متكاملة.

## 🚀 المميزات

- تصميم عصري وسريع الاستجابة
- واجهة مستخدم جذابة وسهلة الاستخدام
- صفحات متعددة: الرئيسية، من نحن، الخدمات، الوجهات، اتصل بنا
- رسوم متحركة سلسة باستخدام Framer Motion
- محسّن للأداء والسرعة

## 📦 التثبيت

```bash
# تثبيت المتطلبات
npm install

# تشغيل المشروع في وضع التطوير
npm run dev

# بناء المشروع للإنتاج
npm run build

# معاينة البناء
npm run preview
```

## 🐧 Ubuntu Setup Instructions

### Prerequisites: Installing Node.js and npm on Ubuntu

#### Option 1: Using NodeSource Repository (Recommended)

```bash
# Update package index
sudo apt update

# Install curl if not already installed
sudo apt install -y curl

# Install Node.js 18.x (LTS)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node --version
npm --version
```

#### Option 2: Using Node Version Manager (nvm) - Recommended for Development

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reload shell configuration
source ~/.bashrc

# Install Node.js 18 (LTS)
nvm install 18
nvm use 18
nvm alias default 18

# Verify installation
node --version
npm --version
```

#### Option 3: Using Ubuntu Default Repository

```bash
# Update package index
sudo apt update

# Install Node.js and npm
sudo apt install -y nodejs npm

# Verify installation
node --version
npm --version
```

**Note:** This method may install an older version of Node.js. Use Option 1 or 2 for the latest LTS version.

### Setting Up the Project on Ubuntu

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd github_1_najm
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   
   This will install all required packages listed in `package.json`. The installation may take a few minutes.

3. **Verify installation:**
   ```bash
   # Check if all dependencies are installed
   npm list --depth=0
   ```

### Development Workflow

1. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   The application will be available at `http://localhost:3000` (or the port shown in the terminal).

2. **Run linting:**
   ```bash
   npm run lint
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```
   
   This creates an optimized production build in the `dist/` folder.

4. **Preview the production build:**
   ```bash
   npm run preview
   ```
   
   This serves the production build locally for testing.

### Troubleshooting

#### Issue: Permission denied errors
```bash
# Fix npm permissions (if needed)
sudo chown -R $(whoami) ~/.npm
```

#### Issue: Node version mismatch
```bash
# If using nvm, ensure correct version is active
nvm use 18
```

#### Issue: Port already in use
```bash
# Kill process on port 3000
sudo lsof -ti:3000 | xargs kill -9
# Or change port in vite.config.js
```

#### Issue: Missing dependencies
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Next Steps for Deployment

After setting up the project on Ubuntu, you can proceed with:

1. **Local Testing:**
   - Run `npm run dev` to test the application
   - Run `npm run build` to create a production build
   - Test the production build with `npm run preview`

2. **Prepare for Netlify Deployment:**
   - Ensure `netlify.toml` is configured correctly
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **GitHub Integration:**
   - Push your code to GitHub
   - Connect GitHub repository to Netlify for automatic deployments

4. **Production Deployment:**
   - Follow the Netlify deployment instructions below
   - Configure environment variables if needed
   - Set up custom domain (optional)

## 🌐 النشر على Netlify

### الطريقة الأولى: النشر التلقائي من GitHub

1. ارفع المشروع إلى مستودع GitHub
2. سجّل الدخول إلى [Netlify](https://www.netlify.com/)
3. اضغط على "New site from Git"
4. اختر مستودع GitHub الخاص بك
5. Netlify سيكتشف الإعدادات تلقائياً:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. اضغط على "Deploy site"

### الطريقة الثانية: النشر اليدوي

1. قم ببناء المشروع:
   ```bash
   npm run build
   ```

2. اذهب إلى [Netlify](https://www.netlify.com/)
3. اسحب مجلد `dist` إلى منطقة النشر في Netlify
4. سيتم نشر موقعك فوراً!

## 📁 هيكل المشروع

```
enw/
├── public/          # الملفات الثابتة
├── src/
│   ├── components/  # المكونات القابلة لإعادة الاستخدام
│   ├── pages/      # صفحات الموقع
│   ├── constants/  # الثوابت والبيانات
│   └── data/       # بيانات الموقع
├── netlify.toml    # إعدادات Netlify
└── vite.config.js  # إعدادات Vite
```

## 🛠️ التقنيات المستخدمة

- **React 19** - مكتبة JavaScript لبناء واجهات المستخدم
- **Vite** - أداة بناء سريعة
- **React Router** - التوجيه في React
- **Framer Motion** - مكتبة الرسوم المتحركة
- **React Icons** - أيقونات جاهزة

## 🔒 الأمان

- تم تطبيق رؤوس أمان في `netlify.toml`
- لا توجد ثغرات أمنية معروفة
- الكود محسّن ومختصر للإنتاج

## 📝 ملاحظات

- الملف `_redirects` في مجلد `public` مطلوب لتوجيه SPA بشكل صحيح
- ملف `netlify.toml` يحتوي على إعدادات النشر والأمان
- جميع الصور موجودة في مجلد `public`

## 📄 الترخيص

جميع الحقوق محفوظة © 2025 النجم الأزرق للسفريات والسياحة
