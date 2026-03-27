---
title: Self-Hosting
description: Run MailCraft on your own infrastructure
---

MailCraft is MIT licensed and designed to be self-hosted.

## One command

```bash
git clone https://github.com/mailcraft-cloud/mailcraft.git
cd mailcraft
docker compose up
```

That starts PostgreSQL, runs migrations, and launches the API + dashboard.

## Requirements

- Docker (or Node.js 22+ and PostgreSQL)
- Gemini API key (for AI features)

## Architecture

```
mailcraft/
├── apps/api/     — NestJS backend (port 3000)
├── apps/web/     — React dashboard (port 5173)
├── packages/shared/ — TypeScript types
└── prisma/       — Database schema
```
