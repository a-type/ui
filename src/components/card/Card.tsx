import { useRender, UseRenderRenderProp } from '@base-ui/react/use-render';
import classNames from 'clsx';
import {
	CSSProperties,
	HTMLAttributes,
	MouseEvent,
	ReactNode,
	Ref,
} from 'react';
import { withClassName } from '../../hooks.js';
import { Box } from '../box/Box.js';
import { Masonry, MasonryProps } from '../masonry/masonry.js';
import { SlotDiv } from '../utility/SlotDiv.js';

export const CardRoot = withClassName(
	Box,
	'layer-components:(relative h-max-content flex flex-col overflow-hidden shadow-sm color-neutral-ink bg-neutral-paper border-neutral border-darken-3 b rd-md text-primary)',
	'layer-variants:[&[data-borderless=true]]:(shadow-md border-none)',
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

	const rootProps = {
		...rest,
		className: classNames(
			'layer-components:(min-h-40px flex flex-1 flex-col items-start gap-1 transition bg-transparent pb-xs)',
			'layer-components:(relative z-1 p-0 text-start text-inherit outline-none rd-t-md border-none text-ambient font-inherit)',
			!!compact && 'layer-variants:(pb-0)',
			isInteractive &&
				classNames(
					'layer-components:cursor-pointer',
					'layer-components:hover:color-neutral-ink layer-components:hover:bg-neutral-ink/10',
					'layer-components:focus:outline-none',
					'layer-components:focus-visible:(bg-neutral-ink/10 ring-neutral-ink ring-[2px] ring-inset)',
					'layer-components:data-[visually-focused]:(bg-neutral-ink/10 ring-inset)',
					'layer-components:disabled:(cursor-default)',
					'layer-components:data-[disabled]:(cursor-default)',
				),
			className,
		),
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
	'div',
	'@mode-dense',
	'layer-components:(relative z-1 max-h-80px max-w-full w-auto flex flex-col gap-1 px-lg py-sm mx-md my-md)',
	'layer-components:(transition-colors bg-neutral-paper border-neutral-heavy border rd-md border-solid)',
	'layer-components:(overflow-hidden text-ellipsis text-inherit text-primary fw-[600])',
	'layer-components:[[data-compact]_&]:text-ambient',
);

const CardContentRoot = withClassName(
	'div',
	'@mode-dense',
	'layer-components:(relative z-1 mx-2 my-0.5 flex flex-col gap-1 px-2 py-1 color-neutral-ink bg-neutral-paper/80 border-neutral-heavy/50 border rd-sm border-solid text-ambient)',
	'layer-variants:[[data-compact]_&]:(my-0 py-0 px-sm text-ambient)',
	'layer-variants:[&[data-unstyled]]:([background:unset] p-0 border-none)',
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
	'layer-components:object-cover layer-components:(absolute bottom-0 right-0 top-0 z-0 h-full w-full bg-cover bg-center)',
);

export const CardFooter = withClassName(
	'div',
	'@mode-dense',
	'layer-components:(relative z-1 flex flex-shrink-0 flex-row p-md)',
);

export const CardActions = withClassName(
	'div',
	'layer-components:(ml-0 mr-auto flex flex-row items-center gap-2 p-0 bg-neutral-paper/50 border-neutral-heavy/50 border rd-lg border-solid)',
);

export const CardMenu = withClassName(
	'div',
	'layer-components:(my-auto ml-auto mr-0 flex flex-row items-center gap-1 p-0 bg-neutral-paper/50 rd-lg)',
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
