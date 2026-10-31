# @a-type/ui

My personal UI component library for building React applications.

## Documentation

Browse the [component docs and examples](https://ui.gfor.rest), or run
`pnpm storybook` locally.

## Quick start

Install the package and its peer dependencies:

```sh
pnpm add @a-type/ui @arbor-css/core react react-dom
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
