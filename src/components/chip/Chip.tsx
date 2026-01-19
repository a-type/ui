import classNames from 'clsx';
import { Ref } from 'react';
import { PaletteName } from '../../uno/index.js';
import { SlotDiv, SlotDivProps } from '../utility/SlotDiv.js';

export interface ChipProps extends SlotDivProps {
	color?: PaletteName;
	ref?: Ref<any>;
}

export function Chip({ className, color, ...rest }: ChipProps) {
	return (
		<SlotDiv
			className={classNames(
				color && `palette-${color}`,
				'layer-composed:(inline-flex flex-row items-center gap-1 whitespace-nowrap text-xs font-normal)',
				'layer-composed:(border border-light rounded-lg border-solid color-contrast bg-main-wash)',
				'layer-composed:[&:not(:is(button))]:(px-sm py-xs)',
				className,
			)}
			role={rest.onClick ? 'button' : undefined}
			{...rest}
		/>
	);
}
