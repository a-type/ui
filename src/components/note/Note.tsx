import classNames from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';
import { PaletteName } from '../../uno/logic/color.js';

export interface NoteProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	color?: PaletteName;
}

export function Note({ className, color, children, ...rest }: NoteProps) {
	return (
		<div
			className={classNames(color && `palette-${color}`, className)}
			{...rest}
		>
			<div className="layer-components:(flex flex-row)">
				<div className="layer-components:(flex-1 p-2 border border-solid border-main-dark bg-main-wash bg-darken-1 color-black relative text-sm italic) layer-variants:border-r-0">
					{children}
				</div>
				<div
					className="layer-components:(flex flex-col items-stretch justify-stretch flex-[0_0_20px])"
					aria-hidden
				>
					{/* folded corner */}
					<div className="layer-components:(border-0 border-solid border-main-dark flex-[0_0_20px] w-[20px] h-[20px] relative) layer-variants:(border-b-1px border-l-1px)">
						<div className="layer-components:(absolute w-0.5px bg-main-dark h-27px rotate--45 left-9px top--3px transform-origin-cc)" />
						{/* top diagonal line */}
						<div
							className={`layer-components:(border-solid box-content border-transparent border-r-main-wash border-13px w-0 h-0 rotate--45 translate--7px transform-origin-br)`}
						/>
					</div>
					{/* bottom right corner */}
					<div className="layer-components:(bg-main-wash bg-darken-1 flex-1 border-0 border-solid border-main-dark) layer-variants:(border-r-1px border-b-1px)" />
				</div>
			</div>
		</div>
	);
}
