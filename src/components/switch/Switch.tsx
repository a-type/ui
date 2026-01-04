import { Switch as BaseSwitch, SwitchRootProps } from '@base-ui/react/switch';
import { withClassName } from '../../hooks/withClassName.js';

const SwitchRoot = withClassName(
	BaseSwitch.Root,
	'layer-components:(unset appearance-none flex transition-all cursor-pointer w-42px h-25px p-2px bg-gray-light rounded-lg relative border-default flex-shrink-0 shadow-sm)',
	'layer-components:data-[checked]:bg-main',
	'layer-components:hover:[&:not(:disabled)]:(bg-lighten-2 ring-2 ring-bg)',
	'layer-components:active:[&:not(:disabled)]:(bg-darken-1 ring-4)',
	'layer-components:focus:outline-none',
	'layer-components:focus-visible:(ring-4 ring-accent outline-off)',
);

const SwitchThumb = withClassName(
	BaseSwitch.Thumb,
	'layer-components:(block aspect-1 h-full bg-white rounded-lg border-default transition-transform will-change-transform)',
	'layer-components:data-[checked]:(translate-x-1rem)',
	'layer-components:data-[checked]:before:(content-["✓"] flex items-center justify-center absolute top-0 left-0 w-full h-full text-xs text-main-ink)',
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
