import {
	ScrollArea as BaseScrollArea,
	ScrollAreaRootProps,
	ScrollAreaScrollbarProps,
} from '@base-ui/react/scroll-area';
import { withClassName } from '../../hooks.js';

export type * from '@base-ui/react/scroll-area';

export const ScrollAreaRoot = withClassName(
	BaseScrollArea.Root,
	'layer-components:(min-w-0 min-h-0 flex flex-col)',
);

export const ScrollAreaViewport = withClassName(
	BaseScrollArea.Viewport,
	'layer-components:(h-full outline-none overscroll-contain min-h-0)',
	'layer-components:focus-visible:(outline-none ring-2 ring-accent)',
);

export const ScrollAreaVerticalFades = withClassName(
	'div',
	'layer-components:(pointer-events-none absolute inset-0 [--scroll-area-overflow-y-start:inherit] [--scroll-area-overflow-y-end:inherit])',
	'layer-components:before:(content-empty [--scroll-area-overflow-y-start:inherit] top-0 block left-0 w-full absolute transition-height h-[min(40px,var(--scroll-area-overflow-y-start,,40px))] bg-gradient-to-b bg-gradient-from-bg bg-gradient-to-transparent)',
	'layer-components:after:(content-empty [--scroll-area-overflow-y-end:inherit] bottom-0 block left-0 w-full absolute transition-height h-[min(40px,var(--scroll-area-overflow-y-end,,40px))] bg-gradient-to-t bg-gradient-from-bg bg-gradient-to-transparent)',
);

export const ScrollAreaHorizontalFades = withClassName(
	'div',
	'layer-components:(pointer-events-none absolute inset-0 [--scroll-area-overflow-x-start:inherit] [--scroll-area-overflow-x-end:inherit])',
	'layer-components:before:(content-empty [--scroll-area-overflow-x-start:inherit] left-0 block top-0 h-full absolute transition-width w-[min(40px,var(--scroll-area-overflow-x-start,,40px))] bg-gradient-to-r bg-gradient-from-bg bg-gradient-to-transparent)',
	'layer-components:after:(content-empty [--scroll-area-overflow-x-end:inherit] right-0 block top-0 h-full absolute transition-width w-[min(40px,var(--scroll-area-overflow-x-end,,40px))] bg-gradient-to-l bg-gradient-from-bg bg-gradient-to-transparent)',
);

export const ScrollAreaViewportFades = () => (
	<>
		<ScrollAreaVerticalFades />
		<ScrollAreaHorizontalFades />
	</>
);

export const ScrollAreaContent = withClassName(
	BaseScrollArea.Content,
	'layer-components:(flex flex-col)',
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
	'layer-components:(flex rounded-full relative select-none touch-none pointer-events-none m-xxs opacity-0)',
	'layer-components:(bg-fg/5 transition-[opacity,height,width])',
	'layer-components:data-[hovering]:(opacity-100 pointer-events-auto)',
	'layer-components:data-[scrolling]:(duration-0)',
	'layer-components:before:(content-empty absolute)',

	'layer-components:data-[orientation=vertical]:(w-0.25rem justify-center before:(w-1.25rem h-full) hover:w-0.5rem)',
	'layer-components:data-[orientation=horizontal]:(h-0.25rem items-center before:(h-1.25rem w-full) hover:h-0.5rem)',
);

export const ScrollAreaCorner = withClassName(
	BaseScrollArea.Corner,
	'layer-components:(bg-transparent)',
);

const ScrollAreaDefault = (props: ScrollAreaRootProps) => (
	<ScrollAreaRoot {...props}>
		<ScrollAreaViewport>
			{props.children}
			<ScrollAreaViewportFades />
		</ScrollAreaViewport>
		<ScrollAreaScrollbar />
		<ScrollAreaScrollbar orientation="horizontal" />
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
