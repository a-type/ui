import { useField } from 'formik';
import { ReactNode, useState } from 'react';
import { useIdOrGenerated } from '../../hooks/useIdOrGenerated.js';
import { Button, ButtonProps } from '../button/Button.js';
import { EmojiPicker } from '../emojiPicker/EmojiPicker.js';
import { Icon } from '../icon/Icon.js';
import { Popover } from '../popover/Popover.js';
import cls from './EmojiField.module.css';
import { Field } from './Field.js';

export type EmojiFieldProps = Omit<ButtonProps, 'className' | 'style'> & {
	name: string;
	label?: string;
	required?: string;
	className?: string;
	style?: React.CSSProperties;
	description?: ReactNode;
};

export function EmojiField({
	name,
	label,
	className,
	required,
	id: providedId,
	description,
	style,
	...rest
}: EmojiFieldProps) {
	const [props, _, tools] = useField({ name });
	const id = useIdOrGenerated(providedId);
	const [open, setOpen] = useState(false);
	return (
		<Field horizontal className={className} style={style} id={id}>
			<Popover open={open} onOpenChange={setOpen}>
				<Field.Control render={<input type="hidden" {...props} />} />
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
			{label && <Field.Label>{label}</Field.Label>}
			{description && <Field.Description>{description}</Field.Description>}
		</Field>
	);
}
