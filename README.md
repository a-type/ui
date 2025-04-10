# @a-type/ui

My personal UI component library. This exists mostly to reduce the startup cost of new projects for me and avoid reinventing components I use frequently. It won't be well-documented or approachable for others, but if you're here you're welcome to check out the source.

## How to use

Install `@a-type/ui unocss`

In your `uno.config.ts`:

```ts
import { defineConfig } from 'unocss';
import atype from '@a-type/ui/uno-preset';

export default defineConfig({
	presets: [atype()],
});
```

The source files of this library include a directive which tells UnoCSS to include them when extracting styles in your app, but for it to work you must exclude `@a-type/ui` from Vite's `optimizeDeps`:

```ts
// in vite.config.ts config definition
optimizeDeps: {
	exclude: ['@a-type/ui'],
},
```

Then, styles from library components should be properly added to your CSS.

### Alternative: import full compiled CSS

Rather than configuring your build pipeline to include this library's source files, you can opt to import the entire CSS needed to style it from `@a-type/ui/css`. However, this will be less efficient; when integrating with your build pipeline, components which aren't used won't have CSS included in your final build.

### Customizing theme colors

The color system is computed from two hues, primary and accent. You can define these in CSS using `--dyn-color-primary-source: <int>` and `--dyn-color-accent-source: <int>`. These hue values are in OKLCH space, which isn't the same as HSL.
