import { Toggle as TogglePrimitive } from '@base-ui/react/toggle';
import {
	ToggleGroup as ToggleGroupPrimitive,
	ToggleGroupProps,
} from '@base-ui/react/toggle-group';
import { withClassName } from '../../hooks/withClassName.js';
import cls from './toggleGroup.module.css';

const ToggleGroupRoot = withClassName(ToggleGroupPrimitive, cls.root);
export const ToggleGroupItem = withClassName(TogglePrimitive, cls.item);

export type { ToggleGroupProps };
export const ToggleGroup = Object.assign(ToggleGroupRoot, {
	Item: ToggleGroupItem,
});
