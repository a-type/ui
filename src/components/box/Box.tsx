import clsx from 'clsx';
import { createContext, forwardRef, useContext, useMemo } from 'react';
import { ThemeName } from '../colorPicker/ColorPicker.js';
import { SlotDiv, SlotDivProps } from '../utility/SlotDiv.js';

export type BoxAlignment = 'center' | 'stretch' | 'start' | 'end';
export type BoxJustification =
	| 'center'
	| 'start'
	| 'stretch'
	| 'between'
	| 'around'
	| 'end';
export type BoxSpacingSize = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface BoxProps extends Omit<SlotDivProps, 'wrap'> {
	className?: string;
	direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
	items?: BoxAlignment;
	justify?: BoxJustification;
	align?: `${BoxAlignment} ${BoxJustification}`;
	gap?: BoxSpacingSize;
	wrap?: boolean;
	p?: BoxSpacingSize;
	container?: boolean;
	surface?: boolean;
	theme?: ThemeName;
	border?: boolean;
}

export const Box = forwardRef<HTMLDivElement, BoxProps>(function Box(
	{
		className,
		direction,
		items: itemsSolo,
		justify: justifySolo,
		align,
		gap = 'md',
		wrap,
		p = 'sm',
		container,
		style: userStyle,
		surface,
		theme,
		border,
		...rest
	},
	ref,
) {
	const { spacingScale } = useContext(BoxContext);

	const style = useMemo(
		() => ({
			...userStyle,
			'--spacing-scale': spacingScale,
		}),
		[userStyle, spacingScale],
	);

	const items = itemsSolo ?? align?.split(' ')[0];
	const justify = justifySolo ?? align?.split(' ')[1];

	const main = (
		<SlotDiv
			ref={ref}
			{...rest}
			style={style}
			className={clsx(
				'flex',
				{
					'layer-components:flex-row': direction === 'row',
					'layer-components:flex-col': direction === 'col',
					'layer-components:flex-row-reverse': direction === 'row-reverse',
					'layer-components:flex-col-reverse': direction === 'col-reverse',
					'layer-components:flex-wrap': wrap,
					'layer-components:gap-xs': gap === 'xs',
					'layer-components:gap-sm': gap === 'sm',
					'layer-components:gap-md': gap === 'md',
					'layer-components:gap-lg': gap === 'lg',
					'layer-components:gap-xl': gap === 'xl',
					'layer-components:items-center': items === 'center',
					'layer-components:items-stretch': items === 'stretch',
					'layer-components:items-start': items === 'start',
					'layer-components:items-end': items === 'end',
					'layer-components:justify-center': justify === 'center',
					'layer-components:justify-stretch': justify === 'stretch',
					'layer-components:justify-start': justify === 'start',
					'layer-components:justify-end': justify === 'end',
					'layer-components:justify-between': justify === 'between',
					'layer-components:justify-around': justify === 'around',
					'layer-components:p-xs': p === 'xs',
					'layer-components:p-sm': p === 'sm',
					'layer-components:p-md': p === 'md',
					'layer-components:p-lg': p === 'lg',
					'layer-components:p-xl': p === 'xl',
					'layer-components:(rounded-lg bg-primary-wash)': surface,
					'layer-components:(border border-solid border-primary-dark rounded-lg)':
						border,
				},
				theme && `theme-${theme}`,
				className,
			)}
		/>
	);

	if (container) {
		return (
			<BoxContext.Provider
				value={{ spacingScale: spacingScale * SPACING_SCALE_NESTING_FACTOR }}
			>
				{main}
			</BoxContext.Provider>
		);
	}

	return main;
});

const SPACING_SCALE_NESTING_FACTOR = 0.5;
const BoxContext = createContext<{
	spacingScale: number;
}>({
	spacingScale: 1,
});
