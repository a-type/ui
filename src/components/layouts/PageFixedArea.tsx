import classNames from 'clsx';
import { HTMLAttributes } from 'react';
import cls from './PageFixedArea.module.css';

export function PageFixedArea({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) {
	return <div {...props} className={classNames(cls.root, className)} />;
}
