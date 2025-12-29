# Mahad Sheraz - Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my skills as a Full Stack Developer.

## 🚀 Features

- **Modern Design**: Clean, professional interface with glassmorphism effects
- **Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Performance**: Fast loading with optimized assets and code splitting
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **SEO Optimized**: Meta tags, sitemap, and structured data
- **Interactive**: Smooth animations and transitions
- **Contact Form**: Functional contact form with validation

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: CSS3 with CSS Variables
- **Build Tool**: Vite with Terser optimization
- **Linting**: ESLint with React rules
- **Performance**: Code splitting, lazy loading, image optimization

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/mahadsheraz/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.jsx        # Landing section
│   ├── Services.jsx    # Services showcase
│   ├── Projects.jsx    # Portfolio projects
│   ├── Skills.jsx     # Technical skills
│   ├── Contact.jsx    # Contact form
│   └── ...
├── assets/            # Static assets
├── App.jsx           # Main app component
└── main.jsx          # Entry point
```

## 🎨 Customization

### Colors
Update CSS variables in `src/index.css`:
```css
:root {
  --accent: #2f6e18;        /* Primary green */
  --text: #e9efe6;          /* Text color */
  --muted: #9aa09a;         /* Muted text */
  --panel: #0b0b0b;         /* Background */
}
```

### Content
- Update personal information in `src/components/Hero.jsx`
- Modify services in `src/components/Services.jsx`
- Add projects in `src/components/Projects.jsx`
- Update contact information in `src/components/Contact.jsx`

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure custom domain in Netlify settings

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite and deploy

### GitHub Pages
1. Build: `npm run build`
2. Deploy `dist` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

### Performance Optimizations

- Code splitting with dynamic imports
- Image optimization and lazy loading
- CSS optimization with Terser
- Bundle analysis and size monitoring
- Tree shaking for unused code removal

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Mahad Sheraz**
- Email: mahadtoosey@gmail.com
- Location: Lahore, Pakistan
- Portfolio: https://mahadsheraz.dev

---

Built with ❤️ by Mahad Sheraz