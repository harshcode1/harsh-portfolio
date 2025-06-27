# Harsh Soni - Portfolio Website

A modern, responsive portfolio website built with React, Vite, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Dark theme with glassmorphism effects
- **Responsive**: Works perfectly on all devices
- **Interactive**: Smooth animations with Framer Motion
- **Contact Form**: Fully functional contact form with EmailJS integration
- **Fast**: Built with Vite for optimal performance
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Technologies Used

- **Frontend**: React 19, Vite 6, JavaScript
- **Styling**: TailwindCSS 4, Custom CSS animations
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Email Service**: EmailJS
- **Icons**: Lucide React

## 📧 EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service (Gmail, Outlook, etc.)
3. Create an email template
4. Copy your credentials to `.env` file:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd harsh-portfolio
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Create environment file:
```bash
cp .env.example .env
# Add your EmailJS credentials
```

4. Start development server:
```bash
pnpm dev
# or
npm run dev
```

5. Open http://localhost:5173 in your browser

## 📦 Build for Production

```bash
pnpm build
# or
npm run build
```

The build files will be in the `dist` directory.

## 🌐 Deployment

### Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Add environment variables in Vercel dashboard

### Netlify
1. Build the project: `pnpm build`
2. Drag and drop the `dist` folder to Netlify
3. Add environment variables in Netlify dashboard

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
```json
"deploy": "gh-pages -d dist"
```
3. Run: `npm run build && npm run deploy`

## 📝 Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_EMAILJS_PUBLIC_KEY` | Your EmailJS public key |
| `VITE_EMAILJS_SERVICE_ID` | Your EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | Your EmailJS template ID |

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: harsh9995soni@gmail.com
- **LinkedIn**: [harsh-soni-885651221](https://linkedin.com/in/harsh-soni-885651221)
- **GitHub**: [harshcode1](https://github.com/harshcode1)

---

Built with ❤️ by Harsh Soni
