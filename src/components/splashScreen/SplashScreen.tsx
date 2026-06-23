import { withClassName } from '../../hooks.js';
import { SlotDiv } from '../utility/SlotDiv.js';
import cls from './SplashScreen.module.css';

export const SplashScreenRoot = withClassName(SlotDiv, cls.root);

export const SplashScreenIcon = withClassName(SlotDiv, cls.icon);

export const SplashScreen = Object.assign(SplashScreenRoot, {
	Icon: SplashScreenIcon,
});
