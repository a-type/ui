import {
	Dialog,
	DialogCloseProps,
	DialogPopupProps,
} from '@base-ui/react/dialog';
import { ReactElement, ReactNode } from 'react';
import { withClassName } from '../../hooks.js';
import { Button } from '../button/Button.js';
import { Icon } from '../icon/Icon.js';
import cls from './Lightbox.module.css';

export interface LightboxProps {
	children?: ReactNode;
}

export const LightboxRoot = Dialog.Root;
export const LightboxTrigger = withClassName(Dialog.Trigger, cls.trigger);
export const LightboxPortal = Dialog.Portal;
export const LightboxTitle = () => (
	<Dialog.Title className={cls.title}>Lightbox</Dialog.Title>
);
export const LightboxClose = (props: DialogCloseProps) => (
	<Dialog.Close
		{...props}
		render={
			<Button aria-label="Close">
				<Icon name="x" />
			</Button>
		}
		className={cls.close}
	/>
);

export const LightboxOverlay = withClassName(Dialog.Backdrop, cls.overlay);

export const LightboxContentRoot = withClassName(Dialog.Popup, cls.contentRoot);
export const LightboxContent = (props: DialogPopupProps) => {
	return (
		<LightboxContentRoot {...props}>
			<LightboxTitle />
			<LightboxClose className={cls.pointerEventsAuto} />
			<LightboxContentInner>{props.children}</LightboxContentInner>
		</LightboxContentRoot>
	);
};

const LightboxContentInner = withClassName('div', cls.contentInner);

function LightboxDefault({
	children,
}: Omit<LightboxProps, 'children'> & {
	children?: ReactElement;
}) {
	return (
		<Dialog.Root>
			<Dialog.Trigger render={children}></Dialog.Trigger>
			<Dialog.Portal>
				<LightboxOverlay />
				<LightboxContent>{children}</LightboxContent>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

const LightboxImage = withClassName('img', cls.image);

export const Lightbox = Object.assign(LightboxDefault, {
	Overlay: LightboxOverlay,
	Content: LightboxContent,
	Image: LightboxImage,
	Root: LightboxRoot,
	Trigger: LightboxTrigger,
	Close: LightboxClose,
	Title: LightboxTitle,
	Portal: LightboxPortal,
});
