# Fix EmailJS Gmail Connection Problem

## Problem
Fejlen "Gmail_API: Invalid grant. Please reconnect your Gmail account" betyder at din Gmail service i EmailJS ikke er korrekt forbundet.

## Løsning: Reconnect Gmail Account

### Trin 1: Gå til EmailJS Dashboard
1. Log ind på [https://www.emailjs.com/](https://www.emailjs.com/)
2. Gå til "Email Services" i venstre menu

### Trin 2: Find din Gmail Service
1. Find servicen med ID `service_bm1nmvo`
2. Klik på servicen for at åbne indstillingerne

### Trin 3: Reconnect Gmail
1. Klik på "Reconnect" eller "Connect Account" knappen
2. Du vil blive sendt til Google's login side
3. Log ind med den Gmail konto du vil bruge til at sende emails
4. Giv tilladelse til EmailJS til at sende emails på dine vegne
5. Accepter alle permissions

### Trin 4: Verificer Forbindelsen
1. Gå tilbage til EmailJS dashboard
2. Tjek at servicen nu viser "Connected" status
3. Prøv at sende en test email gennem EmailJS dashboard

### Trin 5: Test Portfolio Formularen
1. Gå tilbage til din portfolio
2. Prøv at sende en besked gennem kontaktformularen
3. Tjek EmailJS dashboard for at se om emailen blev sendt

## Alternativ: Opret Ny Gmail Service

Hvis reconnect ikke virker, kan du oprette en ny service:

### Trin 1: Opret Ny Service
1. Gå til "Email Services" → "Add New Service"
2. Vælg "Gmail"
3. Følg instruktionerne for at forbinde din Gmail konto
4. **Kopier den nye Service ID** (f.eks. `service_xxxxxxx`)

### Trin 2: Opdater Contact.jsx
Åbn `src/components/sections/Contact.jsx` og opdater Service ID:

```javascript
const result = await emailjs.send(
  "service_xxxxxxx",  // ← Erstat med din nye Service ID
  "template_m7ezbtf",
  templateParams,
  "YWf7wv8FAqBfV3g4H"
);
```

## Vigtige Noter

- Gmail service forbindelser kan udløbe efter et stykke tid
- Du skal muligvis reconnecte hver 3-6 måneder
- Sørg for at bruge en Gmail konto du har adgang til
- Tjek at Gmail kontoen har "Less secure app access" aktiveret hvis nødvendigt (nyere Gmail konti bruger OAuth2 i stedet)

## Test

Efter reconnect, prøv at sende en besked igen. Hvis det stadig ikke virker:
1. Tjek browser console (F12) for fejlbeskeder
2. Tjek EmailJS dashboard "History" for at se fejlbeskeder
3. Prøv at sende en test email direkte fra EmailJS dashboard

