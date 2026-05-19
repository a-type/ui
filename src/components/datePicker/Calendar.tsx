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
	'layer-components:(min-w-0 self-center overflow-hidden text-ellipsis text-center text-ambient fw-[bold])',
);

export const MonthButton = withClassName(Button, 'self-center');

export const CalendarGridRoot = withClassName(
	'div',
	'layer-components:([grid-auto-rows:var(--day-size,32px)] grid grid-cols-[repeat(7,var(--day-size,32px))])',
	'layer-components:(overflow-hidden p-2 rd-sm)',
);

export const DayLabel = withClassName(
	'div',
	'layer-components:(flex items-center justify-center color-neutral-heavy text-ambient)',
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
	'layer-components:(relative mb--1px mr--1px color-neutral-ink bg-neutral-paper border-transparent border border-solid)',
	'layer-components:(flex cursor-pointer items-center justify-center transition-all)',
	'layer-components:data-[highlighted]:(z-1 outline-none ring-main-heavy ring-[2px])',
	'layer-components:hover:(z-100 outline-none ring-main-heavy ring-[2px])',
	'layer-components:active:(bg-main-light rd-sm)',
	'layer-components:[&[data-selected]]:(z-2 bg-main rd-sm)',
	'layer-components:[&[data-in-range]]:(z-1 rd-0 bg-main-light)',
	'layer-components:[&[data-range-start]]:(z-1 bg-main rd-r-none rd-bl-sm rd-tl-sm)',
	'layer-components:[&[data-range-end]]:(z-1 bg-main rd-l-none rd-br-sm rd-tr-sm)',
	'layer-components:[&[data-disabled=true]]:(cursor-not-allowed opacity-50)',
	// today dot
	"layer-components:[&[data-today]]:before:border-black layer-components:[&[data-today]]:before:(absolute left-[1px] top-[1px] h-[6px] w-[6px] border-1 content-[''] bg-_attention rd-lg border-solid)",
	// calendar edges
	'layer-components:[&[data-top-edge]]:border-t-neutral',
	'layer-components:[&[data-bottom-edge]]:border-b-neutral',
	'layer-components:[&[data-first-column]]:(border-l-neutral)',
	'layer-components:[&[data-last-column]]:border-r-neutral',
	'layer-components:[&[data-day-first]]:(border-l-neutral rd-tl-sm)',
	'layer-components:[&[data-day-last]]:(border-r-neutral rd-br-sm)',
	'layer-components:[&[data-first-column][data-bottom-edge]]:rd-bl-sm',
	'layer-components:[&[data-last-column][data-bottom-edge]]:rd-br-sm',
	'layer-components:[&[data-first-column][data-top-edge]]:rd-tl-sm',
	'layer-components:[&[data-last-column][data-top-edge]]:rd-tr-sm',
	'layer-components:[&[data-different-month]]:[visibility:hidden]',
);
