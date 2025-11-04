# 🚀 Deployment Guide

Complete guide to deploying your portfolio website to production.

## 📋 Pre-Deployment Checklist

### 1. Content Review
- [ ] All placeholders replaced with real information
- [ ] Contact form configured and tested
- [ ] All external links verified
- [ ] Images optimized and added
- [ ] SEO metadata updated
- [ ] Social media links working

### 2. Technical Check
- [ ] Run `npm run build` successfully
- [ ] No console errors in browser
- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile devices
- [ ] All animations working smoothly
- [ ] Forms submit correctly

### 3. Performance
- [ ] Images compressed (use TinyPNG or similar)
- [ ] No unused dependencies
- [ ] Lighthouse score > 90

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Built by Next.js creators
- Zero configuration needed
- Automatic HTTPS
- Global CDN
- Free tier is generous
- Automatic deployments on git push

**Steps:**

1. **Push to GitHub**
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio website"

# Create GitHub repo and push
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

2. **Deploy to Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "Import Project"
- Connect your GitHub account
- Select your portfolio repository
- Click "Deploy"
- Done! Your site is live in ~2 minutes

3. **Custom Domain (Optional)**
- In Vercel dashboard: Settings → Domains
- Add your domain (e.g., `yourname.com`)
- Update DNS records as shown
- Wait for DNS propagation (5-30 minutes)

**Environment Variables:**
- In Vercel dashboard: Settings → Environment Variables
- Add your `.env.local` variables
- Redeploy for changes to take effect

---

### Option 2: Netlify

**Why Netlify?**
- Easy to use
- Great free tier
- Form handling built-in
- Split testing features

**Steps:**

1. **Build the project**
```bash
npm run build
```

2. **Deploy to Netlify**
- Go to [netlify.com](https://netlify.com)
- Drag and drop your `.next` folder
- Or connect GitHub for automatic deployments

3. **Configure Build Settings**
- Build command: `npm run build`
- Publish directory: `.next`

**Netlify Forms:**
If using Netlify, you can use their built-in form handling:

```html
<!-- In Contact.tsx, update form tag: -->
<form 
  name="contact" 
  method="POST" 
  data-netlify="true"
  onSubmit={handleSubmit}
>
  <input type="hidden" name="form-name" value="contact" />
  <!-- rest of form -->
</form>
```

---

### Option 3: GitHub Pages

**Note:** Requires additional configuration for Next.js

1. Install static export package:
```bash
npm install --save-dev next-export
```

2. Update `next.config.js`:
```javascript
module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

3. Build and deploy:
```bash
npm run build
# Deploy the 'out' folder to GitHub Pages
```

---

### Option 4: AWS Amplify

**Why AWS Amplify?**
- Integrated with AWS services
- Good for enterprise projects
- Scalable

**Steps:**
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Connect your GitHub repository
3. Configure build settings
4. Deploy

---

## 🔧 Build Configuration

### Optimize for Production

**1. Image Optimization**

Install sharp for better image optimization:
```bash
npm install sharp
```

**2. Environment Variables**

Create `.env.production`:
```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**3. Sitemap Generation**

Create `app/sitemap.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yoursite.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
```

**4. Robots.txt**

Create `app/robots.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://yoursite.com/sitemap.xml',
  }
}
```

---

## 🎯 Custom Domain Setup

### Buying a Domain

**Recommended Registrars:**
- [Namecheap](https://namecheap.com) - Affordable, good UI
- [Google Domains](https://domains.google) - Simple, reliable
- [Cloudflare](https://cloudflare.com) - Best prices, great features

**Domain Suggestions:**
- `yourname.com`
- `yourname.dev`
- `yourname.io`
- `yourname.tech`

### DNS Configuration

**For Vercel:**
1. Add domain in Vercel dashboard
2. Add these DNS records at your registrar:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For Netlify:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

---

## 📊 Analytics Setup

### Google Analytics

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

4. Install package:
```bash
npm install @next/third-parties
```

5. Update `app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  )
}
```

### Alternative: Plausible (Privacy-Friendly)

```bash
npm install next-plausible
```

```typescript
import PlausibleProvider from 'next-plausible'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <PlausibleProvider domain="yoursite.com" />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

## 🔒 Security Best Practices

### 1. Environment Variables
- Never commit `.env.local` to git
- Use different values for production
- Rotate API keys regularly

### 2. Content Security Policy

Add to `next.config.js`:
```javascript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
]

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}
```

---

## 📈 Performance Optimization

### 1. Image Optimization

```bash
# Compress images before adding to public folder
# Use: tinypng.com or squoosh.app
```

### 2. Font Optimization

Already configured with Next.js font optimization:
```typescript
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
```

### 3. Bundle Analysis

```bash
npm install @next/bundle-analyzer
```

Update `next.config.js`:
```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // your config
})
```

Run analysis:
```bash
ANALYZE=true npm run build
```

---

## 🐛 Troubleshooting

### Build Fails

**Error: Module not found**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

**Error: Type errors**
```bash
# Check TypeScript
npm run lint
```

### Deployment Issues

**Vercel: Build timeout**
- Check for infinite loops
- Reduce image sizes
- Check external API calls

**Netlify: Functions not working**
- Check function syntax
- Verify environment variables

### Performance Issues

**Slow page load**
- Compress images
- Check bundle size
- Enable caching headers

**Animations laggy**
- Reduce animation complexity
- Use `will-change` CSS property
- Test on lower-end devices

---

## 🎉 Post-Deployment

### 1. Test Everything
- [ ] All pages load correctly
- [ ] Contact form works
- [ ] All links work
- [ ] Mobile responsive
- [ ] Fast load times

### 2. SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Verify site on Bing Webmaster Tools
- [ ] Share on LinkedIn, Twitter
- [ ] Add to portfolio directories

### 3. Monitor
- [ ] Set up uptime monitoring (UptimeRobot)
- [ ] Check analytics weekly
- [ ] Monitor Core Web Vitals
- [ ] Review error logs

### 4. Maintain
- [ ] Update projects regularly
- [ ] Add new blog posts
- [ ] Keep dependencies updated
- [ ] Refresh content quarterly

---

## 📞 Support Resources

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **Web.dev**: [web.dev](https://web.dev) - Performance guides

---

**Your portfolio is ready to go live! 🚀**

Choose your deployment platform and follow the steps above. Most developers choose Vercel for Next.js projects due to seamless integration.
