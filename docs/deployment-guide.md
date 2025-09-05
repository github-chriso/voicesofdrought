# Deployment Guide

This comprehensive deployment guide ensures consistent, reliable deployments with proper rollback capabilities and zero-downtime deployment strategies.

## 🚀 Quick Deployment Summary

**Static Export Location:** `dist/` folder  
**Build Command:** `npm run build`  
**Deployment-Ready:** Yes ✅  
**Rollback Strategy:** Folder-based versioning  

## 📁 Folder Structure

```
dist/                           # Static export ready for deployment
├── _next/                     # Next.js optimized assets
│   ├── static/css/           # Compiled CSS
│   ├── static/js/            # JavaScript bundles
│   └── static/chunks/        # Code-split chunks
├── 404/                       # Custom 404 page
├── 404.html                   # Fallback 404
├── index.html                 # Main landing page
└── [static assets]            # Images, fonts, etc.
```

## 🔄 Deployment Pipeline

### 1. Pre-Deployment Checklist

```bash
# Run quality checks
npm run quality

# Verify components work correctly
npm run dev
# Test on http://localhost:9002

# Clean previous builds
npm run clean

# Create fresh production build
npm run build
```

### 2. Build Verification

```bash
# Verify dist folder exists
ls -la dist/

# Check critical files
ls -la dist/index.html
ls -la dist/_next/static/css/
ls -la dist/_next/static/chunks/

# Optional: Test locally
npm run preview
```

### 3. Deployment Process

#### Option A: Azure Static Web Apps (Current)

**Automatic Deployment via GitHub Actions:**

```yaml
# .github/workflows/deploy.yml (existing)
- name: Build
  run: npm run build

- name: Deploy
  uses: Azure/static-web-apps-deploy@v1
  with:
    app_location: "/"
    api_location: ""
    output_location: "dist"
```

**Manual Deployment:**
```bash
# Using Azure CLI
az staticwebapp deploy --name your-app --resource-group your-rg --source dist/
```

#### Option B: Traditional Web Hosting

```bash
# Upload entire dist/ folder contents to web root
rsync -av dist/ user@server:/var/www/html/
```

#### Option C: CDN Deployment

```bash
# AWS S3 + CloudFront
aws s3 sync dist/ s3://your-bucket --delete
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"

# Cloudflare Pages
# Simply connect GitHub repo, set build command to "npm run build", output to "dist"
```

## 🔄 Rollback Strategy

### Version-Based Deployment

```bash
# Create timestamped deployment folder
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
mkdir -p deployments/$TIMESTAMP
cp -r dist/* deployments/$TIMESTAMP/

# Deploy new version
rsync -av deployments/$TIMESTAMP/ user@server:/var/www/html/

# Keep last 5 deployments for rollback
ls -t deployments/ | tail -n +6 | xargs -I {} rm -rf deployments/{}
```

### Quick Rollback Process

```bash
# List available versions
ls -la deployments/

# Rollback to specific version
ROLLBACK_VERSION="20240905_140000"
rsync -av deployments/$ROLLBACK_VERSION/ user@server:/var/www/html/

# Verify rollback
curl -I https://your-domain.com/
```

### Blue-Green Deployment

```bash
# Deploy to staging environment first
rsync -av dist/ user@server:/var/www/staging/

# Test staging environment
curl -I https://staging.your-domain.com/

# If tests pass, promote to production
rsync -av /var/www/staging/ user@server:/var/www/html/
```

## 🛡 Zero-Downtime Deployment

### Atomic Deployment Strategy

```bash
# Create temporary deployment folder
TEMP_DIR="/var/www/temp_$(date +%s)"
rsync -av dist/ user@server:$TEMP_DIR/

# Atomic swap (almost instantaneous)
ssh user@server "mv /var/www/html /var/www/old && mv $TEMP_DIR /var/www/html"

# Cleanup old version after verification
ssh user@server "rm -rf /var/www/old"
```

### Load Balancer Strategy

```bash
# Remove server from load balancer
# Deploy new version
# Add server back to load balancer
# Repeat for each server
```

## 🔍 Health Checks

### Pre-Deployment Validation

```bash
# Check all critical files exist
test -f dist/index.html || { echo "Missing index.html"; exit 1; }
test -d dist/_next/static || { echo "Missing static assets"; exit 1; }
test -f dist/404.html || { echo "Missing 404 page"; exit 1; }

# Check file sizes (detect build issues)
INDEX_SIZE=$(stat -f%z dist/index.html 2>/dev/null || stat -c%s dist/index.html 2>/dev/null)
if [ $INDEX_SIZE -lt 10000 ]; then
  echo "Index.html seems too small ($INDEX_SIZE bytes)"
  exit 1
fi

echo "✅ Pre-deployment validation passed"
```

### Post-Deployment Verification

```bash
# Basic connectivity
curl -I https://your-domain.com/

# Check critical pages
curl -f https://your-domain.com/ > /dev/null
curl -f https://your-domain.com/404 > /dev/null

# Performance check
curl -o /dev/null -s -w "Time: %{time_total}s\n" https://your-domain.com/

echo "✅ Post-deployment verification passed"
```

## 📊 Monitoring & Alerts

### Key Metrics to Monitor

- **Response Time**: < 2 seconds
- **Uptime**: > 99.9%
- **Error Rate**: < 0.1%
- **Build Success Rate**: > 99%

### Automated Monitoring Script

```bash
#!/bin/bash
# monitor-deployment.sh

DOMAIN="https://your-domain.com"
SLACK_WEBHOOK="your-webhook-url"

# Check site availability
if ! curl -f $DOMAIN > /dev/null 2>&1; then
    curl -X POST -H 'Content-type: application/json' \
        --data '{"text":"🚨 Site Down: '$DOMAIN' is not responding"}' \
        $SLACK_WEBHOOK
    exit 1
fi

# Check performance
RESPONSE_TIME=$(curl -o /dev/null -s -w "%{time_total}" $DOMAIN)
if (( $(echo "$RESPONSE_TIME > 3.0" | bc -l) )); then
    curl -X POST -H 'Content-type: application/json' \
        --data '{"text":"⚠️ Slow Response: '$DOMAIN' took '$RESPONSE_TIME's"}' \
        $SLACK_WEBHOOK
fi

echo "✅ Monitoring check passed at $(date)"
```

## 🔒 Security Considerations

### Content Security Policy

Since this is a static site, configure CSP headers at the hosting level:

```
Content-Security-Policy: 
  default-src 'self'; 
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net; 
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
  font-src 'self' https://fonts.gstatic.com; 
  img-src 'self' data: https:; 
  connect-src 'self' https:;
```

### Additional Security Headers

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

## 🚨 Emergency Procedures

### Immediate Response Actions

1. **Site Down**
   ```bash
   # Quick rollback to last known good version
   rsync -av deployments/$(ls deployments/ | tail -2 | head -1)/ user@server:/var/www/html/
   ```

2. **Critical Bug**
   ```bash
   # Emergency maintenance page
   echo "<h1>Maintenance</h1><p>We'll be back shortly.</p>" > maintenance.html
   rsync maintenance.html user@server:/var/www/html/index.html
   ```

3. **Performance Issues**
   ```bash
   # Enable CDN/caching
   # Scale up hosting resources
   # Investigate via logs
   ```

### Communication Template

```
Subject: [URGENT] Website Issue - Voices of Drought

Issue: [Brief description]
Impact: [User-facing impact]
Status: [Investigating/Resolving/Resolved]
ETA: [Expected resolution time]
Actions: [What's being done]

Updates will be provided every 15 minutes.
```

## 📈 Performance Optimization

### Build Optimization

```bash
# Analyze bundle size
npx @next/bundle-analyzer

# Check for unused dependencies
npx depcheck

# Optimize images
npx @squoosh/cli --webp '{quality:80}' static/images/*.jpg
```

### CDN Configuration

```bash
# Cache static assets for 1 year
Cache-Control: public, max-age=31536000, immutable

# Cache HTML for 1 hour
Cache-Control: public, max-age=3600
```

## 🧪 Testing Strategy

### Pre-Production Testing

```bash
# Unit tests (when implemented)
npm test

# E2E tests (when implemented)  
npm run e2e

# Accessibility testing
npm run a11y

# Performance testing
npm run lighthouse
```

### Staging Environment

```bash
# Deploy to staging first
rsync -av dist/ user@server:/var/www/staging/

# Run smoke tests
npm run test:smoke https://staging.your-domain.com

# Manual QA checklist
- [ ] All pages load correctly
- [ ] All forms work
- [ ] All links are functional
- [ ] Mobile responsiveness
- [ ] Cross-browser compatibility
```

## 📋 Deployment Checklist

### Pre-Deployment
- [ ] Code reviewed and approved
- [ ] Quality checks passed (`npm run quality`)
- [ ] Changes tested in development
- [ ] Build completed successfully
- [ ] Static export verified
- [ ] Backup of current production created

### During Deployment
- [ ] Health checks passing
- [ ] No errors in build process
- [ ] All static assets uploaded
- [ ] CDN cache invalidated (if applicable)
- [ ] SSL certificate valid

### Post-Deployment
- [ ] Site loads correctly
- [ ] All functionality tested
- [ ] Performance within acceptable range
- [ ] Monitoring alerts configured
- [ ] Team notified of successful deployment
- [ ] Documentation updated

## 🔧 Troubleshooting

### Common Issues

**Build Fails:**
```bash
# Clear caches and rebuild
npm run clean
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Missing Static Assets:**
```bash
# Verify Next.js config
cat next.config.ts | grep -A 10 "images:"
```

**404 Errors:**
```bash
# Check routing configuration
ls -la dist/404.html
curl -I https://your-domain.com/nonexistent-page
```

**Performance Issues:**
```bash
# Check bundle sizes
ls -lh dist/_next/static/chunks/

# Analyze loading times
curl -w "@curl-format.txt" -o /dev/null -s https://your-domain.com/
```

### Support Contacts

- **Technical Issues**: Create GitHub issue
- **Deployment Issues**: Check CI/CD logs
- **Emergency**: Use emergency procedures above

---

This deployment guide ensures reliable, repeatable deployments with proper rollback capabilities and comprehensive monitoring. Always test deployments in staging first and have a rollback plan ready.