---
title: Introduction
description: Open source transactional email — ship emails, not templates
---

MailCraft is an open source transactional email platform for developers. Paste your website URL, we extract your brand, and you send beautiful, on-brand emails with a single API call.

**No templates. No HTML. No MJML.** AI generates the content. Your brand makes it beautiful.

## How it works

1. **Extract your brand** — Paste your website URL. We scan it and extract colors, fonts, logo, tone, and industry using AI.
2. **Connect a provider** — Plug in your Resend API key. Your emails, your infrastructure.
3. **Send with one call** — Call `mail.send()` with a type like "welcome" or "invoice" and your data. AI writes the copy, your layout wraps it, the provider delivers it.

## Key features

- **Brand Extraction** — Automatic extraction of colors, fonts, logo, tone from any URL
- **AI Content** — Gemini generates natural, on-brand email copy for any email type
- **Email Layout** — AI-generated MJML layouts that match your brand
- **Pluggable Providers** — Resend out of the box, extensible to Postmark, SES, SMTP
- **Fluent SDKs** — Official Node.js and Laravel SDKs with chainable API
- **Open Source** — MIT licensed. Self-host on your own infrastructure.

## Quick links

- [Quickstart](/getting-started/quickstart) — Get sending in 2 minutes
- [API Reference](/api-reference/overview) — Explore the API
- [SDKs](/sdks/overview) — Node.js & Laravel
- [Self-Hosting](/self-hosting/overview) — Run it yourself
