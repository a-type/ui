import { Slider as BaseSlider, SliderRootProps } from '@base-ui/react/slider';
import clsx from 'clsx';
import { Ref } from 'react';
import { withClassName } from '../../hooks.js';
import { PaletteName } from '../../uno/index.js';

export const SliderRoot = withClassName(
	BaseSlider.Root,
	'layer-components:w-full',
);

export const SliderControl = withClassName(
	BaseSlider.Control,
	'layer-components:(relative h-30px w-full flex translate-z-0 touch-none select-none items-center)',
	'layer-variants:[&[data-orientation=vertical]]:(h-full w-30px flex-col)',
);
export const SliderTrack = withClassName(
	BaseSlider.Track,
	'layer-components:(relative h-7px grow select-none rounded-lg ring-1 transition-colors bg-transparent ring-black)',
	'layer-variants:[&[data-orientation=vertical]]:(h-full w-7px flex-1)',
);
export const SliderRange = withClassName(
	BaseSlider.Indicator,
	'layer-components:(rounded-lg transition-colors bg-main)',
	'layer-variants:[&[data-orientation=vertical]]:(bg-main)',
);
export const SliderThumb = withClassName(
	BaseSlider.Thumb,
	'layer-components:(h-5 w-5 flex cursor-pointer touch-none items-center justify-center rounded-lg leading-none shadow-sm ring-2 transition-color bg-white ring-black)',
	'layer-components:hover:(shadow-md)',
	'layer-components:active:(shadow-lg ring-4 ring-opacity-50 bg-main-light ring-main-dark)',
	'layer-components:focus-visible:(shadow-lg bg-main-light)',
	'foc-lg',
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
	color?: PaletteName;
	ref?: Ref<HTMLDivElement>;
}

export const Slider = Object.assign(
	function Slider(props: SliderProps) {
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
