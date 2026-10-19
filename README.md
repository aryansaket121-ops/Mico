# Mico · Interactive Anatomy

An interactive 3D anatomy explorer and learning app built with Next.js, React, Three.js, and shadcn/ui. Take the BodyParts3D adult male reference apart into **2,234 individually selectable meshes**, explore **15 anatomical systems**, search **3,432 named concepts**, and work through guided anatomy lessons with a free public demo.

> **Repository status:** This project was imported from an external GitHub source (a fork). Original application code is released under the [MIT License](LICENSE). Ownership and rights of the imported source have not been independently confirmed. No claim is made here that this project was built primarily with any specific tool.

## Explore

- Landing page with an overview of the learning experience.
- 3D Atlas: orbit, zoom, and select structures directly on the body; toggle systems; search named anatomy; isolate structures.
- Free public demo (`/dashboard?demo=1`): guided lessons, practice, flashcards, imaging views, and local progress — no account or secrets required.
- Mico Coach: an optional AI anatomy tutor panel. In the public demo it is not active and shows a friendly "unavailable" state.

## Run locally

Requires Node.js 22.13 or newer. No API keys or accounts are needed for the public demo.

```sh
npm install
npm run dev
```

Open http://localhost:3016. To build for production:

```sh
npm run build
```

## Publish

This is a Next.js app intended to run in a Node.js WebContainer and be published through Bolt. The public demo works without any environment configuration.

## Anatomy data

The viewer uses **BodyParts3D 4.0**, an adult male reference anatomy, licensed **CC BY 4.0** © The Database Center for Life Science. It does not represent every human structure or variation. Full credits, source links, and adaptation details are in [ATTRIBUTION.md](public/ATTRIBUTION.md).

- License: https://dbarchive.biosciencedbc.jp/en/bodyparts3d/lic.html
- Dataset: https://dbarchive.biosciencedbc.jp/en/bodyparts3d/download.html
- License terms: https://creativecommons.org/licenses/by/4.0/
- Publication: Mitsuhashi et al. (2009), https://doi.org/10.1093/nar/gkn613

This is an educational explorer, not a diagnostic or surgical tool.

## Verified external technologies and content

Only items present in the codebase or project files are listed here.

- **Next.js** (App Router) — web framework.
- **React** — UI library.
- **Three.js** — 3D rendering.
- **shadcn/ui** + **Tailwind CSS** — UI components and styling.
- **BodyParts3D 4.0** — 3D anatomy data, CC BY 4.0 (see above and `public/ATTRIBUTION.md`).

### Referenced but not active in the public demo

These services are referenced in the source but are not configured or active on the public link. Their account ownership/status is unconfirmed.

- **Supabase** — optional backend for signed-in progress sync and the shop economy. When no credentials are configured, the app falls back to local-only progress. The public demo does not use it.
- **Mico Coach / AI tutor** — the `/api/mico-coach` route expects an AI provider API key that is not configured for the public demo. The coach panel shows a graceful "unavailable" state.
- **Stripe** — payment edge functions exist under `supabase/functions/` for an optional "Heart Pass" purchase flow. Payments are disabled in the public demo and no Stripe key is configured.
- **Mux** — an HLS video stream is referenced in the marketing landing. Its availability depends on an external account that is unconfirmed.

## Validate

```sh
npm run check
node scripts/validate-atlas.mjs
node scripts/validate-interactions.mjs
npm run build
```

## License

Original application code is released under the [MIT License](LICENSE). **The anatomy data has its own CC BY 4.0 license**; preserve the attribution when redistributing it. Third-party dependencies retain their respective licenses.
