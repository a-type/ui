import { ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';
import { ParticlesProvider } from './ParticleContext.js';
import { Particles } from './particlesState.js';

export function ParticleLayer({
	children,
	noPortal,
}: {
	children: ReactNode;
	noPortal?: boolean;
}) {
	const [particles] = useState(() =>
		typeof window === 'undefined'
			? null
			: new Particles({ initialPoolSize: 100 }),
	);

	if (!particles) {
		return null;
	}

	const canvas = (
		<canvas
			ref={particles.setCanvas}
			className="fixed inset-0 w-full h-full z-[100000] pointer-events-none"
		/>
	);

	return (
		<ParticlesProvider value={particles}>
			{noPortal ? canvas : createPortal(canvas, document.body)}
			{children}
		</ParticlesProvider>
	);
}
