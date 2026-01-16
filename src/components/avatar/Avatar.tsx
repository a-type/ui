import {
	Avatar as BaseAvatar,
	AvatarRootProps as BaseAvatarProps,
} from '@base-ui/react/avatar';
import classNames from 'clsx';
import { CSSProperties, HTMLProps } from 'react';
import { Icon } from '../icon/index.js';

export interface AvatarProps extends BaseAvatarProps {
	className?: string;
	popIn?: boolean;
	style?: CSSProperties;
	imageSrc?: string | null;
	name?: string;
	crossOrigin?: HTMLProps<HTMLImageElement>['crossOrigin'];
	size?: string | number;
}

export function Avatar({
	className,
	popIn = false,
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
			data-pop={popIn}
			className={classNames(
				'layer-components:(relative aspect-1 w-24px flex flex-shrink-0 select-none items-center justify-center overflow-hidden border-default rounded-lg bg-white)',
				popIn &&
					'layer-variants:(animate-pop-in-from-half animate-duration-200 animate-ease-springy)',
				empty && 'layer-components:(border-dashed bg-gray-light)',
				className,
			)}
			style={size ? { width: size, height: size, ...style } : style}
			{...rest}
		>
			{imageSrc && (
				<BaseAvatar.Image
					className="h-full w-full object-cover"
					referrerPolicy="no-referrer"
					src={imageSrc}
					alt={`${name ?? 'user'}'s profile picture`}
					crossOrigin={crossOrigin}
				/>
			)}
			{name && (
				<BaseAvatar.Fallback
					className="text-size-[calc(0.5px*var(--avatar-size,24px))]"
					style={{ '--avatar-size': size } as any}
				>
					{name.charAt(0).toUpperCase()}
				</BaseAvatar.Fallback>
			)}
			{empty && <Icon name="profile" />}
		</BaseAvatar.Root>
	);
}
