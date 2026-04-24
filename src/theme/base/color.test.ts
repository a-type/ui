import { assert } from '@a-type/utils';
import { expect, it } from 'vitest';
import { oklchBuilder } from './color.js';
import { PROPS } from './properties.js';

const demoColor = oklchBuilder(($) => ({
	l: $.clamp(
		$.add(
			$.literal((ctx) => ctx.appliedProperties[PROPS.SCHEME.LIGHTNESS.NAME]),
			$.multiply(
				$.literal((ctx) => ctx.appliedProperties[PROPS.SCHEME.MULT.NAME]),
				$.literal(
					(ctx) => ctx.appliedProperties[PROPS.LOCAL.LIGHTNESS_SPREAD.NAME],
				),
			),
		),
		$.literal(() => '0%'),
		$.literal(() => '100%'),
	),
	c: $.clamp(
		$.multiply(
			$.literal((ctx) => ctx.appliedProperties[PROPS.LOCAL.SATURATION.NAME]),
			$.literal((ctx) => ctx.appliedProperties[PROPS.USER.SATURATION.NAME]),
			$.add(
				$.literal((ctx) => ctx.appliedProperties[PROPS.SCHEME.SATURATION.NAME]),
				$.multiply(
					$.literal((ctx) => ctx.appliedProperties[PROPS.SCHEME.MULT.NAME]),
				),
			),
		),
		$.literal(() => '0%'),
		$.literal(() => '100%'),
	),
	h: $.literal(() => '210'),
}));

it('prints a dynamic oklch representation of a built equation', () => {
	expect(demoColor.printDynamic()).toBe(
		`oklch(calc(clamp(0%, (var(${PROPS.SCHEME.LIGHTNESS}) + (var(${PROPS.SCHEME.MULT}) * var(${PROPS.LOCAL.LIGHTNESS_SPREAD}))), 100%)) calc(clamp(0%, (var(${PROPS.LOCAL.SATURATION}) * var(${PROPS.USER.SATURATION}) * (var(${PROPS.SCHEME.SATURATION}) + (var(${PROPS.SCHEME.MULT})))), 100%)) calc(210))`,
	);
});

const fullProperties = {
	[PROPS.SCHEME.LIGHTNESS.NAME]: '80%',
	[PROPS.SCHEME.MULT.NAME]: '1',
	[PROPS.LOCAL.LIGHTNESS_SPREAD.NAME]: '1',
	[PROPS.LOCAL.SATURATION.NAME]: '1',
	[PROPS.USER.SATURATION.NAME]: '0.5',
	[PROPS.SCHEME.SATURATION.NAME]: '50%',
};

it('computes a full evaluation from supplied property values', () => {
	const computed = demoColor.compute({
		appliedProperties: fullProperties,
	});
	expect(computed.l.value).toBe(100);
	assert(computed.l.type === 'numeric');
	expect(computed.l.unit).toBe('%');
	expect(computed.c.value).toBeCloseTo(50, 1);
	assert(computed.c.type === 'numeric');
	expect(computed.c.unit).toBe('%');
	expect(computed.h.value).toBe(210);
	assert(computed.h.type === 'numeric');
	expect(computed.h.unit).toBe('');
});

it('prints a computed oklch color string from supplied property values', () => {
	const colorString = demoColor.printComputed({
		appliedProperties: fullProperties,
	});
	expect(colorString).toBe('oklch(100% 50% 210)');
});

it('prints a partially resolved oklch color string when some properties are missing', () => {
	const colorString = demoColor.printComputed({
		appliedProperties: {
			[PROPS.SCHEME.LIGHTNESS.NAME]: '80%',
			[PROPS.SCHEME.MULT.NAME]: '1',
			[PROPS.LOCAL.LIGHTNESS_SPREAD.NAME]: '1',
			// saturation properties are missing
		},
	});
	expect(colorString).toMatchInlineSnapshot(
		`"oklch(100% calc(clamp(0%, calc(calc(var(--🎨-🏠-sat) * var(--🎨-🧑-sat)) * calc(calc(0% + var(--🎨-🌗-sat-neutral)) + var(--🎨-🌗-sat-range-up))), 100%)) 210)"`,
	);
});

it('supports function calls in equations', () => {
	const funcColor = oklchBuilder(($) => ({
		l: $.fn('min', $.literal(0), $.literal('l')),
		c: $.literal(0.5),
		h: $.literal(210),
	}));
	expect(funcColor.printDynamic()).toBe(
		`oklch(calc(min(0, l)) calc(0.5) calc(210))`,
	);
});
