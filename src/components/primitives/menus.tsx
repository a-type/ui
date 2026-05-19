import clsx from 'clsx';

export const popupClassName = clsx(
	'layer-primitives:(max-w-90vw min-w-120px transition shadow-lg bg-neutral-paper b-neutral-ink b rd-md)',
	'layer-primitives:transform-origin-[var(--transform-origin)]',
	'layer-primitives:(max-h-[--available-height] max-w-[--available-width])',
	'layer-primitives:focus:outline-none',
	'layer-primitives:focus-visible:(ring-main-ink/50 ring-[2px])',

	'will-change-transform transform-origin-[--transform-origin]',
	'important:motion-reduce:transition-none',
	'layer-primitives:data-[starting-style]:data-[side=bottom]:(opacity-0 translate-y-4px)',
	'layer-primitives:data-[ending-style]:data-[side=bottom]:(opacity-0 translate-y-4px)',
	'layer-primitives:data-[starting-style]:data-[side=top]:(opacity-0 translate-y--4px)',
	'layer-primitives:data-[ending-style]:data-[side=top]:(opacity-0 translate-y-0)',
	'layer-primitives:data-[starting-style]:data-[side=right]:(opacity-0 translate-x-4px)',
	'layer-primitives:data-[ending-style]:data-[side=right]:(opacity-0 translate-x-0)',
	'layer-primitives:data-[starting-style]:data-[side=left]:(opacity-0 translate-x--4px)',
	'layer-primitives:data-[ending-style]:data-[side=left]:(opacity-0 translate-x-0)',
);

export const itemListClassName = clsx(
	'layer-primitives:(max-h-full min-h-0 overflow-x-clip rd-inherit overflow-y-auto overflow-unstable)',
);

export const itemClassName = clsx(
	'layer-primitives:min-h-touch-large layer-primitives:(relative flex cursor-pointer select-none items-center pl-8 pr-4 text-left leading-4 color-main-ink py-sm text-secondary)',
	'layer-primitives:[&[data-disabled]]:(pointer-events-none color-neutral-heavy bg-neutral-paper)',

	'layer-primitives:hover:(color-neutral-ink bg-main-light)',
	'layer-primitives:data-[highlighted]:(color-neutral-ink bg-main-light)',

	'layer-primitives:focus:outline-none',
	'layer-primitives:focus-visible:(color-neutral-ink bg-main-light)',
);

export const arrowClassName = clsx(
	'layer-primitives:(arrow)',
	'layer-primitives:data-[closed]:(opacity-0 scale-0)',
	'layer-primitives:data-[open]:(opacity-100 scale-100)',
);

export const separatorClassName = clsx(
	'layer-primitives:(m-5px h-1px bg-neutral)',
);
