import { useRender, UseRenderComponentProps } from '@base-ui/react/use-render';
import classNames from 'clsx';
import { Spinner } from '../spinner/Spinner.js';
import { IconName } from './generated/iconNames.js';
import { useIconLoading } from './IconLoadingContext.js';

export interface IconProps
	extends UseRenderComponentProps<
		'svg',
		{ size: number; name: IconName; loading: boolean }
	> {
	name: IconName;
	size?: number;
	loading?: boolean;
}

export const Icon = function Icon({
	ref,
	name,
	size = 15,
	className,
	loading: loadingProp,
	render,
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
			className: classNames(
				'icon',
				'flex-shrink-0 layer-components:fill-none',
				className,
			),
			width: size,
			height: size,
			children: <use xlinkHref={`#icon-${name}`} />,
			...rest,
		},
		state: {
			size,
			name,
			loading,
		},
		render,
	});

	if (loading) {
		return (
			<Spinner
				size={size}
				className={classNames('icon inline-block flex-shrink-0', className)}
			/>
		);
	}

	return slotted;
};
