import { Switch as BaseSwitch, SwitchRootProps } from '@base-ui/react/switch';
import { withClassName } from '../../hooks/withClassName.js';

const SwitchRoot = withClassName(
	BaseSwitch.Root,
	'layer-components:(unset relative h-25px w-42px flex flex-shrink-0 cursor-pointer appearance-none border-default rounded-lg p-3px shadow-sm shadow-inset transition-all bg-gray-light)',
	'layer-components:data-[checked]:bg-main',
	'layer-components:hover:[&:not(:disabled)]:(ring-2 bg-lighten-2 ring-bg)',
	'layer-components:active:[&:not(:disabled)]:(ring-4 bg-darken-1)',
	'layer-components:focus:outline-none',
	'layer-components:foc',
);

const SwitchThumb = withClassName(
	BaseSwitch.Thumb,
	'layer-components:(block aspect-1 h-full border-default rounded-lg shadow-sm transition-transform will-change-transform bg-white)',
	'layer-components:data-[checked]:(translate-x-1rem)',
	'layer-components:data-[checked]:before:(absolute left-0 top-0 h-full w-full flex items-center justify-center text-xs text-main-ink content-["✓"])',
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
