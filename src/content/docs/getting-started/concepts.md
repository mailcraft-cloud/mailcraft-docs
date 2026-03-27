---
title: Core Concepts
description: Understanding how MailCraft works
---

## Email Types

Instead of templates, MailCraft uses **types**. A type is a string like `"welcome"`, `"password-reset"`, or `"invoice"` that tells the AI what kind of email to write.

You don't need to register types anywhere. Just pass any string — AI understands the intent.

```typescript
mail.create('welcome').to(...).send()
mail.create('password-reset').to(...).send()
mail.create('invoice').to(...).send()
mail.create('trial-ending').to(...).send()
```

## Data

The `data` object contains dynamic values that AI will reference:

```typescript
mail.create('welcome')
  .to('john@example.com')
  .data({ name: 'John', plan: 'Pro', trialDays: 14 })
  .send()
```

AI will naturally reference this data: *"Hi John, your Pro plan is ready with 14 days of trial access..."*

:::caution
AI only references data you provide. It never invents URLs, prices, or facts.
:::

## Prompts

The optional `prompt` field steers the AI's tone or content:

```typescript
mail.create('welcome')
  .to('john@example.com')
  .prompt('Very brief, 1 sentence max. Mention 24/7 support.')
  .send()
```

## Actions

Actions are CTA buttons in the email:

```typescript
mail.create('invoice')
  .to('billing@acme.com')
  .action('Pay Now', 'https://pay.example.com')
  .action('View Invoice', 'https://invoice.example.com', 'secondary')
  .send()
```

Maximum 3 actions. URLs must be HTTPS.

## Brand & Layout

Your brand is extracted once during setup. An AI-generated MJML layout wraps every email. You can regenerate the layout anytime from the Branding page.

## Send Logs

Every email is logged with type, recipient, status, AI-generated content, rendered HTML, provider info, and timestamp.
