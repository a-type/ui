import {
	Dialog,
	DialogPopupProps,
	DialogRootProps,
} from '@base-ui/react/dialog';
import clsx from 'clsx';
import { createContext, RefObject, useContext, useId } from 'react';
import { Button, ButtonProps } from '../button/Button.js';
import cls from './QuickAction.module.css';

const QuickActionIdContext = createContext<string>('qab');

export const QuickActionRoot = ({
	children,
	...props
}: Omit<DialogRootProps, 'children'> & {
	children?: React.ReactNode;
}) => {
	const id = useId();
	return (
		<Dialog.Root {...props}>
			<QuickActionIdContext.Provider value={id.replace(/:/g, '')}>
				{children}
			</QuickActionIdContext.Provider>
		</Dialog.Root>
	);
};

export type QuickActionTriggerProps = ButtonProps;
const QuickActionTrigger = ({
	className,
	emphasis = 'primary',
	children,
	ref,
	...props
}: QuickActionTriggerProps) => {
	const layoutId = useContext(QuickActionIdContext);
	return (
		<Dialog.Trigger
			{...props}
			ref={ref}
			render={({ color: _, ...composed }) => (
				<Button
					color={props.color}
					emphasis={emphasis}
					{...composed}
					className={clsx(cls.trigger, className)}
					style={{
						// @ts-ignore
						anchorName: `--${layoutId}`,
					}}
				/>
			)}
		>
			{children}
		</Dialog.Trigger>
	);
};

interface QuickActionContentProps extends DialogPopupProps {
	children?: React.ReactNode;
	className?: string;
	align?: 'center' | 'start' | 'end';
	ref?: RefObject<HTMLDivElement>;
}
const QuickActionContent = ({
	children,
	className,
	align = 'center',
	ref,
	style,
	...rest
}: QuickActionContentProps) => {
	const layoutId = useContext(QuickActionIdContext);

	return (
		<Dialog.Portal>
			<Dialog.Popup
				ref={ref}
				className={clsx(cls.popup, className)}
				data-align={align}
				style={
					{
						positionAnchor: `--${layoutId}`,
						...style,
					} as any
				}
				{...rest}
			>
				{children}
			</Dialog.Popup>
		</Dialog.Portal>
	);
};

export const QuickAction = Object.assign(QuickActionRoot, {
	Trigger: QuickActionTrigger,
	Content: QuickActionContent,
});
