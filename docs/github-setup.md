# GitHub Repository Setup Guide

This guide covers the recommended GitHub repository configuration for optimal security, collaboration, and deployment automation.

## 🛡️ Branch Protection Setup

### Required Configuration

Navigate to **Settings → Branches → Add rule** and configure the `main` branch:

#### 1. Basic Protection
- ✅ **Require a pull request before merging**
  - Require approvals: `1`
  - ✅ Dismiss stale pull request approvals when new commits are pushed
  - ✅ Require review from code owners (if CODEOWNERS file exists)

#### 2. Status Check Requirements
- ✅ **Require status checks to pass before merging**
  - ✅ Require branches to be up to date before merging
  - Required status checks:
    - `Quality Checks` (from our GitHub Actions workflow)

#### 3. Additional Restrictions
- ✅ **Restrict pushes that create files larger than 100MB**
- ✅ **Do not allow bypassing the above settings**
- ❌ **Allow force pushes** (keep disabled)
- ❌ **Allow deletions** (keep disabled)

### Implementation Steps

1. **Go to Repository Settings**
   ```
   GitHub Repository → Settings → Branches
   ```

2. **Add Branch Protection Rule**
   - Branch name pattern: `main`
   - Apply the configuration above

3. **Verify Protection**
   - Try to push directly to main (should be blocked)
   - Create a test PR to verify workflow

## 🔐 Secrets Management

### Required Secrets

Navigate to **Settings → Secrets and variables → Actions**:

#### Repository Secrets
- `AZURE_STATIC_WEB_APPS_API_TOKEN_GRAY_FOREST_08A31831E`
  - **Source**: Azure Portal → Static Web App → Deployment token
  - **Usage**: Automated deployment to Azure
  - **Rotation**: Regenerate monthly or when exposed

#### Environment Secrets (Optional)
If using GitHub Environments for additional protection:

- **Production Environment**
  - Same Azure token
  - Protection rules: Required reviewers for production deployments

- **Preview Environment**
  - Same Azure token (Azure handles environment separation)
  - No additional protection rules needed

### Secret Rotation Process

1. **Generate New Token**
   ```
   Azure Portal → Static Web App → Deployment token → Reset token
   ```

2. **Update GitHub Secret**
   ```
   GitHub Repository → Settings → Secrets → Actions
   Select secret → Update value
   ```

3. **Verify Deployment**
   - Push a test change
   - Monitor workflow execution
   - Confirm successful deployment

## 👥 Team Collaboration Setup

### Repository Access Levels

#### Admin Access
- Repository owners
- DevOps/Infrastructure team
- Can modify settings, secrets, and branch protection

#### Write Access
- Core development team
- Can create branches, open PRs, and review code
- Cannot push directly to protected branches

#### Read Access
- Stakeholders, designers, content team
- Can view code, open issues, participate in discussions
- Cannot modify code directly

### Code Review Process

#### 1. Pull Request Template
Create `.github/pull_request_template.md`:

```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] Code passes quality checks (`npm run quality`)
- [ ] Tested locally (`npm run preview`)
- [ ] Preview environment reviewed

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated if needed
- [ ] No console errors or warnings
```

#### 2. Review Guidelines
- **Response Time**: Reviews within 24 hours
- **Focus Areas**: Code quality, accessibility, performance
- **Approval Required**: At least 1 approving review
- **Quality Gates**: All automated checks must pass

## 🔧 Workflow Configuration

### Environment Setup

#### 1. GitHub Environments (Optional but Recommended)

Create environments for better deployment control:

**Production Environment:**
- **Protection Rules**: 
  - Required reviewers: 1 (for sensitive changes)
  - Wait timer: 0 minutes
- **Environment Secrets**: Same Azure token
- **Deployment Branch**: `main` only

**Preview Environment:**
- **Protection Rules**: None (automatic for PRs)
- **Environment Secrets**: Same Azure token
- **Deployment Branch**: Any branch with PR

#### 2. Workflow Permissions

Default permissions in `.github/workflows/`:
```yaml
permissions:
  contents: read      # Read repository contents
  pull-requests: write # Comment on PRs with deployment URLs
  id-token: write     # For future OIDC integration
```

### Notification Setup

#### 1. GitHub Notifications
Configure notifications for:
- Failed workflow runs
- PR reviews required
- Security alerts
- Dependency updates

#### 2. Integration Options
- **Slack**: GitHub app for team notifications
- **Email**: Digest for non-urgent updates
- **Mobile**: GitHub mobile app for critical alerts

## 📊 Monitoring & Analytics

### Repository Insights

Monitor repository health through:

#### 1. Actions Tab
- Workflow success/failure rates
- Build duration trends
- Quality check results

#### 2. Insights Tab
- Code frequency (commits, PRs)
- Contributor activity
- Traffic analytics

#### 3. Security Tab
- Dependency vulnerabilities
- Secret scanning alerts
- Code scanning results (if enabled)

### Key Metrics to Track

- **Deployment Success Rate**: Target >95%
- **Mean Time to Deploy**: Target <10 minutes
- **PR Review Time**: Target <24 hours
- **Build Reliability**: Zero false negatives

## 🚨 Incident Response

### Deployment Failures

#### 1. Immediate Actions
```bash
# Check workflow logs
GitHub → Actions → Failed workflow → Review logs

# Verify local build
npm run quality

# Check Azure status
Azure Portal → Static Web App → Overview
```

#### 2. Quick Recovery
```bash
# Revert to last known good commit
git revert <commit-hash>
git push origin main

# Or rollback in Azure (if needed)
Azure Portal → Static Web App → Functions → Rollback
```

### Security Incidents

#### 1. Exposed Secrets
```bash
# Immediately rotate compromised secrets
Azure Portal → Deployment token → Reset

# Update GitHub secret
GitHub → Settings → Secrets → Update

# Review access logs
GitHub → Settings → Audit log
```

#### 2. Unauthorized Access
```bash
# Review repository access
GitHub → Settings → Manage access

# Check recent activity
GitHub → Insights → Traffic/Activity

# Enable additional security
GitHub → Settings → Security → Enable all options
```

## 🔄 Maintenance Tasks

### Weekly Tasks
- [ ] Review failed workflows and resolve issues
- [ ] Monitor build performance metrics
- [ ] Update dependencies (`npm audit`)
- [ ] Review open PRs for staleness

### Monthly Tasks
- [ ] Rotate Azure deployment token
- [ ] Review and update branch protection rules
- [ ] Analyze repository insights and metrics
- [ ] Update documentation as needed

### Quarterly Tasks
- [ ] Security audit of repository settings
- [ ] Review team access permissions
- [ ] Evaluate workflow performance and optimization
- [ ] Update deployment and recovery procedures

## 📚 Additional Resources

### GitHub Documentation
- [About branch protection rules](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)
- [Managing secrets in GitHub Actions](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Using environments for deployment](https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment)

### Azure Static Web Apps
- [Deployment tokens](https://docs.microsoft.com/en-us/azure/static-web-apps/deployment-token-management)
- [Custom domains](https://docs.microsoft.com/en-us/azure/static-web-apps/custom-domain)
- [Environment variables](https://docs.microsoft.com/en-us/azure/static-web-apps/application-settings)

### Security Best Practices
- [GitHub security best practices](https://docs.github.com/en/code-security/getting-started/securing-your-repository)
- [Dependency management](https://docs.github.com/en/code-security/dependabot)
- [Secret scanning](https://docs.github.com/en/code-security/secret-scanning)
