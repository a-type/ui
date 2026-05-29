---
name: convert-to-arbor-css
description: Convert existing CSS solutions to use Arbor CSS methodology.
---

# Convert to Arbor CSS

Arbor CSS is an opinionated CSS design system library which organizes design tokens into layers of CSS properties and allows users to define CSS functions and mixins which align with upcoming CSS feature specs, which are transpiled to widely supported CSS. The goal of this skill is to convert existing CSS solutions to use the Arbor CSS methodology.

This migration will require some consideration of intent and design choices from the user. Whenever there's ambiguity in how to map tokens to a particular UI component or the semantic meaning of something, ask the user for clarification.

## 0. Create a directory to store memory about decisions made during the migration to increase consistency

Users may want to migrate incrementally, so it's important to keep track of decisions made about how to map certain styles or components to Arbor CSS concepts. Create a directory in memory to store this information, and refer back to it as needed to ensure consistency across the migration. This can include things like:

- How certain components are mapped to mode tokens
- Any custom mixins or functions created to handle specific styling needs
- Notes on any decisions made about how to handle specific styling patterns or edge cases

Create a directory in the repository called `.arbor-migration` to store this information, and create files within that directory as needed to document the migration process.

If this directory already exists, read its contents to inform your decisions and maintain consistency with previous mappings and choices.

## 1. Determine the current CSS methodology

First, analyze the code associated with the request to decide how it is styling components. Look for patterns such as:

- Utility-first CSS (e.g., Tailwind)
- Component-based CSS (e.g., CSS Modules, Styled Components)
- Traditional CSS (e.g., global stylesheets)
- Other methodologies (e.g., BEM, Atomic CSS)

## 2. Set up CSS preprocessing, if not already in place

ArborCSS relies on PostCSS to preprocess CSS files and transform future syntax like `@apply` or CSS functions. If the project is not already set up with a CSS preprocessor, configure PostCSS with `@arbor-css/postcss` as a plugin. If the project already has this, you can move on to the next step.

```js
import { ArborPlugin } from '@arbor-css/postcss';

export default {
	plugins: [ArborPlugin()],
};
```

Vite and RSBuild support PostCSS out of the box, so no additional configuration is needed for those. For Webpack, you may need to add `postcss-loader` to your CSS handling rules. Determine any further steps based on the bundler in use.

## 3. Map existing styles to Arbor CSS layers

Arbor CSS organizes design tokens into layers:

- **System**: These tokens represent metadata and global user configuration parameters. The "global" system tokens particularly can influence factors like roundness, spacing sizes, etc. However, these are rarely if ever utilized directly - they will be incorporated into mode tokens which are the primary tokens used for styling components.
- **Primitives**: Basic design tokens like colors, spacing, typography, mapped as literal values. These are not commonly used directly in styling. They are mapped to mode tokens first.
- **Modes**: These are the context-aware tokens that reference primitives or self-reference other tokens within the mode. They are used in component styles and can adapt based on the active color context, UI density, and other factors the user configures.

The main focus will be using mode tokens for proper semantic styling. Only fall back to primitive tokens if there is no clear semantic mode token to use.

### 3.1. Mapping variants to modes

The Arbor concept of "mode" is a fundamental system which covers much of the functionality traditionally implemented as individual variants of components. For example, instead of having separate "primary", "secondary", "danger" variants for a button, you would have a single button component that uses mode tokens to adapt its styling based on the active color context (e.g., "accent", "error", "success"). The same goes for size variants: modes can control the size of spacing and typography, so components can just reference those mode tokens instead of having separate size variants.

However, not all variations are modes. Emphasis and semantic intent is still controlled by the component. For example, it's appropriate to have a "primary", "secondary", and "ghost" (or "ambient" in Arbor's default terminology) variant for buttons. These align with the structure of the mode itself. Arbor's built-in preset mode includes semantic intents for actions (primary, secondary, ambient), surfaces (primary, secondary, ambient), and text (primary, secondary, ambient). So these variants can be retained as they align with the mode structure, but the styling within those variants should reference the appropriate mode tokens for their intent.

Some judgment is required here to determine which semantic meaning aligns with a component. Arbor's semantic names for tokens are purposefully broad and meant to represent concepts, not specific elements: "action", "control", "surface". If it's unclear what makes the most sense for a component, ask the user for clarification.

### 3.2. Utilizing appropriate color and system mixins

Arbor has built-in mixins for applying certain CSS properties that enhance traditional CSS with more flexibility. These mixins don't just apply the direct CSS property like `color`; they first assign the input value to an intermediate token. Other mixins can reference this token for cross-property logic (like computing a contrasting foreground color for the active background), and mixins can also dynamically adjust the final color before it's applied to the real CSS property (see 3.3. for examples of that).

Here are the mixins to use instead of directly applying CSS properties:

| CSS Property     | Mixin                | Notes                                             |
| ---------------- | -------------------- | ------------------------------------------------- |
| color            | `@apply --mx-fg`     |                                                   |
| background-color | `@apply --mx-bg`     |                                                   |
| border-color     | `@apply --mx-border` | Also sets a default border-style and border-width |
| fill             | `@apply --mx-fill`   | For SVG elements                                  |
| stroke           | `@apply --mx-stroke` | For SVG elements                                  |

### 3.3. Handling input states

Arbor does not use specific, named tokens for input states like "hover", "active", "disabled". Instead it leverages mixins to adjust the base styling for the component according to rules. Here are some examples of common mixins:

- `@apply --mx-[bg/fg/border]-lighten(--steps)` / `@apply --mx-[bg/fg/border]-darken(--steps)` - Lightens or darkens the background, foreground, or border color by a certain number of steps. Good for hover, focus, and other interactive states.
- `@apply --mx-[bg/fg/border]-saturate(--steps)` / `@apply --mx-[bg/fg/border]-desaturate(--steps)` - Increases or decreases the saturation of the color. Can be used for disabled states to desaturate colors, or to saturate colors for interactive states.
- `@apply --mx-[bg/fg/border]-fade(--alphaValue)` - Adjusts the alpha transparency of the color. Can be used for disabled states to make colors more transparent, or for hover states to add a subtle overlay effect.

Those mixins automatically utilize the appropriate color's initial value to perform the adjustment. This only works if a color mixin was used to apply that color originally (see: 3.2.). If the color was applied directly using a primitive token or a literal value, the mixins won't have the correct reference point to perform the adjustment and will not work as intended.

## 4. Refactor CSS to use Arbor CSS

Given the mappings and understanding from steps 1 and 2, refactor the existing CSS to utilize Arbor CSS methodology. Unless the user is already utilizing a CSS preprocessor like Sass or Less, use CSS Modules to encapsulate styles for each component.

If the user's CSS utilizes direct color or spacing values, attempt to map those to appropriate semantic mode tokens. If there is ambiguity in which token to use, ask the user for clarification on the intent of the styling so you can determine the best mapping. When a mapping decision is made, store the result of that decision in the `.arbor-migration` directory for future reference to maintain consistency across the migration.

When refactoring, ensure that you are using the appropriate mixins for applying colors and handling states as described in step 3.2. and 3.3. This will ensure that the components can take full advantage of the flexibility and features of Arbor CSS.
