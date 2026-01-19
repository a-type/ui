import clsx from 'clsx';

export const popupClassName = clsx(
	'layer-primitives:(max-w-90vw min-w-120px border rounded-md shadow-lg transition bg-white border-black)',
	'layer-primitives:transform-origin-[var(--transform-origin)]',
	'layer-primitives:(max-h-[--available-height] max-w-[--available-width])',
	'layer-primitives:focus-visible:(outline-none ring-2 ring-accent)',

	'transform-origin-[--transform-origin] will-change-transform',
	'important:motion-reduce:transition-none',
	'layer-primitives:data-[starting-style]:data-[side=bottom]:(translate-y-4px opacity-0)',
	'layer-primitives:data-[ending-style]:data-[side=bottom]:(translate-y-4px opacity-0)',
	'layer-primitives:data-[starting-style]:data-[side=top]:(translate-y--4px opacity-0)',
	'layer-primitives:data-[ending-style]:data-[side=top]:(translate-y-0 opacity-0)',
	'layer-primitives:data-[starting-style]:data-[side=right]:(translate-x-4px opacity-0)',
	'layer-primitives:data-[ending-style]:data-[side=right]:(translate-x-0 opacity-0)',
	'layer-primitives:data-[starting-style]:data-[side=left]:(translate-x--4px opacity-0)',
	'layer-primitives:data-[ending-style]:data-[side=left]:(translate-x-0 opacity-0)',
);

export const itemListClassName = clsx(
	'layer-primitives:(max-h-full min-h-0 overflow-x-clip rounded-inherit overflow-y-auto overflow-unstable)',
);

export const itemClassName = clsx(
	'layer-primitives:(relative min-h-touch-large flex cursor-pointer select-none items-center py-sm pl-8 pr-4 text-left text-md leading-4 color-main-ink)',
	'layer-primitives:[&[data-disabled]]:(pointer-events-none color-gray-dark bg-white)',

	'layer-primitives:hover:(color-black bg-main-light)',
	'layer-primitives:data-[highlighted]:(color-black bg-main-light)',

	'layer-primitives:focus:outline-none',
	'layer-primitives:focus-visible:(color-black bg-main-light)',
);

export const arrowClassName = clsx(
	'layer-primitives:(arrow)',
	'layer-primitives:data-[closed]:(scale-0 opacity-0)',
	'layer-primitives:data-[open]:(scale-100 opacity-100)',
);

export const separatorClassName = clsx(
	'layer-primitives:(m-5px h-1px bg-gray)',
);
