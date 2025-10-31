import { Root, SwitchProps, Thumb } from '@radix-ui/react-switch';
import { withClassName } from '../../hooks/withClassName.js';

const SwitchRoot = withClassName(
	Root,
	'layer-components:(unset transition-all cursor-pointer w-42px h-25px bg-white rounded-lg relative border-default flex-shrink-0 shadow-sm)',
	'layer-components:[&[data-state=checked]]:bg-main',
	'layer-components:hover:[&:not(:disabled)]:(bg-lighten-2 ring-2 ring-bg)',
	'layer-components:active:[&:not(:disabled)]:(bg-darken-1 ring-4)',
	'layer-components:focus:outline-none',
	'layer-components:focus-visible:(ring-4 ring-accent outline-off)',
);

const SwitchThumb = withClassName(
	Thumb,
	'layer-components:(block w-21px h-21px bg-white rounded-lg border-default transition-transform will-change-transform)',
	'layer-components:[&[data-state=checked]]:translate-x-18px',
);

export const Switch = Object.assign(
	function Switch({
		ref,
		...props
	}: SwitchProps & {
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
