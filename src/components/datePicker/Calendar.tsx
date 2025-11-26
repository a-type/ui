import {
	CalendarDay as BaseCalendarDay,
	CalendarDays,
	CalendarDaysProps,
} from 'calendar-blocks';
import { withClassName } from '../../hooks.js';
import { Button } from '../button/index.js';

export const MonthRow = withClassName(
	'div',
	'flex flex-row justify-between items-center w-full',
);

export const MonthLabel = withClassName(
	'span',
	'text-sm font-bold min-w-0 overflow-hidden text-center text-ellipsis',
	'self-center',
);

export const MonthButton = withClassName(Button, 'self-center');

export const CalendarGridRoot = withClassName(
	'div',
	'grid grid-cols-[repeat(7,var(--day-size,32px))] [grid-auto-rows:var(--day-size,32px)]',
	'height-[calc(var(--day-size,32px)*7)] rounded overflow-hidden p-2',
);

export const DayLabel = withClassName(
	'div',
	'flex items-center justify-center text-sm color-gray-dark',
);

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
	...props
}: CalendarDaysProps & { className?: string }) {
	return (
		<CalendarGridRoot className={className}>
			<DayLabels />
			<CalendarDays {...props} />
		</CalendarGridRoot>
	);
}

export const CalendarDay = withClassName(
	BaseCalendarDay,
	'border border-solid border-transparent bg-white mr--1px mb--1px relative color-black',
	'flex items-center justify-center transition cursor-pointer',
	'[&[data-highlighted]]:(z-1 ring-2 ring-accent)',
	'hover:(z-1 ring-2 ring-accent)',
	'active:(bg-main-light rounded)',
	'[&[data-selected]]:(bg-main z-2 rounded)',
	'[&[data-in-range]]:(bg-main-light rounded-none z-1)',
	'[&[data-range-start]]:(bg-main rounded-l rounded-r-none z-1)',
	'[&[data-range-end]]:(bg-main rounded-r rounded-l-none z-1)',
	'disabled:(opacity-50 cursor-default)',
	// today dot
	"[&[data-today]]:before:(content-[''] absolute left-[1px] top-[1px] w-[6px] h-[6px] rounded-lg bg-attention border-1 border-solid border-black)",
	// calendar edges
	'[&[data-top-edge]]:(border-t-gray)',
	'[&[data-bottom-edge]]:(border-b-gray)',
	'[&[data-first-column]]:(border-l-gray)',
	'[&[data-last-column]]:(border-r-gray)',
	'[&[data-day-first]]:(border-l-gray rounded-tl)',
	'[&[data-day-last]]:(border-r-gray rounded-br)',
	'[&[data-first-column][data-bottom-edge]]:rounded-bl',
	'[&[data-last-column][data-bottom-edge]]:rounded-br',
	'[&[data-first-column][data-top-edge]]:rounded-tl',
	'[&[data-last-column][data-top-edge]]:rounded-tr',
	'[&[data-different-month]]:[visibility:hidden]',
);
