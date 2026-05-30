import {
	ScrollArea as BaseScrollArea,
	ScrollAreaContentProps,
	ScrollAreaRootProps,
	ScrollAreaScrollbarProps,
} from '@base-ui/react/scroll-area';
import { Ref } from 'react';
import { withClassName } from '../../hooks.js';
import cls from './ScrollArea.module.css';

export type * from '@base-ui/react/scroll-area';

export const ScrollAreaRoot = withClassName(BaseScrollArea.Root, cls.root);

export const StyledScrollAreaViewport = withClassName(
	BaseScrollArea.Viewport,
	cls.viewport,
);

export const ScrollAreaVerticalFades = withClassName('div', cls.verticalFades);

export const ScrollAreaHorizontalFades = withClassName(
	'div',
	cls.horizontalFades,
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
	cls.content,
);

export const ScrollAreaThumb = withClassName(BaseScrollArea.Thumb, cls.thumb);

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
	cls.scrollbar,
);

export const ScrollAreaCorner = withClassName(
	BaseScrollArea.Corner,
	cls.corner,
);

export interface ScrollAreaViewportProps extends BaseScrollArea.Viewport.Props {
	direction?: 'vertical' | 'horizontal' | 'both';
	ref?: Ref<HTMLDivElement>;
}
const ScrollAreaViewport = ({
	direction,
	...props
}: ScrollAreaViewportProps) => {
	return (
		<StyledScrollAreaViewport
			{...props}
			style={{
				overflow:
					direction === 'vertical'
						? 'clip scroll'
						: direction === 'horizontal'
						? 'scroll clip'
						: 'scroll scroll',
			}}
			data-scroll-direction={direction}
		/>
	);
};

const ScrollAreaDefault = ({
	disableFades,
	direction,
	...props
}: ScrollAreaRootProps & {
	disableFades?: boolean;
	direction?: 'vertical' | 'horizontal' | 'both';
}) => (
	<ScrollAreaRoot {...props}>
		<ScrollAreaViewport direction={direction}>
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
