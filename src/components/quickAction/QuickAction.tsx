import { Dialog, DialogRootProps } from '@base-ui/react/dialog';
import clsx from 'clsx';
import { createContext, useContext, useId } from 'react';
import { Button, ButtonProps } from '../button/Button.js';

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
	...props
}: QuickActionTriggerProps) => {
	const layoutId = useContext(QuickActionIdContext);
	return (
		<Dialog.Trigger
			{...props}
			render={({ color: _, ...composed }) => (
				<Button
					color={props.color}
					emphasis={emphasis}
					{...composed}
					className={clsx(
						'layer-composed:(relative min-h-[2.5rem] min-w-[2.5rem] justify-center rounded-full p-xs)',
						className,
					)}
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

interface QuickActionContentProps {
	children?: React.ReactNode;
	className?: string;
	align?: 'center' | 'start' | 'end';
}
const QuickActionContent = ({
	children,
	className,
	align = 'center',
}: QuickActionContentProps) => {
	const layoutId = useContext(QuickActionIdContext);
	return (
		<Dialog.Portal>
			<Dialog.Popup
				className={clsx(
					'layer-components:(contain-layout border-1 rounded-md border-solid shadow-lg transition-all bg-white border-black)',
					'layer-components:(fixed bottom-[anchor(bottom)] overflow-clip)',
					{
						'[justify-self:anchor-center]': align === 'center',
						'left-[anchor(left)]': align === 'start',
						'right-[anchor(right)]': align === 'end',
					},
					'data-[starting-style]:([will-change:width,height,transform] h-[anchor-size(height)] w-[anchor-size(width)] rounded-200px opacity-0)',
					'layer-components:[&[data-starting-style]>*]:opacity-0',
					'data-[ending-style]:([will-change:width,height,transform] h-[anchor-size(height)] w-[anchor-size(width)] rounded-200px opacity-80)',
					'layer-components:[&[data-ending-style]>*]:opacity-0',
					className,
				)}
				style={{
					// @ts-ignore
					'position-anchor': `--${layoutId}`,
				}}
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
