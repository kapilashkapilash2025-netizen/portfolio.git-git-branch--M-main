# Kapilash portfolio

One-page portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons. It is statically rendered and ready to deploy on Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Before publishing

Project data and verified repository links are maintained in `data/projects.ts`; profile/contact details and the repository-backed tech list are in `content.ts`. Update them as your public work changes. Live demo links are only included for repositories with a responding deployment.

The contact form uses a `mailto:` fallback and opens the visitor’s email app with the form fields filled in. Connect an API or form service in `app/page.tsx` if you want server-side submissions.

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```
