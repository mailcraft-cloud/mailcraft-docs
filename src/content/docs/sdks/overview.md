---
title: SDKs
description: Official MailCraft SDKs
---

Official SDKs with fluent, chainable APIs.

## Available

| SDK | Package | Install |
|-----|---------|---------|
| Node.js | `@mailcraft/sdk` | `npm install @mailcraft/sdk` |
| Laravel | `mailcraft/mailcraft-laravel` | `composer require mailcraft/mailcraft-laravel` |

## Two styles

**Fluent (recommended):**
```typescript
mail.create('welcome')
  .to('john@example.com')
  .data({ name: 'John' })
  .send()
```

**Classic:**
```typescript
mail.send({ type: 'welcome', to: 'john@example.com' })
```

## Community SDKs

Want to build an SDK? Check our [Contributing guide](https://github.com/mailcraft-cloud/mailcraft/blob/main/CONTRIBUTING.md).
