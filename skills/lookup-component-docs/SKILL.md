---
name: lookup-component-docs
description: Use when writing or reviewing code that uses a specific @a-type/ui React component and you need its props, composition parts, usage examples, or caveats, from the installed package or the published Storybook manifest. To find which component fits a need, use list-components first.
metadata:
  purpose: Find usage notes, props, parts, and examples for an @a-type/ui component, preferring documentation that matches the installed version.
  type: core
  library: '@a-type/ui'
  library_version: '6.1.56'
sources:
  - src/components/**/*.stories.tsx
  - src/components/**/*.mdx
  - .storybook/main.ts
---

# Look up @a-type/ui component docs

The npm package ships its `src/` folder, including the Storybook stories and MDX docs. Those match the installed version, so read them first. The hosted Storybook at https://ui.gfor.rest documents the latest release.

## 1. Find the component's folder

```sh
grep -rln "export .*\bDialog\b" node_modules/@a-type/ui/src/components --include=*.ts --include=*.tsx
```

Result: a folder such as `node_modules/@a-type/ui/src/components/dialog/`. Inside this repository, use `src/components/` instead. Failure: no match means the installed version does not export that name; use the `list-components` skill.

## 2. Read the local docs

Read these files in the folder:

1. `*.stories.tsx`: the JSDoc block above `const meta` is the usage summary and lists caveats. Each exported story is a working example, and `args` show realistic prop values.
2. `*.mdx`: some components have no stories (`Divider`, `Img`, `Provider`, `NavBar`, `ErrorBoundary`, `GlobalErrorFallback`, `InfiniteLoadTrigger`, `HideWhileKeyboardOpen`, `SlotDiv`). Their MDX page holds the summary and an example.
3. The component `.tsx`: the `...Props` interface is authoritative. Follow `extends` clauses. Many components wrap Base UI (`@base-ui/react`) parts or native elements and accept all of their props.

Result: you know the required parts, the props you need, and any caveats.

## 3. Use the hosted manifest when local files are unavailable

Storybook publishes agent-oriented JSON manifests:

- `https://ui.gfor.rest/manifests/components.json`: `components[id]` has `name`, `description` (the meta JSDoc), `reactDocgen.props` (`tsType`, `required`, `description`, `defaultValue`), and `stories[]` with `name` and `snippet`.
- `https://ui.gfor.rest/manifests/docs.json`: `docs[id].content` holds the raw MDX for MDX-only components.

The ids are `components-<lowercased story title>`, for example `components-dialog` or `components-togglegroup`. MDX-only pages use `components-<name>--docs`. Print one component compactly:

```sh
node -e "fetch('https://ui.gfor.rest/manifests/components.json').then(r=>r.json()).then(m=>{const c=m.components['components-dialog'];console.log(c.description);console.log(Object.entries(c.reactDocgen?.props??{}).map(([k,p])=>k+(p.required?'':'?')+': '+(p.tsType?.raw??p.tsType?.name)).join('\n'));for(const s of c.stories)console.log('\n// '+s.name+'\n'+s.snippet)})"
```

The interactive page for an id is `https://ui.gfor.rest/?path=/docs/<id>--docs`. If `npm view @a-type/ui version` differs from `node_modules/@a-type/ui/package.json`, treat hosted docs as possibly ahead of the installed code.

## Common mistakes

- Copying story snippets verbatim: snippets spell out every arg, such as `loading={false}` or `visuallyDisabled={false}`. Keep only the props you need.
- Treating `reactDocgen.props` as complete: it omits inherited Base UI and DOM props. `Dialog` lists only `children` and `disableSheet`, but its parts accept Base UI dialog props. Check the `.tsx` `extends` clause.
- Importing from a manifest entry's `import` field verbatim: it can include relative story imports. Import from `'@a-type/ui'` only, and confirm the name is exported.
- Styling variants with custom CSS when a prop exists. Many components accept `color` (applies an `@mode-<color>` class), `emphasis`, or `size`. For new styles, follow the `author-arbor-css` skill.

## Completion

The task is complete when your code imports from `'@a-type/ui'`, uses the documented parts and props, and type-checks against the installed package.
