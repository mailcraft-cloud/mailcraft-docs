---
title: Actions (CTA Buttons)
description: Add call-to-action buttons to your emails
---

Actions are CTA buttons rendered in your email.

## Usage

```typescript
mail.create('welcome')
  .to('john@example.com')
  .action('Get Started', 'https://app.example.com')
  .action('Read Docs', 'https://docs.example.com', 'secondary')
  .send()
```

## Rules

- **Maximum 3 actions** per email (extras silently dropped)
- **HTTPS required** for all URLs
- **Styles**: `primary` (solid brand color) or `secondary` (outlined)
