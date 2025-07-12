import type { Meta, StoryObj } from '@storybook/react';
import { useMemo, useState } from 'react';
import { Camera } from './Camera.js';

const meta = {
	title: 'Components/Camera',
	component: Camera,
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
	args: {},
} satisfies Meta<typeof Camera>;

export default meta;

type Story = StoryObj<typeof Camera>;

export const Default: Story = {
	render() {
		return <CameraDemo />;
	},
};

export const BackCamera: Story = {
	render() {
		return <CameraDemo facingMode="environment" />;
	},
};

function CameraDemo({ facingMode }: { facingMode?: 'user' | 'environment' }) {
	const [latest, setLatest] = useState<File | undefined>();
	const dataUri = useMemo(
		() => (latest ? URL.createObjectURL(latest) : undefined),
		[latest],
	);

	return (
		<div>
			<Camera
				facingMode={facingMode}
				onCapture={setLatest}
				className="w-64 h-64"
			/>
			{latest && <img src={dataUri} className="w-full" />}
		</div>
	);
}
