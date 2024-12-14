import { Root, SwitchProps, Thumb } from '@radix-ui/react-switch';
import { withClassName } from '../../hooks/withClassName.js';

const SwitchRoot = withClassName(
	Root,
	'unset w-42px h-25px bg-white rounded-full relative transition-color border-default flex-shrink-0 focus-visible:shadow-focus [&[data-state=checked]]:bg-accent',
);

const SwitchThumb = withClassName(
	Thumb,
	'block w-21px h-21px bg-white rounded-full border-default transition-transform will-change-transform [&[data-state=checked]]:translate-x-19px',
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
