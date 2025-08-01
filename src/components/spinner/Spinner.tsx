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
				'flex-shrink-0 inline-block animate-spin animate-ease-linear animate-iteration-infinite color-inherit animate-duration-1400 transform-origin-[50%_50%]',
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
					className="stroke-current animate-spinner-stroke animate-ease-in-out animate-iteration-infinite animate-duration-1400 [stroke-dasharray:80_200] [stroke-dashoffset:0]"
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
			className="flex flex-row gap-4 w-full flex-1 justify-center items-center self-stretch"
		>
			<Spinner {...props} />
		</div>
	);
};
