---
name: list-components
description: Use when choosing which @a-type/ui React component fits a UI need, checking whether the library already provides a component, or getting an overview of available components before building UI. For one known component's props and usage, use lookup-component-docs.
metadata:
  purpose: List the components exported by @a-type/ui and map UI needs to the right component.
  type: core
  library: '@a-type/ui'
  library_version: '6.1.56'
sources:
  - src/components/index.ts
  - .storybook/main.ts
---

# List @a-type/ui components

Every component is exported from the package root (`import { Button } from '@a-type/ui'`). Only `.`, `./arbor`, and `./main.css` are package entry points, so never import from deep paths.

## 1. Check the catalog

Start with this catalog grouped by need. Many components are compound: `Dialog` exposes `Dialog.Trigger`, `Dialog.Content`, and so on.

| Need             | Components                                                                                                                                                                            |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| App shell        | `Provider` (required root), `PageRoot`, `PageContent`, `PageNav`, `PageSection`, `PageSectionGrid`, `PageFixedArea`, `PageNowPlaying`, `NavBar`, `ActionBar`, `HideWhileKeyboardOpen` |
| Layout           | `Box`, `Card`, `CardGrid`, `Divider`, `HorizontalList`, `Masonry`, `ScrollArea`, `Ol`, `Ul`, `SlotDiv`, `Viewport` (pan/zoom canvas)                                                  |
| Actions          | `Button`, `ConfirmedButton`, `QuickAction`, `Chip`, `ToggleGroup`, `ColorModeToggle`, `DropdownMenu`, `ContextMenu`, `Tabs`                                                           |
| Text entry       | `Input`, `TextArea`, `LiveUpdateTextField`, `EditableText`, `Note`, `tipTapClassName` (TipTap editor styling)                                                                         |
| Choice and value | `Checkbox`, `Switch`, `Select`, `Combobox`, `Autocomplete`, `Slider`, `NumberStepper`, `DatePicker`, `DateRangePicker`, `EmojiPicker`                                                 |
| Forms            | `FormikForm`, `TextField`, `TextAreaField`, `CheckboxField`, `SwitchField`, `NumberStepperField`, `ToggleGroupField`, `EmojiField`, `SubmitButton`                                    |
| Media            | `Img`, `Avatar`, `AvatarList`, `Icon`, `ImageUploader`, `Camera`, `Lightbox`                                                                                                          |
| Overlays         | `Dialog`, `Drawer`, `Popover`, `Tooltip`, `Peek`, `CollapsibleSimple`, `Collapsible`                                                                                                  |
| Feedback         | `toast` (with `Toaster`), `Spinner`, `FullScreenSpinner`, `Progress`, `TextSkeleton`, `ErrorBoundary`, `GlobalErrorFallback`                                                          |
| Typography       | `Text`, `Heading`, `HeroText`, `P`, `TextLink`, `RelativeTime`, `Marquee`                                                                                                             |
| Effects and PWA  | `ParticleLayer`, `useParticles`, `PwaInstallTrigger`, `InfiniteLoadTrigger`                                                                                                           |

Result: you have a candidate component name. If nothing fits, use step 2 before concluding the library lacks it.

## 2. Confirm against the installed version

The catalog can lag behind the installed release. The package ships its source, so confirm a name exists in the installed version:

```sh
grep -rn "export .*\bSlider\b" node_modules/@a-type/ui/src/components --include=*.ts --include=*.tsx
```

To see every export module, read `node_modules/@a-type/ui/src/components/index.ts`. Each `export * from './<dir>/...'` line maps to a folder in `node_modules/@a-type/ui/src/components/<dir>/` that holds the component, its `*.module.css`, and its `*.stories.tsx` or `*.mdx` docs.

Result: the name is exported by the installed package. Failure: no match means the component does not exist in this version; compose it from `Box`, `Button`, and similar primitives instead.

## 3. Get one-line summaries for every component

The published Storybook manifest describes the latest release:

```sh
node -e "fetch('https://ui.gfor.rest/manifests/components.json').then(r=>r.json()).then(m=>{for(const c of Object.values(m.components))console.log(c.id+' | '+c.name+' | '+(c.description||'').split('\n')[0])})"
```

`https://ui.gfor.rest/manifests/docs.json` covers components documented only in MDX (`Divider`, `Img`, `Provider`, `NavBar`, etc.); print each entry's `title` and `summary`.

Offline, read the JSDoc block above `const meta` in the installed stories, which is the same text:

```sh
grep -rn -A3 "^/\*\*" node_modules/@a-type/ui/src/components/*/*.stories.tsx
```

## Common mistakes

- Trusting a manifest entry's `import` field verbatim: it lists everything the stories import, including relative and story-only imports. Import only names that step 2 confirms. For example, `SplashScreen` has docs but is not exported from the package root.
- Building a custom modal, menu, or toast when `Dialog`, `DropdownMenu`, or `toast` exists. Check the Overlays and Feedback rows first.
- Forgetting `Provider`: tooltips, toasts, icons, and particles depend on it at the app root.

## Next step

Once you have chosen a component, use the `lookup-component-docs` skill for its props, parts, and examples.
