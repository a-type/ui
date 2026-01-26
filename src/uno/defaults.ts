import { UserPreflightOptions } from './preflights/user.js';

export const defaultPresetHues: NonNullable<UserPreflightOptions['namedHues']> =
	{
		lemon: { sourceHue: 90.8, saturation: 1 },
		leek: { sourceHue: 165.88, saturation: 1 },
		tomato: { sourceHue: 10.51, saturation: 1 },
		blueberry: { sourceHue: 248.14, saturation: 1 },
		eggplant: { sourceHue: 280.21, saturation: 1 },

		attention: { sourceHue: 30, saturation: 1 },
		success: { sourceHue: 140, saturation: 1 },
	};
