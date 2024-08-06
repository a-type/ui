import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';

interface MasonryLayoutConfig {
	columns: number | ((containerWidth: number) => number);
	gap: number;
}

class MasonryLayout {
	private containerResizeObserver: ResizeObserver | null = null;
	private containerMutationObserver: MutationObserver | null = null;

	private container: HTMLElement | null = null;

	private columns: number = 0;

	constructor(private config: MasonryLayoutConfig) {
		this.columns =
			typeof config.columns === 'function' ? config.columns(0) : config.columns;
	}

	attach = (container: HTMLElement) => {
		this.containerResizeObserver?.disconnect();
		this.containerMutationObserver?.disconnect();

		this.container = container;

		this.containerResizeObserver = new ResizeObserver(
			this.handleContainerResize,
		);
		this.containerMutationObserver = new MutationObserver(
			this.handleContainerMutation,
		);
		this.containerResizeObserver.observe(container);
		this.containerMutationObserver.observe(container, { childList: true });

		container.style.setProperty('position', 'relative');
		container.style.setProperty('overflow', 'hidden');
		container.style.setProperty('visibility', 'visible');
		container.childNodes.forEach((node) => {
			if (node instanceof HTMLElement) {
				node.style.setProperty('position', 'absolute');
				// hide until laid out
				node.style.setProperty('visibility', 'hidden');
			}
		});

		this.updateFromContainerSize(container.offsetWidth);

		this.relayout();

		return () => {
			this.containerResizeObserver?.disconnect();
			this.containerMutationObserver?.disconnect();
			container.style.removeProperty('position');
			container.style.removeProperty('overflow');
			this.container = null;
		};
	};

	updateConfig = (config: MasonryLayoutConfig) => {
		const gapChanged = config.gap !== this.config.gap;
		this.config = config;
		// hacky way to avoid updating twice...
		if (
			!this.updateFromContainerSize(this.container?.offsetWidth ?? 0) &&
			gapChanged
		) {
			this.relayout();
		}
	};

	private handleContainerResize = (entries: ResizeObserverEntry[]) => {
		const containerWidth = entries[0].contentRect.width;
		this.updateFromContainerSize(containerWidth);
	};

	private updateFromContainerSize = (containerWidth: number) => {
		if (typeof this.config.columns === 'function') {
			const newValue = this.config.columns(containerWidth);
			if (newValue !== this.columns) {
				this.columns = newValue;
				this.relayout();
				return true;
			}
		}
		return false;
	};

	private handleContainerMutation = (entries: MutationRecord[]) => {
		for (const entry of entries) {
			entry.addedNodes.forEach((node) => {
				if (node instanceof HTMLElement) {
					node.style.setProperty('position', 'absolute');
					// hide until laid out
					node.style.setProperty('visibility', 'hidden');
				}
			});
		}
		// TODO: why is this timeout necessary?
		setTimeout(this.relayout, 100);
	};

	private relayout = () => {
		if (!this.container) {
			return;
		}

		console.log('relayout');

		const tracks = new Array(this.columns).fill(0);
		const gap = this.config.gap;
		// percentage-based width and x position so that items automatically
		// layout correctly when the container is resized (as long as columns
		// are the same)
		const pixelColumnWidthMinusGap =
			(this.container.offsetWidth - gap * (this.columns - 1)) / this.columns;
		const columnPercentageWidth =
			(pixelColumnWidthMinusGap / this.container.offsetWidth) * 100;
		const gapPercentageWidth = (gap / this.container.offsetWidth) * 100;

		const children = Array.from(this.container.children) as HTMLElement[];
		children.forEach((child) => {
			const trackIndex = tracks.indexOf(Math.min(...tracks));
			const x = (columnPercentageWidth + gapPercentageWidth) * trackIndex;
			const y = tracks[trackIndex];
			const width = columnPercentageWidth;
			child.style.setProperty('position', 'absolute');
			child.style.setProperty('visibility', 'visible');
			child.style.setProperty('width', `${width}%`);
			child.style.setProperty('left', `${x}%`);
			child.style.setProperty('top', `${y}px`);
			requestAnimationFrame(() => {
				child.classList.add('transition-all');
			});
			tracks[trackIndex] += child.offsetHeight + gap;
		});
		this.container.style.setProperty(
			'height',
			`${Math.max(...tracks) - gap}px`,
		);
	};
}

export interface MasonryProps {
	children: ReactNode;
	className?: string;
	columns?: number | ((containerWidth: number) => number);
	gap?: number;
}

const initialStyle: CSSProperties = {
	height: 0,
	position: 'relative',
	overflow: 'hidden',
	visibility: 'hidden',
};

export function Masonry({
	className,
	children,
	columns = 3,
	gap = 16,
}: MasonryProps) {
	const [layout] = useState(() => new MasonryLayout({ columns, gap }));
	useEffect(() => {
		layout.updateConfig({ columns, gap });
	}, [layout, columns, gap]);
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (ref.current) {
			return layout.attach(ref.current);
		}
	}, [layout, ref]);

	return (
		<div ref={ref} style={initialStyle} className={className}>
			{children}
		</div>
	);
}
