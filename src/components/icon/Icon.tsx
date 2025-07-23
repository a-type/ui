import classNames from 'clsx';
import { HTMLAttributes } from 'react';
import { Spinner } from '../spinner/Spinner.js';
import { IconName } from './generated/iconNames.js';
import { useIconLoading } from './IconLoadingContext.js';

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
	const loading = useIconLoading();

	if (loading) {
		return <Spinner size={size} className="icon inline-block" />;
	}

	return (
		<svg
			ref={ref}
			className={classNames(
				'icon',
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
