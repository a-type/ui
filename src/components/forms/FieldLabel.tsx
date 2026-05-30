import { withClassName } from '../../hooks.js';
import cls from './FieldLabel.module.css';

export const FieldLabel = withClassName('label', cls.fieldLabel);

export const HorizontalFieldLabel = withClassName(
	'label',
	cls.horizontalFieldLabel,
);
