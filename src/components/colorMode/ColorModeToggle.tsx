import { ToggleGroupProps } from '@base-ui/react/toggle-group';
import { setColorMode, useColorMode } from '../../colorMode.js';
import { Icon } from '../icon/Icon.js';
import { ToggleGroup } from '../toggleGroup/toggleGroup.js';

export interface ColorModeToggleProps
	extends Omit<ToggleGroupProps, 'type' | 'onValueChange' | 'value'> {
	value?: 'light' | 'dark' | 'system';
	onValueChange?: (value: 'light' | 'dark' | 'system', event: any) => void;
}

export function ColorModeToggle({
	value: userValue,
	onValueChange: userOnValueChange,
	className,
	...rest
}: ColorModeToggleProps) {
	const colorMode = useColorMode();
	const value = userValue ?? colorMode;

	return (
		<ToggleGroup
			value={[value]}
			onValueChange={([value], ev) => {
				if (userOnValueChange) {
					userOnValueChange(value, ev);
				} else {
					setColorMode(value as 'light' | 'dark' | 'system');
				}
			}}
			className={className}
			{...rest}
		>
			<ToggleGroup.Item value="system" aria-label="Device">
				<Icon name="phone" />
			</ToggleGroup.Item>
			<ToggleGroup.Item value="light" aria-label="Light">
				<Icon name="sun" />
			</ToggleGroup.Item>
			<ToggleGroup.Item value="dark" aria-label="Dark">
				<Icon name="moon" />
			</ToggleGroup.Item>
		</ToggleGroup>
	);
}
