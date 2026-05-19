import classNames, { clsx } from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';
import { withClassName } from '../../hooks.js';
import { TextArea } from '../textArea/TextArea.js';

export interface NoteProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
}

function NoteRoot({ className, children, ...rest }: NoteProps) {
	return (
		<div
			className={classNames(
				'layer-variants:[&:has(input:focus[data-focus-clicked]),&:has(textarea:focus[data-focus-clicked])]:ring-4 layer-variants:[&:has(input:focus[data-focus-clicked]),&:has(textarea:focus[data-focus-clicked])]:(bg-lighten-3 ring-main-light ring)',
				className,
			)}
			{...rest}
		>
			<div className="layer-components:(flex flex-row)">
				<div
					className={clsx(
						'layer-components:(relative flex-1 italic color-neutral-ink bg-main-wash bg-darken-1 p-sm border-main-heavy border border-solid text-ambient) layer-variants:border-r-0',
						'layer-variants:[&_input,&_textarea]:(p-0 shadow-none bg-transparent ring-none border-none)',
					)}
				>
					{children}
				</div>
				<div
					className="layer-components:(flex flex-[0_0_20px] flex-col items-stretch justify-stretch)"
					aria-hidden
				>
					{/* folded corner */}
					<div className="layer-components:(relative h-[20px] w-[20px] flex-[0_0_20px] border-0 border-main-heavy border-solid) layer-variants:(border-b border-l)">
						{/* top corner */}
						<div
							className={`layer-components:(box-content h-0 w-0 border-13px border-transparent border-r-main-wash border-r-darken-1 border-solid transform-origin-br translate--7px rotate--45)`}
						/>
						{/* diagonal line */}
						<div className="layer-components:(absolute left-9px top--3px h-27px w-0.5px bg-main-heavy transform-origin-cc rotate--45)" />
					</div>
					{/* bottom right corner */}
					<div className="layer-components:(flex-1 border-0 bg-main-wash bg-darken-1 border-main-heavy border-solid) layer-variants:(border-r border-b)" />
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
