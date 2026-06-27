import { useField } from 'formik';
import { ReactNode, useState } from 'react';
import { useIdOrGenerated } from '../../hooks/useIdOrGenerated.js';
import { Button, ButtonProps } from '../button/Button.js';
import { EmojiPicker } from '../emojiPicker/EmojiPicker.js';
import { Icon } from '../icon/Icon.js';
import { Popover } from '../popover/Popover.js';
import cls from './EmojiField.module.css';
import { Field } from './Field.js';

export type EmojiFieldProps = Omit<ButtonProps, 'className'> & {
	name: string;
	label?: string;
	required?: string;
	className?: string;
	description?: ReactNode;
};

export function EmojiField({
	name,
	label,
	className,
	required,
	id: providedId,
	description,
	...rest
}: EmojiFieldProps) {
	const [props, _, tools] = useField({ name });
	const id = useIdOrGenerated(providedId);
	const [open, setOpen] = useState(false);
	return (
		<Field horizontal className={className}>
			<Field.Control>
				<Popover open={open} onOpenChange={setOpen}>
					<input
						type="hidden"
						{...props}
						id={id}
						aria-describedby={description ? `${id}-description` : undefined}
					/>
					<Popover.Trigger
						render={
							<Button
								id={`${id}-trigger`}
								aria-label="Select emoji"
								size="wrapper"
								{...rest}
							>
								<Button.Icon className={cls.triggerIcon}>
									{props.value || <Icon name="smile" />}
								</Button.Icon>
							</Button>
						}
					/>
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
			</Field.Control>
			{label && <Field.Label htmlFor={id}>{label}</Field.Label>}
			{description && (
				<Field.Description id={`${id}-description`}>
					{description}
				</Field.Description>
			)}
		</Field>
	);
}
