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
	direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
	d?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
	col?: boolean;
	items?: BoxAlignment;
	justify?: BoxJustification;
	layout?: `${BoxAlignment} ${BoxJustification}`;
	gap?: BoxSpacingSize | boolean;
	wrap?: boolean;
	p?: BoxSpacingSize | boolean;
	surface?: boolean | 'white';
	border?: boolean;
	full?: boolean | 'width' | 'height';
	overflow?: 'hidden' | 'auto' | 'auto-x' | 'auto-y';
	grow?: boolean;
	elevated?: ShadowValue;
	rounded?: 'sm' | 'md' | 'lg' | 'xl' | boolean;
	ref?: Ref<HTMLDivElement>;
	container?: boolean;
}

export function Box({
	className,
	items: itemsSolo,
	justify: justifySolo,
	layout: align,
	gap = 'none',
	wrap,
	p = 'none',
	col,
	d = col ? 'col' : 'row',
	direction = d,
	style,
	container,
	surface,
	color,
	border,
	full,
	overflow,
	grow,
	elevated,
	rounded,
	ref,
	...rest
}: BoxProps) {
	const items = itemsSolo ?? align?.split(' ')[0];
	const justify = justifySolo ?? align?.split(' ')[1];
	const [inset, elevation, up] = parseElevated(elevated);

	const main = (
		<SlotDiv
			ref={ref}
			{...rest}
			style={style}
			className={clsx(
				'layer-components:relative layer-components:flex',
				color && `@mode-${color}`,
				cls.root,
				className,
			)}
			data-direction={direction}
			data-gap={gap}
			data-items={items}
			data-justify={justify}
			data-wrap={wrap}
			data-p={p}
			data-rounded={rounded}
			data-surface={surface}
			data-border={border}
			data-full={full}
			data-overflow={overflow}
			data-grow={grow}
			data-elevated={elevation}
			data-shadow-up={up}
			data-shadow-inset={inset}
			data-container={container}
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
