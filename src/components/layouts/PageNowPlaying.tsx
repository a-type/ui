import classNames from 'clsx';
import { HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';
import { useConfig } from '../provider/Provider.js';
import cls from './PageNowPlaying.module.css';

export function PageNowPlaying({
	className,
	keepAboveKeyboard,
	disablePortal,
	container = document.body,
	...props
}: HTMLAttributes<HTMLDivElement> & {
	keepAboveKeyboard?: boolean;
	disablePortal?: boolean;
	container?: HTMLElement;
}) {
	const { virtualKeyboardBehavior } = useConfig();

	const content = (
		<div
			{...props}
			className={classNames(cls.root, className)}
			data-disable-portal={disablePortal}
			data-keep-above-keyboard={keepAboveKeyboard}
			data-virtual-keyboard-behavior={virtualKeyboardBehavior}
		/>
	);

	if (disablePortal) {
		return content;
	}

	return createPortal(content, container);
}
