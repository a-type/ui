import { clsx } from 'clsx';
import { Children, ReactNode, useEffect, useState } from 'react';
import { withClassName } from '../../hooks.js';
import { SlotDiv } from '../utility/SlotDiv.js';

export interface MarqueeProps {
	className?: string;
	children?: ReactNode;
	timeout?: number;
}

export function Marquee({ className, children, timeout = 5000 }: MarqueeProps) {
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
		<div
			className={clsx(
				'layer-components:(relative h-full w-full overflow-hidden)',
				className,
			)}
		>
			<div
				className="layer-components:(absolute left-0 top-0 h-full w-full flex flex-row overflow-visible transition-transform duration-300)"
				style={{ transform: `translateX(${offset})` }}
			>
				{children}
			</div>
		</div>
	);
}

const MarqueeItem = withClassName(
	SlotDiv,
	'layer-components:(w-full h-full flex-shrink-0 object-cover)',
);

Marquee.Item = MarqueeItem;
