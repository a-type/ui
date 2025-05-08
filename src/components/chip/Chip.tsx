import { Slot } from '@radix-ui/react-slot';
import classNames from 'clsx';
import { HTMLAttributes, Ref } from 'react';

export interface ChipProps extends HTMLAttributes<HTMLElement> {
	color?: 'neutral' | 'primary' | 'accent';
	asChild?: boolean;
	ref?: Ref<any>;
}

export function Chip({
	className,
	color = 'neutral',
	asChild,
	ref,
	...rest
}: ChipProps) {
	const Component = asChild ? Slot : 'div';
	return (
		<Component
			ref={ref}
			className={classNames(
				'layer-components:(inline-flex flex-row gap-1 items-center whitespace-nowrap border-light border-solid border rounded-lg px-2 py-1 text-black)',
				{
					'layer-variants:bg-primary-wash': color === 'primary',
					'layer-variants:bg-accent-wash': color === 'accent',
				},
				className,
			)}
			{...rest}
		/>
	);
}
