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
}

export function Avatar({
	className,
	popIn = false,
	imageSrc,
	name,
	crossOrigin,
	...rest
}: AvatarProps) {
	const empty = !name && !imageSrc;
	return (
		<BaseAvatar.Root
			data-pop={popIn}
			className={classNames(
				'layer-components:(flex items-center justify-center rounded-lg border-default overflow-hidden w-24px aspect-1 select-none relative bg-white flex-shrink-0)',
				popIn &&
					'layer-variants:(animate-pop-in-from-half animate-ease-springy animate-duration-200)',
				empty && 'layer-components:(border-dashed bg-gray-light)',
				className,
			)}
			{...rest}
		>
			{imageSrc && (
				<BaseAvatar.Image
					className="w-full h-full object-cover"
					referrerPolicy="no-referrer"
					src={imageSrc}
					alt={`${name ?? 'user'}'s profile picture`}
					crossOrigin={crossOrigin}
				/>
			)}
			<BaseAvatar.Fallback>{name?.charAt(0) || '?'}</BaseAvatar.Fallback>
			{empty && <Icon name="profile" />}
		</BaseAvatar.Root>
	);
}
