import classNames from 'clsx';
import { ReactNode, useEffect, useRef } from 'react';
import { useStableCallback } from '../../hooks.js';
import useMergedRef from '../../hooks/useMergedRef.js';

export interface InfiniteLoadTriggerProps {
	className?: string;
	children?: ReactNode;
	onVisible?: () => void;
}

export const InfiniteLoadTrigger = function InfiniteLoadTrigger({
	ref,
	className,
	onVisible,
	...rest
}: InfiniteLoadTriggerProps & {
	ref?: React.Ref<HTMLDivElement>;
}) {
	const innerRef = useRef<HTMLDivElement>(null);

	const stableOnVisible = useStableCallback(onVisible);
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				stableOnVisible();
			}
		});
		observer.observe(innerRef.current!);
		return () => {
			observer.disconnect();
		};
	}, [stableOnVisible]);

	return (
		<div
			ref={useMergedRef(ref, innerRef)}
			className={classNames('flex flex-col items-center', className)}
			{...rest}
		/>
	);
};
