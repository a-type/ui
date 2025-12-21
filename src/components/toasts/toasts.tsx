export type * from 'react-hot-toast';
export { toast } from 'react-hot-toast';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';
import { createPortal } from 'react-dom';
import { DefaultToastOptions, useToaster } from 'react-hot-toast';
import { useResolvedColorMode } from '../../colorMode.js';
import { Icon } from '../icon/Icon.js';

const toastOptions: DefaultToastOptions = {};

export const Toaster = (props: { className?: string }) => {
	const mode = useResolvedColorMode();
	const { toasts, handlers } = useToaster(toastOptions);
	const { startPause, endPause } = handlers;
	const visibleToasts = toasts.filter((t) => t.visible);

	const target = typeof document === 'undefined' ? null : document.body;
	if (!target) {
		return null;
	}

	return createPortal(
		<div
			className={clsx(
				'fixed z-100000 flex flex-col items-center gap-xs left-1/2 center-x top-sm max-w-400px',
				mode === 'dark' ? 'override-light' : 'override-dark',
				props.className,
			)}
			onMouseEnter={startPause}
			onMouseLeave={endPause}
		>
			<AnimatePresence>
				{visibleToasts.map((toast) => {
					const message =
						typeof toast.message === 'function'
							? toast.message(toast)
							: toast.message;
					return (
						<motion.div
							key={toast.id}
							className={clsx(
								{
									'palette-success': toast.type === 'success',
									'palette-attention': toast.type === 'error',
									'palette-info': toast.type === 'blank',
								},
								'bg-main-wash color-black rounded-md shadow-md px-md py-sm',
								'flex flex-row gap-sm',
							)}
							{...toast.ariaProps}
							initial={{ scale: 0.8, opacity: 0, y: -20 }}
							exit={{ scale: 0.8, opacity: 0, y: -20 }}
							animate={{
								scale: 1,
								opacity: 1,
								y: 0,
							}}
							layout
						>
							<Icon
								className="mt-2px"
								loading={toast.type === 'loading'}
								name={
									toast.type === 'success'
										? 'check'
										: toast.type === 'error'
										? 'warning'
										: 'info'
								}
							/>
							{message}
						</motion.div>
					);
				})}
			</AnimatePresence>
		</div>,
		target,
	);
};
