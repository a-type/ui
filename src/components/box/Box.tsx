import clsx from 'clsx';
import { Ref } from 'react';
import { SlotDiv, SlotDivProps } from '../utility/SlotDiv.js';
import cls from './Box.module.css';

export type BoxAlignment = 'center' | 'stretch' | 'start' | 'end';
export type BoxJustification =
	| 'center'
	| 'safe-center'
	| 'start'
	| 'stretch'
	| 'between'
	| 'around'
	| 'end';
export type BoxSpacingSize = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type ShadowSize = 'sm' | 'md' | 'lg' | 'xl';
type MaybeMinus = '' | '-';
type MaybeUp = '' | '-up';
type ShadowValue = `${MaybeMinus}${ShadowSize}${MaybeUp}`;

export interface BoxProps extends Omit<SlotDivProps, 'wrap'> {
	className?: string;
	/**
	 * Apply flex-direction: column - default is row
	 */
	col?: boolean;
	/**
	 * Reverse flex direction
	 */
	reverse?: boolean;
	/**
	 * Adjust align-items
	 */
	items?: BoxAlignment;
	/**
	 * Adjust justify-content
	 */
	justify?: BoxJustification;
	/**
	 * Apply both align-items and justify-content together
	 */
	layout?:
		| `${BoxAlignment} ${BoxJustification}`
		| `${BoxAlignment & BoxJustification}`;
	/**
	 * Adjust gap
	 */
	gap?: BoxSpacingSize | boolean;
	/**
	 * Add flex-wrap
	 */
	wrap?: boolean;
	/**
	 * Adjust padding
	 */
	p?: BoxSpacingSize | boolean;
	/**
	 * Reduce padding in one axis by one level
	 */
	squish?: 'vertical' | 'horizontal';
	/**
	 * Apply surface intents
	 */
	surface?: boolean | 'ambient' | 'secondary' | 'primary';
	/**
	 * Add a default border
	 */
	border?: boolean;
	/**
	 * Add 100% w/h
	 */
	full?: boolean | 'width' | 'height';
	/**
	 * Control overflow / scroll
	 */
	overflow?: 'hidden' | 'clip' | 'auto' | 'auto-x' | 'auto-y';
	/**
	 * Apply flex-grow
	 */
	grow?: boolean;
	/**
	 * Apply flex-shrink and min-width
	 */
	shrink?: boolean;
	/**
	 * Add shadow
	 */
	elevated?: ShadowValue;
	/** @deprecated - use round */
	rounded?: 'xs' | 'sm' | 'md' | 'lg' | boolean;
	/**
	 * Adust border radius
	 */
	round?: 'xs' | 'sm' | 'md' | 'lg' | boolean;
	ref?: Ref<HTMLDivElement>;
	container?: boolean;
	/**
	 * Adds transparency
	 */
	glass?: boolean;
	/**
	 * Applies a gray foreground color
	 */
	dim?: boolean;
	self?: 'auto' | 'start' | 'end' | 'center' | 'stretch';
}

export function Box({
	className,
	items: itemsSolo,
	justify: justifySolo,
	layout,
	gap,
	wrap,
	p,
	col,
	reverse,
	style,
	container,
	surface,
	color,
	border,
	full,
	overflow,
	grow,
	shrink,
	elevated,
	rounded = surface ? true : undefined,
	round = rounded,
	glass,
	dim,
	self,
	squish,
	ref,
	...rest
}: BoxProps) {
	const items = itemsSolo ?? layout?.split(' ')[0];
	const justify = justifySolo ?? layout?.split(' ')[1] ?? layout;
	const [inset, elevation, up] = parseElevated(elevated);

	const main = (
		<SlotDiv
			ref={ref}
			{...rest}
			style={style}
			className={clsx(color && `@mode-${color}`, cls.root, className)}
			data-col={col ? '' : undefined}
			data-reverse={reverse ? '' : undefined}
			data-gap={gap}
			data-items={items}
			data-justify={justify}
			data-wrap={wrap}
			data-p={p}
			data-rounded={round}
			data-surface={surface}
			data-border={border}
			data-full={full}
			data-overflow={overflow}
			data-grow={grow}
			data-shrink={shrink}
			data-elevated={elevation}
			data-shadow-up={up}
			data-shadow-inset={inset}
			data-container={container}
			data-glass={glass}
			data-self={self}
			data-dim={dim}
			data-squish={squish}
		/>
	);

	return main;
}

function parseElevated(elevated?: ShadowValue) {
	if (!elevated) return [false, false, false] as const;

	const match = elevated.match(/^(-)?(sm|md|lg|xl)(-up)?$/);
	if (!match) {
		console.warn(
			`Invalid elevated value: ${elevated}. Expected format: "[-]size[-up]", where size is one of "sm", "md", "lg", "xl".`,
		);
		return [false, false, false] as const;
	}

	const [, minus, size, up] = match;
	const inset = minus === '-';
	const elevation = size as ShadowSize;
	const isUp = up === '-up';

	return [inset, elevation, isUp] as const;
}
