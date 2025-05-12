import { ToggleGroupSingleProps } from '@radix-ui/react-toggle-group';
import { setColorMode, useColorMode } from '../../colorMode.js';
import { Icon } from '../icon/Icon.js';
import { ToggleGroup } from '../toggleGroup/toggleGroup.js';

export interface ColorModeToggleProps
	extends Omit<ToggleGroupSingleProps, 'type'> {}

export function ColorModeToggle({
	value: userValue,
	onValueChange: userOnValueChange,
	className,
	...rest
}: ColorModeToggleProps) {
	const colorMode = useColorMode();
	const value = userValue ?? colorMode;
	const onValueChange = (value: string) => {
		if (userOnValueChange) {
			userOnValueChange(value);
		} else {
			setColorMode(value as 'light' | 'dark' | 'system');
		}
	};

	return (
		<ToggleGroup
			value={value}
			onValueChange={onValueChange}
			type="single"
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
