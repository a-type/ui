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
				'inline-block shrink-0 w-full h-full rounded-md bg-gradient-to-r from-transparent via-fg to-transparent [background-size:400%_400%] max-w-full animate-skeleton animate-duration-1200 animate-ease-in-out animate-iteration-infinite animate-alternate opacity-30',
				className,
			)}
			style={{
				width: `${length}ch`,
				height: '1.2em',
			}}
		/>
	);
};
