import clsx from 'clsx';
import { Box, BoxProps } from '../box/Box.js';
import { Button } from '../button/Button.js';
import { Icon } from '../icon/Icon.js';
import { useViewport } from './ViewportContext.js';

export function ViewportZoomControls({
	className,
	zoomIn = true,
	zoomOut = true,
	fit = true,
	...props
}: BoxProps & {
	zoomIn?: boolean;
	zoomOut?: boolean;
	fit?: boolean;
}) {
	const viewport = useViewport();
	const doZoomIn = () => {
		viewport.setZoom((v) => v * 1.3, {
			origin: 'control',
		});
	};
	const doZoomOut = () => {
		viewport.setZoom((v) => v / 1.3, {
			origin: 'control',
		});
	};
	const reset = () => {
		viewport.fitEverythingOnScreen({ origin: 'control' });
	};
	return (
		<Box gap col className={clsx(className)} {...props}>
			{fit && (
				<Button emphasis="ghost" size="small" onClick={reset}>
					<Icon name="maximize" />
				</Button>
			)}
			{zoomIn && (
				<Button emphasis="ghost" size="small" onClick={doZoomIn}>
					<Icon name="zoomIn" />
				</Button>
			)}
			{zoomOut && (
				<Button emphasis="ghost" size="small" onClick={doZoomOut}>
					<Icon name="zoomOut" />
				</Button>
			)}
		</Box>
	);
}
