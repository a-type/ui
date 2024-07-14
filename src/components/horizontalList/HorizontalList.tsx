import clsx from 'clsx';
import { ReactNode, useEffect, useRef } from 'react';
import {
	ScrollAreaProps,
	ScrollAreaRoot,
	ScrollAreaScrollbar,
	ScrollAreaViewport,
} from '../scrollArea/ScrollArea.js';

export interface HorizontalListProps {
	open?: boolean;
	children: ReactNode;
	className?: string;
	contentClassName?: string;
	background?: ScrollAreaProps['background'];
}

export function HorizontalList({
	open,
	children,
	className,
	contentClassName,
	background,
	...rest
}: HorizontalListProps) {
	const contentRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const rememberedWidth = useRef<number>(0);

	useEffect(() => {
		const content = contentRef.current;
		const container = containerRef.current;
		if (!content || !container) {
			return;
		}
		const contentWidth = content.offsetWidth;
		const containerHeight = container.offsetHeight;
		if (open) {
			// measure content width and animate to container width
			const containerWidth = container.offsetWidth;
			rememberedWidth.current = contentWidth;
			content.style.setProperty('width', `${containerWidth}px`);
			content.style.setProperty('flex-wrap', 'wrap');
			// force measure to get the new height
			const contentHeight = content.offsetHeight;
			console.log({ containerHeight, contentHeight });
			container
				.animate(
					[
						{ height: `${containerHeight}px` },
						{ height: `${contentHeight}px` },
					],
					{
						easing: 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
						duration: 200,
					},
				)
				.finished.then(() => {});
		} else {
			content.style.setProperty('width', `auto`);
			content.style.setProperty('flex-wrap', 'nowrap');
			// force measure to get new height
			const contentHeight = content.offsetHeight;
			container
				.animate(
					[
						{
							height: `${containerHeight}px`,
						},
						{
							height: `${contentHeight}px`,
						},
					],
					{
						easing: 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
						duration: 200,
					},
				)
				.finished.then(() => {});
		}
	}, [open, contentRef, containerRef]);

	return (
		<ScrollAreaRoot
			className={clsx(
				'flex flex-col',
				'layer-components:max-h-300px',
				className,
			)}
			background={background}
			data-state={open ? 'open' : 'closed'}
			{...rest}
		>
			<ScrollAreaViewport ref={containerRef}>
				<div
					className={clsx(
						'layer-components:(px-3 pt-3 pb-4 gap-2)',
						'flex flex-row gap-2 flex-shrink-0 w-max-content w-auto)',
						contentClassName,
					)}
					ref={contentRef}
				>
					{children}
				</div>
			</ScrollAreaViewport>
			<ScrollAreaScrollbar />
			<ScrollAreaScrollbar orientation="horizontal" />
		</ScrollAreaRoot>
	);
}
