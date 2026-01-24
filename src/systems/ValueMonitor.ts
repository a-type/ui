import { useEffect, useState } from 'react';

export class ValueMonitor<T> extends EventTarget {
	private current: T;
	constructor(initialValue: T) {
		super();
		this.current = initialValue;
	}

	set(value: T) {
		if (this.current !== value) {
			this.current = value;
			this.dispatchEvent(new Event('change'));
		}
	}

	get() {
		return this.current;
	}
}

export function useValueMonitor<T>(initialValue: T) {
	const monitor = useState(() => new ValueMonitor<T>(initialValue))[0];
	return monitor;
}

export function useMonitor<T>(
	monitor: ValueMonitor<T>,
	onChange: (value: T) => void,
) {
	useEffect(() => {
		const handleChange = () => {
			onChange(monitor.get());
		};
		monitor.addEventListener('change', handleChange);
		onChange(monitor.get());
		return () => {
			monitor.removeEventListener('change', handleChange);
		};
	}, [monitor, onChange]);
}
