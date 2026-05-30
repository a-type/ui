import classNames from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';
import { withClassName } from '../../hooks.js';
import { TextArea } from '../textArea/TextArea.js';
import cls from './Note.module.css';

export interface NoteProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
}

function NoteRoot({ className, children, ...rest }: NoteProps) {
	return (
		<div className={classNames(cls.root, className)} {...rest}>
			<div className={cls.layout}>
				<div className={cls.content}>{children}</div>
				<div className={cls.fold} aria-hidden>
					<div className={cls.foldTop}>
						<div className={cls.topCorner} />
						<div className={cls.diagonal} />
					</div>
					<div className={cls.foldBottom} />
				</div>
			</div>
		</div>
	);
}

export const NoteInput = withClassName(TextArea.Input, cls.input);

export const Note = Object.assign(NoteRoot, {
	Input: NoteInput,
});
