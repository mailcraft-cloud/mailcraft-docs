---
title: Environment Variables
description: All configuration options
---

## Required

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `GEMINI_API_KEY` | Google Gemini API key |
| `ENCRYPTION_KEY` | 64-char hex key for AES-256-GCM |
| `JWT_SECRET` | JWT access token secret |
| `JWT_REFRESH_SECRET` | JWT refresh token secret |

## Optional

| Variable | Description | Default |
|----------|-------------|---------|
| `FIRECRAWL_API_KEY` | Firecrawl API key | — |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | — |
| `GOOGLE_CLIENT_SECRET` | Google OAuth secret | — |
| `GITHUB_CLIENT_ID` | GitHub OAuth client ID | — |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth secret | — |
| `FRONTEND_URL` | Dashboard URL | `http://localhost:5173` |
| `ENABLE_LAYOUT_REGENERATION` | Enable layout regen | — |
| `PORT` | API port | `3000` |

:::note
OAuth providers are optional. If credentials aren't set, those login options are silently disabled. Email/password auth is always available.
:::
