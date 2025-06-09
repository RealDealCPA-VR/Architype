# Deployment Guide

## 🚀 Quick Deployment Options

### 1. Vercel (Recommended)
**Easiest option with automatic HTTPS and global CDN**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel

# Follow prompts to deploy
```

Or use the web interface:
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Upload the project folder or connect GitHub
4. Deploy automatically

### 2. Netlify
**Great for static sites with form handling**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy from project directory
netlify deploy

# For production deployment
netlify deploy --prod
```

Or drag and drop:
1. Go to [netlify.com](https://netlify.com)
2. Drag the project folder to the deploy area
3. Get instant live URL

### 3. GitHub Pages
**Free hosting with GitHub integration**

1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be live at `username.github.io/repository-name`

### 4. Cloudflare Pages
**Fast global CDN with excellent performance**

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your GitHub repository
3. Set build settings (none needed for static site)
4. Deploy automatically

## 🌐 Traditional Web Hosting

### cPanel/Shared Hosting
1. Access your hosting control panel
2. Open File Manager
3. Navigate to `public_html` or `www` folder
4. Upload all files (`index.html`, `styles.css`, `script.js`)
5. Ensure `index.html` is in the root directory
6. Visit your domain to see the live site

### FTP Upload
```bash
# Using command line FTP
ftp your-domain.com
# Enter credentials
# Navigate to public folder
cd public_html
# Upload files
put index.html
put styles.css
put script.js
```

## ☁️ Cloud Platform Deployment

### AWS S3 Static Website
```bash
# Create S3 bucket
aws s3 mb s3://your-bucket-name

# Upload files
aws s3 sync . s3://your-bucket-name

# Enable static website hosting
aws s3 website s3://your-bucket-name --index-document index.html
```

### Google Cloud Storage
```bash
# Create bucket
gsutil mb gs://your-bucket-name

# Upload files
gsutil -m cp -r . gs://your-bucket-name

# Make bucket public
gsutil iam ch allUsers:objectViewer gs://your-bucket-name
```

## 🔧 Custom Domain Setup

### DNS Configuration
Add these records to your DNS provider:

```
Type: A
Name: @
Value: [Your hosting provider's IP]

Type: CNAME
Name: www
Value: your-domain.com
```

### SSL Certificate
Most modern hosting providers offer free SSL certificates:
- **Vercel/Netlify**: Automatic HTTPS
- **Cloudflare**: Free SSL with CDN
- **Let's Encrypt**: Free certificates for self-hosted

## 📊 Analytics Integration

### Google Analytics 4
Add to `<head>` section of `index.html`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Update `script.js` tracking function:
```javascript
function trackEvent(eventName, properties = {}) {
    gtag('event', eventName, properties);
}
```

### PostHog
Add to `<head>` section:

```html
<script>
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]);var n=t;if("undefined"!=typeof e)try{n=t[e]}catch(t){return}return n}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('YOUR_API_KEY',{api_host:'https://app.posthog.com'})
</script>
```

## 📧 Email Integration

### Netlify Forms
Add to your form in `index.html`:

```html
<form id="email-form" class="email-form" netlify>
    <input type="hidden" name="form-name" value="email-capture">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <input type="hidden" name="archetype" id="archetype-field">
    <button type="submit" class="btn-primary">Get My Playbook</button>
</form>
```

### Formspree
Update form action:

```html
<form id="email-form" class="email-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### EmailJS
Add EmailJS script and update form handling in `script.js`:

```javascript
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    name: name,
    email: email,
    archetype: userResults.primary
});
```

## 🔒 Security Considerations

### Content Security Policy
Add to `<head>`:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src fonts.gstatic.com; script-src 'self';">
```

### HTTPS Enforcement
Most hosting providers handle this automatically. For custom servers:

```javascript
// Redirect HTTP to HTTPS
if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
    location.replace('https:' + window.location.href.substring(window.location.protocol.length));
}
```

## 📱 Progressive Web App (Optional)

### Add Manifest
Create `manifest.json`:

```json
{
  "name": "Acquisition Archetype Assessment",
  "short_name": "Archetype Quiz",
  "description": "Discover your M&A acquisition style",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#667eea",
  "theme_color": "#667eea",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

Add to `<head>`:
```html
<link rel="manifest" href="manifest.json">
```

## 🚀 Performance Optimization

### Image Optimization
- Use WebP format for images
- Compress images before upload
- Add lazy loading for images

### Caching Headers
For Apache (`.htaccess`):

```apache
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType text/html "access plus 1 hour"
</IfModule>
```

### CDN Integration
- Use Cloudflare for global CDN
- Enable gzip compression
- Minify CSS and JavaScript for production

## 📊 Monitoring & Maintenance

### Uptime Monitoring
- Use UptimeRobot for free monitoring
- Set up alerts for downtime
- Monitor from multiple locations

### Performance Monitoring
- Google PageSpeed Insights
- GTmetrix for detailed analysis
- Core Web Vitals monitoring

### Regular Updates
- Test functionality monthly
- Update content as needed
- Monitor for broken links
- Review analytics data

## 🆘 Troubleshooting

### Common Deployment Issues

1. **Files not loading**: Check file paths are relative
2. **CSS not applying**: Verify MIME types are correct
3. **JavaScript errors**: Check browser console for errors
4. **Mobile issues**: Test responsive design on real devices

### Debug Checklist
- [ ] All files uploaded correctly
- [ ] File permissions set properly (644 for files, 755 for directories)
- [ ] No broken links or missing resources
- [ ] HTTPS working correctly
- [ ] Analytics tracking functional
- [ ] Email capture working (if integrated)
- [ ] Mobile responsive design working
- [ ] Cross-browser compatibility verified

---

**Need Help?** Check the main README.md for additional troubleshooting and support information.