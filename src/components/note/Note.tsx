import classNames from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';

export interface NoteProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
}

export function Note({ className, children, ...rest }: NoteProps) {
	return (
		<div className={classNames(className)} {...rest}>
			<div className="layer-components:(flex flex-row)">
				<div className="layer-components:(flex-1 p-2 border border-solid border-primary-dark bg-primary-wash color-black relative text-sm italic) layer-variants:border-r-0">
					{children}
				</div>
				<div
					className="layer-components:(flex flex-col items-stretch justify-stretch flex-[0_0_20px])"
					aria-hidden
				>
					<div className="layer-components:(border-0 border-solid border-primary-dark flex-[0_0_20px] w-[20px] h-[20px] relative) layer-variants:(border-b-1px border-l-1px)">
						<div className="layer-components:(absolute w-1px bg-primary-dark h-26px rotate--45 left-9px top--4px transform-origin-cc)" />
						<div
							className={`layer-components:(border-solid box-content border-transparent border-r-primary-wash border-13px w-0 h-0 rotate--45 translate--7px transform-origin-br)`}
						/>
					</div>
					<div className="layer-components:(bg-primary-wash flex-1 border-0 border-solid border-primary-dark) layer-variants:(border-r-1px border-b-1px)" />
				</div>
			</div>
		</div>
	);
}
