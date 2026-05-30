import { clsx } from 'clsx';
import { Children, ComponentProps, useEffect, useState } from 'react';
import { withClassName } from '../../hooks.js';
import { SlotDiv } from '../utility/SlotDiv.js';
import cls from './marquee.module.css';

export interface MarqueeProps extends ComponentProps<'div'> {
	timeout?: number;
}

export function Marquee({
	className,
	children,
	timeout = 5000,
	...rest
}: MarqueeProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const offset = `${currentIndex * -100}%`;

	const childCount = Children.count(children);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setCurrentIndex((currentIndex + 1) % childCount);
		}, timeout);

		return () => clearTimeout(timeoutId);
	}, [currentIndex, childCount, timeout]);

	return (
		<div className={clsx(cls.root, className)} {...rest}>
			<div
				className={clsx(cls.inner)}
				style={{ transform: `translateX(${offset})` }}
			>
				{children}
			</div>
		</div>
	);
}

const MarqueeItem = withClassName(SlotDiv, cls.item);

Marquee.Item = MarqueeItem;
