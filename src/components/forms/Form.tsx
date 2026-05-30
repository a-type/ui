import { Form as FormikForm } from 'formik';
import { withClassName } from '../../hooks/withClassName.js';
import cls from './Form.module.css';

export const Form = withClassName(FormikForm, cls.form);
