import { createContext, CSSProperties, ReactNode, useContext } from 'react';
import { PROPS } from '../uno/index.js';

export const GroupScaleContext = createContext<number>(1);

const GROUP_SCALE_NESTING_FACTOR = 0.75;

export const GroupScaleLayer = ({ children }: { children?: ReactNode }) => {
	const current = useGroupScale();
	return (
		<GroupScaleContext.Provider value={current * GROUP_SCALE_NESTING_FACTOR}>
			{children}
		</GroupScaleContext.Provider>
	);
};

export function useGroupScale() {
	return useContext(GroupScaleContext);
}

export function useGroupScaleStyles(
	composeStyles?: CSSProperties,
	forceScale?: number,
) {
	const ctxScale = useGroupScale();
	const scale = forceScale ?? ctxScale;
	return {
		[PROPS.LOCALS.SPACING_SCALE]: scale,
		[PROPS.LOCALS.CORNER_SCALE]: scale,
		...composeStyles,
	};
}

export const GroupScaleReset = ({ children }: { children: ReactNode }) => {
	return (
		<GroupScaleContext.Provider value={1}>
			{children}
		</GroupScaleContext.Provider>
	);
};

export function withGroupScaleReset<T>(Component: React.ComponentType<T>) {
	return function WithGroupScaleReset(props: T) {
		return (
			<GroupScaleReset>
				<Component {...(props as any)} />
			</GroupScaleReset>
		);
	};
}
