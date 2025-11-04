# 🎨 Customization Guide - Step by Step

This guide will walk you through customizing your portfolio website with your actual information.

## 🚀 Quick Start (5 Minutes)

### Step 1: Update Your Name & Basic Info

**File: `components/Hero.tsx`**
```typescript
// Line 42: Change this
<span className="text-gradient">Your Name</span>
// To:
<span className="text-gradient">Ananya Kumar</span>

// Line 51-52: Update tagline
Data Engineer • Automation Architect • AI/ML Specialist
// To your actual title

// Line 59-61: Update description
Building intelligent data pipelines and automation systems that scale.
Transforming raw data into actionable insights with cutting-edge ML.
```

**File: `components/Footer.tsx`**
```typescript
// Line 19: Update name
Your Name
// To:
Ananya Kumar

// Line 28: Update your personal quote
"Data is the new oil, but only if refined properly."
```

### Step 2: Update Social Links

Search and replace these URLs across all files:
- `https://github.com/yourusername` → Your actual GitHub URL
- `https://linkedin.com/in/yourusername` → Your actual LinkedIn URL
- `your.email@example.com` → Your actual email
- `https://twitter.com/yourusername` → Your actual Twitter URL

**Files to update:**
- `components/Hero.tsx` (lines 86-104)
- `components/Contact.tsx` (lines 65-132)
- `components/Footer.tsx` (lines 51-81)

### Step 3: Update Contact Form

**File: `components/Contact.tsx`**

Replace the placeholder form submission (lines 26-35) with a real service:

**Option A: Using Formspree (Easiest)**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } else {
      setSubmitStatus('error')
    }
  } catch (error) {
    setSubmitStatus('error')
  } finally {
    setIsSubmitting(false)
    setTimeout(() => setSubmitStatus('idle'), 5000)
  }
}
```

**Option B: Using EmailJS**
```bash
npm install @emailjs/browser
```

```typescript
import emailjs from '@emailjs/browser'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    )
    setSubmitStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
  } catch (error) {
    setSubmitStatus('error')
  } finally {
    setIsSubmitting(false)
    setTimeout(() => setSubmitStatus('idle'), 5000)
  }
}
```

---

## 📊 Content Customization

### Projects Section

**File: `components/Projects.tsx`**

Replace the projects array (lines 8-77) with your actual projects:

```typescript
const projects = [
  {
    id: 1,
    title: 'Your Real Project Name',
    category: 'Data Engineering', // or 'AI/ML' or 'Automation'
    tags: ['Python', 'Spark', 'AWS'], // Your actual tech stack
    description: 'Short one-line description',
    longDescription: 'Detailed description with impact and results',
    image: '/projects/project-1.jpg', // Add real image
    github: 'https://github.com/yourusername/project',
    demo: 'https://your-demo-url.com',
    metrics: ['10M+ events/day', '99.9% uptime', '<1s latency']
  },
  // Add more projects...
]
```

### About Section

**File: `components/About.tsx`**

**Update Skills (lines 8-28):**
```typescript
const skills = [
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Your actual description of what you do',
    tags: ['Your', 'Actual', 'Tech', 'Stack'], // Update these
    color: 'from-primary-400 to-primary-600'
  },
  // Update other skills...
]
```

**Update Journey Timeline (lines 30-47):**
```typescript
const journey = [
  {
    year: '2024',
    title: 'Your Current Position',
    company: 'Your Current Company',
    description: 'What you actually do in this role'
  },
  // Add your actual career history...
]
```

**Update Tech Stack (lines 141-144):**
```typescript
{['Your', 'Actual', 'Technologies', 'Python', 'SQL', 'etc.'].map((tech) => (
  // ...
))}
```

### Blog Posts

**File: `components/Blog.tsx`**

Replace blog posts array (lines 8-102) with your actual articles:

```typescript
const blogPosts = [
  {
    id: 1,
    title: 'Your Actual Blog Post Title',
    excerpt: 'Brief summary of your article',
    category: 'Data Engineering', // or 'AI/ML', 'Automation', 'Infrastructure'
    date: '2024-01-15', // Actual publish date
    readTime: '8 min read',
    tags: ['Relevant', 'Tags'],
    image: '📊', // Or use real image: '/blog/post-1.jpg'
    link: 'https://medium.com/@you/your-article' // Real link
  },
  // Add more posts...
]
```

### AI/ML Experiments

**File: `components/AIExperiments.tsx`**

Update experiments array (lines 8-76):

```typescript
const experiments = [
  {
    id: 1,
    title: 'Your Actual ML Project',
    category: 'Computer Vision', // or 'NLP', 'Time Series', etc.
    description: 'Brief description',
    details: 'Detailed explanation with methodology and results',
    tags: ['PyTorch', 'YOLOv8', 'etc.'],
    metrics: ['95% accuracy', '100+ FPS', 'Real metric'],
    notebook: 'https://github.com/you/notebook', // Real link
    demo: 'https://your-demo.com',
    image: '🎯' // Or emoji that represents the project
  },
  // Add more experiments...
]
```

**Update Achievements (lines 227-241):**
```typescript
<div className="text-2xl font-bold text-gradient mb-2">Top 5%</div>
<div className="text-gray-400">Your Actual Achievement</div>
```

### Dashboards

**File: `components/Dashboards.tsx`**

Update dashboards array (lines 7-45) and add real embed URLs:

```typescript
const dashboards = [
  {
    id: 1,
    title: 'Your Dashboard Name',
    description: 'What this dashboard shows',
    type: 'Power BI', // or 'Tableau', 'Streamlit', 'Grafana'
    embedUrl: 'YOUR_ACTUAL_EMBED_URL',
    tags: ['Power BI', 'SQL', 'Python'],
    metrics: ['Real-time', '50+ KPIs', 'Actual metrics']
  },
  // Add more dashboards...
]
```

**To embed a real dashboard (around line 150):**
```typescript
// Replace the placeholder div with:
<iframe
  src={selectedDashboard.embedUrl}
  width="100%"
  height="600"
  frameBorder="0"
  allowFullScreen
  className="rounded-lg"
/>
```

---

## 🖼️ Adding Images

### Step 1: Create Image Folders

```bash
mkdir -p public/projects
mkdir -p public/blog
mkdir -p public/dashboards
mkdir -p public/profile
```

### Step 2: Add Your Images

Place your images in the appropriate folders:
- `public/projects/project-1.jpg`
- `public/blog/post-1.jpg`
- `public/profile/avatar.jpg`

### Step 3: Update Image References

**In Projects:**
```typescript
image: '/projects/real-time-pipeline.jpg'
```

**In Blog:**
```typescript
image: '/blog/airflow-tutorial.jpg'
```

**For Hero Section (optional profile image):**
```typescript
// Add to Hero.tsx
<Image
  src="/profile/avatar.jpg"
  alt="Your Name"
  width={200}
  height={200}
  className="rounded-full"
/>
```

---

## 🎨 Color Customization

**File: `tailwind.config.js`**

Change the color palette (lines 9-44):

```javascript
colors: {
  primary: {
    // Change these hex values to your preferred primary color
    500: '#06aed6', // Main primary color
    400: '#22c9f0',
    600: '#088ab3',
  },
  accent: {
    // Change these hex values to your preferred accent color
    500: '#a855f7', // Main accent color
    400: '#c084fc',
    600: '#9333ea',
  },
}
```

**Popular Color Combinations:**
- **Tech Blue/Green**: Primary: #00d4ff, Accent: #00ff88
- **Purple/Pink**: Primary: #8b5cf6, Accent: #ec4899
- **Orange/Blue**: Primary: #f97316, Accent: #3b82f6

---

## 📱 SEO & Metadata

**File: `app/layout.tsx`**

Update metadata (lines 7-10):

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Data Engineer & AI/ML Specialist',
  description: 'Your actual professional summary and what you do',
}
```

**Add more metadata:**
```typescript
export const metadata: Metadata = {
  title: 'Your Name | Data Engineer & AI/ML Specialist',
  description: 'Your professional summary',
  keywords: ['Data Engineering', 'AI/ML', 'Your', 'Keywords'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Name - Portfolio',
    description: 'Your summary',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@yourusername',
  },
}
```

---

## 🔧 Advanced Customization

### Add Google Analytics

1. Install package:
```bash
npm install @next/third-parties
```

2. Update `app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

### Add Resume Download

**File: `components/Hero.tsx`**

Add a resume download button:
```typescript
<motion.a
  href="/resume.pdf"
  download
  className="px-8 py-4 glass-effect rounded-lg text-white font-semibold"
>
  Download Resume
</motion.a>
```

Place your `resume.pdf` in the `public` folder.

---

## ✅ Pre-Launch Checklist

- [ ] Updated name everywhere
- [ ] Updated all social links
- [ ] Configured contact form
- [ ] Replaced all placeholder projects
- [ ] Added real project images
- [ ] Updated blog posts with real articles
- [ ] Updated AI/ML experiments
- [ ] Added dashboard embeds
- [ ] Updated About section (bio, skills, journey)
- [ ] Updated tech stack
- [ ] Changed colors (if desired)
- [ ] Added SEO metadata
- [ ] Tested contact form
- [ ] Tested on mobile
- [ ] Tested all external links
- [ ] Added resume PDF (optional)
- [ ] Added Google Analytics (optional)
- [ ] Run `npm run build` successfully
- [ ] Deployed to Vercel/Netlify

---

## 🚀 Deployment

### Deploy to Vercel

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

### Custom Domain (Optional)

1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

---

**Need help? Check the main README.md or create an issue on GitHub!**
