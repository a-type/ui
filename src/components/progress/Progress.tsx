import {
	Progress as ProgressPrimitive,
	ProgressRootProps,
	ProgressValueProps,
} from '@base-ui/react/progress';
import clsx from 'clsx';
import { withClassName } from '../../hooks.js';
import cls from './Progress.module.css';

export const ProgressRoot = withClassName(ProgressPrimitive.Root, cls.root);
export const ProgressIndicator = withClassName(
	ProgressPrimitive.Indicator,
	cls.indicator,
);
export const ProgressTrack = withClassName(ProgressPrimitive.Track, cls.track);

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

const ProgressLabel = withClassName(ProgressPrimitive.Label, cls.label);

const ProgressValue = withClassName(ProgressPrimitive.Value, cls.value);

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
