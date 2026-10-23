# Pastebin

A small paste-sharing app built for the AdonisJS web development lab. Create a
paste of text or code, then share its link.

## Features

- Create a paste anonymously or while signed in.
- Add an optional title and choose public or unlisted visibility.
- View a paste at its unique eight-character, alphanumeric link.
- Public pastes appear in the latest 50 public pastes on the home page.
- Unlisted pastes do not appear in the public listing, but anyone with the link
  can view them. Unlisted links are not password-protected.
- Copy a paste link after creating it, or use the copy button beside a paste in
  the public listing or your dashboard.
- Sign up and sign in to edit or delete pastes created by that account.
- Get a not-found page when a paste code does not exist.

Paste content is required and limited to 100,000 characters. Titles are optional
and limited to 120 characters. Anonymous pastes cannot be edited or deleted.

## Technology

- AdonisJS 7 with TypeScript
- Lucid ORM and SQLite (`better-sqlite3`)
- VineJS request validation
- React and Inertia.js

## Development quickstart

Requirements: Node.js 24 or newer and npm.

In PowerShell, from the project directory:

```powershell
npm ci
Copy-Item .env.example .env
node ace generate:key
node ace migration:run
npm run dev
```

Open [http://localhost:3333](http://localhost:3333). The SQLite database is
created at `tmp/db.sqlite3`.

If `node ace generate:key` reports that an application key already exists, keep
the existing key in `.env`. Do not commit `.env` or share its contents.

## Useful commands

```powershell
npm run typecheck
npm test
npm run lint
npm run build
```

## Main code paths

- `start/routes.ts` — public paste routes and account-protected edit, update,
  delete, and dashboard routes.
- `app/controllers/pastes_controller.ts` — paste CRUD actions, ownership checks,
  and not-found handling.
- `app/models/paste.ts` and `database/migrations/` — Lucid model and SQLite
  schema.
- `app/validators/paste.ts` — VineJS validation rules.
- `inertia/pages/` and `inertia/components/` — React interface and forms.
