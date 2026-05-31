import { Switch as BaseSwitch, SwitchRootProps } from '@base-ui/react/switch';
import { withClassName } from '../../hooks/withClassName.js';
import cls from './Switch.module.css';

const SwitchRoot = withClassName(BaseSwitch.Root, cls.root);

const SwitchThumb = withClassName(BaseSwitch.Thumb, cls.thumb);

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
