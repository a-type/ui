import {
	Dialog,
	DialogPopupProps,
	DialogRootProps,
} from '@base-ui/react/dialog';
import clsx from 'clsx';
import { createContext, RefObject, useContext, useId, useRef } from 'react';
import { useSize } from '../../hooks.js';
import useMergedRef from '../../hooks/useMergedRef.js';
import {
	useMonitor,
	useValueMonitor,
	ValueMonitor,
} from '../../systems/ValueMonitor.js';
import { Button, ButtonProps } from '../button/Button.js';
import cls from './QuickAction.module.css';

const QuickActionIdContext = createContext<string>('qab');

const TriggerSizeContext = createContext<
	ValueMonitor<{ width: number; height: number }>
>(new ValueMonitor({ width: 0, height: 0 }));

export const QuickActionRoot = ({
	children,
	...props
}: Omit<DialogRootProps, 'children'> & {
	children?: React.ReactNode;
}) => {
	const id = useId();
	const triggerSizeMonitor = useValueMonitor({ width: 0, height: 0 });
	return (
		<TriggerSizeContext.Provider value={triggerSizeMonitor}>
			<Dialog.Root {...props}>
				<QuickActionIdContext.Provider value={id.replace(/:/g, '')}>
					{children}
				</QuickActionIdContext.Provider>
			</Dialog.Root>
		</TriggerSizeContext.Provider>
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
	const sizeMonitor = useContext(TriggerSizeContext);
	const measureRef = useSize((size) => {
		sizeMonitor.set(size);
	});
	const finalRef = useMergedRef(ref, measureRef);
	return (
		<Dialog.Trigger
			{...props}
			ref={finalRef}
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
	const innerRef = useRef<HTMLDivElement>(null);
	const finalRef = useMergedRef(innerRef, ref);
	const layoutId = useContext(QuickActionIdContext);
	const triggerSizeMonitor = useContext(TriggerSizeContext);
	useMonitor(triggerSizeMonitor, (size) => {
		if (innerRef.current) {
			const style = innerRef.current.style;
			style.setProperty('--trigger-width', `${size.width}px`);
			style.setProperty('--trigger-height', `${size.height}px`);
		}
	});

	return (
		<Dialog.Portal>
			<Dialog.Popup
				ref={finalRef}
				className={clsx(cls.popup, className)}
				data-align={align}
				style={
					{
						positionAnchor: `--${layoutId}`,
						'--trigger-width': triggerSizeMonitor.get().width + 'px',
						'--trigger-height': triggerSizeMonitor.get().height + 'px',
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
