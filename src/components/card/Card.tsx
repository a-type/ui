import { Slot } from '@radix-ui/react-slot';
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
	asChild,
	className,
	compact,
	nonInteractive,
	ref,
	style,
	children,
	...rest
}: {
	asChild?: boolean;
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
	const isInteractive = !nonInteractive && (!!asChild || !!rest.onClick);
	const Comp = asChild ? Slot : isInteractive ? 'button' : 'div';

	const scaleStyles = useGroupScaleStyles(style);

	return (
		<GroupScaleLayer>
			<Comp
				ref={ref}
				className={classNames(
					'layer-components:(flex flex-col items-start gap-1 transition pb-xs flex-1 min-h-40px bg-transparent)',
					'layer-components:(border-none text-start text-inherit text-sm relative z-1 p-0 font-inherit outline-none rounded-t-md)',
					!!compact && 'layer-variants:(pb-0)',
					isInteractive &&
						classNames(
							'layer-components:cursor-pointer',
							'layer-components:hover:(bg-black/10 color-black)',
							'layer-components:focus:outline-none',
							'layer-components:focus-visible:(outline-none bg-black/10 ring-inset ring-4 ring-accent)',
							'layer-components:[&[data-visually-focused=true]]:(bg-black/10 ring-inset ring-4 ring-accent)',
							'layer-components:disabled:(cursor-default)',
							'layer-components:[&[data-visually-disabled=true]]:(cursor-default)',
						),
					className,
				)}
				data-compact={compact}
				data-visually-focused={rest.visuallyFocused}
				data-visually-disabled={rest.visuallyDisabled}
				data-interactive={isInteractive}
				style={scaleStyles}
				{...rest}
			>
				{children}
			</Comp>
		</GroupScaleLayer>
	);
}

export const CardTitle = withClassName(
	'div',
	'layer-components:(flex flex-col gap-1 my-xs mx-xs py-xs px-sm w-auto max-h-80px max-w-full relative z-1)',
	'layer-components:(bg-white rounded-md border border-solid border-gray-dark transition-colors)',
	'layer-components:(text-md overflow-hidden text-ellipsis text-inherit font-semibold)',
	'layer-components:[[data-compact=true]_&]:(text-sm)',
);

const CardContentRoot = withClassName(
	'div',
	'layer-components:(flex flex-col gap-1 px-2 py-1 bg-white/80 color-black rounded-sm mx-2 my-0.5 border border-solid border-gray-dark/50 text-xs relative z-1)',
	'layer-variants:[[data-compact=true]_&]:(py-0 px-sm my-0 text-xs)',
	'layer-variants:[&[data-unstyled=true]]:(p-0 [background:unset] border-none)',
);
export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
	unstyled?: boolean;
	ref?: Ref<HTMLDivElement>;
}
export function CardContent({ unstyled, ref, ...rest }: CardContentProps) {
	return <CardContentRoot ref={ref} data-unstyled={unstyled} {...rest} />;
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
