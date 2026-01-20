import classNames, { clsx } from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';
import { withClassName } from '../../hooks.js';
import { PaletteName } from '../../uno/index.js';
import { TextArea } from '../textArea/TextArea.js';

export interface NoteProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	color?: PaletteName;
}

function NoteRoot({ className, color, children, ...rest }: NoteProps) {
	return (
		<div
			className={classNames(
				color && `palette-${color}`,
				'layer-components:[&:has(input:focus-visible),&:has(textarea:focus-visible)]:(ring ring-4 ring-accent)',
				'layer-variants:[&:has(input:focus[data-focus-clicked]),&:has(textarea:focus[data-focus-clicked])]:(ring ring-4 bg-lighten-3 ring-main-light)',
				className,
			)}
			{...rest}
		>
			<div className="layer-components:(flex flex-row)">
				<div
					className={clsx(
						'layer-components:(relative flex-1 border border-solid p-2 text-sm italic color-black bg-main-wash bg-darken-1 border-main-dark) layer-variants:border-r-0',
						'layer-variants:[&_input,&_textarea]:(border-none p-0 shadow-none bg-transparent ring-none)',
					)}
				>
					{children}
				</div>
				<div
					className="layer-components:(flex flex-[0_0_20px] flex-col items-stretch justify-stretch)"
					aria-hidden
				>
					{/* folded corner */}
					<div className="layer-components:(relative h-[20px] w-[20px] flex-[0_0_20px] border-0 border-solid border-main-dark) layer-variants:(border-b-1px border-l-1px)">
						{/* top corner */}
						<div
							className={`layer-components:(box-content h-0 w-0 transform-origin-br translate--7px rotate--45 border-13px border-solid border-transparent border-r-main-wash border-r-darken-1)`}
						/>
						{/* diagonal line */}
						<div className="layer-components:(absolute left-9px top--3px h-27px w-0.5px transform-origin-cc rotate--45 bg-main-dark)" />
					</div>
					{/* bottom right corner */}
					<div className="layer-components:(flex-1 border-0 border-solid bg-main-wash bg-darken-1 border-main-dark) layer-variants:(border-b-1px border-r-1px)" />
				</div>
			</div>
		</div>
	);
}

export const NoteInput = withClassName(
	TextArea.Input,
	'layer-composed2:(w-full p-0)',
);

export const Note = Object.assign(NoteRoot, {
	Input: NoteInput,
});
