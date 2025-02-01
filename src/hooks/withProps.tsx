import React from 'react';

export const withProps = <T extends {}, Extras extends {}>(
	Component: React.ComponentType<T & Extras>,
	extras: Extras,
) => {
	return (props: T & Extras) => {
		return <Component {...props} {...extras} />;
	};
};
