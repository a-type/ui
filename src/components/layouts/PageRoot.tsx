import { withClassName } from '../../hooks/withClassName.js';
import { SlotDiv } from '../utility/SlotDiv.js';
import cls from './PageRoot.module.css';

export const PageRoot = withClassName(SlotDiv, cls.root);
