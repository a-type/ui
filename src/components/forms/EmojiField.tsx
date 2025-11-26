import clsx from 'clsx';
import { useField } from 'formik';
import { useState } from 'react';
import { useIdOrGenerated } from '../../hooks/useIdOrGenerated.js';
import { Box } from '../box/Box.js';
import { Button, ButtonProps } from '../button/Button.js';
import { EmojiPicker } from '../emojiPicker/EmojiPicker.js';
import { Icon } from '../icon/Icon.js';
import { Popover } from '../popover/Popover.js';
import { HorizontalFieldLabel } from './FieldLabel.js';

export interface EmojiFieldProps extends ButtonProps {
	name: string;
	label?: string;
	required?: string;
}

export function EmojiField({
	name,
	label,
	className,
	required,
	id: providedId,
	...rest
}: EmojiFieldProps) {
	const [props, _, tools] = useField({ name });
	const id = useIdOrGenerated(providedId);
	const [open, setOpen] = useState(false);
	return (
		<Box gap="sm" className={className}>
			<Popover open={open} onOpenChange={setOpen}>
				<Popover.Trigger asChild>
					<Button
						id={id}
						aria-label="Select emoji"
						size="small"
						className={clsx('p-0 transition-color', className)}
						{...rest}
					>
						<Button.Icon className="text-[19px] w-touch h-touch flex items-center justify-center">
							{props.value || <Icon name="smile" />}
						</Button.Icon>
					</Button>
				</Popover.Trigger>
				<Popover.Content>
					<EmojiPicker
						onValueChange={(v) => {
							tools.setValue(v);
							setOpen(false);
						}}
						onClear={
							required
								? undefined
								: () => {
										tools.setValue('');
										setOpen(false);
								  }
						}
						id={id}
					/>
				</Popover.Content>
			</Popover>
			{label && (
				<HorizontalFieldLabel htmlFor={id}>{label}</HorizontalFieldLabel>
			)}
		</Box>
	);
}
