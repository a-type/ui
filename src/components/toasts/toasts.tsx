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
import cls from './toasts.module.css';

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
			<Toast.Viewport className={cls.toaster}>
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
				cls.toast,
				// themeing
				'@mode-inverted',
				{
					'@mode-success': toast.type === 'success',
					'@mode-attention': toast.type === 'error',
				},
				'@mode-dense',
			)}
		>
			<Toast.Content className={cls.toastContent}>
				<div className={clsx(cls.toastMain)}>
					<div className={clsx(cls.toastMainBody)}>
						<div className={cls.toastMainBodyContent}>
							<Toast.Title className={toast.title} />
							<div className={cls.toastDescriptionRow}>
								{toast.data?.loading ? (
									<Spinner size={15} className={cls.icon} />
								) : toast.type === 'success' ? (
									<Icon name="check" color="success" className={cls.icon} />
								) : toast.type === 'error' ? (
									<Icon name="warning" color="attention" className={cls.icon} />
								) : null}
								<Toast.Description className={cls.toastDescription} />
							</div>
						</div>
						<Toast.Close
							className={cls.toastClose}
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
					<div className={cls.toastActions}>
						{toast.data.actions.toReversed().map((action, index: number) => (
							<Toast.Action
								key={index}
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
	console.log('finalOptions', finalOptions);
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
