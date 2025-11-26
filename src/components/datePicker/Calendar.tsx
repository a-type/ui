import {
	CalendarDay as BaseCalendarDay,
	CalendarDays,
	CalendarDaysProps,
} from 'calendar-blocks';
import { withClassName } from '../../hooks.js';
import { Button } from '../button/index.js';

export const MonthRow = withClassName(
	'div',
	'layer-components:(flex flex-row justify-between items-center w-full)',
);

export const MonthLabel = withClassName(
	'span',
	'layer-components:(text-sm font-bold min-w-0 overflow-hidden text-center text-ellipsis self-center)',
);

export const MonthButton = withClassName(Button, 'self-center');

export const CalendarGridRoot = withClassName(
	'div',
	'layer-components:(grid grid-cols-[repeat(7,var(--day-size,32px))] [grid-auto-rows:var(--day-size,32px)])',
	'layer-components:(height-[calc(var(--day-size,32px)*7)] rounded overflow-hidden p-2)',
);

export const DayLabel = withClassName(
	'div',
	'layer-components:(flex items-center justify-center text-sm color-gray-dark)',
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
	'layer-components:(border border-solid border-transparent bg-white mr--1px mb--1px relative color-black)',
	'layer-components:(flex items-center justify-center transition cursor-pointer)',
	'layer-components:[&[data-highlighted]]:(z-1 ring-2 ring-accent)',
	'layer-components:hover:(z-1 ring-2 ring-accent)',
	'layer-components:active:(bg-main-light rounded)',
	'layer-components:[&[data-selected]]:(bg-main z-2 rounded)',
	'layer-components:[&[data-in-range]]:(bg-main-light rounded-none z-1)',
	'layer-components:[&[data-range-start]]:(bg-main rounded-l rounded-r-none z-1)',
	'layer-components:[&[data-range-end]]:(bg-main rounded-r rounded-l-none z-1)',
	'layer-components:[&[data-disabled=true]]:(opacity-50 cursor-not-allowed)',
	// today dot
	"layer-components:[&[data-today]]:before:(content-[''] absolute left-[1px] top-[1px] w-[6px] h-[6px] rounded-lg bg-attention border-1 border-solid border-black)",
	// calendar edges
	'layer-components:[&[data-top-edge]]:(border-t-gray)',
	'layer-components:[&[data-bottom-edge]]:(border-b-gray)',
	'layer-components:[&[data-first-column]]:(border-l-gray)',
	'layer-components:[&[data-last-column]]:(border-r-gray)',
	'layer-components:[&[data-day-first]]:(border-l-gray rounded-tl)',
	'layer-components:[&[data-day-last]]:(border-r-gray rounded-br)',
	'layer-components:[&[data-first-column][data-bottom-edge]]:rounded-bl',
	'layer-components:[&[data-last-column][data-bottom-edge]]:rounded-br',
	'layer-components:[&[data-first-column][data-top-edge]]:rounded-tl',
	'layer-components:[&[data-last-column][data-top-edge]]:rounded-tr',
	'layer-components:[&[data-different-month]]:[visibility:hidden]',
);
