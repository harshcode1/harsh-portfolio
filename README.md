# Harsh Soni — Portfolio

Personal portfolio for Harsh Soni, Software Engineer at Nagarro and contributor to Phoenix OS (Nagarro Ventures Studios agentic framework). Positioned as an AI Systems Engineer with a Java/Spring Boot backend foundation.

Live at: [harshsoni.dev](https://harshsoni.dev) <!-- update with actual URL -->

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 6 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animations | Framer Motion v12 |
| Icons | Lucide React |
| Contact | EmailJS |

---

## Features

**Design**
- Premium dark theme (`#09091a`) with glassmorphism cards and backdrop blur
- SVG `feTurbulence` noise grain overlay (respects `prefers-reduced-motion`)
- Mouse-tracked radial spotlight on hero — direct DOM writes, zero React re-renders
- Dual-direction infinite skill marquee with fade mask edges
- Scroll-driven timeline fill via `useScroll` + `useSpring` (Framer Motion)
- Spinning conic-gradient ring around profile photo
- Animated counters triggered on scroll into view

**Content**
- Hero with typewriter cycling: AI Systems Engineer → Agentic Framework Builder → Full Stack Developer → Java · Spring Boot Dev
- Experience timeline: Nagarro (Phoenix OS LTM, DevXopsGuardian agent), TailorTalk, Amazon ML Summer School
- 6 GitHub projects with filterable tabs (Featured / Full Stack / Frontend / All)
- Skills grid with AI & Agentic Systems as the lead group + dual marquee
- EmailJS contact form with graceful fallback when env vars are missing

**Performance & Accessibility**
- Mouse spotlight uses `spotlightRef` + direct DOM style mutation — no state re-renders on pointer events
- `prefers-reduced-motion` disables noise animation
- Project filter buttons expose `aria-pressed` for screen readers
- Conditional GitHub link render (no empty `href` → localhost bug)

---

## Getting Started

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

---

## Environment Variables

Create a `.env` file at the project root. The contact form degrades gracefully if these are missing — it shows a warning instead of throwing.

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

---

## Build & Lint

```bash
npm run build   # production build → dist/
npm run lint    # ESLint flat config
```

---

## Deployment

Configured for Vercel (zero-config). Any static host that serves a Vite `dist/` output works.

```bash
npm run build
# deploy dist/
```

Place `Harsh-Soni-Resume.pdf` in `public/` — it is served at `/Harsh-Soni-Resume.pdf` and referenced by the resume download button and contact sidebar.
