import classNames from 'clsx';
import { ReactNode, Suspense } from 'react';
import { ScrollArea } from '../scrollArea/ScrollArea.js';

export interface ActionBarProps {
	children: ReactNode;
	className?: string;
	wrap?: boolean;
	disableShadow?: boolean;
}

export function ActionBar({
	children,
	className,
	wrap,
	disableShadow,
	...rest
}: ActionBarProps) {
	return (
		<Suspense fallback={null}>
			<div
				className={classNames(
					'layer-components:(flex flex-row items-center justify-start w-full overflow-hidden relative h-[max-content] transition-[height] springy)',
					'layer-components:[&:empty]:height-0',
					className,
				)}
				{...rest}
			>
				<ScrollArea
					disableFades={disableShadow}
					className="layer-components:(flex-grow w-full h-full)"
				>
					<ScrollArea.Content
						className={classNames(
							'layer-composed:(flex flex-row items-center justify-start relative h-full)',
							wrap && 'layer-variants:flex-wrap',
						)}
					>
						{children}
					</ScrollArea.Content>
				</ScrollArea>
			</div>
		</Suspense>
	);
}
