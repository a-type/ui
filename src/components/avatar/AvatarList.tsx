import clsx from 'clsx';
import { ReactNode, createContext, useContext } from 'react';
import { Avatar, AvatarProps } from './Avatar.js';

const AvatarListContext = createContext<{ size: number }>({
	size: 24,
});

export function AvatarListRoot({
	children,
	count,
	size = 24,
	className,
}: {
	children: ReactNode;
	count: number;
	size?: number;
	className?: string;
}) {
	const width = count > 0 ? size + (count - 1) * ((size * 2) / 3) : 0;

	return (
		<AvatarListContext.Provider value={{ size }}>
			<div
				className={clsx(
					'layer-components:(relative flex-basis-auto)',
					className,
				)}
				style={{ width, minWidth: width, height: size }}
			>
				{children}
			</div>
		</AvatarListContext.Provider>
	);
}

export function AvatarListItemRoot({
	index,
	children,
	className,
}: {
	index: number;
	children: ReactNode;
	className?: string;
}) {
	const { size } = useContext(AvatarListContext);
	return (
		<div
			className={clsx('layer-components:absolute', className)}
			style={{
				left: index === 0 ? 0 : index * ((size * 2) / 3),
				zIndex: index,
				top: 0,
			}}
		>
			{children}
		</div>
	);
}

export function AvatarListItem({
	index,
	className,
	...rest
}: {
	index: number;
	popIn?: boolean;
	className?: string;
} & AvatarProps) {
	const { size } = useContext(AvatarListContext);
	return (
		<AvatarListItemRoot index={index} className={className}>
			<Avatar style={{ width: size, height: size }} {...rest} />
		</AvatarListItemRoot>
	);
}

export const AvatarList = Object.assign(AvatarListRoot, {
	Item: AvatarListItem,
	ItemRoot: AvatarListItemRoot,
});
