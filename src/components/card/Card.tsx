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
import {
	GroupScaleLayer,
	useGroupScaleStyles,
} from '../../systems/GroupScale.js';
import { Box } from '../box/Box.js';
import { Masonry, MasonryProps } from '../masonry/masonry.js';
import { SlotDiv } from '../utility/SlotDiv.js';

export const CardRoot = withClassName(
	withProps(Box, { container: 'reset' }),
	'layer-components:(flex flex-col border-light rounded-lg text-lg overflow-hidden h-max-content relative bg-wash bg-darken-0.5 color-black shadow-sm)',
	'layer-variants:[&[data-borderless=true]]:(border-none shadow-md)',
);

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

	const scaleStyles = useGroupScaleStyles(style);

	const rootProps = {
		...rest,
		className: classNames(
			'layer-components:(min-h-40px flex flex-1 flex-col items-start gap-1 pb-xs transition bg-transparent)',
			'layer-components:(relative z-1 rounded-t-md border-none p-0 text-start text-sm text-inherit font-inherit outline-none)',
			!!compact && 'layer-variants:(pb-0)',
			isInteractive &&
				classNames(
					'layer-components:cursor-pointer',
					'layer-components:hover:(color-black bg-black/10)',
					'layer-components:focus:outline-none',
					'layer-components:focus-visible:(outline-none ring-4 ring-inset bg-black/10 ring-accent)',
					'layer-components:data-[visually-focused]:(ring-4 ring-inset bg-black/10 ring-accent)',
					'layer-components:disabled:(cursor-default)',
					'layer-components:data-[visually-disabled]:(cursor-default)',
				),
			className,
		),
		style: scaleStyles,
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
			visuallyFocused: !!visuallyFocused,
			visuallyDisabled: !!visuallyDisabled,
		},
	});

	return <GroupScaleLayer>{root}</GroupScaleLayer>;
}

export const CardTitle = withClassName(
	'div',
	'layer-components:(flex flex-col gap-1 my-xs mx-xs py-xs px-sm w-auto max-h-80px max-w-full relative z-1)',
	'layer-components:(bg-white rounded-md border border-solid border-gray-dark transition-colors)',
	'layer-components:(text-md overflow-hidden text-ellipsis text-inherit font-semibold)',
	'layer-components:[[data-compact]_&]:(text-sm)',
);

const CardContentRoot = withClassName(
	'div',
	'layer-components:(flex flex-col gap-1 px-2 py-1 bg-white/80 color-black rounded-sm mx-2 my-0.5 border border-solid border-gray-dark/50 text-xs relative z-1)',
	'layer-variants:[[data-compact]_&]:(py-0 px-sm my-0 text-xs)',
	'layer-variants:[&[data-unstyled]]:(p-0 [background:unset] border-none)',
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

export const CardImage = withClassName(
	SlotDiv,
	'layer-components:(absolute z-0 right-0 top-0 bottom-0 w-full h-full object-cover bg-cover bg-center)',
);

export const CardFooter = withClassName(
	'div',
	'layer-components:(flex flex-row flex-shrink-0 p-1 relative z-1)',
);

export const CardActions = withClassName(
	'div',
	'layer-components:(ml-0 mr-auto flex flex-row gap-2 items-center bg-white/50 rounded-lg p-0 border border-solid border-gray-dark/50)',
);

export const CardMenu = withClassName(
	'div',
	'layer-components:(mr-0 ml-auto my-auto flex flex-row gap-1 items-center bg-white/50 py-0.5 rounded-lg p-0)',
);

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
