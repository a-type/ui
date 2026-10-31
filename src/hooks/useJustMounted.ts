import { useEffect, useRef } from 'react';
export function useJustMounted() {
	const justMountedRef = useRef(true);
	useEffect(() => {
		justMountedRef.current = false;
	}, []);
	return justMountedRef;
}
