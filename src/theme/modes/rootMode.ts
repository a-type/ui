import { PROPS } from '../base/properties.js';
import { BaseModeSchema } from './modeSchema.js';

export const rootMode: BaseModeSchema = {
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
};
