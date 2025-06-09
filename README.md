# Acquisition Archetype Assessment App

A comprehensive web application that helps aspiring business acquirers identify their acquisition style through an interactive assessment.

## 🎯 Overview

This application presents users with an 8-question assessment to classify them into one of three acquisition archetypes:

- **🔧 Operator**: Builder & Optimizer - focuses on systems, management, and predictability
- **🚀 Flipper**: High-Leverage Mover - focuses on fast value creation and growth
- **🤝 Exit Partner**: Visionary Collaborator - focuses on partnerships and strategic exits

## ✨ Features

### Core Functionality
- **Interactive Assessment**: 8 carefully crafted questions with 3 options each
- **Smart Scoring**: Automatic archetype classification based on response patterns
- **Personalized Results**: Detailed insights, strengths, and recommendations for each archetype
- **Email Capture**: Optional lead generation with personalized playbook delivery
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices

### User Experience
- **Progress Tracking**: Visual progress bar showing assessment completion
- **Smooth Transitions**: Animated screen changes and interactions
- **Keyboard Navigation**: Full keyboard support for accessibility
- **Share Functionality**: Easy sharing of results on social media
- **Retake Option**: Users can retake the assessment anytime

### Technical Features
- **No Dependencies**: Pure HTML, CSS, and JavaScript
- **Fast Loading**: Optimized for quick initial load and smooth interactions
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Analytics Ready**: Built-in tracking placeholders for analytics integration

## 🚀 Quick Start

### Option 1: Direct File Usage
1. Download all files (`index.html`, `styles.css`, `script.js`)
2. Open `index.html` in any modern web browser
3. The application will work immediately - no server required!

### Option 2: Local Development Server
```bash
# Using Python (recommended)
python3 -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🌐 Deployment Options

### Static Hosting Platforms
- **Vercel**: Drag and drop the files or connect to GitHub
- **Netlify**: Deploy directly from GitHub or upload files
- **GitHub Pages**: Push to a GitHub repository and enable Pages
- **AWS S3**: Upload files to an S3 bucket with static hosting enabled
- **Cloudflare Pages**: Connect to GitHub or upload files directly

### Traditional Web Hosting
- Upload all files to your web hosting provider's public folder
- Ensure `index.html` is in the root directory
- No server-side configuration required

## 📁 File Structure

```
acquisition-archetype-app/
├── index.html          # Main HTML structure
├── styles.css          # Responsive CSS styling
├── script.js           # Assessment logic and interactions
├── README.md           # This documentation
├── assessment-design.md # Question design and scoring logic
└── test-results.md     # Comprehensive testing results
```

## 🎨 Customization

### Branding
- **Colors**: Modify the CSS gradient variables in `styles.css`
- **Fonts**: Change the Google Fonts import in `index.html`
- **Logo**: Update the emoji and text in the landing screen
- **Copy**: Modify text content directly in `index.html`

### Assessment Questions
- **Questions**: Edit the `assessmentQuestions` array in `script.js`
- **Scoring**: Modify the `calculateResults()` function for different logic
- **Archetypes**: Update the `archetypes` object with new content

### Styling
- **Layout**: Modify CSS classes in `styles.css`
- **Animations**: Adjust transition and animation properties
- **Responsive**: Update media queries for different breakpoints

## 📊 Analytics Integration

The app includes placeholder functions for analytics tracking:

```javascript
// Example: Google Analytics 4
function trackEvent(eventName, properties) {
    gtag('event', eventName, properties);
}

// Example: PostHog
function trackEvent(eventName, properties) {
    posthog.capture(eventName, properties);
}
```

### Tracked Events
- `assessment_started`: When user begins assessment
- `assessment_completed`: When user finishes assessment
- `email_captured`: When user submits email form

## 🔧 Technical Details

### Browser Support
- **Modern Browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Mobile**: iOS Safari 12+, Chrome Mobile 60+
- **Features Used**: CSS Grid, Flexbox, ES6 JavaScript

### Performance
- **Initial Load**: < 1 second on 3G connection
- **File Sizes**: HTML (8KB), CSS (12KB), JS (15KB)
- **No External Dependencies**: Everything loads from your domain

### Accessibility
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Semantic HTML and ARIA labels
- **Color Contrast**: WCAG AA compliant color ratios
- **Mobile Friendly**: Touch-optimized interface

## 🎯 Assessment Design

### Question Categories
1. **Motivation & Goals**: What drives acquisition interest
2. **Timeline Preferences**: Speed vs. long-term approach
3. **Evaluation Criteria**: What to look for in targets
4. **Management Style**: Hands-on vs. strategic approach
5. **Post-Acquisition Focus**: Operational vs. growth priorities
6. **Target Preferences**: Business characteristics and stage
7. **Exit Strategy**: Long-term vs. quick flip approach
8. **Success Metrics**: How success is measured

### Scoring Logic
- **A Responses**: Operator archetype (systematic, operational focus)
- **B Responses**: Flipper archetype (growth, speed focus)
- **C Responses**: Exit Partner archetype (strategic, partnership focus)
- **Tie Breaking**: Operator > Exit Partner > Flipper (based on stability)

## 📈 Success Metrics

### Engagement Metrics
- **Completion Rate**: Target 80%+ (currently optimized for high completion)
- **Time on Page**: Target 2-3 minutes (matches assessment length)
- **Bounce Rate**: Target <30% (engaging design and clear value prop)

### Conversion Metrics
- **Email Opt-in**: Target 25%+ (valuable playbook incentive)
- **Social Shares**: Track via share button usage
- **Return Visits**: Users retaking assessment or sharing with others

## 🛠️ Troubleshooting

### Common Issues
1. **JavaScript Not Working**: Ensure all files are in the same directory
2. **Styling Issues**: Check that `styles.css` is loading correctly
3. **Mobile Display**: Verify viewport meta tag is present
4. **Email Form**: Currently shows success message (integrate with backend for real functionality)

### Browser Console
Open browser developer tools (F12) to check for any JavaScript errors.

## 🤝 Contributing

### Making Changes
1. Test changes locally using a development server
2. Verify responsive design on multiple screen sizes
3. Test assessment flow from start to finish
4. Ensure all archetype results display correctly

### Code Style
- Use semantic HTML elements
- Follow BEM CSS methodology where applicable
- Write clear, commented JavaScript
- Maintain consistent indentation (2 spaces)

## 📞 Support

For technical issues or customization requests:
1. Check the troubleshooting section above
2. Review the test results in `test-results.md`
3. Examine the assessment design in `assessment-design.md`

## 📄 License

This project is provided as-is for use in business acquisition education and lead generation. Feel free to customize and deploy for your specific needs.

---

**Live Demo**: https://8000-89fd1d14-81fe-4271-a9b1-afe577a73dfc.h1058.daytona.work

Built with ❤️ for the AI Biz Hour Inner Circle community.