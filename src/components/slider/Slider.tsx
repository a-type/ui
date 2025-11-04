import * as SliderPrimitive from '@radix-ui/react-slider';
import clsx from 'clsx';
import { withClassName } from '../../hooks.js';
import { PaletteName } from '../../uno/index.js';

export const SliderRoot = withClassName(
	SliderPrimitive.Root,
	'layer-components:(relative flex items-center select-none touch-none w-full h-30px translate-z-0)',
);
export const SliderTrack = withClassName(
	SliderPrimitive.Track,
	'layer-components:(bg-transparent relative grow rounded-lg h-9px border border-1 border-solid border-black)',
);
export const SliderRange = withClassName(
	SliderPrimitive.Range,
	'layer-components:(absolute bg-main rounded-lg h-full)',
);
export const SliderThumb = withClassName(
	SliderPrimitive.Thumb,
	'layer-components:(block cursor-pointer w-5 h-5 bg-white shadow-sm rounded-lg ring-2 ring-black touch-none transition-all)',
	'layer-components:hover:(shadow-md)',
	'layer-components:active:(shadow-lg ring-4 ring-main-dark ring-opacity-50 bg-main-light)',
	'layer-components:focus-visible:(shadow-lg ring-4 ring-accent ring-opacity-50 outline-none bg-main-light)',
	'layer-components:focus:(outline-none)',
	'layer-components:disabled:(opacity-50)',
);

export interface SliderProps extends SliderPrimitive.SliderProps {
	label?: string;
	color?: PaletteName;
}

export const Slider = Object.assign(
	function Slider({
		ref,
		label,
		color,
		className,
		...props
	}: SliderProps & {
		ref?: React.Ref<HTMLDivElement>;
	}) {
		return (
			<SliderRoot
				ref={ref}
				className={clsx(color && `palette-${color}`, className)}
				{...props}
			>
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
