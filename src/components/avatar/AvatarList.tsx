import { CSSProperties, ReactNode, createContext, useContext } from 'react';
import { Avatar, AvatarProps } from './Avatar.js';

const AvatarListContext = createContext<{ size: number }>({
	size: 24,
});

export function AvatarListRoot({
	children,
	count,
	size = 24,
	className,
	style,
	...rest
}: {
	children: ReactNode;
	count: number;
	size?: number;
	className?: string;
	style?: CSSProperties;
}) {
	const width = count > 0 ? size + (count - 1) * ((size * 2) / 3) : 0;

	return (
		<AvatarListContext.Provider value={{ size }}>
			<div
				className={className}
				style={{
					...style,
					position: 'relative',
					flexBasis: 'auto',
					width,
					minWidth: width,
					height: size,
				}}
				{...rest}
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
	style,
}: {
	index: number;
	children: ReactNode;
	className?: string;
	style?: CSSProperties;
}) {
	const { size } = useContext(AvatarListContext);
	return (
		<div
			className={className}
			style={{
				...style,
				position: 'absolute',
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
