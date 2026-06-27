import classNames from 'clsx';
import { Ref } from 'react';
import { SlotDiv, SlotDivProps } from '../utility/SlotDiv.js';
import cls from './Chip.module.css';

export interface ChipProps extends SlotDivProps {
	ref?: Ref<any>;
	emphasis?: 'default' | 'primary' | 'ambient';
}

export function Chip({ className, ...rest }: ChipProps) {
	return (
		<SlotDiv
			className={classNames('@mode-dense', cls.root, className)}
			role={rest.onClick ? 'button' : undefined}
			data-emphasis={rest.emphasis ?? 'default'}
			{...rest}
		/>
	);
}
