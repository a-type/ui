import clsx from 'clsx';

export const tipTapClassName = clsx(
	'layer-components:(w-full leading-relaxed)',
	'layer-components:[&_.ProseMirror:focus]:shadow-focus layer-components:[&_.ProseMirror:focus]:(outline-none)',
	'layer-components:[&_h1,h2,h3,p]:mt-0',
	'layer-components:[&_h1]:(mb-md text-2xl font-semibold)',
	'layer-components:[&_h1]:[&:not(:first-child)]:mt-xl',
	'layer-components:[&_h2]:(mb-md text-lg font-bold color-gray-dark color-darken-3)',
	'layer-components:[&_h2]:[&:not(:first-child)]:mt-lg',
	'layer-components:[&_h3]:(mb-sm text-md font-500 color-gray-dark color-darken-2)',
	'layer-components:[&_h3]:[&:not(:first-child)]:mt-md',
	'layer-components:[&_h4]:(mb-sm text-xs uppercase color-gray-dark color-darken-1)',
	'layer-components:[&_h4]:[&:not(:first-child)]:mt-md',
	'layer-components:[&_p]:(mb-md mt-0)',
	'layer-components:[&_a]:underline',
	'layer-components:[&_blockquote]:(mb-md ml-md mt-md border-l-4 border-l-solid pl-4 border-gray)',
	'layer-components:[&_ul]:(mb-md mt-md list-disc pl-6)',
	'layer-components:[&_ol]:(mb-md mt-md list-decimal pl-6)',
	'layer-components:[&_li]:(mb-sm)',
	'layer-components:[&_mark]:(bg-main-wash bg-darken-2)',
	'layer-components:[&_strong]:(font-semibold)',
	'layer-components:[&_em]:(italic)',
	'layer-components:[&_hr]:(my-lg border-gray)',
	'layer-components:[&_a]:(underline)',
	'layer-components:[&_a:hover]:(underline)',
	'layer-components:[&_a:focus]:shadow-focus layer-components:[&_a:focus]:(outline-none)',
	'layer-components:[&_a:focus-visible]:(outline-none ring-4 ring-inset ring-gray)',
	'layer-components:[&_.ProseMirror]:shadow-sm-inset layer-components:[&_.ProseMirror]:(border-1 rounded-[20px] border-solid px-4 py-2 bg-white border-gray-dark)',
);

export const tipTapReadonlyClassName = clsx(
	'[&_.ProseMirror]:(border-none shadow-none bg-transparent)',
	'[&_.ProseMirror:focus]:(shadow-none outline-none bg-transparent)',
);
