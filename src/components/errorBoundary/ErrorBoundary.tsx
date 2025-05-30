'use client';
import { Component, ReactElement, ReactNode } from 'react';

export class ErrorBoundary extends Component<
	{
		children: ReactNode;
		fallback?:
			| ReactNode
			| ((props: { error: Error; clearError: () => void }) => ReactElement);
	},
	{ error: Error | null }
> {
	state = {
		error: null,
	};

	static getDerivedStateFromError(error: Error) {
		// Update state so the next render will show the fallback UI.
		return { error };
	}

	render() {
		if (this.state.error) {
			if (typeof this.props.fallback === 'function') {
				return this.props.fallback({
					error: this.state.error,
					clearError: () => this.setState({ error: null }),
				});
			}
			return this.props.fallback || null;
		}
		return this.props.children;
	}
}
