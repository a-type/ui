export function getShadows(hard = false) {
	return {
		sm: `var(--un-shadow-inset) 0 calc(0px * var(--v-shadow-y-mult,1)) calc(1px * var(--global-shadow-spread,1)) 0 rgb(from var(--un-shadow-color) r g b / calc((var(--un-shadow-opacity,0.1)*2))),
			var(--un-shadow-inset) 0 calc(1px * var(--v-shadow-y-mult,1)) calc(2px * var(--global-shadow-spread,1)) 0 rgb(from var(--un-shadow-color) r g b / calc((var(--un-shadow-opacity,0.1)*2)))`,
		md: `var(--un-shadow-inset) 0 calc(4px * var(--v-shadow-y-mult,1)) calc(8px * var(--global-shadow-spread,1)) -1px rgb(from var(--un-shadow-color) r g b / calc((var(--un-shadow-opacity,0.1)))),
			var(--un-shadow-inset) 0 calc(2px * var(--v-shadow-y-mult,1)) calc(4px * var(--global-shadow-spread,1)) -1px rgb(from var(--un-shadow-color) r g b / calc((var(--un-shadow-opacity,0.1)*2)))`,
		lg: `var(--un-shadow-inset) 0 calc(8px * var(--v-shadow-y-mult,1)) calc(16px * var(--global-shadow-spread,1)) 0px rgb(from var(--un-shadow-color) r g b / calc((var(--un-shadow-opacity,0.1)))),
			var(--un-shadow-inset) 0 calc(5px * var(--v-shadow-y-mult,1)) calc(10px * var(--global-shadow-spread,1)) 0px rgb(from var(--un-shadow-color) r g b / calc((var(--un-shadow-opacity,0.1))))`,
		xl: `var(--un-shadow-inset) 0 calc(20px * var(--v-shadow-y-mult,1)) calc(40px * (0.1 + var(--global-shadow-spread,1))) -0px rgb(from var(--un-shadow-color) r g b / calc((var(--un-shadow-opacity,0.1)))),
			var(--un-shadow-inset) 0 calc(15px * var(--v-shadow-y-mult,1)) calc(30px * (0.05 + var(--global-shadow-spread,1))) -6px rgb(from var(--un-shadow-color) r g b / calc(0.5*(var(--un-shadow-opacity,0.1))))`,
	};
}
