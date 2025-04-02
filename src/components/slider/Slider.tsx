import * as SliderPrimitive from '@radix-ui/react-slider';
import { withClassName } from '../../hooks.js';

export const SliderRoot = withClassName(
	SliderPrimitive.Root,
	'layer-components:(relative flex items-center select-none touch-none w-full h-30px translate-z-0)',
);
export const SliderTrack = withClassName(
	SliderPrimitive.Track,
	'layer-components:(bg-transparent relative grow rounded-lg h-9px border borderpx border-solid border-black)',
);
export const SliderRange = withClassName(
	SliderPrimitive.Range,
	'layer-components:(absolute bg-accent rounded-lg h-full)',
	'layer-variants:[&[data-color=primary]]:bg-primary',
);
export const SliderThumb = withClassName(
	SliderPrimitive.Thumb,
	'layer-components:(block w-5 h-5 bg-white shadow-sm rounded-lg ring-2 ring-black touch-none transition-all)',
	'layer-components:hover:(shadow-md)',
	'layer-components:active:(shadow-lg ring-4 ring-accent-dark ring-opacity-50 bg-accent-light)',
	'layer-components:focus-visible:(shadow-lg ring-4 ring-accent-dark ring-opacity-50 outline-none bg-accent-light)',
	'layer-components:focus:(outline-none)',
	'layer-components:disabled:(opacity-50)',
	'layer-variants:[&[data-color=primary]]:active:(bg-primary ring-primary-dark)',
	'layer-variants:[&[data-color=primary]]:focus-visible:(bg-primary ring-primary-dark)',
);

export interface SliderProps extends SliderPrimitive.SliderProps {
	label?: string;
	color?: 'default' | 'primary';
}

export const Slider = Object.assign(
	function Slider({
		ref,
		label,
		color,
		...props
	}: SliderProps & {
		ref?: React.Ref<HTMLDivElement>;
	}) {
		return (
			<SliderRoot ref={ref} {...props}>
				<SliderTrack>
					<SliderRange data-color={color} />
				</SliderTrack>
				<SliderThumb aria-label={label} data-color={color} />
			</SliderRoot>
		);
	},
	{
		Root: SliderRoot,
		Track: SliderTrack,
		Range: SliderRange,
		Thumb: SliderThumb,
	},
);
