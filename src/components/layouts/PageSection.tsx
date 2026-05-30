import { withClassName } from '../../hooks/withClassName.js';
import cls from './PageSection.module.css';

export const PageSection = withClassName('div', cls.root);

export const PageSectionGrid = withClassName('div', cls.grid);
