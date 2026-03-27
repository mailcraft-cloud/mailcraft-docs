---
title: Email Providers
description: Configure email delivery providers
---

MailCraft uses pluggable providers for delivery. You bring your own account.

## Supported providers

| Provider | Status |
|----------|--------|
| Resend | Available |
| Postmark | Coming soon |
| Amazon SES | Coming soon |
| SMTP | Coming soon |

## Configuring Resend

1. Create a [Resend account](https://resend.com)
2. Get your API key
3. Go to **Settings → Email Provider**
4. Enter API key, from email, from name

:::note
Provider API keys are encrypted at rest using AES-256-GCM.
:::
