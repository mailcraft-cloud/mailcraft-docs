---
title: Send Email
description: POST /v1/send — Send a transactional email
---

## Request

```bash
curl -X POST https://api.mailcraft.cloud/v1/send \
  -H "Authorization: Bearer mc_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "welcome",
    "to": "john@example.com",
    "data": { "name": "John", "plan": "Pro" },
    "prompt": "Mention dedicated support",
    "actions": [{ "label": "Get Started", "url": "https://app.example.com" }]
  }'
```

## Parameters

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | Yes | Email type: "welcome", "invoice", etc. |
| `to` | string | Yes | Recipient email |
| `data` | object | No | Dynamic data for AI content |
| `prompt` | string | No | Instructions to steer AI |
| `actions` | array | No | CTA buttons (max 3, HTTPS only) |

### Action object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `label` | string | Yes | Button text |
| `url` | string | Yes | Button URL (HTTPS) |
| `style` | string | No | "primary" or "secondary" |

## Response

```json
{
  "id": "clx9abc123def456",
  "status": "sent"
}
```

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Send log ID |
| `status` | string | "sent", "failed", or "fallback" |

## Status values

| Status | Description |
|--------|-------------|
| `sent` | Delivered successfully |
| `fallback` | AI failed, sent with fallback content |
| `failed` | Provider delivery failed |
