
# GitHub Setup & Deployment Guide

## 1. Connect to GitHub

### Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: Digital magazine project"
```

### Connect to GitHub Repository
```bash
# Create repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/the-educator-magazine.git
git branch -M main
git push -u origin main
```

## 2. Replit Deployment (Recommended)

### Static Deployment on Replit
1. Go to the Deployments tab in Replit
2. Select "Static Deployment"
3. Configure:
   - Build command: `npm run build`
   - Public directory: `out`
4. Deploy directly from Replit

### Custom Domain on Replit
1. Purchase domain from Namecheap
2. In Replit Deployments, add custom domain
3. Update DNS settings at Namecheap to point to Replit

## 3. Environment Variables

Create production environment variables in Replit:
```
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NODE_ENV=production
```

## 4. Pre-deployment Checklist

- [ ] Remove development-only code
- [ ] Update admin password
- [ ] Test build process
- [ ] Verify mobile responsiveness
- [ ] Check all navigation links
- [ ] Test admin functionality

## 5. Continuous Deployment

Set up automatic deployment when you push to GitHub:
1. Enable GitHub integration in Replit
2. Configure auto-deploy on main branch pushes
3. Set up build notifications

## 6. Domain Setup at Namecheap

1. Login to Namecheap
2. Go to Domain List → Manage
3. Advanced DNS → Add/Edit Records
4. Add CNAME record pointing to your Replit deployment URL

## Cost Estimate
- Domain: ~$12/year
- Replit deployment: Free tier available, paid plans from $5/month
- Total: ~$60-120/year
