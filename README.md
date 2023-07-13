# @a-type/ui

My personal UI component library. This exists mostly to reduce the startup cost of new projects for me and avoid reinventing components I use frequently. It won't be well-documented or approachable for others, but if you're here you're welcome to check out the source.

## How to use

Install `@a-type/ui unocss @unocss/transformer-variant-group`

In your `uno.config.ts`:

```ts
import { defineConfig } from 'unocss';
import variantGroup from '@unocss/transformer-variant-group';
import atype from '@a-type/ui/uno-preset';

export default defineConfig({
	presets: [atype()],
	// required to support styling in this library
	transformers: [variantGroup()],
	// modify the content sources to include
	// this library when extracting styles
	content: {
		pipeline: {
			include: [
				// include js/ts files as well as defaults.
				/\.(vue|svelte|[jt]sx?|mdx?|astro|elm|php|phtml|html)($|\?)/,
			],
		},
	},
});
```

### Customizing theme colors

To customize colors, either override the base palettes or the theme colors using CSS custom property declarations in a preflight. Base palettes are used by theme colors to compose 'semantic' colors like "primary."

Base palettes:

```
// basic color ranges
--palette-red-[00,10,20,30,40,50,60,70,80,90]
--palette-green-[00,10,20,30,40,50,60,70,80,90]
--palette-yellow-[00,10,20,30,40,50,60,70,80,90]
--palette-blue-[00,10,20,30,40,50,60,70,80,90]
--palette-purple-[00,10,20,30,40,50,60,70,80,90]
--palette-gray-[0-9] // sorry

// utility colors
--palette-dark-blend-warm
--palette-dark-blend-cool
--palette-light-blend-warm
--palette-light-blend-cool
--palette-gray-ex-1
--palette-gray-ex-2
--palette-gray-blend
--palette-gray-dark-blend
--palette-light-gray-blend
--palette-light-gray-dark-blend
--palette-overlay
--palette-black
--palette-white
--palette-light
--palette-dark
```

Theme colors:

```
--color-primary
--color-primary-light
--color-primary-dark
--color-primary-wash
--color-accent
--color-accent-light
--color-accent-dark
--color-accent-wash
--color-attention
--color-attention-light
--color-attention-dark
--color-gray-[0-9]
--color-light-blend
--color-dark-blend
--color-dark-blend-warm
--color-dark-blend-cool
--color-light-blend-warm
--color-light-blend-cool
--color-light-blend
--color-overlay
--color-black
--color-white
--color-wash
```
