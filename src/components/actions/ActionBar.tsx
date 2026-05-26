import classNames from 'clsx';
import { ReactNode, Suspense } from 'react';
import { ScrollArea } from '../scrollArea/ScrollArea.js';
import cls from './ActionBar.module.css';

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
			<div className={classNames(cls.root, className)} {...rest}>
				<ScrollArea disableFades={disableShadow} className={cls.scrollArea}>
					<ScrollArea.Content
						className={classNames(cls.scrollAreaContent)}
						data-wrap={wrap}
					>
						{children}
					</ScrollArea.Content>
				</ScrollArea>
			</div>
		</Suspense>
	);
}
