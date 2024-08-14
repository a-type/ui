import { Slot } from '@radix-ui/react-slot';
import classNames from 'clsx';
import { HTMLAttributes, MouseEvent, ReactNode, forwardRef } from 'react';
import { withClassName } from '../../hooks.js';
import { Masonry, MasonryProps } from '../masonry/masonry.js';
import { SlotDiv } from '../utility/SlotDiv.js';

export const CardRoot = withClassName(
	'div',
	'layer-components:(flex flex-col border-light rounded-lg text-lg overflow-hidden h-max-content relative bg-gray-1 text-black shadow-sm)',
	'layer-variants:[&[data-borderless=true]]:(border-none shadow-md)',
);

export const CardMain = forwardRef<
	any,
	{
		asChild?: boolean;
		className?: string;
		onClick?: (ev: MouseEvent) => void;
		children?: ReactNode;
		compact?: boolean;
		/** forces non-interactive version */
		nonInteractive?: boolean;
	}
>(function CardMain(
	{ asChild, className, compact, nonInteractive, ...rest },
	ref,
) {
	const isInteractive = !nonInteractive && (!!asChild || !!rest.onClick);
	const Comp = asChild ? Slot : isInteractive ? 'button' : 'div';
	return (
		<Comp
			ref={ref}
			className={classNames(
				'layer-components:(flex flex-col items-start gap-1 transition pb-2 flex-1 min-h-40px bg-transparent border-none text-start text-inherit text-sm relative z-1 p-0 font-sans outline-none)',
				!!compact && 'layer-variants:(pb-0)',
				isInteractive &&
					'layer-components:cursor-pointer layer-components:hover:(bg-gray-darkBlend color-black shadow-sm-inset) layer-components:focus:outline-none layer-components:focus-visible:(outline-none ring-inset ring-4 ring-gray-5)',
				className,
			)}
			data-compact={compact}
			{...rest}
		/>
	);
});

export const CardTitle = withClassName(
	'div',
	'layer-components:(flex flex-col gap-1 mt-0 bg-white py-2 px-3 rounded-lg rounded-bl-none rounded-tr-none w-auto mr-auto border border-solid border-grayDarkBlend text-md max-h-80px overflow-hidden text-ellipsis max-w-full text-inherit font-semibold)',
	'layer-components:[[data-compact=true]_&]:(py-1 text-sm)',
);

const CardContentRoot = withClassName(
	'div',
	'layer-components:(flex flex-col gap-1 px-2 py-1 bg-light-blend text-black rounded-md mx-2 my-0.5 border border-solid border-grayDarkBlend text-xs)',
	'layer-variants:[[data-compact=true]_&]:(py-0 px-1 my-0 text-xs)',
	'layer-variants:[&[data-unstyled]]:(p-0 [background:unset] border-none)',
);
export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
	unstyled?: boolean;
}
export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
	function CardContent({ unstyled, ...rest }, ref) {
		return <CardContentRoot ref={ref} data-unstyled={unstyled} {...rest} />;
	},
);

export const CardImage = withClassName(
	SlotDiv,
	'layer-components:(absolute z-0 right-0 top-0 bottom-0 w-full h-full object-cover bg-center)',
);

export const CardFooter = withClassName(
	'div',
	'layer-components:(flex flex-row flex-shrink-0 p-1 relative z-1)',
);

export const CardActions = withClassName(
	'div',
	'layer-components:(ml-0 mr-auto flex flex-row gap-2 items-center bg-white rounded-full p-0 border border-solid border-grayDarkBlend)',
);

export const CardMenu = withClassName(
	'div',
	'layer-components:(mr-0 ml-auto my-auto flex flex-row gap-1 items-center bg-overlay rounded-full p-0)',
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
