import { useCallback, useEffect, useRef, useState } from 'react';

export function useStayScrolledToBottom(enabled = true) {
	const ref = useRef<HTMLDivElement>(null);
	// if the div was already scrolled to the bottom,
	// keep it at the bottom when new messages come in
	const [isScrolledToBottom, setIsScrolledToBottom] = useState(true);

	useEffect(() => {
		if (!ref.current || !enabled) return;
		if (isScrolledToBottom) {
			ref.current.scrollTop = ref.current.scrollHeight;
		}
		const observer = new MutationObserver(() => {
			if (!ref.current) return;
			if (isScrolledToBottom) {
				console.log('scrolling to bottom');
				ref.current.scrollTop = ref.current.scrollHeight;
			}
		});
		observer.observe(ref.current, { childList: true, subtree: true });
		return () => {
			observer.disconnect();
		};
	}, [isScrolledToBottom, ref, enabled]);

	const onScroll = useCallback(() => {
		if (!ref.current) return;
		const isScrolledToBottom =
			ref.current.scrollTop + ref.current.clientHeight >=
			ref.current.scrollHeight - 10;
		console.log(
			'onScroll',
			ref.current.scrollTop,
			ref.current.clientHeight,
			ref.current.scrollHeight,
			isScrolledToBottom,
		);
		setIsScrolledToBottom(isScrolledToBottom);
	}, []);

	return {
		ref,
		onScroll,
	};
}
