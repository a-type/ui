import type { Meta, StoryObj } from '@storybook/react';
import {
	CameraDeviceSelector,
	CameraRoot,
	CameraShutterButton,
} from './Camera.js';
import { useEffect, useMemo, useState } from 'react';

const meta = {
	title: 'Camera',
	argTypes: {},
	parameters: {
		controls: { expanded: true },
	},
	args: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render() {
		return <CameraDemo />;
	},
};

function CameraDemo() {
	const [latest, setLatest] = useState<File | undefined>();
	const dataUri = useMemo(
		() => (latest ? URL.createObjectURL(latest) : undefined),
		[latest],
	);

	return (
		<div>
			<CameraRoot onCapture={setLatest} className="w-64 h-64">
				<CameraShutterButton />
				<CameraDeviceSelector />
			</CameraRoot>
			{latest && <img src={dataUri} className="w-full" />}
		</div>
	);
}
