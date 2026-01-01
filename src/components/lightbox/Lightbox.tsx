import { Dialog, DialogPopupProps } from '@base-ui/react/dialog';
import { DialogCloseProps } from '@radix-ui/react-dialog';
import { ReactElement, ReactNode } from 'react';
import { withClassName } from '../../hooks.js';
import { Button } from '../button/Button.js';
import { Icon } from '../icon/Icon.js';

export interface LightboxProps {
	children?: ReactNode;
}

export const LightboxRoot = Dialog.Root;
export const LightboxTrigger = withClassName(
	Dialog.Trigger,
	'layer-components:cursor-pointer',
	'layer-components:focus-visible:(outline-none ring ring-accent)',
);
export const LightboxPortal = Dialog.Portal;
export const LightboxTitle = () => (
	<Dialog.Title className="sr-only">Lightbox</Dialog.Title>
);
export const LightboxClose = (props: DialogCloseProps) => (
	<Dialog.Close
		{...props}
		render={
			<Button aria-label="Close">
				<Icon name="x" />
			</Button>
		}
		className="absolute top-md right-md"
	/>
);

export const LightboxOverlay = withClassName(
	Dialog.Backdrop,
	'layer-components:(fixed inset-0 bg-black/50 backdrop-blur-sm z-backdrop)',
	'transform-gpu !motion-reduce:animate-none',
	'layer-components:[&[data-state=closed]]:animate-fade-out layer-components:(animate-fade-in animate-duration-200)',
);

export const LightboxContentRoot = withClassName(
	Dialog.Popup,
	'layer-components:(fixed z-dialog bg-none border-none p-lg w-full h-full max-w-full max-h-full flex items-center justify-center)',
	'transform-gpu !motion-reduce:animate-none',
	'layer-components:(left-50% top-50% translate-[-50%] w-90vw max-h-85vh)',
	'layer-components:animate-dialog-in',
	'layer-components:[&[data-state=closed]]:animate-dialog-out',
	'!pointer-events-none',
);
export const LightboxContent = (props: DialogPopupProps) => {
	return (
		<LightboxContentRoot {...props}>
			<LightboxTitle />
			<LightboxClose className="pointer-events-auto" />
			<LightboxContentInner>{props.children}</LightboxContentInner>
		</LightboxContentRoot>
	);
};

const LightboxContentInner = withClassName(
	'div',
	'layer-components:(max-w-full max-h-full overflow-hidden flex flex-col items-center justify-center)',
	'layer-components:pointer-events-none layer-components:[&>*]:pointer-events-auto',
);

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

const LightboxImage = withClassName(
	'img',
	'max-w-full max-h-full min-h-80px min-w-80px object-contain',
);

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
