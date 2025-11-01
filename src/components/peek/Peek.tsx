import { debounce } from '@a-type/utils';
import classNames from 'clsx';
import {
	ReactNode,
	useId,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { useSize } from '../../hooks/useSize.js';
import { useToggle } from '../../hooks/useToggle.js';

export interface PeekProps {
	peekHeight?: number;
	children: ReactNode;
	className?: string;
}

export function Peek({ peekHeight = 120, children, className }: PeekProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isPeekable, setIsPeekable] = useState(false);
	const contentRef = useSize<HTMLDivElement>(
		useMemo(
			() =>
				debounce(({ height }) => {
					setIsPeekable(height > peekHeight);
					if (containerRef.current) {
						containerRef.current.style.setProperty(
							'--collapsible-height',
							`${height}px`,
						);
					}
				}, 300),
			[],
		),
	);

	const [open, rootToggle] = useToggle(false);
	const hasInteracted = useRef(false);
	const toggle = () => {
		hasInteracted.current = true;
		rootToggle();
	};

	useLayoutEffect(() => {
		if (containerRef.current) {
			containerRef.current.style.setProperty(
				'--peek-height',
				`${peekHeight}px`,
			);
		}
	}, [peekHeight]);

	const id = useId();

	return (
		<div
			className={classNames(
				'relative',
				'[&[data-state=closed]]:max-h-[var(--peek-height,120px)] overflow-hidden',
				hasInteracted.current &&
					'animate-ease-default animate-forwards [&[data-state=closed]]:(animate-keyframes-peek-close animate-duration-300) [&[data-state=open]]:(animate-keyframes-peek-open animate-duration-600 animate-forwards)',
				className,
			)}
			ref={containerRef}
			data-state={isPeekable ? (open ? 'open' : 'closed') : 'closed'}
			style={
				{
					'--peek-height': `${peekHeight}px`,
					'--collapsible-height': '0px',
				} as any
			}
		>
			<div ref={contentRef} id={id}>
				{children}
			</div>
			{isPeekable && (
				<button
					data-state={open ? 'open' : 'closed'}
					className={classNames(
						'h-80px absolute bottom-0 z-1 bg-transparent border-none w-full cursor-pointer border-b border-b-solid border-white',
						'animate-fade-in',
						'focus-visible:(outline-none bg-gradient-to-b from-transparent to-primary-wash border-b border-b-solid border-main',
						'after:(content-["-_tap_to_expand_-"] p-3 color-gray-dark text-xs flex flex-col justify-end items-center absolute inset-0 top-auto h-80px bg-gradient-to-b from-transparent to-white)',
						'after:[&[data-state=open]]:content-["-_tap_to_collapse_-"]',
					)}
					onClick={toggle}
					aria-label="Toggle show description"
					aria-expanded={open}
					aria-controls={id}
				/>
			)}
		</div>
	);
}
