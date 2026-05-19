import { Slider as BaseSlider, SliderRootProps } from '@base-ui/react/slider';
import clsx from 'clsx';
import { Ref } from 'react';
import { withClassName } from '../../hooks.js';

export const SliderRoot = withClassName(
	BaseSlider.Root,
	'layer-components:w-full',
);

export const SliderControl = withClassName(
	BaseSlider.Control,
	'layer-components:(relative h-30px w-full flex select-none items-center translate-z-0 touch-none)',
	'layer-variants:[&[data-orientation=vertical]]:(h-full w-30px flex-col)',
);
export const SliderTrack = withClassName(
	BaseSlider.Track,
	'layer-components:ring-black layer-components:ring-1 layer-components:(relative h-7px grow select-none transition-colors bg-transparent rd-lg)',
	'layer-variants:[&[data-orientation=vertical]]:(h-full w-7px flex-1)',
);
export const SliderRange = withClassName(
	BaseSlider.Indicator,
	'layer-components:(transition-colors bg-main rd-lg)',
	'layer-variants:[&[data-orientation=vertical]]:bg-main',
);
export const SliderThumb = withClassName(
	BaseSlider.Thumb,
	'layer-components:ring-black layer-components:ring-2 layer-components:(h-5 w-5 flex cursor-pointer items-center justify-center transition-color shadow-sm bg-neutral-paper rd-lg leading-none touch-none)',
	'layer-components:hover:(shadow-md)',
	'layer-components:active:ring-4 layer-components:active:ring-opacity-50 layer-components:active:(shadow-lg bg-main-light ring-main-heavy)',
	'layer-components:focus-visible:(shadow-lg bg-main-light)',
	'layer-components:focus:(outline-none)',
	'layer-components:disabled:(opacity-50)',
);

export const SliderBase = ({ children, className, ...props }: SliderProps) => {
	return (
		<SliderRoot {...props} className={clsx(className)}>
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

		getSingle: (v: number | readonly number[]) => {
			if (Array.isArray(v)) return v[0];
			return v;
		},
	},
);
