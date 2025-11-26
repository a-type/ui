import { Calendar, CalendarDays, useCalendarContext } from 'calendar-blocks';
import clsx from 'clsx';
import { ReactNode, useCallback, useState } from 'react';
import { withClassName } from '../../hooks.js';
import { PaletteName } from '../../uno/index.js';
import { Icon } from '../icon/Icon.js';
import {
	CalendarDay,
	CalendarGrid,
	DayLabels,
	MonthButton,
	MonthLabel,
} from './Calendar.js';

const RangeLayout = withClassName(
	'div',
	'grid [grid-template-areas:"prevMonth_leftMonth_nextMonth""leftGrid_leftGrid_leftGrid"] [grid-template-columns:auto_1fr_auto]',
	'[grid-template-rows:auto_1fr] gap-2',
	'sm:grid-areas-[prevMonth_leftMonth_rightMonth_nextMonth]-[leftGrid_leftGrid_rightGrid_rightGrid] sm:[grid-template-columns:auto_1fr_1fr_auto]',
);

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
				className="[grid-area:prevMonth]"
				onClick={() =>
					setDisplayInfo({
						month: month - 1,
						year: year,
					})
				}
			>
				<Icon name="arrowLeft" />
			</MonthButton>
			<MonthLabel className="[grid-area:leftMonth]">{monthLabel}</MonthLabel>
			<MonthLabel className="[grid-area:rightMonth] !hidden !sm:block">
				{nextMonthLabel}
			</MonthLabel>
			<MonthButton
				emphasis="ghost"
				className="[grid-area:nextMonth]"
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
	color,
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
			/**
			 * Important UX consideration:
			 *
			 * since we are displaying 2 months at once, we don't
			 * always want to change our view if the user's cursor
			 * date moves from one month to another. Specifically,
			 * if they move from the first visible month to the
			 * second visible month, we don't need to change the view,
			 * since they are still within the visible range.
			 * So, we write logic to ignore that case!
			 */
			if (newMonth === month + 1 && newYear === year) {
				return; // ignore movement from the first to the second frame
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
			className={clsx(
				'flex justify-center',
				color && `palette-${color}`,
				className,
			)}
			{...rest}
		>
			<RangeLayout>{children}</RangeLayout>
		</Calendar>
	);
}

export interface DateRangePickerProps {
	value: { start: Date | null; end: Date | null };
	onChange: (value: { start: Date | null; end: Date | null }) => void;
	className?: string;
	color?: PaletteName;
}

function DateRangePickerBase(props: DateRangePickerProps) {
	return (
		<DateRangePickerRoot {...props}>
			<DateRangePickerMonthControls />
			<CalendarGrid className="[grid-area:leftGrid]">
				{(value) => <CalendarDay value={value} key={value.key} />}
			</CalendarGrid>
			<CalendarGrid
				className="[grid-area:rightGrid] !hidden !sm:grid"
				monthOffset={1}
			>
				{(value) => <CalendarDay value={value} key={value.key} />}
			</CalendarGrid>
		</DateRangePickerRoot>
	);
}

export const DateRangePicker = Object.assign(DateRangePickerBase, {
	Root: DateRangePickerRoot,
	RangeLayout,
	DayLabels,
	CalendarDay,
	Calendar,
	CalendarGrid,
	CalendarDays,
	MonthControls: DateRangePickerMonthControls,
	MonthButton,
	MonthLabel,
});
