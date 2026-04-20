import { PROPS, selfReferencingPropertyMap } from './properties.js';

export function lighten(base: string, level: string) {
	return colorTweak(base, level, 1);
}

export function darken(base: string, level: string) {
	return colorTweak(base, level, -1);
}

function colorTweak(base: string, level: string, sign: number) {
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
	/**
	 * Precomputed CSS property values to inline when evaluating
	 * an equation. If a value is not provided, it remains runtime-dynamic.
	 */
	appliedProperties: Record<string, string>;
}

export interface OklchColorEquation {
	l: ColorEquation;
	c: ColorEquation;
	h: ColorEquation;

	/**
	 * Prints the CSS value of the color equation, including all
	 * calculations and variable references - fully dynamic.
	 */
	printDynamic(): string;
	/**
	 * Uses the equation and provided context to compute a static
	 * OKLCH color string with calculations and references resolved.
	 */
	printComputed(context: ColorEvaluationContext): string;
	/**
	 * Returns the raw computed L, C, H values as numbers with units.
	 */
	compute(ctx: ColorEvaluationContext): {
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
	| DivideOperation
	| LiteralOperation
	| ClampOperation
	| CastOperation
	| FunctionCallOperation;
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
interface DivideOperation {
	type: 'divide';
	values: [ColorEquation, ColorEquation];
}
interface LiteralOperation {
	type: 'literal';
	value: ColorContextEvaluation;
}
interface ClampOperation {
	type: 'clamp';
	values: ColorEquation[];
}
interface CastOperation {
	type: 'cast';
	value: ColorEquation;
	unit: '%' | '';
}
interface FunctionCallOperation {
	type: 'function';
	name: string;
	args: ColorEquation[];
}
const colorEquationTools = {
	literal: (
		value: ColorContextEvaluation | string | number,
	): LiteralOperation => {
		if (typeof value === 'string' || typeof value === 'number') {
			return { type: 'literal', value: () => String(value) };
		}
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
	divide: (
		numerator: ColorEquation,
		denominator: ColorEquation,
	): DivideOperation => {
		return { type: 'divide', values: [numerator, denominator] };
	},
	clamp: (
		equation: ColorEquation,
		min: ColorEquation,
		max: ColorEquation,
	): ColorEquation => {
		return { type: 'clamp', values: [min, equation, max] };
	},
	castPercentage: (value: ColorEquation): ColorEquation => {
		return { type: 'cast', value, unit: '%' };
	},
	fn: (name: string, ...args: ColorEquation[]): FunctionCallOperation => {
		return { type: 'function', name, args };
	},
};
export type ColorEquationTools = typeof colorEquationTools;

export function printEquation(
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
		case 'divide':
			return `(${equation.values
				.map((v) => printEquation(v, context))
				.join(' / ')})`;
		case 'clamp':
			if (equation.values.length !== 3) {
				throw new Error(
					'Clamp operation requires exactly 3 values: min, value, max',
				);
			}
			return `clamp(${equation.values
				.map((v) => printEquation(v, context))
				.join(', ')})`;
		case 'cast':
			return `(${printEquation(equation.value, context)} * ${
				equation.unit === '%' ? '100%' : '1'
			})`;
		case 'function':
			return `${equation.name}(${equation.args
				.map((v) => printEquation(v, context))
				.join(', ')})`;
		default:
			throw new Error(`Unknown equation type: ${(equation as any).type}`);
	}
}

type ComputationResult =
	| {
			type: 'numeric';
			value: number;
			unit: '%' | '';
	  }
	| {
			type: 'calc';
			value: string;
	  };

function add(a: ComputationResult, b: ComputationResult): ComputationResult {
	if (a.type === 'calc' || b.type === 'calc' || a.unit !== b.unit) {
		return {
			type: 'calc',
			value: `calc(${printComputationResult(a)} + ${printComputationResult(
				b,
			)})`,
		};
	}
	return { type: 'numeric', value: a.value + b.value, unit: a.unit };
}

function subtract(
	a: ComputationResult,
	b: ComputationResult,
): ComputationResult {
	if (a.type === 'calc' || b.type === 'calc' || a.unit !== b.unit) {
		return {
			type: 'calc',
			value: `calc(${printComputationResult(a)} - ${printComputationResult(
				b,
			)})`,
		};
	}
	return { type: 'numeric', value: a.value - b.value, unit: a.unit };
}

function multiply(
	a: ComputationResult,
	b: ComputationResult,
): ComputationResult {
	if (a.type === 'numeric' && a.value === 0) {
		return { type: 'numeric', value: 0, unit: a.unit };
	}
	if (b.type === 'numeric' && b.value === 0) {
		return { type: 'numeric', value: 0, unit: b.unit };
	}
	if (a.type === 'numeric' && a.value === 1) {
		return b;
	}
	if (b.type === 'numeric' && b.value === 1) {
		return a;
	}
	if (a.type === 'numeric' && a.unit === '%' && a.value === 100) {
		return b;
	}
	if (b.type === 'numeric' && b.unit === '%' && b.value === 100) {
		return a;
	}

	if (a.type === 'calc' || b.type === 'calc' || a.unit !== b.unit) {
		return {
			type: 'calc',
			value: `calc(${printComputationResult(a)} * ${printComputationResult(
				b,
			)})`,
		};
	}
	if (a.unit === '%' && b.unit === '%') {
		return { type: 'numeric', value: (a.value * b.value) / 100, unit: '%' };
	}
	const unit = a.unit === '%' || b.unit === '%' ? '%' : '';
	return { type: 'numeric', value: a.value * b.value, unit };
}

function divide(a: ComputationResult, b: ComputationResult): ComputationResult {
	if (b.type === 'numeric' && b.value === 0) {
		throw new Error('Division by zero');
	}
	if (a.type === 'numeric' && a.value === 0) {
		return { type: 'numeric', value: 0, unit: a.unit };
	}
	if (b.type === 'numeric' && b.value === 1) {
		return a;
	}
	if (a.type === 'calc' || b.type === 'calc' || a.unit !== b.unit) {
		return {
			type: 'calc',
			value: `calc(${printComputationResult(a)} / ${printComputationResult(
				b,
			)})`,
		};
	}
	if (a.unit === '%' && b.unit === '%') {
		return { type: 'numeric', value: a.value / b.value, unit: '' };
	}
	const unit = a.unit === '%' && b.unit === '' ? '%' : '';
	return { type: 'numeric', value: a.value / b.value, unit };
}

function clamp(
	value: ComputationResult,
	min: ComputationResult,
	max: ComputationResult,
): ComputationResult {
	if (
		value.type === 'calc' ||
		min.type === 'calc' ||
		max.type === 'calc' ||
		value.unit !== min.unit ||
		value.unit !== max.unit ||
		min.unit !== max.unit
	) {
		return {
			type: 'calc',
			value: `calc(clamp(${printComputationResult(
				min,
			)}, ${printComputationResult(value)}, ${printComputationResult(max)}))`,
		};
	}
	return {
		type: 'numeric',
		value: Math.min(Math.max(value.value, min.value), max.value),
		unit: value.unit,
	};
}

function cast(value: ComputationResult, unit: '%' | ''): ComputationResult {
	if (value.type === 'calc') {
		return {
			type: 'calc',
			value: `calc(${printComputationResult(value)} * ${
				unit === '%' ? '1' : '1'
			})`,
		};
	}
	if (unit === '%') {
		if (value.unit === '%') {
			return value;
		}
		return { type: 'numeric', value: value.value * 100, unit: '%' };
	} else {
		if (value.unit === '') {
			return value;
		}
		return { type: 'numeric', value: value.value / 100, unit: '' };
	}
}

function numericToNumber(value: {
	type: 'numeric';
	value: number;
	unit: string;
}): number {
	if (value.unit === '%') {
		return value.value / 100;
	}
	return value.value;
}
function fnCall(name: string, ...args: ComputationResult[]): ComputationResult {
	// inline some functions if all args are numerics
	if (args.every((arg) => arg.type === 'numeric')) {
		const argsInOrderAsNumbers = args.map((arg) =>
			numericToNumber(arg as Extract<ComputationResult, { type: 'numeric' }>),
		);
		switch (name) {
			case 'sin':
				return {
					type: 'numeric',
					value: Math.sin(argsInOrderAsNumbers[0]),
					unit: '',
				};
			case 'cos':
				return {
					type: 'numeric',
					value: Math.cos(argsInOrderAsNumbers[0]),
					unit: '',
				};
			case 'tan':
				return {
					type: 'numeric',
					value: Math.tan(argsInOrderAsNumbers[0]),
					unit: '',
				};
			case 'min':
				return {
					type: 'numeric',
					value: Math.min(...argsInOrderAsNumbers),
					unit: '',
				};
			case 'max':
				return {
					type: 'numeric',
					value: Math.max(...argsInOrderAsNumbers),
					unit: '',
				};
			default:
				break;
		}
	}
	return {
		type: 'calc',
		value: `${name}(${args.map(printComputationResult).join(', ')})`,
	};
}

export function printComputationResult(result: ComputationResult): string {
	if (result.type === 'calc') {
		return result.value;
	}
	return result.unit === '%' ? `${result.value}%` : `${result.value}`;
}

function evaluateLiteral(literal: string): ComputationResult {
	if (literal.startsWith('var(')) {
		return { type: 'calc', value: literal };
	} else if (literal === 'PI') {
		return { type: 'numeric', value: Math.PI, unit: '' };
	} else if (literal.endsWith('%')) {
		const asNumber = Number(literal.slice(0, -1));
		if (isNaN(asNumber)) {
			throw new Error(`Literal value did not evaluate to a number: ${literal}`);
		}
		return { type: 'numeric', value: asNumber, unit: '%' };
	} else {
		const asNumber = Number(literal);
		if (isNaN(asNumber)) {
			throw new Error(`Literal value did not evaluate to a number: ${literal}`);
		}
		return { type: 'numeric', value: asNumber, unit: '' };
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
				{ type: 'numeric', value: 0, unit: '' },
			);
		case 'subtract':
			if (equation.values.length === 0) {
				return { type: 'numeric', value: 0, unit: '' };
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
				{ type: 'numeric', value: 1, unit: '' },
			);
		case 'divide':
			if (equation.values.length !== 2) {
				throw new Error('Divide operation requires exactly 2 values');
			}
			const numerator = computeEquation(equation.values[0], context);
			const denominator = computeEquation(equation.values[1], context);
			return divide(numerator, denominator);
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
		case 'cast':
			const innerValue = computeEquation(equation.value, context);
			return cast(innerValue, equation.unit);
		case 'function':
			const args = equation.args.map((arg) => computeEquation(arg, context));
			return fnCall(equation.name, ...args);
		default:
			throw new Error(`Unknown equation type: ${(equation as any).type}`);
	}
}

export function oklchBuilder(
	impl: (tools: ColorEquationTools) => {
		l: ColorEquation;
		c: ColorEquation;
		h: ColorEquation;
	},
): OklchColorEquation {
	const equations = impl(colorEquationTools);

	function compute(context: ColorEvaluationContext) {
		const l = computeEquation(equations.l, context);
		const c = computeEquation(equations.c, context);
		const h = computeEquation(equations.h, context);
		return { l, c, h };
	}

	return {
		...equations,
		printDynamic(): string {
			const dynamicContext = {
				appliedProperties: selfReferencingPropertyMap,
			};
			const l = printEquation(equations.l, dynamicContext);
			const c = printEquation(equations.c, dynamicContext);
			const h = printEquation(equations.h, dynamicContext);
			return `oklch(calc(${l}) calc(${c}) calc(${h}))`;
		},
		printComputed(context: ColorEvaluationContext): string {
			const { l, c, h } = compute({
				appliedProperties: {
					...selfReferencingPropertyMap,
					...context.appliedProperties,
				},
			});
			return `oklch(${printComputationResult(l)} ${printComputationResult(
				c,
			)} ${printComputationResult(h)})`;
		},
		compute,
	};
}
