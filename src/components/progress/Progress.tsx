import {
	Progress as ProgressPrimitive,
	ProgressRootProps,
	ProgressValueProps,
} from '@base-ui/react/progress';
import clsx from 'clsx';
import { withClassName } from '../../hooks.js';

export const ProgressRoot = withClassName(
	ProgressPrimitive.Root,
	'layer-components:grid-columns-[1fr_1fr] layer-components:(grid w-full items-center gap-row-xs gap-col-md)',
);
export const ProgressIndicator = withClassName(
	ProgressPrimitive.Indicator,
	'layer-components:(w-full transition-transform bg-main rd-lg)',
	'layer-components:data-[complete]:bg-success',
);
export const ProgressTrack = withClassName(
	ProgressPrimitive.Track,
	'layer-components:border-black layer-components:(relative h-8px w-full overflow-hidden border rd-lg)',
);

const ProgressBase = function ProgressBase({
	ref,
	children,
	max = 100,
	value,
	className,
	...props
}: ProgressRootProps & {
	ref?: React.Ref<HTMLDivElement>;
}) {
	return (
		<ProgressPrimitive.Root
			{...props}
			className={clsx('layer-components:w-full', className)}
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
	'layer-components:(col-start-1 row-start-1 color-neutral-ink font-ambient)',
);

const ProgressValue = withClassName(
	ProgressPrimitive.Value,
	'layer-components:(col-start-2 row-start-1 justify-self-end color-neutral-ink font-ambient font-[semibold])',
);

export const ProgressLabeled = function ProgressLabeled({
	ref,
	label,
	className,
	formatValue,
	...props
}: Omit<ProgressRootProps, 'children'> & {
	ref?: React.Ref<HTMLDivElement>;
	label: React.ReactNode;
	formatValue?: ProgressValueProps['children'];
}) {
	return (
		<ProgressRoot ref={ref} className={clsx(className)} {...props}>
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
