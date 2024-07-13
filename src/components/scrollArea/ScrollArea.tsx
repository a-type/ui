import * as Primitive from '@radix-ui/react-scroll-area';
import { withClassName } from '../../hooks.js';
import { forwardRef } from 'react';

export const ScrollAreaRoot = withClassName(Primitive.Root, 'overflow-hidden');

export const ScrollAreaViewport = withClassName(
	Primitive.Viewport,
	'h-full w-full',
	'[background:linear-gradient(var(--color-white)_30%,rgba(255,255,255,0))_center_top,linear-gradient(rgba(255,255,255,0),var(--color-white)_70%)_center_bottom,radial-gradient(farthest-side_at_50%_0,var(--color-shadow-1),rgba(0,0,0,0))_center_top,radial-gradient(farthest-side_at_50%_100%,var(--color-shadow-1),rgba(0,0,0,0))_center_bottom]',
	'![background-repeat:no-repeat] ![background-size:100%_40px,100%_40px,100%_14px,100%_14px]',
	'![background-attachment:local,local,scroll,scroll]',
);

export const ScrollAreaScrollbarRoot = withClassName(
	Primitive.Scrollbar,
	'layer-components:(flex select-none touch-none p-0.5 bg-gray-2 transition-colors duration-160ms ease-out)',
	'layer-components:hover:bg-gray-3',
	'layer-components:[&[data-orientation=vertical]]:w-2.5',
	'layer-components:[&[data-orientation=horizontal]]:(flex-col h-2.5)',
);

export const ScrollAreaThumb = withClassName(
	Primitive.Thumb,
	'layer-components:(flex-1 rounded-lg relative bg-gray-5)',
	'before:(content-[""] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full min-w-44px min-h-44px)',
);

export const ScrollAreaScrollbar = forwardRef<
	any,
	Primitive.ScrollAreaScrollbarProps
>(function ScrollAreaScrollbar(props, ref) {
	return (
		<ScrollAreaScrollbarRoot {...props} ref={ref}>
			<ScrollAreaThumb />
		</ScrollAreaScrollbarRoot>
	);
});

export interface ScrollAreaProps extends Primitive.ScrollAreaProps {
	orientation: 'vertical' | 'horizontal';
}

export const ScrollArea = forwardRef<any, ScrollAreaProps>(function ScrollArea(
	{ children, orientation, ...props },
	ref,
) {
	return (
		<ScrollAreaRoot ref={ref} {...props}>
			<ScrollAreaViewport>{children}</ScrollAreaViewport>
			<ScrollAreaScrollbar orientation={orientation} />
		</ScrollAreaRoot>
	);
});
