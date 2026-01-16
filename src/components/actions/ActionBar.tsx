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
					'layer-components:springy layer-components:(relative h-[max-content] w-full flex flex-row items-center justify-start overflow-hidden transition-[height])',
					'layer-components:[&:empty]:height-0',
					className,
				)}
				{...rest}
			>
				<ScrollArea
					disableFades={disableShadow}
					className="layer-components:(h-full w-full flex-grow)"
				>
					<ScrollArea.Content
						className={classNames(
							'layer-composed:(relative h-full flex flex-row items-center justify-start)',
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
