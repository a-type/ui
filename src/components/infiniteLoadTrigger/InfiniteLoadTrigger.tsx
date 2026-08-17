import classNames from 'clsx';
import { ReactNode } from 'react';
import useMergedRef from '../../hooks/useMergedRef.js';
import { useOnVisible } from '../../hooks/useOnVisible.js';

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
	const innerRef = useOnVisible(onVisible);

	return (
		<div
			ref={useMergedRef(ref, innerRef)}
			className={classNames('flex flex-col items-center', className)}
			{...rest}
		/>
	);
};
