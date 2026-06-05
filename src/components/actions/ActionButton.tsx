import classNames from 'clsx';
import { useEffect, useState } from 'react';
import { Button, ButtonProps } from '../button/Button.js';
import { CollapsibleContent, CollapsibleRoot } from '../collapsible/index.js';
import cls from './ActionButton.module.css';

export type ActionButtonProps = ButtonProps & {
	visible?: boolean;
};

export function ActionButton({
	children,
	className,
	visible = true,
	...rest
}: ActionButtonProps) {
	// this rather convoluted logic is meant to do:
	// - when button goes invisible, wait for collapse and then
	//   stop rendering
	// - when button goes visible, render immediately and
	//   set collapsible open next frame.
	const [render, setRender] = useState(visible);
	useEffect(() => {
		if (!visible) {
			const timeout = setTimeout(() => {
				setRender(visible);
			}, 300);
			return () => clearTimeout(timeout);
		} else {
			setRender(visible);
		}
	}, [visible]);

	if (!render && !visible) {
		return null;
	}

	return (
		<CollapsibleRoot className={cls.root} open={!visible ? false : render}>
			<CollapsibleContent data-horizontal className={cls.collapse}>
				<Button
					size="small"
					disableIconMode
					className={classNames(cls.button, className)}
					{...rest}
				>
					{children}
				</Button>
			</CollapsibleContent>
		</CollapsibleRoot>
	);
}
