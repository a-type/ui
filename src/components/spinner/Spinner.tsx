import classNames from 'clsx';
import { HTMLAttributes } from 'react';
import cls from './Spinner.module.css';

const CIRCLE_SIZE = 44;

export interface SpinnerProps
	extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
	size?: number | null;
	thickness?: number;
}

export const Spinner = function Spinner({
	ref,
	size = 40,
	thickness = 3.2,
	className,
	style,
	...props
}: SpinnerProps & {
	ref?: React.Ref<HTMLDivElement>;
}) {
	return (
		<div
			ref={ref}
			role="progressbar"
			{...props}
			className={classNames(cls.root, className)}
			style={size ? { width: size, height: size, ...style } : style}
		>
			<svg
				className={cls.svg}
				viewBox={`${CIRCLE_SIZE / 2} ${
					CIRCLE_SIZE / 2
				} ${CIRCLE_SIZE} ${CIRCLE_SIZE}`}
			>
				<circle
					className={cls.circle}
					cx={CIRCLE_SIZE}
					cy={CIRCLE_SIZE}
					r={(CIRCLE_SIZE - thickness) / 2}
					fill="none"
					strokeWidth={thickness}
				/>
			</svg>
		</div>
	);
};

export const FullScreenSpinner = function FullScreenSpinner({
	ref,
	...props
}: SpinnerProps & {
	ref?: React.Ref<HTMLDivElement>;
}) {
	return (
		<div ref={ref} className={cls.fullScreen}>
			<Spinner {...props} />
		</div>
	);
};
