# EmailJS Setup Guide

Hvis kontaktformularen ikke virker, skal du konfigurere EmailJS korrekt.

## Trin 1: Opret EmailJS Konto

1. Gå til [https://www.emailjs.com/](https://www.emailjs.com/)
2. Opret en gratis konto
3. Log ind på din konto

## Trin 2: Opret Email Service

1. Gå til "Email Services" i dashboardet
2. Klik på "Add New Service"
3. Vælg din email provider (f.eks. Gmail)
4. Følg instruktionerne for at forbinde din email
5. **Kopier Service ID** (f.eks. `service_xxxxxxx`)

## Trin 3: Opret Email Template

1. Gå til "Email Templates" i dashboardet
2. Klik på "Create New Template"
3. Brug følgende template variabler:
   - `{{from_name}}` - Afsenderens navn
   - `{{from_email}}` - Afsenderens email
   - `{{message}}` - Beskeden
   - `{{to_name}}` - Modtagerens navn (din navn)
   - `{{to_email}}` - Modtagerens email (din email)

4. Eksempel template:
```
Fra: {{from_name}} ({{from_email}})
Til: {{to_name}} ({{to_email}})

Besked:
{{message}}
```

5. **Kopier Template ID** (f.eks. `template_xxxxxxx`)

## Trin 4: Få din Public Key

1. Gå til "Account" → "General"
2. Find "Public Key" sektionen
3. **Kopier din Public Key** (f.eks. `xxxxxxxxxxxxx`)

## Trin 5: Opdater Contact.jsx

Åbn `src/components/sections/Contact.jsx` og opdater følgende:

```javascript
// Find denne linje (ca. linje 32-42):
const result = await emailjs.send(
  "service_bm1nmvo",        // ← Erstat med din Service ID
  "template_m7ezbtf",       // ← Erstat med din Template ID
  templateParams,
  "kn4Cv1CgNTjfRgMFl"       // ← Erstat med din Public Key
);
```

Og også i useEffect (ca. linje 25):
```javascript
useEffect(() => {
  emailjs.init("kn4Cv1CgNTjfRgMFl"); // ← Erstat med din Public Key
}, []);
```

## Fejlfinding

### Fejl: "Service not found"
- Tjek at Service ID er korrekt
- Tjek at servicen er aktiv i EmailJS dashboard

### Fejl: "Template not found"
- Tjek at Template ID er korrekt
- Tjek at templaten er aktiv i EmailJS dashboard

### Fejl: "Invalid public key"
- Tjek at Public Key er korrekt
- Tjek at du har kopieret hele nøglen

### Fejl: "Network error" eller "CORS error"
- Tjek din internetforbindelse
- Tjek browser console for mere information
- Prøv at opdatere siden

### Test i Browser Console

Åbn browser console (F12) og se efter fejlbeskeder når du sender formularen. Dette vil give dig mere information om hvad der går galt.

## Alternativ: Brug mailto link

Hvis EmailJS ikke virker, kan du altid bruge det direkte email link i kontaktsektionen.

