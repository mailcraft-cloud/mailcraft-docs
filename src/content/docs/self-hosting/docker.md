---
title: Docker
description: Deploy with Docker Compose
---

## Quick start

```bash
git clone https://github.com/mailcraft-cloud/mailcraft.git
cd mailcraft
GEMINI_API_KEY=your_key docker compose up
```

## What's included

The `docker-compose.yml` starts three services:

| Service | Description | Port |
|---------|-------------|------|
| `postgres` | PostgreSQL 16 database | 5432 (internal) |
| `api` | NestJS backend | 3000 |
| `web` | React dashboard (nginx) | 5173 |

The web container proxies `/api/` to the API container automatically.

## Environment variables

Pass via `docker compose` or a `.env` file:

```bash
GEMINI_API_KEY=your_key
FIRECRAWL_API_KEY=optional_key
ENCRYPTION_KEY=optional_custom_key
```

Default secrets are provided for development. **Change them in production.**

## Easypanel

Both apps can be deployed as Dockerfile-based services. Set environment variables in the Easypanel UI.
