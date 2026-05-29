import { useRender, UseRenderComponentProps } from '@base-ui/react/use-render';
import classNames from 'clsx';
import { Spinner } from '../spinner/Spinner.js';
import { IconName } from './generated/iconNames.js';
import cls from './Icon.module.css';
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
			className: classNames('icon', cls.root, className),
			width: size,
			height: size,
			children: <use xlinkHref={`#icon-${name}`} />,
			...rest,
		},
		state: {
			size,
			name,
			loading,
			icon: true,
		},
		render,
	});

	if (loading) {
		return (
			<Spinner
				size={size}
				data-icon
				className={classNames('icon', cls.spinner, className)}
			/>
		);
	}

	return slotted;
};
