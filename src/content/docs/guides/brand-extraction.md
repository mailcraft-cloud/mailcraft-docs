---
title: Brand Extraction
description: How MailCraft extracts your brand from a URL
---

When you paste a URL, MailCraft uses Firecrawl to scan your website and extract brand information using AI.

## What gets extracted

| Field | Description | Example |
|-------|-------------|---------|
| Company name | Name of your company | "Acme Corp" |
| Primary color | Main brand color | `#FF6B00` |
| Secondary color | Accent color | `#1A1A2E` |
| Background color | Page background | `#FFFFFF` |
| Font | Primary font family | "Inter" |
| Logo URL | Link to your logo | `https://acme.com/logo.png` |
| Tone | Voice of your brand | "friendly" |
| Industry | Business category | "saas" |
| Description | What your company does | "AI-powered analytics" |

## Fallback values

If extraction fails for any field:

| Field | Default |
|-------|---------|
| Colors | `#0f172a` / `#6366f1` / `#ffffff` |
| Font | Inter |
| Tone | Friendly |
| Logo | None (text header) |

## Manual override

Edit extracted values from the **Branding** page. To regenerate the email layout after changes, go to **Branding → Email Layout → Regenerate Layout**.
