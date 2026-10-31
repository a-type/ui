import type { Meta, StoryObj } from '@storybook/react-vite';
import { useMemo, useState } from 'react';
import { Camera } from './Camera.js';

const meta = {
	title: 'Components/Camera',
	component: Camera,
	argTypes: {},
	parameters: {
		docs: {
			description: {
				component:
					'`Camera` displays a live camera and sends a captured `File` to `onCapture`. ' +
					'Use `facingMode="environment"` to request a rear-facing camera.\n\n' +
					'Camera access requires browser permission and a secure context. `format` defaults to `image/png`, ' +
					'but photos taken with ImageCapture are not re-encoded to that format. ' +
					'Use `Camera.Root` and its controls for a custom layout.',
			},
		},
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
				style={{ width: 256, height: 256 }}
			/>
			{latest && <img src={dataUri} style={{ width: '100%' }} />}
		</div>
	);
}
