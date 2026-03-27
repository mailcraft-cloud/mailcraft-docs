---
title: Prompts
description: Steer AI-generated email content
---

The optional `prompt` field gives instructions to the AI.

## Examples

```typescript
.prompt('Very brief — 1 sentence only')
.prompt('Mention the analytics dashboard and API access')
.prompt('Formal and professional. No casual language.')
.prompt('Include the discount code prominently. Create urgency.')
```

## When to use

- Override the default tone for a specific email
- Emphasize specific information
- Control email length
- Add context AI can't infer from the type alone

## When NOT to use

- Don't repeat what's in `data` — AI already sees it
- Don't write the email content — let AI do its job
- Don't include HTML — the layout handles formatting
