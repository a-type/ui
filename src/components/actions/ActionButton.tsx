'use client';

import classNames from 'clsx';
import { useEffect, useState } from 'react';
import { Button, ButtonProps } from '../button/Button.js';
import { CollapsibleContent, CollapsibleRoot } from '../collapsible/index.js';

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
		<CollapsibleRoot open={!visible ? false : render}>
			<CollapsibleContent data-horizontal>
				<Button
					size="small"
					disableIconMode
					className={classNames(
						'layer-variants:(m-2 mx-1 font-normal)',
						className,
					)}
					{...rest}
				>
					{children}
				</Button>
			</CollapsibleContent>
		</CollapsibleRoot>
	);
}
