import { Switch as BaseSwitch, SwitchRootProps } from '@base-ui/react/switch';
import { withClassName } from '../../hooks/withClassName.js';

const SwitchRoot = withClassName(
	BaseSwitch.Root,
	'layer-components:unset layer-components:(relative h-25px w-42px flex flex-shrink-0 cursor-pointer appearance-none p-3px shadow-inset transition-all shadow-sm bg-neutral-light b-control b rd-lg)',
	'layer-components:data-[checked]:bg-main',
	'layer-components:hover:[&:not(:disabled)]:(bg-lighten-2 ring-bg ring-[2px])',
	'layer-components:active:[&:not(:disabled)]:(bg-darken-1 ring-[4px])',
	'layer-components:focus:outline-none',
	'layer-components:focus-visible:(ring-neutral-ink ring-[2px] ring-offset)',
);

const SwitchThumb = withClassName(
	BaseSwitch.Thumb,
	'layer-components:(block aspect-1 h-full transition-transform will-change-transform shadow-sm bg-neutral-paper b-control b rd-lg)',
	'layer-components:data-[checked]:(translate-x-1rem)',
	'layer-components:data-[checked]:before:text-main-ink layer-components:data-[checked]:before:(absolute left-0 top-0 h-full w-full flex items-center justify-center content-["✓"] text-ambient)',
);

export const Switch = Object.assign(
	function Switch({
		ref,
		...props
	}: SwitchRootProps & {
		ref?: React.Ref<HTMLButtonElement>;
	}) {
		return (
			<SwitchRoot {...props} ref={ref}>
				<SwitchThumb />
			</SwitchRoot>
		);
	},
	{
		Root: SwitchRoot,
		Thumb: SwitchThumb,
	},
);
