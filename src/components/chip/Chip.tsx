import classNames from 'clsx';
import { Ref } from 'react';
import { SlotDiv, SlotDivProps } from '../utility/SlotDiv.js';

export interface ChipProps extends SlotDivProps {
	ref?: Ref<any>;
}

export function Chip({ className, ...rest }: ChipProps) {
	return (
		<SlotDiv
			className={classNames(
				'@mode-denser',
				'layer-composed:(inline-flex flex-row items-center gap-1 whitespace-nowrap text-ambient leading-[normal])',
				'layer-composed:(bg-main-wash color-contrast border-neutral-mid border rd-lg border-solid)',
				'layer-composed:[&:not(:is(button))]:(px-action py-action)',
				className,
			)}
			role={rest.onClick ? 'button' : undefined}
			{...rest}
		/>
	);
}
