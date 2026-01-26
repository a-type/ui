import { describe, expect, it } from 'vitest';
import {
	ColorEvaluationContext,
	livePropertyColorContext,
	snapshotColorContext,
} from './color.js';
import { defaultPalettes } from './palettes.js';

describe('context snapshot evaluation', () => {
	it('should snapshot color context from element properties', () => {
		const context = snapshotColorContext('leek');
		expect(context).toEqual({
			sourceHue: '165.88',
			localLightnessSpread: '1',
			localSaturation: '1',
			globalSaturation: '0.5',
			mode: {
				lNeutral: '90%',
				lRangeUp: '10%',
				lRangeDown: '70%',
				sNeutral: '75%',
				sRangeUp: '-55%',
				sRangeDown: '20%',
				mult: '1',
			},
		} satisfies ColorEvaluationContext);
	});
});

describe('oklch color evaluation tools', () => {
	const { wash, default: DEFAULT } = defaultPalettes.main.definitions;

	it('should resolve lch values', () => {
		const ctx = snapshotColorContext('leek');
		const { l, c, h } = wash.raw(ctx);
		expect(l.value).toBeCloseTo(100, 1);
		expect(l.unit).toBe('%');
		expect(c.value).toBeCloseTo(10, 1);
		expect(c.unit).toBe('%');
		expect(h.value).toBe(165.88);
	});

	it('should print a valid oklch color string', () => {
		const colorString = wash.print(
			livePropertyColorContext('var(--p-main-hue, 91.8)'),
		);
		expect(colorString).toMatchInlineSnapshot(
			`"oklch(calc(clamp(0%, (var(--mode-l-neutral) + (var(--mode-l-range-up) * var(--mode-mult, 1) * var(--l-lightness-spread, 1))), 100%)) calc(clamp(0%, (1 * var(--l-saturation, 1) * var(--global-saturation, 1) * (var(--mode-s-neutral) + (var(--mode-s-range-up) * var(--mode-mult, 1)))), 100%)) calc(var(--p-main-hue, 91.8)))"`,
		);
	});
	it('should evaluate a valid oklch color value using element property values', () => {
		const context = snapshotColorContext('leek');
		expect(wash.computeOklch(context)).toMatchInlineSnapshot(
			`"oklch(100% 10% 165.88)"`,
		);
		expect(DEFAULT.computeOklch(context)).toMatchInlineSnapshot(
			`"oklch(90% 37.5% 165.88)"`,
		);
	});
	it('should evaluate different named palettes in addition to main', () => {
		const context = snapshotColorContext('attention');
		expect(wash.computeOklch(context)).toMatchInlineSnapshot(
			`"oklch(100% 10% 30)"`,
		);
		expect(DEFAULT.computeOklch(context)).toMatchInlineSnapshot(
			`"oklch(90% 37.5% 30)"`,
		);
	});
	it('works in dark mode', () => {
		const darkMode = document.createElement('div');
		darkMode.classList.add('override-dark', 'palette-leek');
		document.body.appendChild(darkMode);
		const context = snapshotColorContext('leek', 'dark');
		expect(wash.computeOklch(context)).toMatchInlineSnapshot(
			`"oklch(22% 20% 165.88)"`,
		);
		expect(DEFAULT.computeOklch(context)).toMatchInlineSnapshot(
			`"oklch(60% 40% 165.88)"`,
		);
		document.body.removeChild(darkMode);
	});
});
