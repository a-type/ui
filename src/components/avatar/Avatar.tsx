import classNames from 'clsx';
import { CSSProperties } from 'react';
import { Icon } from '../icon/index.js';

export interface AvatarProps {
	className?: string;
	popIn?: boolean;
	style?: CSSProperties;
	imageSrc?: string | null;
	name?: string;
}

export function Avatar({
	className,
	popIn = false,
	imageSrc,
	name,
	...rest
}: AvatarProps) {
	const empty = !name && !imageSrc;
	return (
		<div
			data-pop={popIn}
			className={classNames(
				'layer-components:(flex items-center justify-center rounded-lg border-default overflow-hidden w-24px aspect-1 select-none relative bg-white flex-shrink-0)',
				popIn &&
					'layer-variants:(animate-pop-in-from-half animate-ease-springy animate-duration-200)',
				empty && 'layer-components(border-dashed bg-gray-light)',
				className,
			)}
			{...rest}
		>
			{!empty && <AvatarContent name={name} imageSrc={imageSrc} />}
			{empty && <Icon name="profile" />}
		</div>
	);
}

function AvatarContent({
	name,
	imageSrc,
}: {
	name?: string;
	imageSrc?: string | null;
}) {
	if (imageSrc) {
		return (
			<img
				className="w-full h-full object-cover"
				referrerPolicy="no-referrer"
				crossOrigin="anonymous"
				src={imageSrc}
				alt={`${name ?? 'user'}'s profile picture`}
			/>
		);
	}
	return (
		<div className="color-black items-center justify-center flex text-sm font-bold">
			{name?.charAt(0) || '?'}
		</div>
	);
}
