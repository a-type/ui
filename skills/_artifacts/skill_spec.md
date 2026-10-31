# @a-type/ui skill spec

Record of the assessed tasks, confirmed decisions, source evidence, and remaining work. Preserve this history as the library changes.

## Coverage and batch history

### Batch 1 (6.1.56)

- `list-components` (domain `components`). Tasks: find which component covers a UI need; list every exported component.
  - Decision: ship a hand-grouped catalog for fast selection, backed by the installed `src/components/index.ts` (version-matched) and the hosted `manifests/components.json` for one-line summaries.
  - Evidence: `src/components/index.ts`; `.storybook/main.ts` enables `features.componentsManifest`; the built manifest has 54 component entries plus 9 MDX-only pages in `docs.json`.
  - Checks: the summary commands were run against a local `storybook build`; the catalog names were checked against exports.
- `lookup-component-docs` (domain `components`). Task: look up props, parts, and examples for a component.
  - Decision: prefer the shipped `src/` (stories meta JSDoc, `.mdx`, `.tsx` props) because it matches the installed version; use the hosted manifest as a fallback, since it tracks the latest release.
  - Evidence: stories keep their usage summary in a JSDoc block above `const meta`, which Storybook uses for both autodocs and the manifest `description`.
  - Known caveats recorded in the skill: manifest `import` fields include relative story imports; `reactDocgen.props` omits inherited Base UI and DOM props; `components-richeditor` has no component entry.
- `author-arbor-css` (domain `styling`). Tasks: style a new component with Arbor tokens and mixins; add emphasis, size, and color variants.
  - Decision: cover authoring only. Converting existing CSS is out of scope.
  - Evidence: `src/arbor/arbor.ts` (preset modes and the hover, focus, active, and disabled mixins), `Button.module.css` and `Button.tsx` (data-attribute variants with `@mode-*` color and density classes), `src/css/arbor.css` (token placeholder that consumers' PostCSS plugin fills).
  - Checks: the skill's example CSS passes `arbor validate` and compiles with `ArborPlugin` with no `@apply` remaining.

## Remaining work

- Hosted manifests go live at `https://ui.gfor.rest/manifests/` on the next Storybook deploy.
- Refresh the catalog in `list-components` when components are added or removed.
