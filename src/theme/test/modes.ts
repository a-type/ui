import { PROPS } from '../base/properties.js';
import { createModeSchema } from '../modes/modeSchema.js';

export const modeSchema = createModeSchema({
	ACTION: {
		PRIMARY: {
			BG: 'color',
			FG: 'color',
			BORDER: 'color',
		},
		SECONDARY: {
			BG: 'color',
			FG: 'color',
			BORDER: 'color',
		},
		ANCILLARY: {
			BG: 'color',
			FG: 'color',
			BORDER: 'color',
		},
	},
	SURFACE: {
		PRIMARY: {
			BG: 'color',
			FG: 'color',
			BORDER: 'color',
		},
		SECONDARY: {
			BG: 'color',
			FG: 'color',
			BORDER: 'color',
		},
		ANCILLARY: {
			BG: 'color',
			FG: 'color',
			BORDER: 'color',
		},
	},
	CONTROL: {
		BG: 'color',
		FG: 'color',
		BORDER: 'color',
	},
	TEXT: {
		PRIMARY: {
			SIZE: 'size',
			WEIGHT: '*',
			LINE_HEIGHT: '*',
		},
		SECONDARY: {
			SIZE: 'size',
			WEIGHT: '*',
			LINE_HEIGHT: '*',
		},
		ANCILLARY: {
			SIZE: 'size',
			WEIGHT: '*',
			LINE_HEIGHT: '*',
		},
	},
});

export const rootMode = modeSchema.createBase({
	SURFACE: {
		PRIMARY: {
			BG: PROPS.COLOR('primary').WASH.VAR,
			FG: PROPS.COLOR('primary').INK.VAR,
			BORDER: PROPS.COLOR('primary').DARK.VAR,
		},
		SECONDARY: {
			BG: PROPS.COLOR('neutral').LIGHTER.VAR,
			FG: PROPS.COLOR('neutral').DARKER.VAR,
			BORDER: PROPS.COLOR('neutral').DARK.VAR,
		},
		ANCILLARY: {
			BG: PROPS.COLOR('neutral').WASH.VAR,
			FG: PROPS.COLOR('neutral').INK.VAR,
			BORDER: PROPS.COLOR('neutral').DARK.VAR,
		},
	},
	CONTROL: {
		BG: PROPS.COLOR('neutral').PAPER.VAR,
		FG: PROPS.COLOR('neutral').INK.VAR,
		BORDER: PROPS.COLOR('neutral').DARK.VAR,
	},
	ACTION: {
		PRIMARY: {
			BG: PROPS.COLOR('primary').DEFAULT.VAR,
			FG: PROPS.COLOR('primary').INK.VAR,
			BORDER: PROPS.COLOR('primary').DARK.VAR,
		},
		SECONDARY: {
			BG: PROPS.COLOR('neutral').LIGHTER.VAR,
			FG: PROPS.COLOR('neutral').DARKER.VAR,
			BORDER: PROPS.COLOR('neutral').DARK.VAR,
		},
		ANCILLARY: {
			BG: PROPS.COLOR('neutral').WASH.VAR,
			FG: PROPS.COLOR('neutral').INK.VAR,
			BORDER: PROPS.COLOR('neutral').DARK.VAR,
		},
	},
	TEXT: {
		PRIMARY: {
			SIZE: '5rem',
			WEIGHT: 'bold',
			LINE_HEIGHT: '1.5',
		},
		SECONDARY: {
			SIZE: '1rem',
			WEIGHT: 'normal',
			LINE_HEIGHT: '1.5',
		},
		ANCILLARY: {
			SIZE: '0.875rem',
			WEIGHT: 'normal',
			LINE_HEIGHT: '1.5',
		},
	},
});

export const altMode = modeSchema.createPartial({
	ACTION: {
		PRIMARY: {
			BG: PROPS.COLOR('blue').DEFAULT.VAR,
			FG: PROPS.COLOR('blue').INK.VAR,
		},
	},
	CONTROL: {
		BORDER: PROPS.COLOR('blue').DEFAULT.VAR,
		BG: PROPS.COLOR('blue').WASH.VAR,
	},
});

export const greenButtonsMode = modeSchema.createPartial({
	ACTION: {
		PRIMARY: {
			BG: PROPS.COLOR('green').DEFAULT.VAR,
			FG: PROPS.COLOR('green').INK.VAR,
			BORDER: PROPS.COLOR('green').DARK.VAR,
		},
	},
});
