# Mundo Tours

Travel booking and management platform for the Oman & Saudi Arabia market. Public-facing tour listings + admin CMS for managing tours, destinations, customers, offices, and SEO.

## Tech Stack

- **Framework:** Next.js 16 (App Router, React 19, RSC)
- **Language:** TypeScript 5 (strict mode)
- **Package Manager:** Bun (`bun install`, `bun run dev`)
- **Database:** PostgreSQL via Supabase, ORM is Prisma 6
- **Auth:** Better Auth with email/password + passkey (WebAuthn)
- **Styling:** Tailwind CSS 3 + shadcn/ui (New York style) + Radix UI primitives
- **State:** Zustand (client), React Query 5 (server)
- **Forms:** React Hook Form + Zod validation
- **Tables:** TanStack React Table
- **Animations:** Framer Motion
- **Email:** Mailersend
- **Deployment:** Vercel

## Project Structure

```
app/
  (authentication)/login/       # Login page
  (protected)/admin/            # Admin CMS (tours, destinations, customers, offices, SEO, config)
  (public)/(inner)/             # Public pages (about, tour listing, tour detail, call-us)
  api/auth/                     # Better Auth catch-all
  api/imtour/                   # Revalidation webhooks
components/
  ui/                           # shadcn/ui primitives
  admin-panel/                  # Admin layout, sidebar, breadcrumbs
  shared/                       # Shared components (empty-state, loading, etc.)
  table/                        # Data table components
hooks/                          # Custom React hooks
lib/
  constants.ts                  # Arabic translations, country codes, day names
  db.server.ts                  # Prisma singleton
  get-query-client.ts           # React Query singleton
  helpers.ts                    # Utility functions
  types.ts                      # Shared TypeScript types
schema/                         # Zod validation schemas
server/                         # Server actions (*.server.ts)
store/                          # Zustand stores
providers/                      # React context providers
prisma/
  schema.prisma                 # Database schema
  migrations/                   # Migration history
```

## Key Conventions

- **Server actions** use `"use server"` directive and live in `server/*.server.ts`. They wrap Prisma calls with strongly-typed generics: `tourUpdate<T extends Prisma.TourUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.TourUpdateArgs>)`
- **Caching:** `unstable_cache` with tags for reads, `unstable_noStore` for mutations, `revalidateTag`/`revalidatePath` for invalidation
- **Path alias:** `@/*` maps to project root
- **Route groups:** `(authentication)`, `(protected)`, `(public)` for layout separation
- **Component naming:** PascalCase files and exports
- **No tests** are currently set up — no Jest, Vitest, or Playwright

## Database Models

Core: `Tour`, `TourType`, `Location`, `LocationAttribute`, `LocationTour`, `Customer`, `Office`, `Setting`
Auth: `User`, `Session`, `Account`, `Verification`, `Passkey`

Tours have multi-currency pricing (SAR, SA, JO variants), JSON fields for includes/excludes/countries/hotels, and SEO metadata. Offices hold per-branch branding (colors, fonts, social media links).

## Commands

```bash
bun run dev          # Start dev server
bun run build        # Production build
bun run lint         # ESLint
bunx prisma generate # Regenerate Prisma client
bunx prisma migrate dev  # Run migrations
bunx prisma studio   # Database GUI
```

## Environment Variables

Required in `.env.local`:
- `DATABASE_URL` — Supabase pooled connection string
- `DIRECT_URL` — Direct PostgreSQL connection
- `BETTER_AUTH_SECRET` — Auth encryption key
- `NEXT_PUBLIC_APP_URL` — Frontend URL
- `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL
- `NEXT_PUBLIC_SERVICE_ROLE_KEY` — Supabase service role key

## Style Notes

- Full RTL/Arabic support with custom fonts (Noto Sans Arabic, Noto Kufi Arabic, Swissra, Shekari)
- HSL-based CSS variable theming with dark mode support
- `react-i18next` is installed but not actively configured — strings are mostly hardcoded in Arabic
- Server actions body size limit is 10MB (for image uploads)
