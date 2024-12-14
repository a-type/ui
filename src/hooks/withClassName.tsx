import classNames from 'clsx';
import {
	ComponentPropsWithRef,
	ComponentType,
	ElementType,
	FunctionComponent,
} from 'react';

export function withClassName<T extends ComponentType<any> | ElementType<any>>(
	Component: T,
	...cs: Parameters<typeof classNames>
): FunctionComponent<ComponentPropsWithRef<T>> {
	const WithClassName = (props: any) => {
		const { className, ...rest } = props;
		return <Component {...rest} className={classNames(cs, className)} />;
	};
	return WithClassName as any;
}
