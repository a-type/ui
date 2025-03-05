import clsx from 'clsx';
import { createContext, Ref, useContext, useMemo } from 'react';
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
export type BoxResponsive<T> =
	| T
	| {
			default?: T;
			sm?: T;
			md?: T;
			lg?: T;
	  };

function isResponsive<T>(
	value: BoxResponsive<T>,
): value is { sm?: T; md?: T; lg?: T } {
	return typeof value === 'object';
}

function hasDefault<T>(value: BoxResponsive<T>, val: T) {
	return value === val || (isResponsive(value) && value.default === val);
}

export interface BoxProps extends Omit<SlotDivProps, 'wrap'> {
	className?: string;
	direction?: BoxResponsive<'row' | 'col' | 'row-reverse' | 'col-reverse'>;
	d?: BoxResponsive<'row' | 'col' | 'row-reverse' | 'col-reverse'>;
	items?: BoxAlignment;
	justify?: BoxJustification;
	layout?: `${BoxAlignment} ${BoxJustification}`;
	gap?: BoxSpacingSize | boolean;
	wrap?: BoxResponsive<boolean>;
	p?: BoxResponsive<BoxSpacingSize | boolean>;
	container?: boolean | 'reset';
	surface?: boolean | 'primary' | 'accent' | 'default' | 'attention';
	theme?: ThemeName;
	border?: boolean;
	full?: boolean | 'width' | 'height';
	overflow?: 'hidden' | 'auto' | 'auto-x' | 'auto-y';
	ref?: Ref<HTMLDivElement>;
}

export function Box({
	className,
	items: itemsSolo,
	justify: justifySolo,
	layout: align,
	gap = 'none',
	wrap,
	p = 'none',
	d = 'row',
	direction = d,
	container,
	style: userStyle,
	surface,
	theme,
	border,
	full,
	overflow,
	ref,
	...rest
}: BoxProps) {
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
				'layer-components:flex layer-components:relative',
				{
					'layer-components:flex-row': hasDefault(direction, 'row'),
					'layer-components:flex-col': hasDefault(direction, 'col'),
					'layer-components:flex-row-reverse': hasDefault(
						direction,
						'row-reverse',
					),
					'layer-components:flex-col-reverse': hasDefault(
						direction,
						'col-reverse',
					),
					'layer-components:sm:flex-row':
						isResponsive(direction) && direction.sm === 'row',
					'layer-components:sm:flex-col':
						isResponsive(direction) && direction.sm === 'col',
					'layer-components:sm:flex-row-reverse':
						isResponsive(direction) && direction.sm === 'row-reverse',
					'layer-components:sm:flex-col-reverse':
						isResponsive(direction) && direction.sm === 'col-reverse',
					'layer-components:md:flex-row':
						isResponsive(direction) && direction.md === 'row',
					'layer-components:md:flex-col':
						isResponsive(direction) && direction.md === 'col',
					'layer-components:md:flex-row-reverse':
						isResponsive(direction) && direction.md === 'row-reverse',
					'layer-components:md:flex-col-reverse':
						isResponsive(direction) && direction.md === 'col-reverse',
					'layer-components:lg:flex-row':
						isResponsive(direction) && direction.lg === 'row',
					'layer-components:lg:flex-col':
						isResponsive(direction) && direction.lg === 'col',
					'layer-components:lg:flex-row-reverse':
						isResponsive(direction) && direction.lg === 'row-reverse',
					'layer-components:lg:flex-col-reverse':
						isResponsive(direction) && direction.lg === 'col-reverse',
					'layer-components:flex-wrap': hasDefault(wrap, true),
					'layer-components:sm:flex-wrap': isResponsive(wrap) && wrap.sm,
					'layer-components:md:flex-wrap': isResponsive(wrap) && wrap.md,
					'layer-components:lg:flex-wrap': isResponsive(wrap) && wrap.lg,
					'layer-components:gap-xs': gap === 'xs',
					'layer-components:gap-sm': gap === 'sm',
					'layer-components:gap-md': gap === 'md' || gap === true,
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
					'layer-components:p-xs': hasDefault(p, 'xs'),
					'layer-components:p-sm': hasDefault(p, 'sm'),
					'layer-components:p-md': hasDefault(p, 'md') || hasDefault(p, true),
					'layer-components:p-lg': hasDefault(p, 'lg'),
					'layer-components:p-xl': hasDefault(p, 'xl'),
					'layer-components:sm:p-xs': isResponsive(p) && p.sm === 'xs',
					'layer-components:sm:p-sm': isResponsive(p) && p.sm === 'sm',
					'layer-components:sm:p-md': isResponsive(p) && p.sm === 'md',
					'layer-components:sm:p-lg': isResponsive(p) && p.sm === 'lg',
					'layer-components:sm:p-xl': isResponsive(p) && p.sm === 'xl',
					'layer-components:md:p-xs': isResponsive(p) && p.md === 'xs',
					'layer-components:md:p-sm': isResponsive(p) && p.md === 'sm',
					'layer-components:md:p-md': isResponsive(p) && p.md === 'md',
					'layer-components:md:p-lg': isResponsive(p) && p.md === 'lg',
					'layer-components:md:p-xl': isResponsive(p) && p.md === 'xl',
					'layer-components:lg:p-xs': isResponsive(p) && p.lg === 'xs',
					'layer-components:lg:p-sm': isResponsive(p) && p.lg === 'sm',
					'layer-components:lg:p-md': isResponsive(p) && p.lg === 'md',
					'layer-components:lg:p-lg': isResponsive(p) && p.lg === 'lg',
					'layer-components:lg:p-xl': isResponsive(p) && p.lg === 'xl',
					'layer-components:rounded-lg': !!surface,
					'layer-components:(bg-white border-black)':
						surface === true || surface === 'default',
					'layer-components:(bg-primary-wash border-primary-dark color-primary-dark)':
						surface === 'primary',
					'layer-components:(bg-accent-wash border-accent-dark color-accent-dark)':
						surface === 'accent',
					'layer-components:(bg-attention-wash border-attention-dark color-attention-dark)':
						surface === 'attention',
					'layer-components:(border border-solid rounded-lg)': border,
					'layer-components:w-full': full === true || full === 'width',
					'layer-components:h-full': full === true || full === 'height',
					'layer-components:overflow-hidden': overflow === 'hidden',
					'layer-components:overflow-auto': overflow === 'auto',
					'layer-components:(overflow-x-auto overflow-y-hidden)':
						overflow === 'auto-x',
					'layer-components:(overflow-y-auto overflow-x-hidden)':
						overflow === 'auto-y',
				},
				theme && `theme-${theme}`,
				className,
			)}
		/>
	);

	if (container) {
		return (
			<BoxContext.Provider
				value={{
					spacingScale:
						container === 'reset'
							? 1
							: spacingScale * SPACING_SCALE_NESTING_FACTOR,
				}}
			>
				{main}
			</BoxContext.Provider>
		);
	}

	return main;
}

const SPACING_SCALE_NESTING_FACTOR = 0.5;
const BoxContext = createContext<{
	spacingScale: number;
}>({
	spacingScale: 1,
});
