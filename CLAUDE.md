# Double R Handyman Service — Website

Marketing site for Luigi Ramos and Jesus Robain's two-person handyman business.

## Stack
- Next.js 14 App Router + TypeScript
- Tailwind + shadcn/ui
- Resend for contact form email
- next-intl for bilingual English/Spanish support
- GitHub: private repo `double-r-handyman`
- Vercel: auto-deploy from `main` → Production, other branches → Preview

## Standing instructions
- After every change, update `RELEASE_NOTES.md` with a dated bullet of what changed.
- After every change, also refresh any user-facing guide content if user-facing behavior changed.
- Keep all service copy verbatim from the original content brief unless Luigi/Jesus explicitly approve edits.
- Mobile-first: test every change at 375px width before desktop.
- No hero-image swaps without explicit approval.
- Never commit `.env.local` or any Resend keys.
- Feature work happens on branches; merge to `main` only after a clean Vercel preview.
- Env vars live in Vercel → `vercel env pull .env.local` for local dev.
