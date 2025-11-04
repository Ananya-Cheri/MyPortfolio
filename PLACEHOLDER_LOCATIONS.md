# 📍 Complete List of Placeholders to Replace

This document lists EVERY placeholder in the codebase that needs to be replaced with your actual information.

## 🔴 Critical (Must Update Before Launch)

### Personal Information

| File | Line(s) | Placeholder | Replace With |
|------|---------|-------------|--------------|
| `components/Hero.tsx` | 42 | "Your Name" | Your actual name |
| `components/Hero.tsx` | 51-52 | Tagline text | Your actual tagline |
| `components/Hero.tsx` | 59-61 | Description | Your actual description |
| `components/Hero.tsx` | 86-104 | Social links | Your GitHub, LinkedIn, Email |
| `components/Footer.tsx` | 19 | "Your Name" | Your actual name |
| `components/Footer.tsx` | 21 | Motto text | Your actual motto |
| `components/Footer.tsx` | 28 | Quote | Your personal quote |
| `components/Footer.tsx` | 51-81 | Social links | Your actual social URLs |
| `components/Footer.tsx` | 96 | Copyright name | Your name |

### Contact Information

| File | Line(s) | Placeholder | Replace With |
|------|---------|-------------|--------------|
| `components/Contact.tsx` | 65-70 | your.email@example.com | Your actual email |
| `components/Contact.tsx` | 72-82 | LinkedIn URL | Your LinkedIn profile |
| `components/Contact.tsx` | 84-94 | GitHub URL | Your GitHub profile |
| `components/Contact.tsx` | 106-132 | Social URLs | Your Twitter, etc. |
| `components/Contact.tsx` | 257 | Calendly URL | Your scheduling link |
| `components/Contact.tsx` | 26-35 | Form submission code | Real form handler |

### Navigation

| File | Line(s) | Placeholder | Replace With |
|------|---------|-------------|--------------|
| `components/Navigation.tsx` | 27 | "Portfolio" | Your name or brand |

## 🟡 Important (Content to Customize)

### About Section

| File | Line(s) | What to Update |
|------|---------|----------------|
| `components/About.tsx` | 8-28 | Skills descriptions and tech tags |
| `components/About.tsx` | 30-47 | Career journey timeline |
| `components/About.tsx` | 63 | Personal bio text |
| `components/About.tsx` | 141-144 | Complete tech stack list |

### Projects

| File | Line(s) | What to Update |
|------|---------|----------------|
| `components/Projects.tsx` | 8-77 | All 6 projects (title, description, tags, links, metrics) |
| `components/Projects.tsx` | Throughout | Project images (currently emojis) |

### Dashboards

| File | Line(s) | What to Update |
|------|---------|----------------|
| `components/Dashboards.tsx` | 7-45 | All 4 dashboards (title, description, embed URLs) |
| `components/Dashboards.tsx` | 150+ | Replace placeholder with real iframe embeds |

### AI/ML Experiments

| File | Line(s) | What to Update |
|------|---------|----------------|
| `components/AIExperiments.tsx` | 8-76 | All 6 experiments (title, description, links) |
| `components/AIExperiments.tsx` | 227-241 | Competition achievements and stats |

### Blog Posts

| File | Line(s) | What to Update |
|------|---------|----------------|
| `components/Blog.tsx` | 8-102 | All 9 blog posts (title, excerpt, links, dates) |
| `components/Blog.tsx` | 191 | "View All Articles" link |

## 🟢 Optional (Nice to Have)

### SEO & Metadata

| File | Line(s) | What to Update |
|------|---------|----------------|
| `app/layout.tsx` | 7-10 | Page title and description |

### Images

| Location | What to Add |
|----------|-------------|
| `public/projects/` | Project screenshots/images |
| `public/blog/` | Blog post images |
| `public/profile/` | Profile photo (optional) |
| `public/` | favicon.ico, og-image.jpg |

### Environment Variables

| File | What to Configure |
|------|-------------------|
| `.env.local` | Form service IDs, Analytics ID |

## 📝 Search & Replace Guide

Use your editor's search and replace feature for these common placeholders:

### Global Replacements

```
Find: "Your Name"
Replace: "Ananya Kumar" (or your actual name)

Find: your.email@example.com
Replace: your-actual-email@example.com

Find: https://github.com/yourusername
Replace: https://github.com/your-actual-username

Find: https://linkedin.com/in/yourusername
Replace: https://linkedin.com/in/your-actual-username

Find: https://twitter.com/yourusername
Replace: https://twitter.com/your-actual-username

Find: https://yourblog.com
Replace: https://your-actual-blog.com

Find: https://demo.example.com
Replace: Your actual demo URLs

Find: https://calendly.com/yourusername
Replace: Your actual Calendly link
```

## 🔍 How to Find All Placeholders

Search for these terms in your codebase:

1. `PLACEHOLDER` - All files have comments marking placeholders
2. `yourusername` - Generic username placeholders
3. `example.com` - Generic URL placeholders
4. `Your Name` - Name placeholders
5. `your.email` - Email placeholders

## ✅ Verification Checklist

After updating, verify:

- [ ] All "Your Name" instances replaced
- [ ] All social links work and point to your profiles
- [ ] Contact form submits successfully
- [ ] All project links are valid
- [ ] All blog post links work
- [ ] Email links open your email client
- [ ] No "yourusername" text remains
- [ ] No "example.com" URLs remain
- [ ] All images load (if you added them)
- [ ] Mobile view looks correct
- [ ] All sections scroll smoothly

## 🚨 Common Mistakes to Avoid

1. **Forgetting to update Footer** - Name appears in multiple places
2. **Leaving placeholder links** - Test all external links
3. **Not configuring form** - Contact form won't work without setup
4. **Missing images** - Either add real images or keep emojis
5. **Inconsistent information** - Make sure name/email match everywhere

## 💡 Pro Tip

Use VS Code's "Find in Files" (Cmd/Ctrl + Shift + F) to search for:
- `PLACEHOLDER`
- `yourusername`
- `Your Name`
- `example.com`

This will show you all remaining placeholders across all files!
