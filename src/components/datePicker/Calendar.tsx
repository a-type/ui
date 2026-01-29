import {
	CalendarDay as BaseCalendarDay,
	CalendarDays,
	CalendarDaysProps,
} from 'calendar-blocks';
import { withClassName } from '../../hooks.js';
import { Button } from '../button/index.js';

export const MonthRow = withClassName(
	'div',
	'layer-components:(w-full flex flex-row items-center justify-between)',
);

export const MonthLabel = withClassName(
	'span',
	'layer-components:(min-w-0 self-center overflow-hidden text-ellipsis text-center text-sm font-bold)',
);

export const MonthButton = withClassName(Button, 'self-center');

export const CalendarGridRoot = withClassName(
	'div',
	'layer-components:([grid-auto-rows:var(--day-size,32px)] grid grid-cols-[repeat(7,var(--day-size,32px))])',
	'layer-components:height-[calc(var(--day-size,32px)*7)] layer-components:(overflow-hidden rounded p-2)',
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
	'layer-components:(relative mb--1px mr--1px border border-solid color-black bg-white border-transparent)',
	'layer-components:(flex cursor-pointer items-center justify-center transition)',
	'layer-components:data-[highlighted]:(z-1 outline-none ring-2 ring-focus)',
	'layer-components:hover:ouline-none layer-components:hover:(z-1 ring-2 ring-focus)',
	'layer-components:active:(rounded bg-main-light)',
	'layer-components:[&[data-selected]]:(z-2 rounded bg-main)',
	'layer-components:[&[data-in-range]]:(z-1 rounded-none bg-main-light)',
	'layer-components:[&[data-range-start]]:(z-1 rounded-l rounded-r-none bg-main)',
	'layer-components:[&[data-range-end]]:(z-1 rounded-l-none rounded-r bg-main)',
	'layer-components:[&[data-disabled=true]]:(cursor-not-allowed opacity-50)',
	// today dot
	"layer-components:[&[data-today]]:before:(absolute left-[1px] top-[1px] h-[6px] w-[6px] border-1 rounded-lg border-solid content-[''] bg-attention border-black)",
	// calendar edges
	'layer-components:[&[data-top-edge]]:(border-t-gray)',
	'layer-components:[&[data-bottom-edge]]:(border-b-gray)',
	'layer-components:[&[data-first-column]]:(border-l-gray)',
	'layer-components:[&[data-last-column]]:(border-r-gray)',
	'layer-components:[&[data-day-first]]:(rounded-tl border-l-gray)',
	'layer-components:[&[data-day-last]]:(rounded-br border-r-gray)',
	'layer-components:[&[data-first-column][data-bottom-edge]]:rounded-bl',
	'layer-components:[&[data-last-column][data-bottom-edge]]:rounded-br',
	'layer-components:[&[data-first-column][data-top-edge]]:rounded-tl',
	'layer-components:[&[data-last-column][data-top-edge]]:rounded-tr',
	'layer-components:[&[data-different-month]]:[visibility:hidden]',
);
