import {
	Progress as ProgressPrimitive,
	ProgressRootProps,
	ProgressValueProps,
} from '@base-ui/react/progress';
import clsx from 'clsx';
import { withClassName } from '../../hooks.js';
import { PaletteName } from '../../uno/index.js';

export const ProgressRoot = withClassName(
	ProgressPrimitive.Root,
	'layer-components:(grid grid-columns-[1fr_1fr] gap-col-md gap-row-xs items-center w-full)',
);
export const ProgressIndicator = withClassName(
	ProgressPrimitive.Indicator,
	'layer-components:(bg-main w-full h-full rounded-lg transition-transform)',
	'layer-components:data-[complete]:(bg-success)',
);
export const ProgressTrack = withClassName(
	ProgressPrimitive.Track,
	'layer-components:(w-full relative overflow-hidden ring ring-black ring-1 rounded-lg h-6px)',
);

const ProgressBase = function ProgressBase({
	ref,
	children,
	color,
	max = 100,
	value,
	className,
	...props
}: ProgressRootProps & {
	ref?: React.Ref<HTMLDivElement>;
	color?: PaletteName;
}) {
	return (
		<ProgressPrimitive.Root
			{...props}
			className={clsx(
				color && `palette-${color}`,
				'layer-components:w-full',
				className,
			)}
			value={value}
			max={max}
			ref={ref}
		>
			<ProgressTrack>
				<ProgressIndicator />
			</ProgressTrack>
			{children}
		</ProgressPrimitive.Root>
	);
};

const ProgressLabel = withClassName(
	ProgressPrimitive.Label,
	'layer-components:(font-size-xs color-gray-ink col-start-1 row-start-1)',
);

const ProgressValue = withClassName(
	ProgressPrimitive.Value,
	'layer-components:(font-size-xs font-semibold color-gray-ink col-start-2 row-start-1 justify-self-end)',
);

export const ProgressLabeled = function ProgressLabeled({
	ref,
	label,
	className,
	color,
	formatValue,
	...props
}: Omit<ProgressRootProps, 'children'> & {
	ref?: React.Ref<HTMLDivElement>;
	label: React.ReactNode;
	color?: PaletteName;
	formatValue?: ProgressValueProps['children'];
}) {
	return (
		<ProgressRoot
			ref={ref}
			className={clsx(color && `palette-${color}`, className)}
			{...props}
		>
			<ProgressLabel>{label}</ProgressLabel>
			<ProgressValue>{formatValue}</ProgressValue>
			<ProgressTrack className="col-span-2">
				<ProgressIndicator />
			</ProgressTrack>
		</ProgressRoot>
	);
};

export const Progress = Object.assign(ProgressBase, {
	Root: ProgressRoot,
	Indicator: ProgressIndicator,
	Track: ProgressTrack,
	Labeled: ProgressLabeled,
	Label: ProgressLabel,
	Value: ProgressValue,
});
