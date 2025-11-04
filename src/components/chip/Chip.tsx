import { Slot } from '@radix-ui/react-slot';
import classNames from 'clsx';
import { HTMLAttributes, Ref } from 'react';
import { PaletteName } from '../../uno/index.js';

export interface ChipProps extends HTMLAttributes<HTMLElement> {
	color?: PaletteName;
	asChild?: boolean;
	ref?: Ref<any>;
}

export function Chip({ className, color, asChild, ref, ...rest }: ChipProps) {
	const Component = asChild ? Slot : 'div';
	return (
		<Component
			ref={ref}
			className={classNames(
				color && `palette-${color}`,
				'layer-composed:(inline-flex flex-row gap-1 items-center whitespace-nowrap)',
				'layer-composed:(bg-main-wash color-contrast border-light border-solid border rounded-lg)',
				'layer-composed:(px-sm py-xs text-xs)',
				className,
			)}
			role={rest.onClick ? 'button' : undefined}
			{...rest}
		/>
	);
}
