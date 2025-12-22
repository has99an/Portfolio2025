# Azure Static Web Apps Secret Setup Guide

## Problem
Hvis du får fejlen: **"deployment_token was not provided"**

Dette betyder at GitHub Secret `AZURE_STATIC_WEB_APPS_API_TOKEN` ikke findes eller ikke er sat korrekt.

## Løsning

### Metode 1: Hent Deployment Token fra Azure Portal

1. **Gå til Azure Portal**:
   - Log ind på [Azure Portal](https://portal.azure.com)
   - Find din Static Web App resource

2. **Hent Deployment Token**:
   - Gå til: Static Web App → **Overview** → **Manage deployment token**
   - Eller: Static Web App → **Configuration** → **Deployment tokens**
   - Klik på **"Generate deployment token"** eller kopier den eksisterende token

3. **Tilføj Secret i GitHub**:
   - Gå til dit GitHub repository
   - Klik på **Settings** → **Secrets and variables** → **Actions**
   - Klik på **"New repository secret"**
   - **Name**: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - **Secret**: Indsæt deployment token fra Azure
   - Klik **"Add secret"**

### Metode 2: Opret Secret via Azure Portal (Automatisk)

1. **Gå til Azure Portal**:
   - Find din Static Web App resource
   - Gå til **"Deployment"** eller **"GitHub Actions"** sektionen

2. **Forbind til GitHub**:
   - Klik på **"Set up GitHub Actions"** eller **"Manage deployment"**
   - Vælg dit repository og branch
   - Azure vil automatisk oprette GitHub Secret med det korrekte navn

3. **Tjek Secret Navn**:
   - Azure opretter typisk secret med navnet: `AZURE_STATIC_WEB_APPS_API_TOKEN_<RESOURCE_NAME>`
   - Hvis det er tilfældet, skal du enten:
     - Opdatere workflow filen til at bruge det specifikke navn, ELLER
     - Oprette en ny secret med navnet `AZURE_STATIC_WEB_APPS_API_TOKEN`

### Verificer Secret

1. Gå til GitHub Repository → Settings → Secrets and variables → Actions
2. Tjek at `AZURE_STATIC_WEB_APPS_API_TOKEN` eksisterer
3. Hvis den ikke eksisterer, opret den ved hjælp af Metode 1 eller 2

## Efter Secret er Oprettet

1. Commit og push workflow filen:
   ```bash
   git add .github/workflows/azure-static-web-apps.yml
   git commit -m "Fix: Update workflow for Azure deployment"
   git push origin main
   ```

2. GitHub Actions vil automatisk køre igen
3. Deployment skulle nu virke korrekt

## Troubleshooting

### Secret findes ikke
- Opret secret ved hjælp af Metode 1 eller 2 ovenfor
- Verificer at navnet er præcist: `AZURE_STATIC_WEB_APPS_API_TOKEN`

### Secret har forkert navn
- Hvis Azure oprettede secret med et andet navn (fx `AZURE_STATIC_WEB_APPS_API_TOKEN_WONDERFUL_GLACIER_08AA1181E`)
- Du kan enten:
  1. Oprette en ny secret med navnet `AZURE_STATIC_WEB_APPS_API_TOKEN` og kopiere værdien
  2. Eller opdatere workflow filen til at bruge det specifikke navn

### Secret er udløbet
- Generer et nyt deployment token i Azure Portal
- Opdater secret i GitHub med den nye token

