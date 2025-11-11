# Pirates Treasure - Next.js Static Site

A modern, SEO-friendly static site built with Next.js, TailwindCSS, and deployed on Vercel.

## 🚀 Features

- ✅ **Static Site Generation (SSG)** - All pages pre-rendered at build time
- ✅ **Server-Side Rendering** - Categories show link counts immediately (no "0 sites")
- ✅ **Client-Side Search** - Fast filtering using data-haystack attributes
- ✅ **No JavaScript Required** - Works even with JS disabled (Progressive Enhancement)
- ✅ **SEO Optimized** - Fully crawlable static HTML
- ✅ **TailwindCSS** - Clean, modern design with glassmorphism effects
- ✅ **Dark Mode** - Automatic theme switching with local storage persistence
- ✅ **Mobile Responsive** - Optimized for all screen sizes

## 📁 Project Structure

```
nextjs-site/
├── components/
│   ├── Header.js          # Navigation header with theme toggle
│   ├── Footer.js          # Site footer with links
│   └── SearchBar.js       # Client-side search component
├── data/
│   └── sites.json         # All site listings organized by category
├── pages/
│   ├── _app.js            # Global app wrapper
│   ├── _document.js       # HTML document structure
│   ├── index.js           # Homepage (SSG)
│   ├── about.js           # About page
│   └── dmca.js            # DMCA policy page
├── styles/
│   └── globals.css        # Global styles with Tailwind
├── next.config.js         # Next.js configuration (export mode)
├── tailwind.config.js     # Tailwind theme configuration
└── package.json           # Dependencies
```

## 🛠️ Setup & Installation

### 1. Install Dependencies

```bash
cd nextjs-site
npm install
```

### 2. Add Your Link Data

Edit `data/sites.json` to add your curated links:

```json
{
  "categoryId": {
    "name": "Category Name",
    "icon": "🎮",
    "description": "Category description",
    "sites": [
      {
        "name": "Site Name",
        "url": "https://example.com",
        "description": "One sentence description",
        "adsLevel": "low",
        "requiresLogin": false,
        "badges": ["popular", "trusted"]
      }
    ]
  }
}
```

**Ad Levels:** `none`, `low`, `medium`, `high`  
**Badges:** `popular`, `trusted`, `new`

### 3. Development

```bash
npm run dev
```

Visit http://localhost:3000 to see your site.

### 4. Build Static Site

```bash
npm run build
```

This generates static HTML in the `/out` directory.

### 5. Test Production Build

```bash
npm run export
npx serve out
```

## 🚢 Deploy to Vercel

### Option 1: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js and deploys ✅

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

### Configuration

Vercel will use these settings automatically:
- **Build Command:** `next build`
- **Output Directory:** `out/`
- **Framework:** Next.js

## 🎨 Customization

### Update Theme Colors

Edit `tailwind.config.js`:

```js
colors: {
  primary: {
    500: '#667eea',  // Change to your brand color
  }
}
```

### Add Google Analytics

Add to `pages/_app.js`:

```js
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
```

### Modify Monetization

Edit the "Premium Tools" section in `pages/index.js` (line 110+)

## 📊 SEO Features

- ✅ Static HTML (fully crawlable)
- ✅ Semantic HTML structure
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags
- ✅ Canonical URLs
- ✅ Fast page loads (<1s)

## 🔍 Search Functionality

The search bar filters links in real-time using the `data-haystack` attribute:

```html
<a data-haystack="fitgirl repacks games compressed">
```

Search works even with JavaScript disabled by using the native browser search (Ctrl+F).

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome)

## 📝 License

This project is open source. Feel free to modify and use for your own directory sites.

## 🤝 Contributing

To add new sites:

1. Edit `data/sites.json`
2. Test locally with `npm run dev`
3. Build with `npm run build`
4. Deploy to Vercel

## 🐛 Troubleshooting

**Issue:** Site links show "0 sites"  
**Solution:** Ensure `getStaticProps` is exporting data correctly in `pages/index.js`

**Issue:** Search not working  
**Solution:** Check that `data-haystack` attributes are present on link cards

**Issue:** Dark mode not persisting  
**Solution:** Check that localStorage is enabled in browser

## 📧 Support

For issues or questions, visit the [GitHub repository](https://github.com/Himanshu-u-rai/-PiratesTreasure).

---

Built with ❤️ using Next.js & TailwindCSS
