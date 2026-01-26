import { Theme } from '@unocss/preset-mini';
import { PROPS } from '../logic/properties.js';

const opacity1 = `calc(var(${PROPS.BUILT_IN.SHADOW_OPACITY},0.1)*(1 + var(${PROPS.USER.SHADOW_SPREAD},1) * 0.5) * 2)`;
const opacity2 = `calc(var(${PROPS.BUILT_IN.SHADOW_OPACITY},0.1)*(1 + var(${PROPS.USER.SHADOW_SPREAD},1) * 0.5))`;
const opacity3 = `calc(var(${PROPS.BUILT_IN.SHADOW_OPACITY},0.1)*(1 + var(${PROPS.USER.SHADOW_SPREAD},1) * 0.5) / 2)`;
export const boxShadow: Theme['boxShadow'] = {
	sm: `var(${PROPS.BUILT_IN.SHADOW_INSET}) 0 calc(0px * var(${PROPS.UTILS.SHADOW_Y_MULT},1)) calc(1px * var(${PROPS.USER.SHADOW_SPREAD},1)) 0 rgb(from var(${PROPS.BUILT_IN.SHADOW_COLOR}) r g b / ${opacity1}),
			var(${PROPS.BUILT_IN.SHADOW_INSET}) 0 calc(1px * var(${PROPS.UTILS.SHADOW_Y_MULT},1)) calc(2px * var(${PROPS.USER.SHADOW_SPREAD},1)) 0 rgb(from var(${PROPS.BUILT_IN.SHADOW_COLOR}) r g b / ${opacity1})`,
	md: `var(${PROPS.BUILT_IN.SHADOW_INSET}) 0 calc(4px * var(${PROPS.UTILS.SHADOW_Y_MULT},1)) calc(8px * var(${PROPS.USER.SHADOW_SPREAD},1)) -1px rgb(from var(${PROPS.BUILT_IN.SHADOW_COLOR}) r g b / ${opacity2}),
			var(${PROPS.BUILT_IN.SHADOW_INSET}) 0 calc(2px * var(${PROPS.UTILS.SHADOW_Y_MULT},1)) calc(4px * var(${PROPS.USER.SHADOW_SPREAD},1)) -1px rgb(from var(${PROPS.BUILT_IN.SHADOW_COLOR}) r g b / ${opacity1})`,
	lg: `var(${PROPS.BUILT_IN.SHADOW_INSET}) 0 calc(8px * var(${PROPS.UTILS.SHADOW_Y_MULT},1)) calc(16px * var(${PROPS.USER.SHADOW_SPREAD},1)) 0px rgb(from var(${PROPS.BUILT_IN.SHADOW_COLOR}) r g b / ${opacity2}),
			var(${PROPS.BUILT_IN.SHADOW_INSET}) 0 calc(5px * var(${PROPS.UTILS.SHADOW_Y_MULT},1)) calc(10px * var(${PROPS.USER.SHADOW_SPREAD},1)) 0px rgb(from var(${PROPS.BUILT_IN.SHADOW_COLOR}) r g b / ${opacity2})`,
	xl: `var(${PROPS.BUILT_IN.SHADOW_INSET}) 0 calc(20px * var(${PROPS.UTILS.SHADOW_Y_MULT},1)) calc(40px * (0.1 + var(${PROPS.USER.SHADOW_SPREAD},1))) -0px rgb(from var(${PROPS.BUILT_IN.SHADOW_COLOR}) r g b / ${opacity2}),
			var(${PROPS.BUILT_IN.SHADOW_INSET}) 0 calc(15px * var(${PROPS.UTILS.SHADOW_Y_MULT},1)) calc(30px * (0.05 + var(${PROPS.USER.SHADOW_SPREAD},1))) -6px rgb(from var(${PROPS.BUILT_IN.SHADOW_COLOR}) r g b / ${opacity3})`,
};
