---
title: Authentication
description: API key authentication
---

## API Keys

Every request to `/v1/send` requires an API key:

```
Authorization: Bearer mc_your_api_key
```

Keys start with `mc_` and are 35 characters long.

## Managing keys

Create and manage keys from the **API Keys** page. Each key has:

- **Name** — descriptive label ("Production", "Staging")
- **Last used** — timestamp of most recent call
- **Created** — when the key was generated

You can create multiple keys per project and revoke them individually.
