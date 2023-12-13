// @ts-ignore
import parseUntyped from 'color-parse';
// @ts-ignore
import hslUntyped from 'color-space/hsl';

type ParsedColor = {
	space: string;
	values: number[];
	alpha: number;
};
const parse = parseUntyped as (color: string) => ParsedColor;
const hsl = hslUntyped as {
	(rgb: number[]): {
		space: string;
		values: number[];
	};
	rgb: (hsl: number[]) => number[];
};

function clamp(v: number, min: number, max: number) {
	return Math.min(Math.max(v, min), max);
}

function lerp(a: number, b: number, t: number) {
	return a + (b - a) * t;
}

export function colorInterpolate(paletteStrings: string[]) {
	const palette = paletteStrings.map(function (colorString) {
		const c = parse(colorString);
		if (c.space != 'rgb') {
			if (c.space != 'hsl') throw 'c.space' + 'space is not supported.';
			c.values = hsl.rgb(c.values);
		}
		c.values.push(c.alpha);
		return c.values;
	});

	return function (
		t: number,
		mixFn?: (a: number, b: number, t: number) => number,
	) {
		const mix = mixFn || lerp;
		t = clamp(t, 0, 1);

		var idx = (palette.length - 1) * t,
			lIdx = Math.floor(idx),
			rIdx = Math.ceil(idx);

		t = idx - lIdx;

		var lColor = palette[lIdx],
			rColor = palette[rIdx];

		var result = lColor.map(function (v, i) {
			v = mix(v, rColor[i], t);
			if (i < 3) v = Math.round(v);
			return v;
		});

		if (result[3] === 1) {
			return 'rgb(' + result.slice(0, 3) + ')';
		}
		return 'rgba(' + result + ')';
	};
}
