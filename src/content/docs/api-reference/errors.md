---
title: Errors
description: Error handling and status codes
---

All errors return JSON:

```json
{
  "statusCode": 401,
  "message": "Invalid API key"
}
```

## Status codes

| Code | Meaning |
|------|---------|
| 400 | Bad request — missing fields, invalid data |
| 401 | Unauthorized — invalid API key |
| 403 | Forbidden — you don't own this resource |
| 404 | Not found |
| 502 | Bad gateway — provider error |
| 500 | Internal server error |

## Common errors

| Error | Cause | Fix |
|-------|-------|-----|
| "Missing or invalid Authorization header" | No Bearer token | Add `Authorization: Bearer mc_...` |
| "Invalid API key" | Key doesn't exist | Check key in dashboard |
| "No email provider configured" | No provider set up | Connect in Settings |
| "No email layout configured" | Layout not generated | Regenerate from Branding |
