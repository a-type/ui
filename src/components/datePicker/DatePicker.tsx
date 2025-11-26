import { Calendar, CalendarDays, useCalendarContext } from 'calendar-blocks';
import { clsx } from 'clsx';
import { ReactNode, useState } from 'react';
import { PaletteName } from '../../uno/index.js';
import { Icon } from '../icon/index.js';
import {
	CalendarDay,
	CalendarGrid,
	DayLabels,
	MonthButton,
	MonthLabel,
	MonthRow,
} from './Calendar.js';

function DatePickerMonthControls({}: {}) {
	const { setDisplayInfo, month, year } = useCalendarContext();
	const monthLabel = new Date(year, month).toLocaleDateString('en-US', {
		month: 'long',
		year: 'numeric',
	});

	return (
		<MonthRow>
			<MonthButton
				emphasis="ghost"
				onClick={() =>
					setDisplayInfo({
						month: month - 1,
						year: year,
					})
				}
			>
				<Icon name="arrowLeft" />
			</MonthButton>
			<MonthLabel>{monthLabel}</MonthLabel>
			<MonthButton
				emphasis="ghost"
				onClick={() =>
					setDisplayInfo({
						month: month + 1,
						year: year,
					})
				}
			>
				<Icon name="arrowRight" />
			</MonthButton>
		</MonthRow>
	);
}

function DatePickerRoot({
	className,
	color,
	value,
	onChange,
	children,
	...rest
}: DatePickerProps & {
	children?: ReactNode;
}) {
	const [{ month, year }, setDisplay] = useState(() => ({
		month: new Date().getMonth(),
		year: new Date().getFullYear(),
	}));

	return (
		<div
			className={clsx(
				color && `palette-${color}`,
				'layer-components:(flex flex-col items-center justify-center w-[calc(var(--day-size,32px)*7)])',
			)}
			{...rest}
		>
			<Calendar
				displayMonth={month}
				displayYear={year}
				value={value}
				onChange={onChange}
				onDisplayChange={setDisplay}
			>
				{children}
			</Calendar>
		</div>
	);
}

export interface DatePickerProps {
	value: Date | null;
	onChange: (date: Date | null) => void;
	className?: string;
	color?: PaletteName;
}

function DatePickerDefault(props: DatePickerProps) {
	return (
		<DatePickerRoot {...props}>
			<DatePickerMonthControls />
			<CalendarGrid>
				{(value) => <CalendarDay value={value} key={value.key} />}
			</CalendarGrid>
		</DatePickerRoot>
	);
}

export const DatePicker = Object.assign(DatePickerDefault, {
	Root: DatePickerRoot,
	Calendar,
	CalendarDay,
	CalendarDays,
	CalendarGrid,
	DayLabels,
	MonthControls: DatePickerMonthControls,
	MonthButton,
	MonthLabel,
	MonthRow,
});
