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
	'layer-components:grid-columns-[1fr_1fr] layer-components:(grid w-full items-center gap-col-md gap-row-xs)',
);
export const ProgressIndicator = withClassName(
	ProgressPrimitive.Indicator,
	'layer-components:(w-full rounded-lg transition-transform bg-main)',
	'layer-components:data-[complete]:(bg-success)',
);
export const ProgressTrack = withClassName(
	ProgressPrimitive.Track,
	'layer-components:(relative h-8px w-full overflow-hidden border rounded-lg border-black)',
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
	'layer-components:(col-start-1 row-start-1 font-size-xs color-gray-ink)',
);

const ProgressValue = withClassName(
	ProgressPrimitive.Value,
	'layer-components:(col-start-2 row-start-1 justify-self-end font-size-xs font-semibold color-gray-ink)',
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
