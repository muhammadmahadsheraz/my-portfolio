# Deployment Guide

This guide covers various deployment options for the Mahad Sheraz Portfolio website. Project links referenced on this site include a general GitHub profile and specific repositories:

- General GitHub: https://github.com/muhammadmahadsheraz
- Custom DBMS (C++ backend, React frontend): https://github.com/AmirHashmi017/DBMS-From-Scratch
- AI Phishing Email Parser (Python backend): private/local or TBD

## 🚀 Quick Deploy Options

### 1. Netlify (Recommended)

**Automatic Deployment:**
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

**Manual Deployment:**
```bash
npm run build
# Upload the 'dist' folder to Netlify
```

### 2. Vercel

**Automatic Deployment:**
1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect Vite configuration
3. Deploy automatically on every push

**Manual Deployment:**
```bash
npm install -g vercel
vercel --prod
```

### 3. GitHub Pages

**Setup:**
1. Build the project: `npm run build`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add to package.json scripts:
```json
"deploy": "gh-pages -d dist"
```
4. Deploy: `npm run deploy`

### 4. Firebase Hosting

**Setup:**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

## 🔧 Environment Configuration

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📊 Performance Optimization

The project is already optimized for production with:

- **Code Splitting**: Automatic vendor chunking
- **Minification**: Terser optimization
- **Tree Shaking**: Unused code removal
- **Image Optimization**: Lazy loading and compression
- **CSS Optimization**: Minified and purged

## 🌐 Domain Configuration

### Custom Domain Setup

1. **Netlify:**
   - Go to Site Settings > Domain Management
   - Add your custom domain
   - Configure DNS records

2. **Vercel:**
   - Go to Project Settings > Domains
   - Add your custom domain
   - Configure DNS records

3. **GitHub Pages:**
   - Go to Repository Settings > Pages
   - Set custom domain in Pages settings

## 📱 Mobile Optimization

The site is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🔍 SEO Configuration

SEO is already configured with:
- Meta tags for social sharing
- Open Graph tags
- Twitter Card tags
- Sitemap.xml
- Robots.txt
- Structured data

## 🚨 Troubleshooting

### Build Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Performance Issues
- Check bundle size with `npm run build`
- Optimize images in `public/` folder
- Review console for errors

### Deployment Issues
- Check build output in `dist/` folder
- Verify all assets are included
- Test locally with `npm run preview`

## 📈 Analytics Setup

### Google Analytics
Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Vercel Analytics
```bash
npm install @vercel/analytics
```

## 🔒 Security Headers

Add to your hosting provider:

```http
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

## 📞 Support

For deployment issues, contact:
- Email: mahadtoosey@gmail.com
- GitHub: @muhammadmahadsheraz






