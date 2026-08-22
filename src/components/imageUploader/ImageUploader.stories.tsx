import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { ImageUploader } from './ImageUploader.js';

const meta = {
	title: 'Components/ImageUploader',
	component: ImageUploader,
	argTypes: {
		onChange: { action: 'change' },
		onAltText: { action: 'alt text' },
		maxDimension: { control: { type: 'number' } },
	},
	parameters: {
		controls: { expanded: true },
	},
	args: {
		style: { width: 256, height: 256 },
	},
} satisfies Meta<typeof ImageUploader>;

export default meta;

type Story = StoryObj<typeof ImageUploader>;

export const Default: Story = {
	render: () => <ImageUploaderDemo />,
};

export const WithAltText: Story = {
	render: () => <ImageUploaderAltTextDemo />,
};

export const ReadOnlyAltText: Story = {
	render: () => <ImageUploaderReadOnlyAltTextDemo />,
};

function ImageUploaderDemo() {
	const [value, setValue] = useState<string | null>(null);

	return (
		<ImageUploader
			onChange={(file) =>
				file ? setValue(URL.createObjectURL(file)) : setValue(null)
			}
			value={value}
			style={{ width: 256, height: 256 }}
		/>
	);
}

function ImageUploaderAltTextDemo() {
	const [value, setValue] = useState<string | null>(null);
	const [altText, setAltText] = useState('A scenic mountain landscape');

	return (
		<ImageUploader
			onChange={(file) =>
				file ? setValue(URL.createObjectURL(file)) : setValue(null)
			}
			onAltText={setAltText}
			altText={altText}
			value={value}
			style={{ width: 256, height: 256 }}
		/>
	);
}

function ImageUploaderReadOnlyAltTextDemo() {
	const [value, setValue] = useState<string | null>(null);

	return (
		<ImageUploader
			onChange={(file) =>
				file ? setValue(URL.createObjectURL(file)) : setValue(null)
			}
			altText="Read-only alt text"
			value={value}
			style={{ width: 256, height: 256 }}
		/>
	);
}
