import { ReactNode, useEffect, useState } from 'react';
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
	const [clientReady, setClientReady] = useState(false);
	useEffect(() => {
		setClientReady(true);
	}, []);

	if (!particles || !clientReady) {
		return null;
	}

	const canvas = (
		<canvas
			ref={particles.setCanvas}
			className="pointer-events-none fixed inset-0 z-[1000000] h-full w-full"
		/>
	);

	const ssr = typeof document === 'undefined';

	return (
		<ParticlesProvider value={particles}>
			{noPortal || ssr ? canvas : createPortal(canvas, document.body)}
			{children}
		</ParticlesProvider>
	);
}
