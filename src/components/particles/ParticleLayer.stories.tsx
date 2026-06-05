import type { Meta, StoryObj } from '@storybook/react-vite';
import { MouseEvent, useRef, useState } from 'react';
import { Button } from '../button/index.js';
import { Checkbox } from '../checkbox/index.js';
import { Icon } from '../icon/index.js';
import { useParticles } from './ParticleContext.js';
import { ParticleLayer } from './ParticleLayer.js';

const meta = {
	title: 'Components/ParticleLayer',
	component: ParticleLayer,
	argTypes: {},
	parameters: {},
} satisfies Meta<typeof ParticleLayer>;

export default meta;

type Story = StoryObj<typeof ParticleLayer>;

export const Default: Story = {
	render() {
		return (
			<div
				style={{
					position: 'relative',
					height: '100vh',
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<ExplodeButton />
			</div>
		);
	},
};

function ExplodeButton() {
	const particles = useParticles();
	if (!particles) throw new Error('Must be used inside ParticleLayer');
	const burst = (ev: MouseEvent) => {
		particles.addParticles(
			particles.elementExplosion({
				element: ev.currentTarget as HTMLElement,
				count: 10,
			}),
		);
	};
	return (
		<Button onClick={burst}>
			<Button.Icon>💥</Button.Icon>
		</Button>
	);
}

export const HiddenTest: Story = {
	render() {
		const [hide, setHide] = useState(false);
		const targetRef = useRef<SVGSVGElement>(null);
		const particles = useParticles();

		return (
			<>
				<div
					style={{
						position: 'relative',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						padding: '2.5rem',
						visibility: hide ? 'hidden' : 'visible',
					}}
				>
					<Icon name="placeholder" ref={targetRef} />
				</div>
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<Button
						onClick={() => {
							particles?.addParticles(
								particles.elementExplosion({
									element: targetRef.current!,
									count: 10,
								}),
							);
						}}
					>
						Burst
					</Button>
					<Checkbox checked={hide} onCheckedChange={(c) => setHide(!!c)} />
					<span>Hide (hidden elements should not show particles)</span>
				</div>
			</>
		);
	},
};
