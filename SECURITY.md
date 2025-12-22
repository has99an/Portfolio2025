# Sikkerhedsguide

## Environment Variables

Alle følsomme credentials (EmailJS keys) er nu flyttet til environment variables for at beskytte dem.

### Lokal Udvikling

1. Opret en `.env` fil i projektroden (kopiér fra `.env.example`)
2. Udfyld med dine credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=din_service_id
   VITE_EMAILJS_TEMPLATE_ID=din_template_id
   VITE_EMAILJS_PUBLIC_KEY=din_public_key
   ```
3. `.env` filen er i `.gitignore` og bliver IKKE committet til git

### Deployment

Når du deployer til Vercel, Netlify eller andre platforme, skal du:

1. Gå til din platform's dashboard
2. Find "Environment Variables" eller "Secrets" sektionen
3. Tilføj følgende variabler:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Deploy igen

### Vigtige Noter

- ⚠️ **ALDRIG** commit `.env` filen til git
- ⚠️ **ALDRIG** del dine credentials offentligt
- ✅ Brug altid environment variables for følsomme data
- ✅ `.env.example` kan committes (den indeholder ingen rigtige credentials)

### Hvis du allerede har committet credentials

Hvis du allerede har committet credentials til git:

1. Fjern credentials fra koden
2. Tilføj dem til `.env` filen
3. Brug `git filter-branch` eller `git filter-repo` til at fjerne dem fra git historik
4. Overvej at ændre dine EmailJS credentials i EmailJS dashboard

