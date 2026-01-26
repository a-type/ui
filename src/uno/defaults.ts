import { UserPreflightOptions } from './preflights/user.js';

export const defaultPresetHues: NonNullable<UserPreflightOptions['namedHues']> =
	{
		lemon: { sourceHue: 90.8, accentHue: 165.88, saturation: 1 },
		leek: { sourceHue: 165.88, accentHue: 90.8, saturation: 1 },
		tomato: { sourceHue: 10.51, accentHue: 165.88, saturation: 1 },
		blueberry: { sourceHue: 248.14, accentHue: 165.88, saturation: 1 },
		eggplant: { sourceHue: 280.21, accentHue: 165.88, saturation: 1 },

		attention: { sourceHue: 30, accentHue: 165.88, saturation: 1 },
		success: { sourceHue: 140, accentHue: 165.88, saturation: 1 },
	};
