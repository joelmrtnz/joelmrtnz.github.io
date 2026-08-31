# joelmrtnz.github.io

Personal site of Joel Martinez, frontend engineer. Live at <https://joelmrtnz.github.io>.

Static Next.js site exported to plain HTML and deployed to GitHub Pages on every push to `main`.

## Stack

- Next.js 16, App Router, `output: 'export'`
- React 19 and TypeScript
- CSS Modules over a two-tier design token system
- `next/font/google`, self-hosted at build time

No client-side JavaScript is needed to read the page, and there are no runtime dependencies beyond React.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export into ./out
npm run typecheck
```

## Structure

```
app/          Route, layout, global tokens, icons
components/   One directory per component: Name.tsx + Name.module.css
content/      Typed content modules, kept separate from presentation
```

### Content is typed, not markdown

Content lives in `content/` as TypeScript rather than markdown with a frontmatter parser, so a
malformed entry fails at build time instead of rendering wrong. `content/types.ts` holds the shapes,
`profile.ts` and `experience.ts` hold the data, and no component reads a string it did not receive
as a prop.

### Theming

`app/globals.css` defines two tiers of custom properties. Primitives hold the raw values and are
never referenced by components. Semantic tokens are the only tier components read.
`prefers-color-scheme: dark` remaps the semantic tier alone, so there is no toggle, no JavaScript,
and no theme flash. The ochre accent lightens in dark mode because the light-mode value reaches only
2.96:1 against the dark ground, under the 4.5:1 WCAG AA needs.
