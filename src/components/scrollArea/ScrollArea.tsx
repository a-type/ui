import * as Primitive from '@radix-ui/react-scroll-area';
import { Ref } from 'react';
import { withClassName } from '../../hooks.js';

const ScrollAreaRootImpl = withClassName(Primitive.Root, 'overflow-hidden');

export interface ScrollAreaRootProps extends Primitive.ScrollAreaProps {
	background?: 'white' | 'wash' | 'primary-wash' | 'primary' | 'black';
	ref?: Ref<HTMLDivElement>;
}

export const ScrollAreaRoot = function ScrollAreaRoot({
	ref,
	background,
	...props
}: ScrollAreaRootProps) {
	return <ScrollAreaRootImpl ref={ref} {...props} />;
};

export const ScrollAreaViewport = withClassName(
	Primitive.Viewport,
	'h-full w-full',
	'[background:linear-gradient(var(--v-bg)_30%,rgba(255,255,255,0))_center_top,linear-gradient(rgba(255,255,255,0),var(--v-bg)_70%)_center_bottom,radial-gradient(farthest-side_at_50%_0,hsl(from_var(--v-bg)_h_s_calc(l*0.9)),rgba(0,0,0,0))_center_top,radial-gradient(farthest-side_at_50%_100%,hsl(from_var(--v-bg)_h_s_calc(l*0.9)),rgba(0,0,0,0))_center_bottom]',
	'![background-repeat:no-repeat] ![background-size:100%_40px,100%_40px,100%_14px,100%_14px]',
	'![background-attachment:local,local,scroll,scroll]',
);

export const ScrollAreaScrollbarRoot = withClassName(
	Primitive.Scrollbar,
	'layer-components:(flex select-none touch-none p-0.5 bg-inherit bg-lighten-4 transition-colors duration-160ms ease-out)',
	// 'layer-components:hover:bg-lighten-4',
	'layer-components:[&[data-orientation=vertical]]:w-2.5',
	'layer-components:[&[data-orientation=horizontal]]:(flex-col h-2.5)',
);

export const ScrollAreaThumb = withClassName(
	Primitive.Thumb,
	'layer-components:(flex-1 rounded-lg relative bg-inherit bg-darken-8)',
	'before:(content-[""] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full min-w-44px min-h-44px)',
);

export const ScrollAreaScrollbar = function ScrollAreaScrollbar({
	ref,
	...props
}: Primitive.ScrollAreaScrollbarProps & {
	ref?: Ref<HTMLDivElement>;
}) {
	return (
		<ScrollAreaScrollbarRoot {...props} ref={ref}>
			<ScrollAreaThumb />
		</ScrollAreaScrollbarRoot>
	);
};

export interface ScrollAreaProps extends Primitive.ScrollAreaProps {
	background?: ScrollAreaRootProps['background'];
	orientation?: 'vertical' | 'both';
	ref?: Ref<HTMLDivElement>;
}

export const ScrollArea = Object.assign(
	function ScrollArea({
		ref,
		children,
		orientation,
		...props
	}: ScrollAreaProps) {
		return (
			<ScrollAreaRoot ref={ref} {...props}>
				<ScrollAreaViewport>{children}</ScrollAreaViewport>
				<ScrollAreaScrollbar />
				{orientation === 'both' && (
					<ScrollAreaScrollbar orientation="horizontal" />
				)}
			</ScrollAreaRoot>
		);
	},
	{
		Root: ScrollAreaRoot,
		Viewport: ScrollAreaViewport,
		Scrollbar: ScrollAreaScrollbar,
	},
);

const shadowMap = {
	white: 'shadow-1',
	wash: 'shadow-1',
	'primary-wash': 'shadow-2',
	primary: 'shadow-1',
	black: 'overlay',
};
