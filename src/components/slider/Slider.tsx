import { Slider as BaseSlider, SliderRootProps } from '@base-ui/react/slider';
import clsx from 'clsx';
import { Ref } from 'react';
import { withClassName } from '../../hooks.js';
import cls from './Slider.module.css';

export const SliderRoot = withClassName(BaseSlider.Root, cls.root);

export const SliderControl = withClassName(BaseSlider.Control, cls.control);
export const SliderTrack = withClassName(BaseSlider.Track, cls.track);
export const SliderRange = withClassName(BaseSlider.Indicator, cls.range);
export const SliderThumb = withClassName(BaseSlider.Thumb, cls.thumb);

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
