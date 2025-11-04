# 🚀 Modern Portfolio Website

A stunning, professional portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion** for a Data Engineer, Automation Architect, and AI/ML Specialist.

## ✨ Features

- **Modern Design**: Dark theme with cyan/purple accent palette
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Performance Optimized**: Built with Next.js 14 for lightning-fast loading
- **SEO Ready**: Proper meta tags and semantic HTML structure

## 📋 Sections

1. **Hero/Landing** - Eye-catching introduction with animated background
2. **About Me** - Skills showcase with interactive cards and journey timeline
3. **Projects** - Filterable project grid with modal details
4. **Dashboards & Visuals** - Tabbed dashboard showcase
5. **AI/ML Experiments** - Accordion-style research projects
6. **Blog** - Article listing with category filtering
7. **Contact** - Contact form with social links
8. **Footer** - Clean footer with quick links

## 🎨 Color Palette

- **Primary**: Cyan (#06aed6) - Data & Technology
- **Accent**: Purple (#a855f7) - Innovation & AI
- **Dark Background**: Deep navy (#0a0e27, #050811)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 10
- **Icons**: Lucide React
- **Language**: TypeScript

## 📦 Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Customization Guide

### 1. Personal Information

**File: `components/Hero.tsx`**
- Line 42: Replace `"Your Name"` with your actual name
- Line 51-52: Update your tagline
- Line 59-61: Update your personal description
- Lines 86-104: Update social media links

**File: `components/Footer.tsx`**
- Line 19: Replace `"Your Name"` with your name
- Line 21: Update your motto/tagline
- Line 28: Update your quote
- Lines 51-81: Update social links
- Line 96: Update copyright name

### 2. About Section

**File: `components/About.tsx`**
- Lines 8-28: Update skills, descriptions, and tech tags
- Lines 30-47: Update your journey/timeline with actual positions
- Line 63: Update your bio text
- Lines 141-144: Update your tech stack

### 3. Projects

**File: `components/Projects.tsx`**
- Lines 8-77: Replace placeholder projects with your actual projects
- Update: title, description, tags, links, metrics
- Add real project images (replace placeholder emojis)

### 4. Dashboards

**File: `components/Dashboards.tsx`**
- Lines 7-45: Update with your actual dashboards
- Replace embed URLs with real Power BI/Tableau/Streamlit embeds
- Update descriptions and metrics

### 5. AI/ML Experiments

**File: `components/AIExperiments.tsx`**
- Lines 8-76: Update with your actual ML projects
- Replace notebook links with real GitHub/Kaggle links
- Lines 227-241: Update competition achievements

### 6. Blog Posts

**File: `components/Blog.tsx`**
- Lines 8-102: Replace with your actual blog posts
- Update links to point to your Medium/Dev.to/personal blog
- Line 191: Update "View All Articles" link

### 7. Contact Information

**File: `components/Contact.tsx`**
- Lines 65-70: Update email address
- Lines 72-82: Update LinkedIn URL
- Lines 84-94: Update GitHub URL
- Lines 106-132: Update social media links
- Line 257: Update Calendly or scheduling link

### 8. Form Submission

**File: `components/Contact.tsx`**
- Lines 26-35: Replace with actual form submission logic
- Options: Formspree, EmailJS, your own API endpoint

## 🖼️ Adding Images

Replace placeholder emojis with actual images:

1. Create a `public` folder in the root directory
2. Add your images: `public/projects/`, `public/blog/`, etc.
3. Update image paths in components:
   - Projects: `image: '/projects/project-1.jpg'`
   - Blog: `image: '/blog/post-1.jpg'`
   - Profile: Add to Hero section

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click!

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Connect your repository
4. Build command: `npm run build`
5. Publish directory: `.next`

### Build for Production

```bash
npm run build
npm start
```

## 📝 Environment Variables

If you add form submission or analytics, create a `.env.local` file:

```env
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 🎯 Performance Tips

1. **Optimize Images**: Use Next.js Image component for automatic optimization
2. **Lazy Loading**: Components are already optimized with Framer Motion
3. **Code Splitting**: Next.js handles this automatically
4. **Analytics**: Add Google Analytics or Plausible for insights

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

MIT License - feel free to use this for your own portfolio

## 🙏 Credits

- **Design & Development**: Built with modern web technologies
- **Icons**: [Lucide Icons](https://lucide.dev)
- **Animations**: [Framer Motion](https://www.framer.com/motion)
- **Framework**: [Next.js](https://nextjs.org)

---

## 🔍 Quick Checklist Before Going Live

- [ ] Update all personal information (name, email, social links)
- [ ] Replace placeholder projects with real projects
- [ ] Add actual project images
- [ ] Update blog posts with real articles
- [ ] Configure form submission endpoint
- [ ] Test contact form
- [ ] Add real dashboard embeds
- [ ] Update AI/ML experiments with actual work
- [ ] Add Google Analytics (optional)
- [ ] Test on mobile devices
- [ ] Run `npm run build` to check for errors
- [ ] Deploy to Vercel/Netlify

---

**Built with ❤️ for Data Engineers, Automation Architects, and AI/ML Specialists**
