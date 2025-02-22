import clsx from 'clsx';

export const tipTapClassName = clsx(
	'layer-components:(w-full rounded-lg)',
	'layer-components:[&_.ProseMirror:focus]:(outline-none shadow-focus)',
	'layer-components:[&_.ProseMirror_h1,h2,h3,p]:mt-0',
	'layer-components:[&_.ProseMirror_h1]:(text-xl font-medium)',
	'layer-components:[&_.ProseMirror_h2]:(text-lg font-medium mt-4 mb-2)',
	'layer-components:[&_.ProseMirror_h3]:(text-md font-extrabold)',
	'layer-components:[&_.ProseMirror_a]:underline',
	'layer-components:[&_.ProseMirror]:(bg-white rounded-[20px] px-4 py-2 shadow-sm-inset border-gray-5 border-solid border-1)',
);

export const tipTapReadonlyClassName = clsx(
	'[&_.ProseMirror]:(bg-transparent border-none shadow-none)',
	'[&_.ProseMirror:focus]:(outline-none shadow-none bg-transparent)',
);
