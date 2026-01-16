import React from 'react';

export const withProps = <T extends object>(
	Component: React.ComponentType<T>,
	extras: Partial<T>,
) => {
	return (props: T) => {
		return <Component {...props} {...extras} />;
	};
};

type OptionalKeys<T> = {
	[K in keyof T]-?: undefined extends T[K] ? K : never;
}[keyof T];
export const withoutProps = <T extends object, P extends OptionalKeys<T>>(
	Component: React.ComponentType<T>,
	_remove: P[],
) => {
	return (props: Omit<T, P>) => {
		return <Component {...(props as any)} />;
	};
};
