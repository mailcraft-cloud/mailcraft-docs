---
title: Email Types
description: How to use email types effectively
---

The `type` field tells AI what kind of email to write. It's a free-form string — no registration needed.

## Common types

| Type | Use case |
|------|----------|
| `welcome` | New user onboarding |
| `password-reset` | Password reset link |
| `otp-code` | Verification codes |
| `invoice` | Billing notifications |
| `trial-ending` | Trial expiration reminders |
| `order-shipped` | Shipping confirmations |
| `account-deleted` | Account deletion |
| `team-invite` | Team invitations |

## Tips

- Use descriptive names — `order-shipped` beats `notification`
- Use hyphens — `trial-ending` not `trialEnding`
- Be specific — `payment-failed` beats `billing`
- Pair with data — the type tells AI the intent, data provides specifics
