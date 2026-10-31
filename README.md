# @a-type/ui

My personal UI component library for building React applications.

## Documentation

Browse the [component docs and examples](https://ui.gfor.rest), or run
`pnpm storybook` locally.

For coding agents, the docs are also published as JSON at
[`manifests/components.json`](https://ui.gfor.rest/manifests/components.json)
and [`manifests/docs.json`](https://ui.gfor.rest/manifests/docs.json). The
package ships [TanStack Intent](https://tanstack.com/intent) skills for listing
components, looking up their docs, and writing CSS with the Arbor theme. Run
`npx @tanstack/intent install` in your project to point your agent at them.

## Quick start

Install the package and its peer dependencies:

```sh
pnpm add @a-type/ui @arbor-css/core @arbor-css/postcss react react-dom
```

The library's CSS uses [Arbor](https://www.npmjs.com/package/@arbor-css/core)
tokens and mixins, so your build must run the Arbor PostCSS plugin. Add it to
`postcss.config.ts`:

```ts
import { ArborPlugin } from '@arbor-css/postcss';

export default { plugins: [ArborPlugin()] };
```

Then create `arbor.config.ts` in your project root to configure the theme:

```ts
import { presetAtype } from '@a-type/ui/arbor';

export default presetAtype({ color: { mainColor: 'tomato', ranges: {} } });
```

Import the stylesheet and wrap your app in the provider:

```tsx
import '@a-type/ui/main.css';
import { Button, Provider } from '@a-type/ui';

function App() {
	return (
		<Provider manifestPath={false}>
			<Button>Get started</Button>
		</Provider>
	);
}
```

The provider includes icons, tooltips, toasts, and other shared behavior.
Remove `manifestPath={false}` if you want its PWA install dialog to load
`/manifest.json`.
