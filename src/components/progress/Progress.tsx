import * as ProgressPrimitive from '@radix-ui/react-progress';
import clsx from 'clsx';
import { withClassName } from '../../hooks.js';
import { PaletteName } from '../../uno/logic/color.js';

export const ProgressRoot = withClassName(
	ProgressPrimitive.Root,
	'layer-components:(w-full relative overflow-hidden border border-default rounded-lg)',
);
export const ProgressIndicator = withClassName(
	ProgressPrimitive.Indicator,
	'layer-components:(bg-main w-full h-6px translate-x-[calc(-100%*(1-var(--value)))] rounded-lg transition-transform)',
	'layer-components:[&[data-state=complete]]:(bg-success)',
);

const ProgressBase = function ProgressBase({
	ref,
	children,
	color,
	max = 100,
	value,
	className,
	...props
}: ProgressPrimitive.ProgressProps & {
	ref?: React.Ref<HTMLDivElement>;
	color?: PaletteName;
}) {
	return (
		<ProgressRoot
			{...props}
			className={clsx(color && `palette-${color}`, className)}
			value={value}
			max={max}
			ref={ref}
		>
			<ProgressIndicator
				// @ts-ignore
				style={{ '--value': (value || 0) / max }}
			/>
		</ProgressRoot>
	);
};

export const Progress = Object.assign(ProgressBase, {
	Root: ProgressRoot,
	Indicator: ProgressIndicator,
});
