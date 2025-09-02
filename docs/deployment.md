# Deployment Guide

This document covers the deployment strategy, workflow configuration, and best practices for the Voices of Drought Landing Page.

## 🏗️ Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   GitHub Repo   │───▶│ GitHub Actions  │───▶│ Azure Static    │
│                 │    │ CI/CD Pipeline  │    │ Web Apps        │
│ • Source Code   │    │ • Quality Check │    │ • Production    │
│ • Workflows     │    │ • Build & Test  │    │ • PR Previews   │
│ • Branch Protect│    │ • Deploy        │    │ • SSL & CDN     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🔄 CI/CD Pipeline

### Pipeline Stages

1. **Quality Checks** (Parallel to deployment preparation)
   - TypeScript compilation check
   - ESLint code quality validation
   - Test build to ensure no build errors

2. **Build & Deploy** (Only runs if quality checks pass)
   - Node.js 20 environment setup
   - Dependency installation with npm caching
   - Next.js static export build (`dist/` directory)
   - Azure Static Web Apps deployment

3. **Environment Management**
   - **Production**: Deploys on push to `main` branch
   - **Preview**: Creates temporary environments for pull requests
   - **Cleanup**: Removes preview environments when PRs are closed

### Workflow Configuration

```yaml
# .github/workflows/azure-static-web-apps-gray-forest-08a31831e.yml

# Key Features:
- Concurrency control to prevent deployment conflicts
- Quality gates before deployment
- Environment-specific deployments
- Automatic preview environment cleanup
- Node.js dependency caching for faster builds
```

## 🌟 Best Practices Implemented

### 1. Build Output Management
- **Clear naming**: Uses `dist/` instead of default `out/` for clarity
- **Consistent paths**: All configs align on `dist/` output directory
- **Clean builds**: Added `clean` script to remove build artifacts

### 2. Quality Assurance
- **Pre-deployment checks**: TypeScript, ESLint, and build validation
- **Fail-fast approach**: Deployment only proceeds if quality checks pass
- **Automated linting**: Available via `npm run lint:fix`

### 3. Developer Experience
- **Local preview**: `npm run preview` for testing production builds
- **Quality shortcut**: `npm run quality` runs all checks at once
- **Development server**: Turbopack-enabled dev server on port 9002

### 4. Security & Performance
- **Dependency caching**: Faster CI builds with npm cache
- **Concurrent deployment protection**: Prevents conflicting deployments
- **Environment isolation**: Production and preview environments are separate
- **Security headers**: Configured via Azure Static Web Apps (hosting provider level)

## 🔐 Security Configuration

### Branch Protection (Recommended Setup)

Configure the following branch protection rules for `main`:

1. **Require pull request reviews before merging**
   - Required reviewers: 1
   - Dismiss stale reviews when new commits are pushed

2. **Require status checks to pass before merging**
   - Required checks: `Quality Checks` job
   - Require branches to be up to date before merging

3. **Restrict pushes that create files larger than 100MB**

4. **Do not allow bypassing the above settings**

### Secrets Management

Required GitHub Secrets:
- `AZURE_STATIC_WEB_APPS_API_TOKEN_GRAY_FOREST_08A31831E`: Azure deployment token

### Azure Configuration

**Static Web App Settings:**
- **Source**: GitHub repository
- **Branch**: `main`
- **Build Preset**: None (handled by GitHub Actions)
- **App Location**: `/`
- **Output Location**: `dist`
- **API Location**: `` (empty - no API)

## 🔄 Deployment Workflow

### Standard Development Workflow

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/new-feature
   # Make changes...
   git add .
   git commit -m "feat: add new feature"
   git push origin feature/new-feature
   ```

2. **Open Pull Request**
   - GitHub Actions runs quality checks
   - Creates preview environment if checks pass
   - Review preview URL in PR comments

3. **Review & Merge**
   - Code review process
   - Quality checks must pass
   - Merge to `main` triggers production deployment

4. **Production Deployment**
   - Automatic deployment to production environment
   - Preview environments cleaned up

### Emergency Hotfix Workflow

For critical production fixes:

1. **Create Hotfix Branch from Main**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b hotfix/critical-fix
   ```

2. **Fast-track Review**
   - Minimal, focused changes
   - Expedited review process
   - Direct merge to `main`

## 🔧 Configuration Alignment

All configuration files are aligned for consistent build output:

### `next.config.ts`
```typescript
{
  output: 'export',
  distDir: 'dist',  // ← Custom output directory
  // ... other config
}
```

### GitHub Actions Workflow
```yaml
- name: Deploy to Azure Static Web Apps
  with:
    output_location: "dist"  # ← Matches Next.js output
```

### Package.json Scripts
```json
{
  "build": "next build",      // ← Outputs to dist/
  "preview": "npm run build && npx serve dist"  // ← Serves from dist/
}
```

## 📊 Monitoring & Troubleshooting

### Build Monitoring

Monitor the following metrics:
- **Build Success Rate**: Should be >95%
- **Build Duration**: Typically 2-4 minutes
- **Quality Check Pass Rate**: Should be 100%

### Common Issues & Solutions

**Issue**: Build fails with TypeScript errors
**Solution**: Run `npm run typecheck` locally before pushing

**Issue**: Deployment token expires
**Solution**: Regenerate token in Azure Portal, update GitHub secret

**Issue**: Preview environment not created
**Solution**: Check that PR targets `main` branch and quality checks pass

**Issue**: Build artifacts missing
**Solution**: Verify `dist/` directory is created during build, check `next.config.ts`

### Debugging Commands

```bash
# Local quality check (mimics CI)
npm run quality

# Local build verification
npm run build && ls -la dist/

# Local preview (tests production build)
npm run preview

# Clean slate rebuild
npm run clean && npm install && npm run build
```

## 🔄 Backup & Recovery

### Repository Backups
- **Primary**: GitHub repository with full git history
- **Workflow**: All deployment configurations in version control
- **Dependencies**: `package-lock.json` ensures reproducible builds

### Deployment Recovery
1. **Quick Rollback**: Deploy previous commit hash
2. **Full Recovery**: Clone repository and redeploy
3. **Configuration Recovery**: All settings stored in repository

### Data Protection
- **Static Assets**: Stored in repository and deployed artifacts
- **Configuration**: Version controlled in repository
- **Secrets**: Managed through GitHub Secrets (regenerable)

## 📈 Performance Optimization

### Build Performance
- **Dependency Caching**: Reduces install time by ~60%
- **Parallel Jobs**: Quality checks run independently
- **Incremental Builds**: Next.js caching optimizations

### Runtime Performance
- **Static Export**: Zero server-side processing needed
- **CDN Distribution**: Azure Static Web Apps global CDN
- **Asset Optimization**: Automatic compression and optimization

## 🚀 Future Improvements

### Planned Enhancements
1. **Automated Testing**: Add unit and integration tests
2. **Performance Monitoring**: Lighthouse CI integration
3. **Security Scanning**: Dependency vulnerability checks
4. **Bundle Analysis**: Build size monitoring and optimization

### Scaling Considerations
- **Traffic Growth**: Azure Static Web Apps scales automatically
- **Feature Expansion**: Modular component architecture supports growth
- **Team Growth**: Branch protection and review processes scale with team size
