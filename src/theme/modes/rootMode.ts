import { PROPS } from '../base/properties.js';
import { BaseModeSchema } from './modeSchema.js';

export const rootMode: BaseModeSchema = {
	surface: {
		ancillary: {
			bg: PROPS.COLOR('neutral').WASH.VAR,
			fg: PROPS.COLOR('neutral').INK.VAR,
			border: PROPS.COLOR('neutral').LIGHT.VAR,
		},
		primary: {
			bg: PROPS.COLOR('primary').WASH.VAR,
			fg: PROPS.COLOR('primary').INK.VAR,
			border: PROPS.COLOR('primary').LIGHT.VAR,
		},
		secondary: {
			bg: PROPS.COLOR('neutral').LIGHTER.VAR,
			fg: PROPS.COLOR('neutral').DARKER.VAR,
			border: PROPS.COLOR('neutral').LIGHT.VAR,
		},
	},
	control: {
		bg: PROPS.COLOR('neutral'),
	},
};
