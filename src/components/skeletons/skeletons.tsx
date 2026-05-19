import classNames from 'clsx';
import { useState } from 'react';

export const TextSkeleton = ({
	maxLength,
	className,
}: {
	maxLength: number;
	className?: string;
}) => {
	const [length] = useState(() =>
		Math.round(Math.random() * (maxLength - 5) + 5),
	);

	return (
		<span
			className={classNames(
				'animate-ease-in-out via-fg [background-size:400%_400%] inline-block h-full max-w-full w-full shrink-0 opacity-30 animate-skeleton animate-duration-1200 animate-alternate animate-iteration-infinite from-transparent to-transparent bg-gradient-to-r rd-md',
				className,
			)}
			style={{
				width: `${length}ch`,
				height: '1.2em',
			}}
		/>
	);
};
