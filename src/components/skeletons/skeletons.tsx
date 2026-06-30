import classNames from 'clsx';
import { useState } from 'react';
import cls from './skeletons.module.css';

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
			className={classNames(cls.textSkeleton, className)}
			style={{
				width: `${length}ch`,
				height: '1.2em',
			}}
			data-skeleton="text"
		/>
	);
};
