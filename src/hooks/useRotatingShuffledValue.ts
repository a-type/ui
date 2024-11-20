import { useEffect, useState } from 'react';

export function useRotatingShuffledValue<T>(
	options: T[],
	intervalMs = 5000,
): T | undefined {
	const [selected, setSelected] = useState<T | undefined>(
		options ? options[Math.floor(Math.random() * options.length)] : undefined,
	);
	useEffect(() => {
		if (options) {
			const interval = setInterval(() => {
				setSelected(options[Math.floor(Math.random() * options.length)]);
			}, intervalMs);
			return () => clearInterval(interval);
		}
	}, [options, intervalMs]);

	return selected;
}
