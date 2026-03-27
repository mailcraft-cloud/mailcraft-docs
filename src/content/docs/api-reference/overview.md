---
title: API Overview
description: MailCraft API reference
---

## Base URL

```
https://api.mailcraft.cloud
```

For self-hosted instances, use your own API URL.

## Authentication

SDK endpoints use Bearer token auth:

```
Authorization: Bearer mc_your_api_key
```

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/send` | Send an email |
