import { useRender } from '@base-ui/react';
import clsx from 'clsx';
import { withProps } from '../../hooks.js';
import { withClassName } from '../../hooks/withClassName.js';
import cls from './typography.module.css';

export interface TypographyProps extends useRender.ComponentProps<'span'> {
	emphasis?: 'primary' | 'secondary' | 'ambient';
}

export function Text({
	emphasis,
	render,
	className,
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
		},
	});
}

export const Heading = withClassName(Text, '@mode-heading');
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
