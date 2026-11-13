# Nícola Vilander-Gajardo — Portfolio

One-page portfolio for **Nícola Vilander-Gajardo**, a Chilean transdisciplinary artist, performer and researcher working across opera, theatre and artistic research (MPhil/PhD, Guildhall School of Music and Drama, London).

**Live:** [nicola-vilander-portfolio.vercel.app](https://nicola-vilander-portfolio.vercel.app)

> **Status:** in progress. Structure, texts and navigation are in place; photographs and video links are still being collected, so images currently render as labelled placeholders.

## Stack

- [Next.js 16](https://nextjs.org) (App Router), statically rendered
- React 19 and TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-first configuration, design tokens in `app/globals.css`)
- `next/font` (Playfair Display and Work Sans, self-hosted at build time)
- Deployed on [Vercel](https://vercel.com); every push to `main` triggers a production deploy

## Highlights

- **Typed content layer.** All copy lives in `content/` as typed TypeScript objects (`types.ts`). Components only render data, so updating a text, credit or project never means touching JSX.
- **Graceful missing data.** Fields that are not confirmed yet are `null` and simply don't render (a missing role, an empty press list). Missing images render a placeholder that keeps the layout stable.
- **Active-section navigation.** A fixed side menu on desktop and a fixed top bar on mobile (no hamburger: three links fit). The current section is tracked on scroll with `requestAnimationFrame` and exposed with `aria-current="location"`.
- **Accessibility.** Skip link, visible `:focus-visible` styles, 44 px minimum touch targets, semantic landmarks (`header`, `nav`, `main`, `footer`), screen-reader hints on links that open a new tab, and smooth scrolling only when the user has not requested reduced motion.
- **Privacy-friendly embeds.** Videos use `youtube-nocookie.com` or Vimeo with `dnt=1`, loaded lazily.
- **Lightweight assets.** The brush-stroke menu indicator is a 3 KB alpha PNG used as a CSS mask, so its colour follows the accent token (it replaced a 188 KB auto-traced SVG).

## Project structure

```
app/
  layout.tsx        # Fonts, metadata, skip link, navigation, footer
  page.tsx          # Hero → About → Works → Contact
  globals.css       # Tailwind import and design tokens
components/         # One component per section, plus MediaImage and VideoEmbed
content/
  types.ts          # Content model
  site.ts           # Name, roles, contact details
  about.ts          # Bio, lines of inquiry, practice, research, press
  projects.ts       # The eight works
  navigation.ts     # Menu items and section anchors
hooks/
  useActiveSection.ts
public/             # Static assets
```

## Getting started

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Editing content

- Texts, roles and credits: edit the files in `content/`. TypeScript flags any missing or misspelled field.
- Images: import the file statically in the content file and set `src` and `alt`. A static import gives `next/image` the dimensions and a blur placeholder.
- Videos: add `{ title, provider: "youtube" | "vimeo", id }` to a project's `videos` array (the ID only, not the full URL).

## Credits

- Design and development: [Gabriel Hono](https://www.gabrielhono.com)
- All texts, photographs and artworks © Nícola Vilander-Gajardo and the credited photographers. They are not covered by any licence for reuse.