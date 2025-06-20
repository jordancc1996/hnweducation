# Deployment Guide

## GitHub Codespaces Setup

### 1. Open in Codespaces
- Click "Code" → "Codespaces" → "Create codespace on main"
- Wait for automatic setup (dependencies will install automatically)

### 2. Start Development
```bash
npm run codespaces
```
- This uses `--hostname 0.0.0.0` for Codespaces networking
- Port 3000 will be automatically forwarded
- Click the forwarded port to view your website

### 3. VS Code Extensions
The following extensions will auto-install:
- Tailwind CSS IntelliSense
- Prettier
- TypeScript and JavaScript Language Features
- Auto Rename Tag
- Path Intellisense

## Vercel Deployment

### 1. Connect Repository
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Vercel will auto-detect Next.js configuration

### 2. Environment Variables (Optional)
Add these in Vercel dashboard:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_CONTACT_EMAIL=info@hnweducation.com
```

### 3. Deploy
- Vercel will automatically build and deploy
- Every push to main branch triggers a new deployment
- Preview deployments for pull requests

## Manual Deployment

### Static Export
```bash
npm run build
npm run export
```
Deploy the `out/` folder to any static hosting service.

### Server Deployment
```bash
npm run build
npm start
```
Requires Node.js server environment.

## Domain Configuration

### Custom Domain on Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed
4. SSL certificate will be automatically provisioned

### DNS Configuration
```
Type: CNAME
Name: www
Value: your-project.vercel.app

Type: A
Name: @
Value: 76.76.19.61
```

## Performance Optimization

### Image Optimization
- Images are automatically optimized by Next.js
- Use the `Image` component for best performance
- Images are served in modern formats (WebP, AVIF)

### Font Optimization
- Google Fonts are automatically optimized
- Fonts are self-hosted for better performance
- Font display swap prevents layout shift

### Bundle Analysis
```bash
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build
```

## Monitoring

### Core Web Vitals
- Monitor in Vercel Analytics dashboard
- Check Google PageSpeed Insights
- Use Lighthouse for performance audits

### Error Tracking
Consider adding:
- Sentry for error tracking
- Google Analytics for user analytics
- Vercel Analytics for performance monitoring

## Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**Build errors:**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**TypeScript errors:**
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

### Codespaces Issues

**Extensions not loading:**
- Reload VS Code window
- Check `.vscode/extensions.json`

**Port forwarding not working:**
- Use `npm run codespaces` instead of `npm run dev`
- Check port forwarding in Codespaces panel

**Slow performance:**
- Codespaces may need time to warm up
- Consider upgrading to a larger machine type

