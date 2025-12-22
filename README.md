# Portfolio 2025

En moderne, responsiv portfolio-website bygget med React, Vite, Tailwind CSS og Framer Motion.

## Features

- 🎨 Moderne design med glassmorphism effekter
- 📱 Fuldt responsiv (mobile, tablet, desktop)
- ✨ Smooth animationer med Framer Motion
- 🎯 Smooth scroll navigation
- 📧 Kontaktformular med EmailJS integration
- 🌙 Dark theme
- ⚡ Hurtig performance med Vite

## Teknisk Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animationer
- **EmailJS** - Email service
- **React Router** - Navigation

## Installation

1. Klon repositoryet eller download filerne
2. Installer dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Build til production:

```bash
npm run build
```

## Konfiguration

### EmailJS Setup

For at aktivere kontaktformularen skal du:

1. Opret en konto på [EmailJS](https://www.emailjs.com/)
2. Opret en service (f.eks. Gmail)
3. Opret en email template
4. Opret en `.env` fil i projektroden (kopiér fra `.env.example`):
   ```bash
   cp .env.example .env
   ```
5. Opdater `.env` filen med dine EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=din_service_id
   VITE_EMAILJS_TEMPLATE_ID=din_template_id
   VITE_EMAILJS_PUBLIC_KEY=din_public_key
   ```

⚠️ **VIGTIGT**: `.env` filen er i `.gitignore` og bliver IKKE committet til git. Dette beskytter dine credentials!

### Opdater Personlige Informationer

Opdater følgende filer med dine egne informationer:

- `src/constants/index.js` - Projekter, skills, erfaring
- `src/components/sections/Hero.jsx` - Navn og beskrivelse
- `src/components/sections/About.jsx` - Om dig tekst
- `src/components/sections/Contact.jsx` - Email og kontakt info
- `src/components/layout/Footer.jsx` - Social links
- `index.html` - Side titel og meta tags

## Projektstruktur

```
Portfolio2025/
├── public/              # Statiske filer
├── src/
│   ├── assets/         # Billeder og ikoner
│   ├── components/     # React komponenter
│   │   ├── layout/     # Layout komponenter (Navbar, Footer)
│   │   ├── sections/   # Sektion komponenter (Hero, About, etc.)
│   │   └── ui/         # UI komponenter (Button, Card, etc.)
│   ├── constants/      # Data og konfiguration
│   ├── utils/          # Utility funktioner
│   └── styles/         # Global styles
├── index.html
└── package.json
```

## Deployment

Portfolioen kan deployes til:

- **Vercel** (anbefalet)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

For Vercel:
1. Push koden til GitHub
2. Forbind repositoryet til Vercel
3. Tilføj environment variables i Vercel dashboard:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Deploy automatisk

⚠️ **VIGTIGT**: Husk at tilføje environment variables i din deployment platform (Vercel/Netlify/etc.)!

## Licens

Dette projekt er frit til brug.

## Kontakt

For spørgsmål eller feedback, kontakt mig gennem portfolioens kontaktformular.
