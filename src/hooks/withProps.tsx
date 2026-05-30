import { mergeProps } from '@base-ui/react';
import { ComponentType } from 'react';

export const withProps = <T extends object>(
	Component: ComponentType<T>,
	extras: Partial<T>,
) => {
	return (props: T) => {
		return <Component {...(mergeProps<any>(props, extras) as any)} />;
	};
};

type OptionalKeys<T> = {
	[K in keyof T]-?: undefined extends T[K] ? K : never;
}[keyof T];
export const withoutProps = <T extends object, P extends OptionalKeys<T>>(
	Component: ComponentType<T>,
	_remove: P[],
) => {
	return (props: Omit<T, P>) => {
		return <Component {...(props as any)} />;
	};
};
