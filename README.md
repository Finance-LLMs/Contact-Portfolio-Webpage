# Securities Market Hackathon Winners - Portfolio Webpage

This is a static webpage showcasing the 5 winners of the Securities Market Hackathon at Global Fintech Fest 2025.

## Team Members
- **Vikranth Udandarao** - B.Tech Computer Science and Artificial Intelligence
- **Akshat Parmar** - B.Tech Computer Science and Artificial Intelligence
- **Abhay Shakya** - M.Tech Computer Science
- **Tanmay Hire** - M.Tech Computer Science
- **Shaurya Bhatnagar** - M.Tech Computer Science

## Features
- Responsive design that works on all devices
- Modern and intuitive user interface
- Contact information with click-to-copy functionality
- LinkedIn and resume links for each team member
- Smooth animations and hover effects
- Professional gradient background
- Error handling for missing images

## File Structure
```
Contact-Portfolio-Webpage/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── images/             # Directory for team member photos
│   ├── vikranth.jpg
│   ├── akshat.jpg
│   ├── abhay.jpg
│   ├── tanmay.jpg
│   └── shaurya.jpg
├── resume/             # Directory for resume PDFs
│   ├── vikranth-resume.pdf
│   ├── akshat-resume.pdf
│   ├── abhay-resume.pdf
│   ├── tanmay-resume.pdf
│   └── shaurya-resume.pdf
├── README.md           # This file
└── LICENSE
```

## Setup Instructions

1. **Add Team Member Photos**:
   - Place the following images in the `images/` directory:
     - `vikranth.jpg`
     - `akshat.jpg`
     - `abhay.jpg`
     - `tanmay.jpg`
     - `shaurya.jpg`
   - Recommended image size: 400x400 pixels or larger (square aspect ratio)

2. **Add Resume Files**:
   - Place PDF resumes in the `resume/` directory:
     - `vikranth-resume.pdf`
     - `akshat-resume.pdf`
     - `abhay-resume.pdf`
     - `tanmay-resume.pdf`
     - `shaurya-resume.pdf`

3. **Update Contact Information**:
   - Edit `index.html` to update:
     - Email addresses (currently set to example.com)
     - Phone numbers (currently placeholder numbers)
     - LinkedIn profile URLs
     - Any other personal information

4. **Open the Webpage**:
   - Simply open `index.html` in any modern web browser
   - No server setup required - it's a static webpage

## Customization

### Updating Contact Information
Edit the respective sections in `index.html`:

```html
<!-- For each team member, update: -->
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <a href="mailto:actual-email@domain.com">actual-email@domain.com</a>
</div>
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <a href="tel:+1234567890">+1 (234) 567-890</a>
</div>
```

### Updating LinkedIn URLs
```html
<a href="https://linkedin.com/in/actual-profile" target="_blank" class="social-link linkedin">
    <i class="fab fa-linkedin"></i>
</a>
```

### Customizing Colors
Edit the CSS variables in `styles.css`:
- The main gradient can be changed in the `body` selector
- Card colors can be modified in the `.team-card` selector
- Link colors are defined in various selectors

## Browser Compatibility
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Internet Explorer: Not supported (uses modern CSS features)

## Technologies Used
- HTML5
- CSS3 (Grid, Flexbox, Animations)
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Inter)

## Links Referenced
- [SEBI Hackathon](https://www.globalfintechfest.com/sebi-hackathon)
- [Global Fintech Fest](https://www.globalfintechfest.com)
- [MIDAS Lab](https://midas.iiitd.ac.in)
- [IIIT-Delhi](https://iiitd.ac.in)

## Features Included
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Interactive Elements**: Hover effects, click-to-copy contact info
- **Professional Styling**: Modern gradient backgrounds and card designs
- **Accessibility**: Proper alt texts, semantic HTML, keyboard navigation
- **Performance**: Optimized CSS and JavaScript
- **Error Handling**: Graceful fallbacks for missing images

## License
See LICENSE file for details.