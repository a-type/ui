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
				'[background-size:400%_400%] inline-block h-full max-w-full w-full shrink-0 animate-skeleton animate-duration-1200 animate-ease-in-out animate-alternate animate-iteration-infinite rounded-md from-transparent via-fg to-transparent bg-gradient-to-r opacity-30',
				className,
			)}
			style={{
				width: `${length}ch`,
				height: '1.2em',
			}}
		/>
	);
};
