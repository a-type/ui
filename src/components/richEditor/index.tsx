import clsx from 'clsx';

export const tipTapClassName = clsx(
	'layer-components:leading-relaxed layer-components:(w-full)',
	'layer-components:[&_.ProseMirror:focus]:shadow-focus layer-components:[&_.ProseMirror:focus]:(outline-none)',
	'layer-components:[&_h1,h2,h3,p]:mt-0',
	'layer-components:[&_h1]:font-semibold layer-components:[&_h1]:(mb-md text-primary)',
	'layer-components:[&_h1]:[&:not(:first-child)]:mt-xl',
	'layer-components:[&_h2]:font-bold layer-components:[&_h2]:(color-neutral-heavy color-darken-3 mb-md text-primary)',
	'layer-components:[&_h2]:[&:not(:first-child)]:mt-lg',
	'layer-components:[&_h3]:(font-500 color-neutral-heavy color-darken-2 mb-sm text-secondary)',
	'layer-components:[&_h3]:[&:not(:first-child)]:mt-md',
	'layer-components:[&_h4]:uppercase layer-components:[&_h4]:(color-neutral-heavy color-darken-1 mb-sm text-ambient)',
	'layer-components:[&_h4]:[&:not(:first-child)]:mt-md',
	'layer-components:[&_p]:(mt-0 mb-md)',
	'layer-components:[&_a]:underline',
	'layer-components:[&_blockquote]:border-gray layer-components:[&_blockquote]:(pl-4 ml-md mt-md mb-md border-l-4 border-l-solid)',
	'layer-components:[&_ul]:(pl-6 list-disc mt-md mb-md)',
	'layer-components:[&_ol]:(pl-6 list-decimal mt-md mb-md)',
	'layer-components:[&_li]:(mb-sm)',
	'layer-components:[&_mark]:(bg-main-wash bg-darken-2)',
	'layer-components:[&_strong]:font-semibold',
	'layer-components:[&_em]:(italic)',
	'layer-components:[&_hr]:border-gray layer-components:[&_hr]:(my-lg)',
	'layer-components:[&_a]:(underline)',
	'layer-components:[&_a:hover]:(underline)',
	'layer-components:[&_a:focus]:shadow-focus layer-components:[&_a:focus]:(outline-none)',
	'layer-components:[&_a:focus-visible]:ring-4 layer-components:[&_a:focus-visible]:ring-gray layer-components:[&_a:focus-visible]:(outline-none ring-inset)',
	'layer-components:[&_.ProseMirror]:shadow-sm-inset layer-components:[&_.ProseMirror]:(border-1 px-4 py-2 bg-neutral-paper border-neutral-heavy rd-[20px] border-solid)',
);

export const tipTapReadonlyClassName = clsx(
	'[&_.ProseMirror]:(shadow-none bg-transparent border-none)',
	'[&_.ProseMirror:focus]:(outline-none shadow-none bg-transparent)',
);
