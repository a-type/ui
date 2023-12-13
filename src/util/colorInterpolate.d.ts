declare module 'color-parse' {
	interface Color {
		space: string;
		values: number[];
		alpha: number;
	}
	export default function parse(color: string): Color;
}

declare module 'color-space/hsl' {
	interface HSL {
		space: string;
		values: number[];
	}
	export default function hsl(rgb: number[]): HSL;
}
