import { ComponentProps } from 'react';

export interface ImgProps extends ComponentProps<'img'> {
	full?: 'width' | 'height' | boolean;
	fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
	position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
}

export function Img({ full, fit, position, ...props }: ImgProps) {
	return (
		<img data-full={full} data-fit={fit} data-position={position} {...props} />
	);
}
