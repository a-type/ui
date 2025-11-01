import clsx from 'clsx';

export const tipTapClassName = clsx(
	'layer-components:(w-full leading-relaxed)',
	'layer-components:[&_.ProseMirror:focus]:(outline-none shadow-focus)',
	'layer-components:[&_h1,h2,h3,p]:mt-0',
	'layer-components:[&_h1]:(text-2xl font-semibold mb-md [&:not:first-child]:mt-xl)',
	'layer-components:[&_h2]:(text-lg font-bold color-gray-dark color-darken-3 mb-md [&:not:first-child]:mt-lg)',
	'layer-components:[&_h3]:(text-md font-500 color-gray-dark color-darken-2 mb-sm [&:not:first-child]:mt-md)',
	'layer-components:[&_h4]:(text-xs color-gray-dark color-darken-1 mb-sm [&:not:first-child]:mt-md uppercase)',
	'layer-components:[&_p]:(mb-md mt-0)',
	'layer-components:[&_a]:underline',
	'layer-components:[&_blockquote]:(border-l-4 border-l-solid border-gray pl-4 mb-md mt-md ml-md)',
	'layer-components:[&_ul]:(list-disc pl-6 mb-md mt-md)',
	'layer-components:[&_ol]:(list-decimal pl-6 mb-md mt-md)',
	'layer-components:[&_li]:(mb-sm)',
	'layer-components:[&_mark]:(bg-main-wash bg-darken-2)',
	'layer-components:[&_strong]:(font-semibold)',
	'layer-components:[&_em]:(italic)',
	'layer-components:[&_hr]:(my-lg border-gray)',
	'layer-components:[&_a]:(underline)',
	'layer-components:[&_a:hover]:(underline)',
	'layer-components:[&_a:focus]:(outline-none shadow-focus)',
	'layer-components:[&_a:focus-visible]:(outline-none ring-inset ring-4 ring-gray)',
	'layer-components:[&_.ProseMirror]:(bg-white rounded-[20px] px-4 py-2 shadow-sm-inset border-gray-dark border-solid border-1)',
);

export const tipTapReadonlyClassName = clsx(
	'[&_.ProseMirror]:(bg-transparent border-none shadow-none)',
	'[&_.ProseMirror:focus]:(outline-none shadow-none bg-transparent)',
);
