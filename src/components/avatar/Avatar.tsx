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
	return (
		<BaseAvatar.Root
			className={classNames(
				cls.root,
				'layer-components:(relative aspect-1 w-24px flex flex-shrink-0 select-none items-center justify-center overflow-hidden bg-neutral-paper b rd-lg)',
				empty && 'layer-components:(bg-neutral-light border-dashed)',
				className,
			)}
			data-empty={empty}
			style={size ? { width: size, height: size, ...style } : style}
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
				<BaseAvatar.Fallback
					className={cls.fallback}
					style={{ '--avatar-size': size } as any}
				>
					{name.charAt(0).toUpperCase()}
				</BaseAvatar.Fallback>
			)}
			{empty && <Icon name="profile" />}
		</BaseAvatar.Root>
	);
}
