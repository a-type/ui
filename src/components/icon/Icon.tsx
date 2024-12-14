import classNames from 'clsx';
import { HTMLAttributes } from 'react';
import { IconName } from './generated/iconNames.js';

export interface IconProps extends HTMLAttributes<SVGSVGElement> {
	name: IconName;
	size?: number;
}

export const Icon = function Icon({
	ref,
	name,
	size = 15,
	className,
	...rest
}: IconProps & {
	ref?: React.Ref<SVGSVGElement>;
}) {
	return (
		<svg
			ref={ref}
			className={classNames(
				'flex-shrink-0 layer-components:fill-none',
				className,
			)}
			width={size}
			height={size}
			{...rest}
		>
			<use xlinkHref={`#icon-${name}`} />
		</svg>
	);
};
