import classNames from 'clsx';
import { HTMLAttributes } from 'react';

const CIRCLE_SIZE = 44;

export interface SpinnerProps
	extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
	size?: number;
	thickness?: number;
}

export const Spinner = function Spinner({
	ref,
	size = 40,
	thickness = 7.2,
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
			className={classNames(
				'inline-block flex-shrink-0 transform-origin-[50%_50%] animate-spin animate-duration-1400 animate-ease-linear animate-iteration-infinite color-inherit',
				className,
			)}
			style={{ width: size, height: size, ...style }}
		>
			<svg
				className="block"
				viewBox={`${CIRCLE_SIZE / 2} ${
					CIRCLE_SIZE / 2
				} ${CIRCLE_SIZE} ${CIRCLE_SIZE}`}
			>
				<circle
					className="[stroke-dasharray:80_200] [stroke-dashoffset:0] animate-spinner-stroke animate-duration-1400 animate-ease-in-out animate-iteration-infinite stroke-current"
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
		<div
			ref={ref}
			className="w-full flex flex-1 flex-row items-center self-stretch justify-center gap-4"
		>
			<Spinner {...props} />
		</div>
	);
};
