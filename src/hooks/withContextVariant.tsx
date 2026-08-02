import { createContext, useContext } from 'react';

/**
 * Creates a context and HOC which swaps between two components
 * based on a contextual value
 */
export function createWithContextVariant() {
	const Context = createContext(false);
	function withContextVariant<P extends object>(
		TrueComponent: React.ComponentType<P>,
		FalseComponent: React.ComponentType<P>,
	) {
		return function WithContextVariant(props: P) {
			const contextValue = useContext(Context);
			const Component = contextValue ? TrueComponent : FalseComponent;
			return <Component {...props} />;
		};
	}

	return {
		Context,
		withContextVariant,
	};
}
