import {
	CalendarDay as BaseCalendarDay,
	CalendarDays,
	CalendarDaysProps,
} from 'calendar-blocks';
import React from 'react';
import { withClassName } from '../../hooks/withClassName.js';
import { Button } from '../button/index.js';
import styles from './Calendar.module.css';

export const MonthRow = withClassName('div', styles.monthRow);

export const MonthLabel = withClassName('span', styles.monthLabel);

export const MonthButton = withClassName(Button, styles.monthButton);

export const CalendarGridRoot = withClassName('div', styles.calendarGridRoot);

export const DayLabel = withClassName('div', styles.dayLabel);

export const DayLabels = () => (
	<>
		<DayLabel>S</DayLabel>
		<DayLabel>M</DayLabel>
		<DayLabel>T</DayLabel>
		<DayLabel>W</DayLabel>
		<DayLabel>T</DayLabel>
		<DayLabel>F</DayLabel>
		<DayLabel>S</DayLabel>
	</>
);

export function CalendarGrid({
	className,
	style,
	...props
}: CalendarDaysProps & { className?: string; style?: React.CSSProperties }) {
	return (
		<CalendarGridRoot className={className} style={style}>
			<DayLabels />
			<CalendarDays {...props} />
		</CalendarGridRoot>
	);
}

export const CalendarDay = withClassName(BaseCalendarDay, styles.calendarDay);
