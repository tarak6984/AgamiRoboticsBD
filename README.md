# Agami Robotics BD Website
### আগামী রোবটিক্স বিডি
### *Inspiring Youth to Innovate | তরুণদের উদ্ভাবনে অনুপ্রাণিত*

A modern, responsive website for Agami Robotics BD - empowering Bangladeshi students with affordable robotics kits and Bengali tutorials for hands-on STEM education.

## 🚀 Live Website
Local Development: [http://localhost:3000](http://localhost:3000)

## 📋 Project Overview

Agami Robotics BD is a startup focused on democratizing STEM education in Bangladesh by providing:
- **Affordable robotics kits** designed specifically for Bangladeshi students
- **Bengali learning content** including step-by-step tutorials and guides
- **Local support** with dedicated Bengali-speaking technical assistance
- **Competition-ready projects** for science fairs and robotics competitions

### Business Model
- **B2C**: Direct sales to students online
- **B2B**: Institutional partnerships with schools and colleges
- **Competition Focus**: Specialized kits for science fairs and olympiads

### Funding Goal
Seeking ৳10 Lakh pre-seed grant from the iDEA Project University Activation Program.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **SEO**: Built-in Next.js SEO features with structured data
- **Performance**: Optimized with modern web standards

## 🌟 Features

### 🎨 Modern Design
- Clean, professional interface
- Mobile-first responsive design
- Smooth animations and transitions
- Bengali text integration

### 📱 Responsive Layout
- Optimized for all device sizes
- Touch-friendly mobile interface
- Fast loading performance

### 🔍 SEO Optimized
- Structured data (Schema.org)
- Proper meta tags and Open Graph
- Sitemap and robots.txt
- Performance optimized

### 📧 Contact Forms
- Lead generation forms
- Early access registration
- Institutional inquiry forms

### 🎯 Business-Focused
- Clear value proposition
- Product showcase
- Pricing transparency
- Funding allocation details

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # Sitemap generation
│   └── icon.tsx           # Favicon generation
├── components/
│   ├── layout/            # Layout components
│   │   ├── Header.tsx     # Navigation header
│   │   └── Footer.tsx     # Site footer
│   ├── sections/          # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── ProblemSolutionSection.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── FounderSection.tsx
│   │   └── ContactSection.tsx
│   └── seo/               # SEO components
│       └── StructuredData.tsx
└── styles/
    └── globals.css        # Global styles
```

## 🎨 Design System

### Colors
- **Primary Blue**: #2563EB
- **Secondary Purple**: #9333EA
- **Success Green**: #10B981
- **Warning Orange**: #F59E0B
- **Error Red**: #EF4444

### Typography
- **Primary Font**: Geist Sans
- **Monospace**: Geist Mono
- **Bengali Text**: System fonts with Bengali support

### Animations
- Smooth fade-in animations on scroll
- Interactive hover effects
- Loading states and transitions

## 📊 Performance

- **Build Size**: ~151KB First Load JS
- **Total Bundle Size**: Optimized with Next.js
- **Image Optimization**: Next.js built-in optimization
- **Animations**: Hardware-accelerated with Framer Motion

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Add other environment variables as needed
```

### Next.js Config
The `next.config.js` includes:
- Performance optimizations
- Security headers
- Image optimization
- Package import optimizations

## 📈 SEO & Analytics

### Structured Data
- Organization schema
- Product schema  
- Website schema
- Local business markup

### Meta Tags
- Comprehensive meta descriptions
- Open Graph tags for social sharing
- Twitter Card support
- Multi-language support

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Configure custom domain

### Manual Deployment
```bash
npm run build
# Deploy the .next folder to your hosting provider
```

## 📞 Contact

**Agami Robotics BD**
- **Founder & CEO**: Tarak Md Shabbir
- Email: info@agamiroboticsbd.com
- Founder Email: tarak@agamiroboticsbd.com
- Phone: +880 1XXX-XXXXXX
- Address: Dhaka, Bangladesh

## 🙏 Acknowledgments

- iDEA Project, ICT Division, Government of Bangladesh
- University Activation Program
- Next.js and Vercel teams
- Open source community

---

**Building the Future of STEM Education in Bangladesh** 🇧🇩

*আগামী রোবটিক্স বিডি - আগামীর বাংলাদেশ গড়ব আমরা*
