# Sinewy Electrical Solutions Website

A professional Astro website for Sinewy Electrical Solutions - providing comprehensive electrical services for residential, commercial, and industrial sectors.

## Project Structure

```
├── src/
│   ├── components/      # Reusable components
│   ├── layouts/         # Layout components
│   ├── pages/           # Website pages
│   └── styles/          # Global styles
├── package.json         # Project dependencies
├── astro.config.mjs    # Astro configuration
└── tsconfig.json       # TypeScript configuration
```

## Pages

- **Home** (`/`) - Landing page with hero section and service overview
- **About** (`/about`) - Company profile, mission & vision
- **Services** (`/services`) - Detailed service offerings
- **Projects** (`/projects`) - Portfolio of completed projects
- **Clients & Testimonials** (`/clients`) - Client reviews and statistics
- **Suppliers** (`/suppliers`) - Trusted supplier partners
- **Gallery** (`/gallery`) - Visual project showcase
- **Team** (`/team`) - Meet the expert team
- **Contact** (`/contact`) - Contact form and location information
- **Legal Compliance** (`/compliance`) - Licensing and certifications
- **Terms of Service** (`/terms`) - Service terms and conditions
- **Privacy Policy** (`/privacy`) - Privacy and data protection information

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd FrLnc
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Building for Production

Build the static site:

```bash
npm run build
```

Preview the build:

```bash
npm run preview
```

## Customization

### Branding
- Update company information in the footer and contact pages
- Modify colors in `src/styles/global.css` (CSS variables in `:root`)
- Replace "Sinewy Electrical Solutions" with your company name

### Content
- Edit individual page files in `src/pages/` to update content
- Replace placeholder text with your actual services and project information
- Update contact information in the Contact page and footer

### Images & Assets
- Add logo files to create a proper logo component
- Replace image placeholders in the gallery with actual project photos

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design included

## Features

- ✅ Responsive design
- ✅ Fast static generation with Astro
- ✅ SEO-friendly structure
- ✅ Professional color scheme
- ✅ Contact form (ready for backend integration)
- ✅ Complete sitemap structure

## Tech Stack

- **Astro 4.0** - Static site generator
- **HTML5** - Page structure
- **CSS3** - Styling and responsive design
- **TypeScript** - Type safety

## Future Enhancements

- Backend integration for contact form submission
- Gallery image functionality
- Blog/news section
- Service request booking system
- Customer portal
- Multi-language support

## License

© 2026 Sinewy Electrical Solutions. All rights reserved.

## Support

For issues or questions about the website, contact info@sinewyelec.com
