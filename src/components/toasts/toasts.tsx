import {
	Toast,
	ToastManagerAddOptions,
	ToastManagerPromiseOptions,
	ToastObject,
} from '@base-ui/react/toast';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { useResolvedColorMode } from '../../colorMode.js';
import { Button, ButtonProps } from '../button/index.js';
import { Icon } from '../icon/Icon.js';
import { Spinner } from '../spinner/Spinner.js';

export const manager = Toast.createToastManager();

export const DefaultToastProvider = ({
	children,
	...rest
}: {
	children?: React.ReactNode;
	timeout?: number;
}) => {
	return (
		<Toast.Provider toastManager={manager} {...rest}>
			{children}
		</Toast.Provider>
	);
};

export function Toaster() {
	return (
		<Toast.Portal>
			<Toast.Viewport className="overflow-clip">
				<ToastList />
			</Toast.Viewport>
		</Toast.Portal>
	);
}

function ToastList() {
	const { toasts: untypedToasts } = Toast.useToastManager();
	const mode = useResolvedColorMode();

	const toasts = untypedToasts as Array<ToastObject<CustomToastData>>;

	return toasts.map((toast) => (
		<Toast.Root
			key={toast.id}
			toast={toast}
			swipeDirection={['up', 'right', 'left']}
			className={clsx(
				// variable setup
				'[--gap:0.75rem] [--peek:0.75rem] [--scale:calc(max(0,1-(var(--toast-index)*0.1)))]',
				'[--height:var(--toast-frontmost-height,var(--toast-height))] [--shrink:calc(1-var(--scale))]',
				'[--offset-y:calc(var(--toast-offset-y)+calc(var(--toast-index)*var(--gap))+var(--toast-swipe-movement-y))]',
				// basic positioning
				'fixed left-0 left-auto top-xs z-[calc(100000-var(--toast-index))] mr-0 w-full origin-top',
				'h-[--height]',
				'flex flex-col items-center gap-xs',
				// other properties
				'select-none',
				// animation and interaction
				'translate-x-[--toast-swipe-movement-x] translate-y-[calc(var(--toast-swipe-movement-y)+(var(--toast-index)*var(--peek))+(var(--shrink)*var(--height)))] scale-[var(--scale)]',
				'[transition:transform_0.5s_cubic-bezier(0.22,1,0.36,1),opacity_0.5s,height_0.15s]',
				// ::after
				'after:(absolute left-0 top-full h-[calc(var(--gap)+1px)] w-full content-empty)',
				// starting style
				'data-[starting-style]:(-translate-y-150%)',
				// limited
				'data-[limited]:opacity-0',
				//expanded
				'data-[expanded]:(h-[--toast-height] translate-x-[--toast-swipe-movement-x] translate-y-[--offset-y] scale-100)',
				// ending styles
				'data-[ending-style]:(opacity-0)',
				// natural or close button
				'[&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:(scale-90 opacity-50 -translate-y-150%)',
				// swiping down
				'data-[ending-style]:data-[swipe-direction=down]:(translate-y-[calc(var(--toast-swipe-movement-y)+150%)])',
				'data-[expanded]:data-[ending-style]:data-[swipe-direction=down]:(translate-y-[calc(var(--toast-swipe-movement-y)+150%)])',
				// swiping left
				'data-[ending-style]:data-[swipe-direction=left]:(translate-x-[calc(var(--toast-swipe-movement-x)-150%)] translate-y-[var(--offset-y)])',
				'data-[expanded]:data-[ending-style]:data-[swipe-direction=left]:(translate-x-[calc(var(--toast-swipe-movement-x)-150%)] translate-y-[var(--offset-y)])',
				// swiping right
				'data-[ending-style]:data-[swipe-direction=right]:(translate-x-[calc(var(--toast-swipe-movement-x)+150%)] translate-y-[var(--offset-y)])',
				'data-[expanded]:data-[ending-style]:data-[swipe-direction=right]:(translate-x-[calc(var(--toast-swipe-movement-x)+150%)] translate-y-[var(--offset-y)])',
				// swiping up
				'data-[ending-style]:data-[swipe-direction=up]:(translate-y-[calc(var(--toast-swipe-movement-y)-150%)])',
				'data-[expanded]:data-[ending-style]:data-[swipe-direction=up]:(translate-y-[calc(var(--toast-swipe-movement-y)-150%)])',
				// themeing
				{
					'palette-success': toast.type === 'success',
					'palette-attention': toast.type === 'error',
					'palette-info': toast.type === 'blank',
				},
				mode === 'dark' ? 'override-light' : 'override-dark',
			)}
		>
			<Toast.Content className="max-w-sm flex flex-col gap-2px [&[data-behind]:not([data-expanded])]:pointer-events-none">
				<div
					className={clsx(
						'layer-components:(relative b-1 b-black rounded-md b-solid py-sm pl-md pr-sm shadow-md color-black bg-main-wash)',
						'layer-components:(flex flex-row gap-sm)',
						'[[data-behind]:not([data-expanded])_&]:(max-h-[--height] bg-darken-2)',
					)}
				>
					<div
						className={clsx(
							'flex flex-row items-center gap-xs',
							'[transition-duration:250ms] transition-opacity [[data-behind]:not([data-expanded])_&]:(opacity-0) [[data-expanded]_&]:(opacity-100)',
						)}
					>
						<div className="flex flex-col gap-xs">
							<Toast.Title className="m-0 text-sm font-bold leading-tight" />
							<div className="flex gap-sm">
								{toast.data?.loading ? (
									<Spinner size={15} className="relative top-2px" />
								) : toast.type === 'success' ? (
									<Icon
										name="check"
										color="success"
										className="relative top-2px"
									/>
								) : toast.type === 'error' ? (
									<Icon
										name="warning"
										color="attention"
										className="relative top-2px"
									/>
								) : null}
								<Toast.Description className="m-0 text-sm" />
							</div>
						</div>
						<Toast.Close
							className="mb-auto [[data-behind]:not([data-expanded])_&]:(invisible)"
							aria-label="Close"
							render={
								<Button size="small" emphasis="ghost">
									<Icon name="x" />
								</Button>
							}
						/>
					</div>
				</div>
				{toast.data?.actions && (
					<div className="ml-auto flex items-center gap-xxs transition-opacity [[data-behind]:not([data-expanded])_&]:(opacity-0)">
						{toast.data.actions.toReversed().map((action, index: number) => (
							<Toast.Action
								key={index}
								className="text-xs"
								onClick={action.onClick}
								render={
									<Button
										size="small"
										emphasis={action.emphasis}
										color={action.color}
									/>
								}
							>
								{action.label}
							</Toast.Action>
						))}
					</div>
				)}
			</Toast.Content>
		</Toast.Root>
	));
}

export interface CustomToastData {
	actions?: {
		label: ReactNode;
		onClick: () => void;
		emphasis?: ButtonProps['emphasis'];
		color?: ButtonProps['color'];
	}[];
	loading?: boolean;
}

export interface ToastOptions extends ToastManagerAddOptions<CustomToastData> {
	/** @deprecated - use timeout */
	duration?: number;
}

function toOptions(
	messageOrOptions: string | ToastOptions,
	maybeOptions?: ToastOptions,
): ToastOptions {
	const description =
		typeof messageOrOptions === 'string' ? messageOrOptions : undefined;
	const options =
		typeof messageOrOptions === 'string' ? maybeOptions : messageOrOptions;
	const extraOptions =
		typeof messageOrOptions === 'string' && maybeOptions ? maybeOptions : {};

	const finalOptions = {
		description,
		timeout:
			options?.duration ??
			extraOptions?.duration ??
			options?.timeout ??
			extraOptions?.timeout,
		...options,
		...extraOptions,
	};
	return finalOptions;
}

function baseToast(
	messageOrOptions: string | ToastOptions,
	maybeOptions?: ToastOptions,
) {
	const finalOptions = toOptions(messageOrOptions, maybeOptions);
	return manager.add(finalOptions);
}

export const toast = Object.assign(baseToast, {
	success(
		messageOrOptions: string | ToastOptions,
		maybeOptions?: ToastOptions,
	) {
		return baseToast(messageOrOptions, {
			type: 'success',
			...maybeOptions,
		});
	},
	error(messageOrOptions: string | ToastOptions, maybeOptions?: ToastOptions) {
		return baseToast(messageOrOptions, {
			type: 'error',
			...maybeOptions,
		});
	},
	promise: function <T>(
		promise: Promise<T>,
		options: ToastManagerPromiseOptions<T, CustomToastData>,
	) {
		return manager.promise(promise, options);
	},
	loading: function (
		messageOrOptions: string | ToastOptions,
		maybeOptions?: ToastOptions,
	) {
		const id = baseToast(messageOrOptions, {
			timeout: 0,
			data: { loading: true },
			...maybeOptions,
		});

		return {
			id,
			complete: (
				messageOrOptions: string | ToastOptions,
				maybeOptions?: ToastOptions,
			) => {
				manager.update(
					id,
					toOptions(messageOrOptions, {
						...maybeOptions,
						data: { loading: false },
					}),
				);
			},
		};
	},
	update: function (
		id: string,
		messageOrOptions: string | ToastOptions,
		maybeOptions?: ToastOptions,
	) {
		return manager.update(id, toOptions(messageOrOptions, maybeOptions));
	},
	close: function (id: string) {
		return manager.close(id);
	},
	/**
	 * @deprecated use `toast.close` instead
	 */
	dismiss: function (id: string) {
		return manager.close(id);
	},
});

export type * from '@base-ui/react/toast';
export { Toast };
