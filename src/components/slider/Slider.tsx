import { Slider as BaseSlider, SliderRootProps } from '@base-ui/react/slider';
import clsx from 'clsx';
import { Ref } from 'react';
import { withClassName } from '../../hooks.js';
import { PaletteName } from '../../uno/index.js';

export const SliderRoot = BaseSlider.Root;

export const SliderControl = withClassName(
	BaseSlider.Control,
	'layer-components:(relative flex items-center select-none touch-none w-full h-30px translate-z-0)',
	'layer-variants:[&[data-orientation=vertical]]:(flex-col h-full w-30px)',
);
export const SliderTrack = withClassName(
	BaseSlider.Track,
	'layer-components:(bg-transparent relative grow rounded-lg h-7px ring-1 ring-black transition-colors select-none)',
	'layer-variants:[&[data-orientation=vertical]]:(w-7px h-full flex-1)',
);
export const SliderRange = withClassName(
	BaseSlider.Indicator,
	'layer-components:(bg-main rounded-lg transition-colors)',
	'layer-variants:[&[data-orientation=vertical]]:(bg-main)',
);
export const SliderThumb = withClassName(
	BaseSlider.Thumb,
	'layer-components:(flex items-center justify-center leading-none cursor-pointer w-5 h-5 bg-white shadow-sm rounded-lg ring-2 ring-black touch-none transition-color)',
	'layer-components:hover:(shadow-md)',
	'layer-components:active:(shadow-lg ring-4 ring-main-dark ring-opacity-50 bg-main-light)',
	'layer-components:focus-visible:(shadow-lg ring-4 ring-accent ring-opacity-50 outline-none bg-main-light)',
	'layer-components:focus:(outline-none)',
	'layer-components:disabled:(opacity-50)',
);

export const SliderBase = ({
	children,
	color,
	className,
	...props
}: SliderProps) => {
	return (
		<SliderRoot
			{...props}
			className={clsx(color && `palette-${color}`, className)}
		>
			<SliderControl>{children}</SliderControl>
		</SliderRoot>
	);
};

/**
 * A pre-configured Slider UI component. Meant to compose
 * under Slider.Root when you want to use Slider.Value, too
 */
export const SliderUi = ({
	label,
	className,
}: {
	label?: string;
	className?: string;
}) => (
	<Slider.Control className={className}>
		<SliderTrack>
			<SliderRange />
			<SliderThumb aria-label={label} />
		</SliderTrack>
	</Slider.Control>
);

export interface SliderProps extends SliderRootProps {
	label?: string;
	color?: PaletteName;
	ref?: Ref<HTMLDivElement>;
}

export const Slider = Object.assign(
	function Slider({ label, ...props }: SliderProps) {
		return (
			<SliderRoot {...props}>
				<SliderUi />
			</SliderRoot>
		);
	},
	{
		Root: SliderRoot,
		Base: SliderBase,
		Control: SliderControl,
		Track: SliderTrack,
		/** @deprecated - use Indicator */
		Range: SliderRange,
		Indicator: SliderRange,
		Thumb: SliderThumb,
		Value: BaseSlider.Value,
		Ui: SliderUi,
	},
);
