import { useRender, UseRenderRenderProp } from '@base-ui/react/use-render';
import classNames from 'clsx';
import {
	CSSProperties,
	HTMLAttributes,
	MouseEvent,
	ReactNode,
	Ref,
} from 'react';
import { withClassName, withProps } from '../../hooks.js';
import { Box } from '../box/Box.js';
import { Masonry, MasonryProps } from '../masonry/masonry.js';
import { SlotDiv } from '../utility/SlotDiv.js';
import cls from './Card.module.css';

export const CardRoot = withClassName(withProps(Box, { col: true }), cls.root);

export function CardMain({
	className,
	compact,
	nonInteractive,
	ref,
	style,
	children,
	visuallyDisabled,
	visuallyFocused,
	render,
	...rest
}: {
	render?: UseRenderRenderProp<{
		visuallyFocused?: boolean;
		visuallyDisabled?: boolean;
		interactive?: boolean;
		compact?: boolean;
	}>;
	className?: string;
	onClick?: (ev: MouseEvent) => void;
	children?: ReactNode;
	compact?: boolean;
	/** forces non-interactive version */
	nonInteractive?: boolean;
	visuallyFocused?: boolean;
	visuallyDisabled?: boolean;
	style?: CSSProperties;
	ref?: Ref<any>;
}) {
	const isInteractive = !nonInteractive && (!!render || !!rest.onClick);

	const rootProps = {
		...rest,
		className: classNames(cls.main, className),
		style,
		children,
	};

	const root = useRender({
		defaultTagName: isInteractive ? 'button' : 'div',
		props: rootProps,
		ref,
		render,
		state: {
			interactive: !!isInteractive,
			compact: !!compact,
			focusVisible: !!visuallyFocused,
			disabled: !!visuallyDisabled,
		},
	});

	return root;
}

export const CardTitle = withClassName(
	withProps(Box, {
		surface: 'ambient',
		gap: 'sm',
		col: true,
		rounded: 'sm',
	}),
	cls.title,
);

const CardContentRoot = withClassName(
	withProps(Box, {
		surface: 'ambient',
		glass: true,
		col: true,
		gap: 'sm',
		rounded: 'sm',
	}),
	'@mode-dense',
	cls.content,
);
export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
	unstyled?: boolean;
	ref?: Ref<HTMLDivElement>;
}
export function CardContent({ unstyled, ref, ...rest }: CardContentProps) {
	return (
		<CardContentRoot
			ref={ref}
			data-unstyled={unstyled || undefined}
			{...rest}
		/>
	);
}

export const CardImage = withClassName(SlotDiv, cls.image);

export const CardFooter = withClassName('div', '@mode-dense', cls.footer);

export const CardActions = withClassName('div', cls.actions);

export const CardMenu = withClassName('div', cls.menu);

export const cardGridColumns = {
	default: (size: number) => (size < 480 ? 1 : size < 800 ? 2 : 3),
	small: (size: number) =>
		size < 320 ? 1 : size < 480 ? 2 : size < 800 ? 3 : 4,
};
export const CardGrid = ({
	children,
	className,
	columns = cardGridColumns.default,
	gap,
}: MasonryProps) => {
	return (
		<Masonry className={className} columns={columns} gap={gap}>
			{children}
		</Masonry>
	);
};

export const Card = Object.assign(CardRoot, {
	Main: CardMain,
	Title: CardTitle,
	Content: CardContent,
	Image: CardImage,
	Footer: CardFooter,
	Actions: CardActions,
	Menu: CardMenu,
	Grid: CardGrid,
});
