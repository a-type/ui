import { Calendar, CalendarDays, useCalendarContext } from 'calendar-blocks';
import clsx from 'clsx';
import { CSSProperties, ReactNode, useCallback, useState } from 'react';
import { Icon } from '../icon/Icon.js';
import {
	CalendarDay,
	CalendarGrid,
	DayLabels,
	MonthButton,
	MonthLabel,
} from './Calendar.js';
import styles from './dateRangePicker.module.css';

function DateRangePickerMonthControls() {
	const { setDisplayInfo, month, year } = useCalendarContext();
	const monthLabel = new Date(year, month).toLocaleDateString('en-US', {
		month: 'long',
		year: 'numeric',
	});
	const nextMonth = new Date(year, month + 1);
	const nextMonthLabel = nextMonth.toLocaleDateString('en-US', {
		month: 'long',
		year: 'numeric',
	});
	return (
		<>
			<MonthButton
				emphasis="ghost"
				style={{ gridArea: 'prevMonth' }}
				onClick={() =>
					setDisplayInfo({
						month: month - 1,
						year: year,
					})
				}
			>
				<Icon name="arrowLeft" />
			</MonthButton>
			<MonthLabel style={{ gridArea: 'leftMonth' }}>{monthLabel}</MonthLabel>
			<MonthLabel style={{ gridArea: 'rightMonth' }} className={styles.smOnly}>
				{nextMonthLabel}
			</MonthLabel>
			<MonthButton
				emphasis="ghost"
				style={{ gridArea: 'nextMonth' }}
				onClick={() =>
					setDisplayInfo({
						month: month + 1,
						year: year,
					})
				}
			>
				<Icon name="arrowRight" />
			</MonthButton>
		</>
	);
}

function DateRangePickerRoot({
	children,
	value,
	onChange,
	className,
	...rest
}: DateRangePickerProps & {
	children?: ReactNode;
}) {
	const [{ month, year }, setDisplay] = useState(() => ({
		month: new Date().getMonth(),
		year: new Date().getFullYear(),
	}));

	const onDisplayChange = useCallback(
		({ month: newMonth, year: newYear }: { month: number; year: number }) => {
			// Ignore movement from the first to the second visible month
			if (newMonth === month + 1 && newYear === year) {
				return;
			}
			setDisplay({
				month: newMonth,
				year: newYear,
			});
		},
		[month, year],
	);

	return (
		<Calendar
			displayMonth={month}
			displayYear={year}
			rangeValue={value}
			onRangeChange={(range) => onChange(range)}
			onDisplayChange={onDisplayChange}
			className={clsx(styles.root, className)}
			{...rest}
		>
			<div className={styles.rangeLayout}>{children}</div>
		</Calendar>
	);
}

export interface DateRangePickerProps {
	value: { start: Date | null; end: Date | null };
	onChange: (value: { start: Date | null; end: Date | null }) => void;
	className?: string;
	style?: CSSProperties;
}

function DateRangePickerBase(props: DateRangePickerProps) {
	return (
		<DateRangePickerRoot {...props}>
			<DateRangePickerMonthControls />
			<CalendarGrid style={{ gridArea: 'leftGrid' }}>
				{(value) => <CalendarDay value={value} key={value.key} />}
			</CalendarGrid>
			<CalendarGrid
				style={{ gridArea: 'rightGrid' }}
				className={styles.smOnlyGrid}
				monthOffset={1}
			>
				{(value) => <CalendarDay value={value} key={value.key} />}
			</CalendarGrid>
		</DateRangePickerRoot>
	);
}

export const DateRangePicker = Object.assign(DateRangePickerBase, {
	Root: DateRangePickerRoot,
	RangeLayout: ({ children }: { children?: ReactNode }) => (
		<div className={styles.rangeLayout}>{children}</div>
	),
	DayLabels,
	CalendarDay,
	Calendar,
	CalendarGrid,
	CalendarDays,
	MonthControls: DateRangePickerMonthControls,
	MonthButton,
	MonthLabel,
});
