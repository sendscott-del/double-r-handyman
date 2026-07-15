# Double R Handyman Service — current state

> Read before touching. Update the moment an infra fact changes. Append to docs/SESSIONS.md each session. Lane: Client (Luigi Ramos & Jesus Robain's business).

## What this is

Marketing site for Luigi Ramos and Jesus Robain's two-person handyman business. Bilingual English/Spanish (next-intl). Contact form posts to **Formspree** (`FORMSPREE_URL` in `components/sections/Contact.tsx`). v0.1.0; built 2026-04-18.

## Infrastructure

- Next.js App Router + TypeScript, Tailwind + shadcn/ui (Base UI primitives)
- **Contact form: Formspree** (switched FROM Resend on 2026-04-18 — Select value must be tracked in React state for Formspree to receive it)
- i18n: next-intl (`i18n/`, `messages/`, `proxy.ts`)
- No database, no auth
- GitHub: private repo `sendscott-del/double-r-handyman`
- Vercel: auto-deploy from `main` → Production, other branches → Preview

## Architecture snapshot

- Root layout (no `src/`): `app/`, `components/` (incl. `components/sections/Contact.tsx`), `lib/`, `i18n/`, `messages/`
- Docs: `RELEASE_NOTES.md`

## Rules for this repo

1. After every change, update `RELEASE_NOTES.md` with a dated bullet of what changed.
2. After every change, refresh user-facing guide content if user-facing behavior changed.
3. Keep all service copy verbatim from the original content brief unless Luigi/Jesus explicitly approve edits.
4. Mobile-first: test every change at 375px width before desktop.
5. No hero-image swaps without explicit approval.
6. Never commit `.env.local` or any API keys.
7. Feature work happens on branches; merge to `main` only after a clean Vercel preview.
8. Env vars live in Vercel → `vercel env pull .env.local` for local dev.
9. Session docs: append a dated entry to `docs/SESSIONS.md` each session.
10. Bilingual parity: every copy change lands in BOTH `messages/` locales.

## Gotchas

- An earlier version of this file said "Resend for contact form email" — **stale**; the form is Formspree now. Resend was removed the same day it was added.
- Formspree + shadcn Select: the Select's value doesn't serialize with the form — it must be tracked in state and included in the payload (fixed 2026-04-18). Re-test the form after touching Contact.tsx.
