import { useRender } from '@base-ui/react';
import clsx from 'clsx';
import { ComponentProps } from 'react';
import { withClassName } from '../../hooks/withClassName.js';
import { withProps } from '../../hooks/withProps.js';
import cls from './typography.module.css';

export interface TypographyProps extends useRender.ComponentProps<'span'> {
	emphasis?: 'primary' | 'secondary' | 'ambient';
	italic?: boolean;
	underline?: boolean;
	strikethrough?: boolean;
	bold?: boolean;
	thin?: boolean;
	normal?: boolean;
	uppercase?: boolean;
	truncate?: boolean;
	dim?: boolean;
	color?: 'neutral' | 'main' | 'attention' | 'success';
}

export function Text({
	emphasis,
	italic,
	underline,
	strikethrough,
	render,
	className,
	bold,
	thin,
	truncate,
	dim,
	color,
	normal,
	uppercase,
	...rest
}: TypographyProps) {
	return useRender({
		render,
		defaultTagName: 'span',
		props: {
			...rest,
			className: clsx(cls.typography, cls.removeMargin, className),
		},
		state: {
			emphasis,
			italic: italic ? true : undefined,
			underline: underline ? true : undefined,
			strikethrough: strikethrough ? true : undefined,
			bold: bold ? true : undefined,
			thin: thin ? true : undefined,
			truncate: truncate ? true : undefined,
			dim: dim ? true : undefined,
			color: color ? color : undefined,
			normal: normal ? true : undefined,
			uppercase: uppercase ? true : undefined,
		},
	});
}

export const Heading = withProps(withClassName(Text, '@mode-heading'), {
	emphasis: 'secondary',
});
export const HeroText = withClassName(Text, '@mode-hero');
export const P = withProps(Text, { render: <p /> });

/**
 * @deprecated Use Heading with appropriate render and emphasis instead
 */
export const H1 = withProps(Heading, {
	render: <h1 />,
	emphasis: 'primary',
});
/**
 * @deprecated Use Heading with appropriate render and emphasis instead
 */
export const H2 = withProps(Heading, {
	render: <h2 />,
	emphasis: 'secondary',
});
/**
 * @deprecated Use Heading with appropriate render and emphasis instead
 */
export const H3 = withProps(Heading, {
	render: <h3 />,
	emphasis: 'secondary',
});
/**
 * @deprecated Use Heading with appropriate render and emphasis instead
 */
export const H4 = withProps(Heading, {
	render: <h4 />,
	emphasis: 'ambient',
});
/**
 * @deprecated Use Heading with appropriate render and emphasis instead
 */
export const H5 = withProps(Heading, {
	render: <h5 />,
	emphasis: 'ambient',
});

export function TextLink(props: TypographyProps & ComponentProps<'a'>) {
	return <Text bold underline render={<a />} {...props} />;
}
