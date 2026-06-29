import classNames from 'clsx';
import { Ref } from 'react';
import { SlotDiv, SlotDivProps } from '../utility/SlotDiv.js';
import cls from './Chip.module.css';

export interface ChipProps extends SlotDivProps {
	ref?: Ref<any>;
	emphasis?: 'default' | 'primary' | 'ambient';
}

export function Chip({ className, emphasis, ...rest }: ChipProps) {
	return (
		<SlotDiv
			className={classNames(cls.root, className)}
			role={rest.onClick ? 'button' : undefined}
			{...rest}
			data-emphasis={emphasis ?? 'default'}
		/>
	);
}
