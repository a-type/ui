import { useId } from 'react';

export function useIdOrGenerated(id: string | null | undefined) {
	const generated = useId();
	return id || generated;
}
