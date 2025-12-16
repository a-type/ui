import clsx from 'clsx';
import {
	createContext,
	CSSProperties,
	ReactNode,
	RefObject,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import { createPortal } from 'react-dom';
import { useSizeCssVars, useStableCallback } from '../../hooks.js';
import useMergedRef from '../../hooks/useMergedRef.js';
import { Box, BoxProps } from '../box/Box.js';
import {
	useKeyboardControls,
	useViewportGestureControls,
	ViewportGestureControlOptions,
} from './useViewportGestures.js';
import { ViewportContent } from './ViewportContent.js';
import { ViewportProvider } from './ViewportContext.js';
import { PositionOrPercentage, ViewportState } from './ViewportState.js';
import { ViewportZoomControls } from './ViewportZoomControls.js';

export interface ViewportProps {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
	defaultCenter?: PositionOrPercentage;
	onZoomChange?: (zoom: number) => void;
	onCenterChange?: (center: { x: number; y: number }) => void;
	/** Get access to the viewport from outside this component */
	viewportRef?: RefObject<ViewportState | null>;
	minZoom?: 'fit' | number;
	maxZoom?: number;
	defaultZoom?: number;
	panLimitBuffer?: number;
	gestureOptions?: ViewportGestureControlOptions;
}

export function ViewportRoot({
	children,
	className,
	style,
	defaultCenter,
	onZoomChange,
	onCenterChange,
	viewportRef,
	minZoom = 'fit',
	maxZoom = 3,
	defaultZoom = 0.5,
	panLimitBuffer = 100,
	gestureOptions,
}: ViewportProps) {
	const viewport = useState(
		() =>
			new ViewportState({
				panLimitMode: 'viewport',
				zoomLimits: {
					min: minZoom,
					max: maxZoom,
				},
				defaultZoom,
				panLimitBuffer,
				defaultCenter,
			}),
	)[0];
	if (viewportRef) {
		// If a viewportRef is provided, we use it to expose the viewport state
		// This allows parent components to access the viewport state directly
		viewportRef.current = viewport;
	}

	const innerRef = useRef<HTMLDivElement>(null);
	const sizeRef = useSizeCssVars<HTMLDivElement>(300, undefined, {
		width: '--root-width',
		height: '--root-height',
	});
	const finalRef = useMergedRef<HTMLDivElement>(
		viewport.bindRoot,
		innerRef,
		sizeRef,
	);

	const gestureProps = useViewportGestureControls(
		viewport,
		innerRef,
		gestureOptions,
	);
	const keyboardProps = useKeyboardControls(viewport);

	useEffect(() => {
		(window as any).viewport = viewport; // For debugging purposes
	}, [viewport]);

	const stableOnZoomChange = useStableCallback(onZoomChange);
	const stableOnCenterChange = useStableCallback(onCenterChange);
	useEffect(() => {
		setTimeout(() => stableOnZoomChange(viewport.zoom), 0);
		return viewport.subscribe('zoomChanged', stableOnZoomChange);
	}, [viewport, stableOnZoomChange]);
	useEffect(() => {
		setTimeout(() => stableOnCenterChange(viewport.panPosition), 0);
		return viewport.subscribe('centerChanged', stableOnCenterChange);
	}, [viewport, stableOnCenterChange]);

	const [controlsRoot, controlsRef] = useState<HTMLDivElement | null>(null);

	return (
		<ViewportProvider value={viewport}>
			<ViewportControlContext.Provider value={controlsRoot}>
				<Box
					className={clsx('min-h-32px min-w-32px', className)}
					style={style}
					ref={controlsRef}
				>
					<div
						className={clsx(
							'w-full h-full flex-1 relative touch-none contain-strict select-none overflow-hidden',
							'focus-visible:(ring ring-accent)',
							className,
						)}
						{...gestureProps}
						{...keyboardProps}
						tabIndex={0}
						ref={finalRef}
					>
						<ViewportContent viewport={viewport}>{children}</ViewportContent>
					</div>
				</Box>
			</ViewportControlContext.Provider>
		</ViewportProvider>
	);
}

const ViewportControlContext = createContext<HTMLDivElement | null>(null);

export function ViewportControlContent({
	children,
	className,
	position = 'top-right',
	...props
}: BoxProps & {
	position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}) {
	const el = useContext(ViewportControlContext);

	if (el === null) {
		return null;
	}

	return createPortal(
		<Box
			className={clsx(
				'layer-variants:(absolute)',
				{
					'layer-components:(top-sm left-sm)': position === 'top-left',
					'layer-components:(top-sm right-sm)': position === 'top-right',
					'layer-components:(bottom-sm left-sm)': position === 'bottom-left',
					'layer-components:(bottom-sm right-sm)': position === 'bottom-right',
				},
				className,
			)}
			surface
			border
			elevated="md"
			{...props}
		>
			{children}
		</Box>,
		el,
	);
}

export const Viewport = Object.assign(ViewportRoot, {
	Control: ViewportControlContent,
	ZoomControls: ViewportZoomControls,
});
