import { UseRenderRenderProp } from '@base-ui/react/use-render';
import classNames from 'clsx';
import { HTMLAttributes, Ref } from 'react';
import { PaletteName } from '../../uno/index.js';
import { SlotDiv } from '../utility/SlotDiv.js';

export interface ChipProps extends HTMLAttributes<HTMLElement> {
	color?: PaletteName;
	render?: UseRenderRenderProp;
	ref?: Ref<any>;
}

export function Chip({ className, color, ...rest }: ChipProps) {
	return (
		<SlotDiv
			className={classNames(
				color && `palette-${color}`,
				'layer-composed:(inline-flex flex-row gap-1 items-center whitespace-nowrap font-normal)',
				'layer-composed:(bg-main-wash color-contrast border-light border-solid border rounded-lg)',
				'layer-composed:(px-sm py-xs text-xs)',
				className,
			)}
			role={rest.onClick ? 'button' : undefined}
			{...rest}
		/>
	);
}
