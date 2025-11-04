# ⚡ Quick Start - Get Your Portfolio Live in 30 Minutes

Follow these steps to customize and deploy your portfolio website quickly.

## 🎯 Step 1: Update Your Name (2 minutes)

Open these files and replace "Your Name" with your actual name:

1. **`components/Hero.tsx`** - Line 42
2. **`components/Footer.tsx`** - Lines 19, 96
3. **`components/Navigation.tsx`** - Line 27 (optional)

**Quick Find & Replace:**
- Press `Cmd+Shift+F` (Mac) or `Ctrl+Shift+F` (Windows)
- Find: `Your Name`
- Replace: `Ananya Kumar` (or your name)
- Replace All

---

## 🔗 Step 2: Update Social Links (5 minutes)

**Find & Replace these URLs:**

```
Find: https://github.com/yourusername
Replace: https://github.com/YOUR_ACTUAL_USERNAME

Find: https://linkedin.com/in/yourusername
Replace: https://linkedin.com/in/YOUR_ACTUAL_USERNAME

Find: your.email@example.com
Replace: your.actual.email@example.com
```

**Files affected:** Hero.tsx, Contact.tsx, Footer.tsx

---

## 📧 Step 3: Setup Contact Form (5 minutes)

### Option A: Formspree (Easiest)

1. Go to [formspree.io](https://formspree.io)
2. Sign up (free)
3. Create a new form
4. Copy your form ID (looks like: `abc123xyz`)

5. Update `components/Contact.tsx` (lines 26-35):

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

### Option B: Skip for Now
Leave the placeholder code - it simulates form submission for demo purposes.

---

## 🎨 Step 4: Customize Content (10 minutes)

### Update Your Bio
**File: `components/About.tsx`** - Line 63

Replace the placeholder bio with your actual professional summary.

### Update Your Journey
**File: `components/About.tsx`** - Lines 30-47

Update the timeline with your actual career history:
```typescript
const journey = [
  {
    year: '2024',
    title: 'Senior Data Engineer',
    company: 'Your Current Company',
    description: 'What you actually do'
  },
  // Add more positions...
]
```

### Update Tech Stack
**File: `components/About.tsx`** - Lines 141-144

Replace with technologies you actually use.

---

## 🚀 Step 5: Deploy to Vercel (8 minutes)

### A. Push to GitHub

```bash
# In terminal, navigate to your project folder
cd "/Users/ukumar/Documents/Ananya Portfolio"

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio website"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### B. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Import Project"
4. Select your portfolio repository
5. Click "Deploy"
6. Wait 2 minutes - Done! 🎉

Your site will be live at: `your-portfolio.vercel.app`

---

## ✅ You're Live!

Your portfolio is now online! Here's what to do next:

### Immediate Next Steps:
1. Test your live site on mobile
2. Test the contact form
3. Share the link with friends for feedback

### This Week:
1. Add 2-3 real projects (replace placeholders)
2. Add real blog post links
3. Update AI/ML experiments with actual work

### This Month:
1. Add project images
2. Write custom blog posts
3. Get a custom domain (optional)
4. Add Google Analytics

---

## 🎯 Priority Customizations

**Must Do (Before sharing widely):**
- [x] Name updated
- [x] Social links updated
- [x] Contact form working
- [ ] Add 3 real projects
- [ ] Update About bio
- [ ] Add real blog posts

**Should Do (This week):**
- [ ] Add project images
- [ ] Update all 6 projects
- [ ] Customize colors (optional)
- [ ] Add resume PDF

**Nice to Have (When you have time):**
- [ ] Custom domain
- [ ] Google Analytics
- [ ] More blog posts
- [ ] Dashboard embeds
- [ ] All 6 AI/ML experiments

---

## 🆘 Need Help?

### Common Issues:

**Q: Build fails with "Module not found"**
```bash
rm -rf node_modules .next
npm install
npm run dev
```

**Q: Contact form doesn't work**
- Make sure you updated the Formspree URL
- Check browser console for errors
- Test with a real email address

**Q: Site looks broken on mobile**
- Clear browser cache
- Test in incognito mode
- Check browser console for errors

**Q: How do I add images?**
1. Create folder: `public/projects`
2. Add your images there
3. Reference as: `/projects/image.jpg`

### Resources:
- Full customization guide: `CUSTOMIZATION_GUIDE.md`
- Deployment guide: `DEPLOYMENT.md`
- Placeholder locations: `PLACEHOLDER_LOCATIONS.md`
- Main README: `README.md`

---

## 🎉 Congratulations!

You now have a professional portfolio website live on the internet!

**Share it:**
- Add to LinkedIn profile
- Share on Twitter
- Add to resume
- Send to recruiters

**Next Steps:**
- Keep adding projects as you build them
- Write blog posts about your work
- Update regularly (at least quarterly)
- Monitor analytics to see who visits

---

**Your portfolio URL:** `https://your-portfolio.vercel.app`

**Time to customize:** ~30 minutes
**Time to deploy:** ~8 minutes
**Total:** Less than 1 hour to a professional portfolio! 🚀
