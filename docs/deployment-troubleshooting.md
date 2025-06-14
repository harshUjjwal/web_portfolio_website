# Deployment Troubleshooting Guide

## Common Issues and Solutions

### 1. Build Failures

#### Node.js Version Issues
- Ensure Node.js version 18 is used
- Check `package.json` for engine requirements
- Verify Node.js setup in GitHub Actions

#### Dependency Issues
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`
- Run `npm ci` instead of `npm install`

#### Build Script Errors
- Check for TypeScript errors: `npm run typecheck`
- Verify all imports are correct
- Ensure all required files exist

### 2. GitHub Pages Deployment Issues

#### Base URL Configuration
- Verify `base` in `vite.config.ts` matches repository name
- Check for correct path in `package.json` homepage
- Ensure all assets use relative paths

#### Permission Issues
- Verify repository permissions
- Check GitHub Actions permissions
- Ensure secrets are properly configured

#### Deployment Token Issues
- Verify GH_PAT token has correct permissions
- Check token expiration
- Ensure token is properly set in repository secrets

### 3. Environment Variables

#### Missing Variables
- Check `.env.production` file
- Verify GitHub repository secrets
- Ensure variables are properly referenced

#### Incorrect Values
- Validate variable formats
- Check for typos
- Verify production values

### 4. Performance Issues

#### Build Size
- Check bundle size with `npm run build --report`
- Optimize large dependencies
- Use code splitting where appropriate

#### Loading Issues
- Verify asset paths
- Check for 404 errors
- Monitor Core Web Vitals

## Quick Fixes

1. **Reset Deployment**
   ```bash
   # Clear GitHub Pages cache
   git commit --allow-empty -m "Trigger deployment"
   git push origin main
   ```

2. **Force Rebuild**
   ```bash
   # Clear build artifacts
   rm -rf dist
   npm run build
   ```

3. **Check Logs**
   - Review GitHub Actions logs
   - Check browser console
   - Monitor Sentry for errors

## Monitoring

1. **GitHub Actions**
   - Check workflow runs
   - Review build logs
   - Monitor deployment status

2. **Sentry**
   - Monitor error rates
   - Check performance metrics
   - Review user feedback

3. **Web Vitals**
   - Monitor Core Web Vitals
   - Check performance scores
   - Review user experience metrics

## Rollback Procedure

1. **Quick Rollback**
   ```bash
   # Revert to last working commit
   git revert HEAD
   git push origin main
   ```

2. **Manual Rollback**
   - Download previous build
   - Upload to GitHub Pages
   - Update DNS if necessary

## Support

If issues persist:
1. Check GitHub Issues
2. Review deployment logs
3. Contact repository maintainers
4. Open a support ticket 