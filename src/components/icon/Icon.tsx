import { useRender, UseRenderComponentProps } from '@base-ui/react/use-render';
import classNames from 'clsx';
import { CSSProperties } from 'react';
import { Spinner } from '../spinner/Spinner.js';
import { IconName } from './generated/iconNames.js';
import cls from './Icon.module.css';
import { useIconLoading } from './IconLoadingContext.js';

export interface IconProps
	extends UseRenderComponentProps<
		'svg',
		{ size?: number; name: IconName; loading: boolean }
	> {
	name: IconName;
	size?: number;
	loading?: boolean;
	filled?: boolean;
}

export const Icon = function Icon({
	ref,
	name,
	size,
	className,
	loading: loadingProp,
	render,
	style,
	filled,
	...rest
}: IconProps & {
	ref?: React.Ref<SVGSVGElement>;
}) {
	const loadingContext = useIconLoading();
	const loading = loadingProp !== false && (loadingProp || loadingContext);

	const slotted = useRender({
		defaultTagName: 'svg',
		ref,
		props: {
			className: classNames('icon', cls.root, className),
			style: {
				...style,
				'--size': size ? `${size}px` : undefined,
			},
			children: <use xlinkHref={`#icon-${name}`} />,
			...rest,
		},
		state: {
			size,
			name,
			loading,
			icon: true,
			filled,
		},
		render,
	});

	if (loading) {
		return (
			<Spinner
				size={size}
				data-icon
				style={
					{
						...style,
						'--size': size,
					} as CSSProperties
				}
				className={classNames('icon', cls.spinner, className)}
				{...(rest as any)}
			/>
		);
	}

	return slotted;
};
