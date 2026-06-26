import clsx from 'clsx';
import { ComponentProps } from 'react';
import { withClassName } from '../../hooks.js';
import cls from './lists.module.css';

export interface OlProps extends ComponentProps<'ol'> {
	unstyled?: boolean;
}

const OlBase = ({ unstyled, className, ...rest }: OlProps) => {
	return (
		<ol
			{...rest}
			className={clsx(cls.ol, className)}
			data-unstyled={unstyled ? true : undefined}
		/>
	);
};
const OlItem = withClassName('li');

export const Ol = Object.assign(OlBase, {
	Item: OlItem,
});

const UlBase = ({ unstyled, className, ...rest }: OlProps) => {
	return (
		<ul
			{...rest}
			className={clsx(cls.ul, className)}
			data-unstyled={unstyled ? true : undefined}
		/>
	);
};
const UlItem = withClassName('li');

export const Ul = Object.assign(UlBase, {
	Item: UlItem,
});
