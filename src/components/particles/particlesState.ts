export class Particles {
	private canvas: HTMLCanvasElement | null = null;
	private ctx: CanvasRenderingContext2D | null = null;
	private state: 'paused' | 'running' = 'paused';
	private lastFrameTimestamp = 0;
	private disabled = false;

	// an object pool of Particles
	private particles: Particle[];
	private freeParticles: Particle[] = [];

	// when true, the final frame has rendered after all particles
	// are drawn, and we can stop rendering until new particles are added
	// called "latch" because after the last particle frame we wait one
	// more frame before closing it
	private lastDrawLatch = true;

	// keep canvas render size the same as its actual size
	private resizeObserver =
		typeof window === 'undefined'
			? null
			: new ResizeObserver((entries) => {
					for (const entry of entries) {
						const { width, height } = entry.contentRect;
						if (this.canvas) {
							this.canvas.width = width;
							this.canvas.height = height;
						}
					}
			  });

	constructor({ initialPoolSize }: { initialPoolSize: number }) {
		// if prefers-reduced-motion is set, disable particles
		this.disabled =
			typeof window === 'undefined' ||
			window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (this.disabled) {
			initialPoolSize = 0;
		}
		this.particles = new Array(initialPoolSize);
		for (let i = 0; i < initialPoolSize; i++) {
			this.particles[i] = new Particle();
			this.freeParticles.push(this.particles[i]);
		}
	}

	setCanvas = (canvas: HTMLCanvasElement | null) => {
		if (this.disabled) {
			return;
		}

		if (this.canvas) {
			this.resizeObserver?.unobserve(this.canvas);
		}
		this.canvas = canvas;
		this.ctx = canvas ? canvas.getContext('2d') : null;
		if (!canvas) {
			this.pause();
		} else {
			this.resume();
			this.resizeObserver?.observe(canvas);
		}
	};

	private resume = () => {
		if (this.disabled) {
			return;
		}

		this.state = 'running';
		this.lastFrameTimestamp = performance.now();
		requestAnimationFrame(this.draw);
	};

	private pause = () => {
		this.state = 'paused';
	};

	private draw = (timestamp: number) => {
		const skipDrawing =
			this.disabled ||
			this.lastDrawLatch ||
			this.state === 'paused' ||
			!this.ctx ||
			!this.canvas;
		if (!this.ctx || !this.canvas) {
			console.warn('No canvas context');
			this.pause();
		}

		const delta = timestamp - this.lastFrameTimestamp;
		this.lastFrameTimestamp = timestamp;

		if (skipDrawing) {
			return;
		}

		this.ctx!.clearRect(0, 0, this.canvas!.width, this.canvas!.height);

		if (this.particles.length === this.freeParticles.length) {
			// skip drawing until we get particles again
			this.lastDrawLatch = true;
		} else {
			this.renderParticles(this.ctx!, delta);
		}

		requestAnimationFrame(this.draw);
	};

	private renderParticles = (ctx: CanvasRenderingContext2D, delta: number) => {
		let freed = 0;
		for (let i = 0; i < this.particles.length; i++) {
			const particle = this.particles[i];
			if (particle.render(ctx, delta)) {
				particle.dispose();
				this.freeParticles.push(particle);
				freed++;
			}
		}
	};

	addParticles = (spawn: ParticleSpawn) => {
		// wrap in RAF because initializers often use element dimensions
		requestAnimationFrame(() => {
			const wasLatch = this.lastDrawLatch;
			this.lastDrawLatch = false;
			if (this.freeParticles.length < spawn.count) {
				this.extendPool(spawn.count - this.freeParticles.length);
			}
			for (let i = 0; i < spawn.count; i++) {
				const initials = spawn.initializer(i);
				if (!initials) {
					// the particle initializer returned null, so we skip this particle
					continue;
				}
				const particle = this.freeParticles.pop();
				if (!particle) {
					throw new Error('Particle allocation failed');
				}
				particle.allocate(
					initials.x,
					initials.y,
					initials.velocityX,
					initials.velocityY,
					initials.drag,
					initials.lifespan,
					spawn.behavior,
				);
			}
			if (wasLatch) {
				this.resume();
			}
		});
	};

	private extendPool = (size: number) => {
		for (let i = 0; i < size; i++) {
			const particle = new Particle();
			this.particles.push(particle);
			this.freeParticles.push(particle);
		}
	};

	elementExplosion = elementExplosion;
	windowBorderExplosion = windowBorderExplosion;
}

class Particle {
	disposed = true;
	lifetime = 0;
	lifespan = 0;
	x = -1;
	y = -1;
	behavior: ParticleBehavior = nullBehavior;
	velocityX = 0;
	velocityY = 0;
	drag = 0;

	constructor() {}

	allocate = (
		x: number,
		y: number,
		velocityX: number,
		velocityY: number,
		drag: number,
		lifespan: number,
		behavior: ParticleBehavior,
	) => {
		this.disposed = false;
		this.lifetime = 0;
		this.lifespan = lifespan;
		this.x = x;
		this.y = y;
		this.velocityX = velocityX;
		this.velocityY = velocityY;
		this.drag = drag;
		this.behavior = behavior;
	};

	dispose = () => {
		this.disposed = true;
	};

	render = (ctx: CanvasRenderingContext2D, delta: number) => {
		if (this.disposed) {
			return;
		}
		this.lifetime += delta;
		this.x += this.velocityX * delta;
		this.y += this.velocityY * delta;
		this.velocityX *= 1 - this.drag * delta;
		this.velocityY *= 1 - this.drag * delta;
		this.behavior(ctx, this.x, this.y, this.lifetime, this.lifespan);
		return this.lifetime >= this.lifespan;
	};
}

type ParticleBehavior = (
	ctx: CanvasRenderingContext2D,
	x: number,
	y: number,
	lifetime: number,
	lifespan: number,
) => void;
const nullBehavior = () => {};

type ParticleSpawn = {
	count: number;
	behavior: ParticleBehavior;
	initializer: ParticleInitializer;
};
type ParticleInitializer = (index: number) => {
	x: number;
	y: number;
	lifespan: number;
	velocityX: number;
	velocityY: number;
	drag: number;
} | null;

export function createCircleParticles({
	count,
	startRadius = 4,
	endRadius = 0,
	initializer,
	color = YELLOW,
}: {
	count: number;
	startRadius?: number;
	endRadius?: number;
	initializer: ParticleInitializer;
	color?: Color | [Color, Color];
}): ParticleSpawn {
	const colorMixer = Array.isArray(color)
		? colorInterpolate(color)
		: colorInterpolate([color, color]);
	return {
		count,
		behavior: (ctx, x, y, lifetime, lifespan) => {
			const lifetimePercentage = Math.max(0, Math.min(1, lifetime / lifespan));
			const finalColor = colorMixer(lifetimePercentage);
			const radius = Math.max(
				0,
				startRadius + (endRadius - startRadius) * lifetimePercentage,
			);
			ctx.beginPath();
			ctx.fillStyle = colorToString(finalColor);
			ctx.arc(x, y, radius, 0, 2 * Math.PI);
			ctx.fill();
		},
		initializer,
	};
}

function fuzz(value: number, fuzz: number) {
	return value + (Math.random() - 0.5) * fuzz;
}

type BorderName = 'top' | 'right' | 'bottom' | 'left';
export const createElementBorderInitializer = ({
	element,
	borders = ['top', 'right', 'bottom', 'left'],
	force = 0.1,
	drag = 0.001,
	lifespan = 2000,
	forceFuzz = 0.05,
	angleFuzz = 0.02,
	margin = 0,
}: {
	element: HTMLElement | SVGElement;
	borders?: BorderName[];
	force?: number;
	drag?: number;
	lifespan?: number;
	forceFuzz?: number;
	angleFuzz?: number;
	margin?: number;
}): ParticleInitializer => {
	// randomly spawn particles around the border of the element by 'unwrapping' the selected borders as
	// a single theoretical line, picking a random point on the line, and then converting that point
	// back to a point on the border.
	return (index: number) => {
		// check that element is not hidden
		if (
			element instanceof HTMLElement &&
			element.offsetWidth === 0 &&
			element.offsetHeight === 0
		) {
			return null;
		}
		if (element.getClientRects().length === 0) {
			return null;
		}

		const bounds = element.getBoundingClientRect();
		if (bounds.width === 0 && bounds.height === 0) {
			return null;
		}

		// by this point we've computed style already so this is cheap
		if (window.getComputedStyle(element).visibility === 'hidden') {
			return null;
		}

		const rect = {
			left: bounds.left,
			top: bounds.top,
			right: bounds.right,
			bottom: bounds.bottom,
			width: bounds.width,
			height: bounds.height,
		};
		if (margin) {
			rect.left -= margin;
			rect.top -= margin;
			rect.right += margin;
			rect.bottom += margin;
		}

		const borderLengths = borders.map((border) => {
			switch (border) {
				case 'top':
				case 'bottom':
					return rect.width;
				case 'left':
				case 'right':
					return rect.height;
			}
		});
		const totalBorderLength = borderLengths.reduce((a, b) => a + b, 0);
		const randomPoint = Math.random() * totalBorderLength;
		let borderIndex = 0;
		let borderLength = borderLengths[0];
		while (randomPoint > borderLength) {
			borderIndex++;
			borderLength += borderLengths[borderIndex];
		}
		const border = borders[borderIndex];
		const borderOffset =
			randomPoint - (borderLength - borderLengths[borderIndex]);

		let x = 0;
		let y = 0;
		let velocityX = 0;
		let velocityY = 0;
		switch (border) {
			case 'top':
				x = rect.left + borderOffset;
				y = rect.top;
				break;
			case 'right':
				x = rect.right;
				y = rect.top + borderOffset;
				break;
			case 'bottom':
				x = rect.left + borderOffset;
				y = rect.bottom;
				break;
			case 'left':
				x = rect.left;
				y = rect.top + borderOffset;
				break;
		}

		// velocity is away from the center of the element
		const center = {
			x: rect.left + rect.width / 2,
			y: rect.top + rect.height / 2,
		};

		// special case: width/height is 0
		let angle =
			rect.width === 0 || rect.height === 0
				? Math.random() * (Math.PI * 2)
				: Math.atan2(y - center.y, x - center.x);
		angle = fuzz(angle, angleFuzz);

		const totalForce = fuzz(force, forceFuzz);
		velocityX = Math.cos(angle) * totalForce;
		velocityY = Math.sin(angle) * totalForce;

		return { x, y, velocityX, velocityY, drag, lifespan };
	};
};

export type Color = {
	space: 'rgb';
	values: [number, number, number];
	opacity: number;
};

const YELLOW: Color = {
	space: 'rgb',
	values: [249, 231, 148],
	opacity: 1,
};
const TRANSPARENT: Color = {
	space: 'rgb',
	values: [255, 255, 255],
	opacity: 0,
};

export const elementExplosion = ({
	element,
	color = [YELLOW, TRANSPARENT],
	borders,
	lifespan,
	force,
	drag,
	forceFuzz,
	angleFuzz,
	margin,
	...rest
}: {
	element: HTMLElement | SVGElement;
	color?: Color | [Color, Color];
	count: number;
	startRadius?: number;
	endRadius?: number;
	borders?: BorderName[];
	lifespan?: number;
	force?: number;
	drag?: number;
	forceFuzz?: number;
	angleFuzz?: number;
	margin?: number;
}) =>
	createCircleParticles({
		initializer: createElementBorderInitializer({
			element,
			borders,
			lifespan,
			force,
			drag,
			forceFuzz,
			angleFuzz,
			margin,
		}),
		color,
		...rest,
	});

export const createWindowBorderInitializer = ({
	force = 0.1,
	drag = 0.001,
	border = 'top',
	lifespan = 2000,
}: {
	force?: number;
	drag?: number;
	border?: BorderName;
	lifespan?: number;
}): ParticleInitializer => {
	return (index: number) => {
		const rect = document.body.getBoundingClientRect();
		let x = 0;
		let y = 0;
		let velocityX = 0;
		let velocityY = 0;
		switch (border) {
			case 'top':
				velocityY = force * (Math.random() + 0.25);
				x = rect.left + Math.random() * rect.width;
				y = rect.top;
				break;
			case 'right':
				velocityX = -force * (Math.random() + 0.25);
				x = rect.right;
				y = rect.top + Math.random() * rect.height;
				break;
			case 'bottom':
				velocityY = -force * (Math.random() + 0.25);
				x = rect.left + Math.random() * rect.width;
				y = rect.bottom;
				break;
			case 'left':
				velocityX = force * (Math.random() + 0.25);
				x = rect.left;
				y = rect.top + Math.random() * rect.height;
				break;
		}
		return { x, y, velocityX, velocityY, drag, lifespan };
	};
};

export const windowBorderExplosion = ({
	color = [YELLOW, TRANSPARENT],
	border = 'top',
	lifespan,
	...rest
}: {
	color?: Color | [Color, Color];
	count: number;
	startRadius?: number;
	endRadius?: number;
	border?: BorderName;
	lifespan?: number;
}) =>
	createCircleParticles({
		initializer: createWindowBorderInitializer({
			border,
			lifespan,
		}),
		color,
		...rest,
	});

function colorInterpolate(colors: [Color, Color]) {
	return function interpolate(value: number): Color {
		if (colors[0].space !== colors[1].space) {
			throw new Error('Cannot interpolate between colors of different spaces');
		}
		if (colors[0].space === 'rgb') {
			return interpolateRgb(colors[0], colors[1], value);
		} else {
			throw new Error(`Unsupported color space ${colors[0].space}`);
		}
	};
}

function interpolateRgb(color1: Color, color2: Color, value: number): Color {
	const result: Color = {
		space: 'rgb' as const,
		values: [0, 0, 0],
		opacity: 0,
	};
	for (let i = 0; i < 3; i++) {
		result.values[i] =
			color1.values[i] + (color2.values[i] - color1.values[i]) * value;
	}
	result.opacity = color1.opacity + (color2.opacity - color1.opacity) * value;
	return result;
}

function colorToString(color: Color): string {
	if (color.space === 'rgb') {
		return colorRgbToString(color);
	}
	throw new Error(`Unsupported color space ${color.space}`);
}

function colorRgbToString(color: Color) {
	return `rgba(${color.values[0]}, ${color.values[1]}, ${color.values[2]}, ${color.opacity})`;
}
