# Harsh Soni Portfolio

A focused, responsive portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## What It Highlights

- Full-stack engineering experience across Java, Spring Boot, React, Next.js, and CI/CD.
- Project case studies with concrete proof points instead of generic cards.
- Fast single-page navigation with a restrained dark interface.
- EmailJS-powered contact form with safe fallback behavior when environment variables are missing.
- Production build and ESLint checks.

## Tech Stack

- React 18
- Vite 6
- Tailwind CSS 4
- Framer Motion
- EmailJS
- Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Environment Variables

Create `.env` from `.env.example` and add your EmailJS credentials:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

## Checks

```bash
npm run build
npm run lint
```

## Deployment

The app can be deployed to Vercel, Netlify, or any static host that supports Vite output.

```bash
npm run build
```

The production files are emitted to `dist`.
