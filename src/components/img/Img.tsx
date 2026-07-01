import clsx from 'clsx';
import { ComponentProps } from 'react';
import cls from './Img.module.css';

export interface ImgProps extends ComponentProps<'img'> {
	full?: 'width' | 'height' | boolean;
	fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
	position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
}

export function Img({ full, fit, position, className, ...props }: ImgProps) {
	return (
		<img
			className={clsx(cls.root, className)}
			data-full={full}
			data-fit={fit}
			data-position={position}
			{...props}
		/>
	);
}
