import { PROPS } from './properties.js';

export function lighten(base: string, level: string) {
	return mod(base, level, 1);
}

export function darken(base: string, level: string) {
	return mod(base, level, -1);
}

function mod(base: string, level: string, sign: number) {
	return (
		`oklch(from ` +
		base +
		` calc(l * (1 + ${level} / 30 * ${sign} * var(${PROPS.MODE.MULT}, 1)))` +
		` calc(c * (1 - (${level} * 0.1 * ${sign} * (1 + (1 - var(${PROPS.USER.SATURATION}, 0))))))` +
		` h)`
	);
}

/**
 * Values to inject for contextual color variables.
 */
export interface ColorEvaluationContext {
	mode: {
		lNeutral: string;
		lRangeUp: string;
		lRangeDown: string;
		sNeutral: string;
		sRangeUp: string;
		sRangeDown: string;
		mult: string;
	};
	sourceHue: string;
	globalSaturation: string;
	localLightnessSpread: string;
	localSaturation: string;
}

export function livePropertyColorContext(
	sourceHue: string,
): ColorEvaluationContext {
	return {
		mode: {
			lNeutral: `var(${PROPS.MODE.L_NEUTRAL})`,
			lRangeUp: `var(${PROPS.MODE.L_RANGE_UP})`,
			lRangeDown: `var(${PROPS.MODE.L_RANGE_DOWN})`,
			sNeutral: `var(${PROPS.MODE.S_NEUTRAL})`,
			sRangeUp: `var(${PROPS.MODE.S_RANGE_UP})`,
			sRangeDown: `var(${PROPS.MODE.S_RANGE_DOWN})`,
			mult: `var(${PROPS.MODE.MULT}, 1)`,
		},
		sourceHue,
		globalSaturation: `var(${PROPS.USER.SATURATION}, 1)`,
		localLightnessSpread: `var(${PROPS.PALETTE.LIGHTNESS_SPREAD}, 1)`,
		localSaturation: `var(${PROPS.PALETTE.SATURATION}, 1)`,
	};
}

// helpers to avoid having to hardcode the synchronized variables
function stripVar(property: string) {
	return property.replace(/var\((--[a-zA-Z0-9-_]+)(,[^)]+)?\)/g, '$1').trim();
}
function getFallback(property: string) {
	const match = property.match(/var\(--[a-zA-Z0-9-_]+,([^)]+)\)/);
	if (match) {
		return match[1].trim();
	}
	return null;
}
function evaluatePropertiesRecursively(
	computed: CSSStyleDeclaration,
	context: ColorEvaluationContext,
	result: any = {},
) {
	for (const key in context) {
		const value = context[key as keyof ColorEvaluationContext];
		if (typeof value === 'string') {
			if (value.startsWith('var(')) {
				const varName = stripVar(value);
				const evaluatedVar = computed.getPropertyValue(varName).trim();
				if (evaluatedVar) {
					result[key as keyof ColorEvaluationContext] = evaluatedVar;
				} else {
					const fallback = getFallback(value);
					if (fallback !== null) {
						result[key as keyof ColorEvaluationContext] = fallback;
					} else {
						throw new Error(
							`CSS variable ${varName} is not defined and no fallback is provided.`,
						);
					}
				}
			}
		} else {
			result[key as keyof ColorEvaluationContext] =
				evaluatePropertiesRecursively(computed, value as any, {} as any) as any;
		}
	}
	return result;
}

/**
 * "Snapshots" a color context as real values from the given scope element.
 * Defaults to body.
 */
export function snapshotColorContext(
	palette: string,
	mode?: 'light' | 'dark',
): ColorEvaluationContext {
	const scopeElement = document.createElement('div');
	scopeElement.classList.add(`palette-${palette}`);
	if (mode) {
		scopeElement.classList.add(`override-${mode}`);
	}
	scopeElement.style.position = 'absolute';
	scopeElement.style.visibility = 'hidden';
	document.body.appendChild(scopeElement);
	const styles = getComputedStyle(scopeElement);
	const evaluated = evaluatePropertiesRecursively(
		styles,
		livePropertyColorContext(`var(${PROPS.PALETTE.MAIN_HUE})`),
	) as ColorEvaluationContext;
	document.body.removeChild(scopeElement);
	return evaluated;
}

export interface OklchColorEquation {
	l: ColorEquation;
	c: ColorEquation;
	h: ColorEquation;

	/**
	 * Prints the CSS value of the color equation, including all
	 * calculations and variable references.
	 */
	print(context: ColorEvaluationContext): string;
	/**
	 * Uses the equation and provided context to compute a static
	 * OKLCH color string with calculations and references resolved.
	 */
	computeOklch(context: ColorEvaluationContext): string;
	/**
	 * Returns the raw computed L, C, H values as numbers with units.
	 */
	raw(ctx: ColorEvaluationContext): {
		l: ComputationResult;
		c: ComputationResult;
		h: ComputationResult;
	};
}
export type ColorEquation = OperationTree;
type ColorContextEvaluation = (ctx: ColorEvaluationContext) => string;
type OperationTree =
	| AddOperation
	| SubtractOperation
	| MultiplyOperation
	| LiteralOperation
	| ClampOperation;
interface AddOperation {
	type: 'add';
	values: ColorEquation[];
}
interface SubtractOperation {
	type: 'subtract';
	values: ColorEquation[];
}
interface MultiplyOperation {
	type: 'multiply';
	values: ColorEquation[];
}
interface LiteralOperation {
	type: 'literal';
	value: ColorContextEvaluation;
}
interface ClampOperation {
	type: 'clamp';
	values: ColorEquation[];
}
const colorEquationTools = {
	literal: (value: ColorContextEvaluation): LiteralOperation => {
		return { type: 'literal', value };
	},
	add: (...values: ColorEquation[]): AddOperation => {
		return { type: 'add', values };
	},
	subtract: (...values: ColorEquation[]): SubtractOperation => {
		return { type: 'subtract', values };
	},
	multiply: (...values: ColorEquation[]): MultiplyOperation => {
		return { type: 'multiply', values };
	},
	clamp: (
		equation: ColorEquation,
		min: ColorEquation,
		max: ColorEquation,
	): ColorEquation => {
		return { type: 'clamp', values: [min, equation, max] };
	},
};

function printEquation(
	equation: ColorEquation,
	context: ColorEvaluationContext,
): string {
	switch (equation.type) {
		case 'literal':
			return equation.value(context);
		case 'add':
			return `(${equation.values
				.map((v) => printEquation(v, context))
				.join(' + ')})`;
		case 'subtract':
			return `(${equation.values
				.map((v) => printEquation(v, context))
				.join(' - ')})`;
		case 'multiply':
			return `(${equation.values
				.map((v) => printEquation(v, context))
				.join(' * ')})`;
		case 'clamp':
			if (equation.values.length !== 3) {
				throw new Error(
					'Clamp operation requires exactly 3 values: min, value, max',
				);
			}
			return `clamp(${equation.values
				.map((v) => printEquation(v, context))
				.join(', ')})`;
	}
}

interface ComputationResult {
	value: number;
	unit: '%' | '';
}

function add(a: ComputationResult, b: ComputationResult): ComputationResult {
	if (a.unit !== b.unit) {
		throw new Error('Cannot add values with different units');
	}
	return { value: a.value + b.value, unit: a.unit };
}

function subtract(
	a: ComputationResult,
	b: ComputationResult,
): ComputationResult {
	if (a.unit !== b.unit) {
		throw new Error('Cannot subtract values with different units');
	}
	return { value: a.value - b.value, unit: a.unit };
}

function multiply(
	a: ComputationResult,
	b: ComputationResult,
): ComputationResult {
	if (a.unit === '%' && b.unit === '%') {
		return { value: (a.value * b.value) / 100, unit: '%' };
	}
	const unit = a.unit === '%' || b.unit === '%' ? '%' : '';
	return { value: a.value * b.value, unit };
}

function clamp(
	value: ComputationResult,
	min: ComputationResult,
	max: ComputationResult,
): ComputationResult {
	if (value.unit !== min.unit || value.unit !== max.unit) {
		throw new Error('Cannot clamp values with different units');
	}
	return {
		value: Math.min(Math.max(value.value, min.value), max.value),
		unit: value.unit,
	};
}

function printComputationResult(result: ComputationResult): string {
	return result.unit === '%' ? `${result.value}%` : `${result.value}`;
}

function evaluateLiteral(literal: string): ComputationResult {
	if (literal.endsWith('%')) {
		const asNumber = Number(literal.slice(0, -1));
		if (isNaN(asNumber)) {
			throw new Error(`Literal value did not evaluate to a number: ${literal}`);
		}
		return { value: asNumber, unit: '%' };
	} else {
		const asNumber = Number(literal);
		if (isNaN(asNumber)) {
			throw new Error(`Literal value did not evaluate to a number: ${literal}`);
		}
		return { value: asNumber, unit: '' };
	}
}

function computeEquation(
	equation: ColorEquation,
	context: ColorEvaluationContext,
): ComputationResult {
	switch (equation.type) {
		case 'literal':
			return evaluateLiteral(equation.value(context));
		case 'add':
			return equation.values.reduce<ComputationResult>(
				(sum, v) => add(sum, computeEquation(v, context)),
				{ value: 0, unit: '%' },
			);
		case 'subtract':
			if (equation.values.length === 0) {
				return { value: 0, unit: '%' };
			}
			const first = computeEquation(equation.values[0], context);
			return equation.values
				.slice(1)
				.reduce(
					(difference, v) => subtract(difference, computeEquation(v, context)),
					first,
				);
		case 'multiply':
			return equation.values.reduce<ComputationResult>(
				(product, v) => multiply(product, computeEquation(v, context)),
				{ value: 1, unit: '' },
			);
		case 'clamp':
			if (equation.values.length !== 3) {
				throw new Error(
					'Clamp operation requires exactly 3 values: min, value, max',
				);
			}
			const min = computeEquation(equation.values[0], context);
			const value = computeEquation(equation.values[1], context);
			const max = computeEquation(equation.values[2], context);
			return clamp(value, min, max);
		default:
			throw new Error(`Unknown equation type: ${(equation as any).type}`);
	}
}

export function oklchBuilder(
	impl: (tools: typeof colorEquationTools) => {
		l: ColorEquation;
		c: ColorEquation;
		h: ColorEquation;
	},
): OklchColorEquation {
	const equations = impl(colorEquationTools);

	return {
		...equations,
		print(context: ColorEvaluationContext): string {
			const l = printEquation(equations.l, context);
			const c = printEquation(equations.c, context);
			const h = printEquation(equations.h, context);
			return `oklch(calc(${l}) calc(${c}) calc(${h}))`;
		},
		computeOklch(context: ColorEvaluationContext): string {
			const l = computeEquation(equations.l, context);
			const c = computeEquation(equations.c, context);
			const h = computeEquation(equations.h, context);
			return `oklch(${printComputationResult(l)} ${printComputationResult(
				c,
			)} ${printComputationResult(h)})`;
		},
		raw(context: ColorEvaluationContext): {
			l: ComputationResult;
			c: ComputationResult;
			h: ComputationResult;
		} {
			const l = computeEquation(equations.l, context);
			const c = computeEquation(equations.c, context);
			const h = computeEquation(equations.h, context);
			return { l, c, h };
		},
	};
}
