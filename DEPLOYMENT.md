# Deployment Notes

## Pre-Deployment

- Run `npm run build`.
- Run `npm run lint`.
- Confirm the latest resume link is correct.
- Add EmailJS environment variables in the deployment provider.
- Test the contact form on the deployed URL.

## Vercel

1. Import the repository.
2. Use the default Vite build settings.
3. Add the EmailJS variables in Project Settings.
4. Deploy.

## Netlify

1. Set build command to `npm run build`.
2. Set publish directory to `dist`.
3. Add the EmailJS variables in Site Settings.
4. Deploy.

## Required Environment Variables

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

Do not commit real service IDs, template IDs, public keys, or private credentials to the repository.
