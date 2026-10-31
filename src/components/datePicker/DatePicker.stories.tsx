import type { Meta, StoryObj } from '@storybook/react-vite';
import { CalendarDayValue } from 'calendar-blocks';
import { useEffect, useState } from 'react';
import { Spinner } from '../spinner/Spinner.js';
import { DatePicker } from './DatePicker.js';
import { DateRangePicker } from './DateRangePicker.js';

/**
 * `DatePicker` is controlled with a `Date | null` value and `onChange`. `DateRangePicker` uses the same pattern with `{ start, end }`, where each date may be null.
 *
 * Both start by displaying the current month. Use their `Root` and calendar parts to customize the layout.
 */
const meta = {
	title: 'Components/DatePicker',
	component: DatePicker,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
	render() {
		const [value, setValue] = useState<Date | null>(null);
		return <DatePicker value={value} onChange={setValue} />;
	},
};

export const Range: Story = {
	render() {
		const [value, setValue] = useState<{
			start: Date | null;
			end: Date | null;
		}>({ start: null, end: null });
		return <DateRangePicker value={value} onChange={setValue} />;
	},
};

export const CustomComposition: Story = {
	render() {
		const [value, setValue] = useState<Date | null>(null);

		return (
			<DatePicker.Root value={value} onChange={setValue}>
				<DatePicker.MonthControls />
				<DatePicker.CalendarGrid>
					{(value) => <FakeLoadingDay value={value} key={value.key} />}
				</DatePicker.CalendarGrid>
			</DatePicker.Root>
		);
	},
};

function FakeLoadingDay({ value }: { value: CalendarDayValue }) {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const timeout = setTimeout(
			() => setLoading(false),
			Math.random() * 2000 + 500,
		);
		return () => clearTimeout(timeout);
	}, []);
	const [disabled] = useState(() => Math.random() < 0.3);

	return (
		<DatePicker.CalendarDay value={value} disabled={loading || disabled}>
			{loading ? <Spinner size={10} /> : value.date.getDate()}
		</DatePicker.CalendarDay>
	);
}
