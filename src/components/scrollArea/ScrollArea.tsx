import * as Primitive from '@radix-ui/react-scroll-area';
import { Ref, useMemo } from 'react';
import { withClassName } from '../../hooks.js';

const ScrollAreaRootImpl = withClassName(
	Primitive.Root,
	'overflow-hidden bg-[var(--scroll-bg)] rounded-lg',
	'layer-components:([--scroll-bg:var(--color-wash)] [--scroll-shadow:var(--color-shadow-1))])',
);

export interface ScrollAreaRootProps extends Primitive.ScrollAreaProps {
	background?: 'white' | 'wash' | 'primary-wash' | 'primary' | 'black';
	ref?: Ref<HTMLDivElement>;
}

export const ScrollAreaRoot = function ScrollAreaRoot({
	ref,
	background = 'wash',
	...props
}: ScrollAreaRootProps) {
	const bgStyle: any = useMemo(
		() => ({
			'--scroll-bg': `var(--color-${background})`,
			'--scroll-shadow': `var(--color-${shadowMap[background]})`,
		}),
		[background],
	);
	return <ScrollAreaRootImpl ref={ref} style={bgStyle} {...props} />;
};

export const ScrollAreaViewport = withClassName(
	Primitive.Viewport,
	'h-full w-full',
	'[background:linear-gradient(var(--scroll-bg)_30%,rgba(255,255,255,0))_center_top,linear-gradient(rgba(255,255,255,0),var(--scroll-bg)_70%)_center_bottom,radial-gradient(farthest-side_at_50%_0,var(--scroll-shadow),rgba(0,0,0,0))_center_top,radial-gradient(farthest-side_at_50%_100%,var(--scroll-shadow),rgba(0,0,0,0))_center_bottom]',
	'![background-repeat:no-repeat] ![background-size:100%_40px,100%_40px,100%_14px,100%_14px]',
	'![background-attachment:local,local,scroll,scroll]',
);

export const ScrollAreaScrollbarRoot = withClassName(
	Primitive.Scrollbar,
	'layer-components:(flex select-none touch-none p-0.5 bg-gray-wash transition-colors duration-160ms ease-out)',
	'layer-components:hover:bg-lighten-1',
	'layer-components:[&[data-orientation=vertical]]:w-2.5',
	'layer-components:[&[data-orientation=horizontal]]:(flex-col h-2.5)',
);

export const ScrollAreaThumb = withClassName(
	Primitive.Thumb,
	'layer-components:(flex-1 rounded-lg relative bg-gray)',
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
