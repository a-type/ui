import React from 'react';

export const withProps = <T extends {}>(
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
export const withoutProps = <T extends {}, P extends OptionalKeys<T>>(
	Component: React.ComponentType<T>,
	remove: P[],
) => {
	return (props: Omit<T, P>) => {
		return <Component {...(props as any)} />;
	};
};
