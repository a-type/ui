import * as ProgressPrimitive from '@radix-ui/react-progress';
import { withClassName } from '../../hooks.js';

export const ProgressRoot = withClassName(
	ProgressPrimitive.Root,
	'layer-components:(w-full relative overflow-hidden border border-default rounded-full)',
);
export const ProgressIndicator = withClassName(
	ProgressPrimitive.Indicator,
	'layer-components:(bg-primary w-full h-6px translate-x-[calc(-100%*(1-var(--value)))] rounded-full transition-transform)',
	'layer-components:[&[data-state=complete]]:(bg-accent)',
	'layer-variants:[&[data-color=accent]]:(bg-accent)',
);

const ProgressBase = function ProgressBase({
	ref,
	children,
	color,
	max = 100,
	value,
	...props
}: ProgressPrimitive.ProgressProps & {
	ref?: React.Ref<HTMLDivElement>;
	color?: 'accent';
}) {
	return (
		<ProgressRoot {...props} value={value} max={max} ref={ref}>
			<ProgressIndicator
				data-color={color}
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
