'use client';

import classNames from 'clsx';
import { ReactNode, useEffect, useState } from 'react';
import { Button, ButtonProps } from '../button/Button.js';
import { CollapsibleContent, CollapsibleRoot } from '../collapsible/index.js';

export interface ActionButtonProps extends ButtonProps {
	icon?: ReactNode;
	visible?: boolean;
}

export function ActionButton({
	icon,
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
					className={classNames(
						'important:(border-gray7 font-normal whitespace-nowrap m-2 flex flex-row gap-2 items-center h-30px rounded-15px mx-1)',
						'hover:bg-gray2',
						className,
					)}
					{...rest}
				>
					{icon}
					{children}
				</Button>
			</CollapsibleContent>
		</CollapsibleRoot>
	);
}
