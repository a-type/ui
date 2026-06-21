import {
	Avatar as BaseAvatar,
	AvatarRootProps as BaseAvatarProps,
} from '@base-ui/react/avatar';
import classNames from 'clsx';
import { CSSProperties, HTMLProps } from 'react';
import { Icon } from '../icon/index.js';
import cls from './Avatar.module.css';

export interface AvatarProps extends BaseAvatarProps {
	className?: string;
	/** @deprecated */
	popIn?: boolean;
	style?: CSSProperties;
	imageSrc?: string | null;
	name?: string;
	crossOrigin?: HTMLProps<HTMLImageElement>['crossOrigin'];
	size?: string | number;
}

export function Avatar({
	className,
	imageSrc,
	name,
	crossOrigin,
	style,
	size,
	...rest
}: AvatarProps) {
	const empty = !name && !imageSrc;
	const sizeStyle = { '--avatar-size': size } as CSSProperties;
	return (
		<BaseAvatar.Root
			className={classNames(cls.root, className)}
			data-empty={empty}
			style={size ? { ...sizeStyle, ...style } : style}
			{...rest}
		>
			{imageSrc && (
				<BaseAvatar.Image
					className={cls.image}
					referrerPolicy="no-referrer"
					src={imageSrc}
					alt={`${name ?? 'user'}'s profile picture`}
					crossOrigin={crossOrigin}
				/>
			)}
			{name && (
				<BaseAvatar.Fallback className={cls.fallback}>
					{name.charAt(0).toUpperCase()}
				</BaseAvatar.Fallback>
			)}
			{empty && <Icon name="profile" />}
		</BaseAvatar.Root>
	);
}
