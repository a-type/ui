import {
	ScrollArea as BaseScrollArea,
	ScrollAreaContentProps,
	ScrollAreaRootProps,
	ScrollAreaScrollbarProps,
} from '@base-ui/react/scroll-area';
import { Ref } from 'react';
import { withClassName } from '../../hooks.js';

export type * from '@base-ui/react/scroll-area';

export const ScrollAreaRoot = withClassName(
	BaseScrollArea.Root,
	'layer-components:(box-border min-h-0 min-w-0 flex flex-col)',
);

export const ScrollAreaViewport = withClassName(
	BaseScrollArea.Viewport,
	'layer-components:(h-full min-h-0 outline-none)',
	'layer-components:foc',
);

export const ScrollAreaVerticalFades = withClassName(
	'div',
	'layer-components:([--scroll-area-overflow-y-end:inherit] [--scroll-area-overflow-y-start:inherit] pointer-events-none absolute inset-0)',
	'layer-components:before:([--scroll-area-overflow-y-start:inherit] absolute left-0 top-0 block h-[min(40px,var(--scroll-area-overflow-y-start,40px))] w-full bg-gradient-from-bg bg-gradient-to-transparent bg-gradient-to-b transition-height content-empty)',
	'layer-components:after:([--scroll-area-overflow-y-end:inherit] absolute bottom-0 left-0 block h-[min(40px,var(--scroll-area-overflow-y-end,40px))] w-full bg-gradient-from-bg bg-gradient-to-transparent bg-gradient-to-t transition-height content-empty)',
);

export const ScrollAreaHorizontalFades = withClassName(
	'div',
	'layer-components:([--scroll-area-overflow-x-end:inherit] [--scroll-area-overflow-x-start:inherit] pointer-events-none absolute inset-0)',
	'layer-components:before:([--scroll-area-overflow-x-start:inherit] absolute left-0 top-0 block h-full w-[min(40px,var(--scroll-area-overflow-x-start,40px))] bg-gradient-from-bg bg-gradient-to-transparent bg-gradient-to-r transition-width content-empty)',
	'layer-components:after:([--scroll-area-overflow-x-end:inherit] absolute right-0 top-0 block h-full w-[min(40px,var(--scroll-area-overflow-x-end,40px))] bg-gradient-from-bg bg-gradient-to-transparent bg-gradient-to-l transition-width content-empty)',
);

export const ScrollAreaViewportFades = () => (
	<>
		<ScrollAreaVerticalFades />
		<ScrollAreaHorizontalFades />
	</>
);

const BaseScrollContentWithoutMinWidth = (
	props: ScrollAreaContentProps & { ref?: Ref<HTMLDivElement> },
) => (
	<BaseScrollArea.Content
		{...props}
		style={{ ...props.style, minWidth: undefined }}
	/>
);
BaseScrollContentWithoutMinWidth.displayName = 'ScrollAreaContent';

export const ScrollAreaContent = withClassName(
	BaseScrollContentWithoutMinWidth,
	'layer-components:(flex flex-col)',
	'layer-components:[[data-scroll-direction=horizontal]>&,[data-scroll-direction=both]>&]:min-w-min-content',
);

export const ScrollAreaThumb = withClassName(
	BaseScrollArea.Thumb,
	'layer-components:(rounded-inherit bg-fg/25)',
	'layer-components:data-[orientation=horizontal]:(h-full)',
	'layer-components:data-[orientation=vertical]:(w-full)',
);

const ComposedScrollbar = ({
	children,
	...props
}: ScrollAreaScrollbarProps) => (
	<BaseScrollArea.Scrollbar {...props}>
		{children ?? <ScrollAreaThumb />}
	</BaseScrollArea.Scrollbar>
);
ComposedScrollbar.displayName = 'ScrollAreaScrollbar';

export const ScrollAreaScrollbar = withClassName(
	ComposedScrollbar,
	'layer-components:(pointer-events-none relative m-xxs flex touch-none select-none rounded-full opacity-0)',
	'layer-components:(transition-[opacity,height,width] bg-fg/5)',
	'layer-components:data-[hovering]:(pointer-events-auto opacity-100)',
	'layer-components:data-[scrolling]:(duration-0)',
	'layer-components:before:(absolute content-empty)',

	'layer-components:data-[orientation=vertical]:(w-0.25rem justify-center before:h-full before:w-1.25rem hover:w-0.5rem)',
	'layer-components:data-[orientation=horizontal]:(h-0.25rem items-center before:h-1.25rem before:w-full hover:h-0.5rem)',
);

export const ScrollAreaCorner = withClassName(
	BaseScrollArea.Corner,
	'layer-components:(bg-transparent)',
);

const ScrollAreaDefault = ({
	disableFades,
	direction,
	...props
}: ScrollAreaRootProps & {
	disableFades?: boolean;
	direction?: 'vertical' | 'horizontal' | 'both';
}) => (
	<ScrollAreaRoot {...props}>
		<ScrollAreaViewport
			style={{
				overflow:
					direction === 'vertical'
						? 'clip scroll'
						: direction === 'horizontal'
						? 'scroll clip'
						: 'scroll scroll',
			}}
			data-scroll-direction={direction}
		>
			{props.children}
			{!disableFades && <ScrollAreaViewportFades />}
		</ScrollAreaViewport>
		{direction !== 'horizontal' && <ScrollAreaScrollbar />}
		{direction !== 'vertical' && (
			<ScrollAreaScrollbar orientation="horizontal" />
		)}
		<ScrollAreaCorner />
	</ScrollAreaRoot>
);

export const ScrollArea = Object.assign(ScrollAreaDefault, {
	Root: ScrollAreaRoot,
	Content: ScrollAreaContent,
	Viewport: ScrollAreaViewport,
	Scrollbar: ScrollAreaScrollbar,
	Thumb: ScrollAreaThumb,
	Corner: ScrollAreaCorner,
	ViewportFades: ScrollAreaViewportFades,
	VerticalFades: ScrollAreaVerticalFades,
	HorizontalFades: ScrollAreaHorizontalFades,
});
