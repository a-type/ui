import { useCallback, useState } from 'react';
import {
	Dialog,
	DialogActions,
	DialogClose,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from '../dialog/index.js';
import { P } from '../typography/index.js';
import { Button, ButtonProps } from './Button.js';

export interface ConfirmedButtonProps extends Omit<ButtonProps, 'onClick'> {
	confirmText: string;
	confirmTitle?: string;
	confirmAction?: string;
	cancelAction?: string;
	onConfirm: () => void | Promise<any>;
	skip?: boolean;
	confirmColor?: ButtonProps['color'];
}

export function ConfirmedButton({
	confirmText,
	confirmTitle = 'Are you sure?',
	confirmAction = 'OK',
	cancelAction = 'Nevermind',
	confirmColor = 'primary',
	onConfirm,
	skip,
	...rest
}: ConfirmedButtonProps) {
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const confirm = useCallback(async () => {
		setLoading(true);
		try {
			await onConfirm();
			setOpen(false);
		} finally {
			setLoading(false);
		}
	}, [onConfirm]);

	if (skip) {
		return (
			<Button
				{...rest}
				onClick={(ev) => {
					onConfirm();
				}}
			/>
		);
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button {...rest} />
			</DialogTrigger>
			<DialogContent>
				<DialogTitle>{confirmTitle}</DialogTitle>
				<P>{confirmText}</P>
				<DialogActions>
					<DialogClose asChild>
						<Button emphasis="default">{cancelAction}</Button>
					</DialogClose>
					<Button
						loading={loading}
						onClick={confirm}
						emphasis="primary"
						color={confirmColor}
					>
						{confirmAction}
					</Button>
				</DialogActions>
			</DialogContent>
		</Dialog>
	);
}
