---
name: author-arbor-css
description: Use when writing new CSS for a React app or component built on @a-type/ui, such as a new CSS module, variant styles, color or density variations, or styles that must follow the Arbor theme (light/dark, user colors, density modes). Covers project setup, tokens, mixins, @mode classes, and validation with the arbor CLI. Not for migrating existing CSS to Arbor.
metadata:
  purpose: Author new CSS that uses the Arbor theme tokens, mixins, and modes the same way @a-type/ui components do.
  type: core
  library: '@a-type/ui'
  library_version: '6.1.56'
sources:
  - src/arbor/arbor.ts
  - src/css/*.css
  - src/components/**/*.module.css
  - src/hooks/withClassName.tsx
  - postcss.config.ts
  - arbor.config.ts
---

# Author CSS with the Arbor theme

@a-type/ui styles are plain CSS modules processed by Arbor (`@arbor-css/postcss`). Arbor provides theme tokens (`--m-*`), mixins (`@apply --mx-*`), functions (`--fn-*`), and mode classes (`@mode-*`) that switch color, density, and typography for a subtree. Your app's CSS uses the same system as the library's components.

## Setup

Check these before writing CSS. Every one is required, because the library's published CSS still contains `@apply --mx-*` and needs your build to expand it.

1. Dependencies: `pnpm add @a-type/ui @arbor-css/core @arbor-css/postcss`.
2. `postcss.config.ts`:
   ```ts
   import { ArborPlugin } from '@arbor-css/postcss';
   export default { plugins: [ArborPlugin()] };
   ```
3. `arbor.config.ts` at the project root (the plugin searches upward from the working directory):
   ```ts
   import { presetAtype } from '@a-type/ui/arbor';
   export default presetAtype({ color: { mainColor: 'tomato', ranges: {} } });
   ```
4. Import `@a-type/ui/main.css` once at the app entry and wrap the app in `Provider`.

Result: `pnpm exec arbor tokens:list` prints tokens, and built CSS has no remaining `@apply --mx-` text.

## 1. Create a CSS module next to the component

```css
/* NavTab.module.css */
.root {
	display: flex;
	gap: var(--m-sp-sm);
	padding: var(--m-sp-sm) var(--m-sp-md);
	border-radius: var(--m-rd-md);
	transition: background-color var(--m-dur) var(--m-ease);
	@apply --mx-surface-ambient;
	@apply --mx-hover;
	@apply --mx-focus;

	&[data-active='true'] {
		@apply --mx-bg(var(--m-tint-light));
		@apply --mx-fg(var(--m-tint-ink));
	}
	&[data-size='small'] {
		padding: var(--m-sp-xs) var(--m-sp-sm);
	}
}
```

```tsx
import { clsx } from '@a-type/ui';
import cls from './NavTab.module.css';

export function NavTab({ active, color, className, ...rest }: NavTabProps) {
	return (
		<a
			data-active={active}
			className={clsx(cls.root, color && `@mode-${color}`, className)}
			{...rest}
		/>
	);
}
```

For a styled wrapper with no logic, use `withClassName(Box, cls.root)` from `@a-type/ui`.

The pattern:

- Use `data-*` attributes for states and variants, such as `data-emphasis`, `data-size`, `data-full`, `aria-pressed`, `data-disabled`, and `data-focus-visible`. The library uses these instead of modifier classes.
- Apply color and density as `@mode-*` classes in TSX, not as CSS variants. `@mode-<color>` re-maps every `--m-tint-*` token in the subtree, so one stylesheet serves all colors. `@mode-dense` or `@mode-denser` shrinks spacing, so map `size === 'small'` to `@mode-dense`.

## 2. Pick tokens

Every value should come from a token. Find tokens with `pnpm exec arbor tokens:list` (add `--filter mode`), and check one with `pnpm exec arbor token:info --m-tint-ink`.

| Group             | Tokens                                                                                                                                    |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Spacing           | `--m-sp-xs`, `-sm`, `-md`, `-lg`, `-xl`                                                                                                   |
| Color stops       | `--m-tint-*`, `--m-gray-*`, `--m-accent-*` with `paper`, `wash`, `light`, `mid`, `heavy`, `ink` (lightest to darkest; flips in dark mode) |
| Radius            | `--m-rd-xs` to `--m-rd-xl`, `--m-rd-full`                                                                                                 |
| Lines and shadows | `--m-lw-sm/md/lg`, `--m-shadow-none/sm/md/lg/xl`                                                                                          |
| Motion            | `--m-dur`, `--m-dur-short/medium/long`, `--m-ease`, `--m-ease-in/-out`                                                                    |
| Type              | `--m-fs-sm/md/lg`, `--m-fw-bold/normal`, `--m-prose-{ambient,secondary,primary}-{size,lineHeight,weight,font}`                            |
| Intent            | `--m-surface-rd`, `--m-surface-p`, `--m-action-rd`, `--m-action-p`, `--m-control-rd`, `--m-control-bg`                                    |

`tint` follows the active `@mode-<color>`, `gray` stays neutral, and `accent` is the secondary color. Color modes: `primary`, `accent`, `success`, `attention`, `neutral`, `gray`, `user`, `inverted`, `lemon`, `leek`, `tomato`, `blueberry`, `eggplant`. Other modes: `dense`, `denser`, `normal`, `loose`, `heading`, `hero`, `bold`, `light`, `dark`.

For a deliberate raw value with no token, wrap it as `--fn-literal(28px)` so reviewers and `arbor validate` know it is intentional.

## 3. Apply mixins

Mixins set properties and also record values that later adjustments build on. List them with `pnpm exec arbor mixins:list` and `pnpm exec arbor functions:list`.

- Intent bundles set background, foreground, border, radius, and padding together: `--mx-surface-{ambient|secondary|primary}`, `--mx-action-{ambient|secondary|primary|light}`, `--mx-control`, and `--mx-prose-{ambient|secondary|primary}`. Start from one before writing individual properties.
- Color: `--mx-bg(color)`, `--mx-fg`, `--mx-borderColor`, `--mx-fill`, `--mx-stroke`. Adjust a previously applied color with `-heavier(n)`, `-lighter(n)`, `-faded(opacity)`, `-saturated`, or `-desaturated`, for example `@apply --mx-bg-heavier(1)` on hover.
- Effects: `@apply --mx-shadow(var(--m-shadow-md))` and `@apply --mx-ring`. Turn one off in a variant by setting `--mx-shadow-value` or `--mx-ring-value` to `0 0 0 0 transparent`.
- Preset states, written as plain `@apply --mx-hover;` statements that add their own selectors: `--mx-hover` (heavier background and ring, only on devices with a fine pointer), `--mx-focus` (`:focus-visible` or `data-focus-visible='true'`), `--mx-active`, and `--mx-disabled` (`:disabled` or `data-disabled='true'`). For a custom hover, write `&:hover { @apply --mx-bg-heavier(1); }` inside `@media (hover: hover) and (pointer: fine)`.
- Animation: `@apply --mx-animation(fadeInUp)`.
- Functions inside values: `--fn-color-faded(var(--m-tint-ink), 0.5)`, `--fn-color-heavier(color, 1)`, `--fn-ring(color, size)`, `--fn-focus-ring()`.

## 4. Validate

```sh
pnpm exec arbor validate "src/**/*.module.css"
```

It reports unknown tokens or mixins with suggestions and exits 1. It does not catch raw literals, so check for those yourself.

## Common mistakes

- Setting `background-color` or `color` directly, then calling `--mx-bg-heavier`: the adjust mixins only work when the base came from `--mx-bg` or `--mx-fg`, or from an intent mixin.
- Writing `.blue`, `.red`, or `[data-color=...]` rules. Apply `@mode-<color>` and use `--m-tint-*` instead.
- Hard-coding `#fff`, `12px`, or `200ms`. These ignore dark mode, density, and the user's theme. Use tokens, or `--fn-literal` when a raw value is intended.
- Guessing token names such as `--m-spacing-md` or `--m-color-primary`. Run `tokens:list` or `validate`.
- Raising specificity to beat library styles. Library component CSS is in `@layer components`, so your unlayered module CSS already wins. Pass your class through `className`.
- Using `@media (prefers-color-scheme)` for dark mode. Color tokens already resolve through `light-dark()`; force a scheme on a subtree with `@mode-light` or `@mode-dark`.

To migrate existing non-Arbor CSS, use a conversion workflow instead of this skill.

## Completion

The work is done when the styles use tokens and mixins, variants use `data-*` and `@mode-*`, `arbor validate` passes, and the component looks right in both light and dark mode.
