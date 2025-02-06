import React from 'react';

export const withProps = <T extends {}>(
	Component: React.ComponentType<T>,
	extras: Partial<T>,
) => {
	return (props: T) => {
		return <Component {...props} {...extras} />;
	};
};
