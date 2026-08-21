import { preventDefault } from '@a-type/utils';
import clsx from 'clsx';
import { ComponentProps, useCallback, useEffect, useRef } from 'react';
import useMergedRef from '../../hooks/useMergedRef.js';
import cls from './ViewportContent.module.css';
import { ViewportState } from './ViewportState.js';

export interface ViewportContentProps
	extends Omit<ComponentProps<'div'>, 'viewport'> {
	viewport: ViewportState;
}

export function ViewportContent({
	viewport,
	children,
	className,
	...rest
}: ViewportContentProps) {
	const internalRef = useRef<HTMLDivElement>(null);

	const setPosition = useCallback(
		(
			{ x, y, zoom }: { x?: number; y?: number; zoom?: number },
			immediate: boolean,
		) => {
			const current = internalRef.current;
			if (current) {
				if (immediate) {
					current.style.setProperty('transition', 'none');
					requestAnimationFrame(() => {
						current.style.removeProperty('transition');
					});
				} else {
					current.style.removeProperty('transition');
				}
				if (x !== undefined) {
					current.style.setProperty('--center-x', `${-x}px`);
				}
				if (y !== undefined) {
					current.style.setProperty('--center-y', `${-y}px`);
				}
				if (zoom !== undefined) {
					current.style.setProperty('--zoom', `${zoom}`);
				}
			}
		},
		[],
	);

	useEffect(
		() =>
			viewport.subscribe('centerChanged', (center, origin) => {
				setPosition({ x: center.x, y: center.y }, origin === 'direct');
			}),
		[viewport],
	);
	useEffect(
		() =>
			viewport.subscribe('zoomChanged', (zoomValue, origin) => {
				setPosition({ zoom: zoomValue }, origin === 'direct');
			}),
		[viewport, internalRef],
	);

	useEffect(
		() =>
			viewport.subscribe('zoomSettled', (zoom) => {
				if (internalRef.current) {
					internalRef.current.style.setProperty(
						'--zoom-settled',
						zoom.toString(),
					);
				}
			}),
		[viewport, internalRef],
	);

	const finalRef = useMergedRef<HTMLDivElement>(
		viewport.bindContent,
		internalRef,
	);

	return (
		<div
			{...rest}
			className={clsx(cls.root, className)}
			ref={finalRef}
			onDragStartCapture={preventDefault}
			onDrag={preventDefault}
			onDragEnd={preventDefault}
		>
			{children}
		</div>
	);
}
