import classNames from 'classnames';
import {
	MouseEvent,
	ReactNode,
	createContext,
	forwardRef,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import { Button } from '../button.js';
import { Icon } from '../icon.js';
import { Select, SelectContent, SelectItem, SelectTrigger } from '../select.js';
import { Slot } from '@radix-ui/react-slot';
import { withClassName } from '../../hooks.js';

const CameraContext = createContext<{
	triggerCapture: () => void;
	selectedDeviceId: string | undefined;
	selectDeviceId: (id: string) => void;
	devices: MediaDeviceInfo[];
}>({
	triggerCapture: () => {},
	selectedDeviceId: 'default',
	selectDeviceId: () => {},
	devices: [],
});

export interface CameraRootProps {
	className?: string;
	onCapture?: (data: string) => void;
	children?: ReactNode;
	format?: 'image/png' | 'image/jpeg';
}

export const CameraRoot = forwardRef<HTMLDivElement, CameraRootProps>(
	function Camera(
		{ className, onCapture, children, format = 'image/png', ...rest },
		ref,
	) {
		const videoRef = useRef<HTMLVideoElement>(null);

		const triggerCapture = () => {
			const video = videoRef.current;
			if (video) {
				const canvas = document.createElement('canvas');
				canvas.width = video.videoWidth;
				canvas.height = video.videoHeight;
				canvas.getContext('2d')?.drawImage(video, 0, 0);
				const data = canvas.toDataURL(format);
				onCapture?.(data);
			}
		};

		const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
		useEffect(() => {
			navigator.mediaDevices.enumerateDevices().then((devices): void => {
				setDevices(devices.filter((device) => device.kind === 'videoinput'));
			});
		}, []);
		const [selectedDeviceId, setSelectedDeviceId] = useState<
			string | undefined
		>();

		useEffect(() => {
			const video = videoRef.current;
			if (video) {
				navigator.mediaDevices
					.getUserMedia({
						video: {
							deviceId: selectedDeviceId,
						},
					})
					.then((stream) => {
						video.srcObject = stream;
					});

				return () => {
					const src = video.srcObject;
					if (src instanceof MediaStream) {
						src.getTracks().forEach((track) => track.stop());
					}
				};
			}
		}, [devices, selectedDeviceId]);

		return (
			<CameraContext.Provider
				value={{
					devices,
					triggerCapture,
					selectedDeviceId,
					selectDeviceId: setSelectedDeviceId,
				}}
			>
				<div
					ref={ref}
					className={classNames(
						'layer-components:([font-family:inherit] text-white bg-black rounded-lg overflow-hidden min-w-4 min-h-4 relative)',
						className,
					)}
					{...rest}
				>
					<video
						ref={videoRef}
						className="w-full h-full object-cover"
						autoPlay
						muted
						playsInline
					></video>
					{children}
				</div>
			</CameraContext.Provider>
		);
	},
);

export interface CameraShutterButtonProps {
	className?: string;
	asChild?: boolean;
	onClick?: (ev: MouseEvent<HTMLButtonElement>) => void;
}

export const CameraShutterButton = forwardRef<
	HTMLButtonElement,
	CameraShutterButtonProps
>(function CameraShutterButton({ asChild, onClick, ...rest }, ref) {
	const Comp = asChild ? Slot : StyledShutterButton;
	const { triggerCapture } = useContext(CameraContext);

	return (
		<Comp
			ref={ref}
			aria-label={asChild ? undefined : 'Capture photo'}
			onClick={(ev) => {
				triggerCapture();
				onClick?.(ev);
			}}
			{...rest}
		/>
	);
});

const StyledShutterButton = withClassName(
	'button',
	'absolute bottom-3 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full cursor-pointer border-2 border-black border-solid ring-2 ring-white opacity-80',
	'hover:bg-gray-1 hover:opacity-100',
	'focus-visible:bg-gray-2',
	'focus:ring-primary focus:outline-none focus:opacity-100',
	'sm:w-8 sm:h-8',
);

export interface CameraDeviceSelectorProps {}

export const CameraDeviceSelector = (props: CameraDeviceSelectorProps) => {
	const { devices, selectDeviceId, selectedDeviceId } =
		useContext(CameraContext);
	const swapCamera = () => {
		if (selectedDeviceId) {
			const index = devices.findIndex(
				(device) => device.deviceId === selectedDeviceId,
			);
			if (index === -1) {
				return;
			}
			selectDeviceId(devices[(index + 1) % devices.length].deviceId);
		} else {
			selectDeviceId(devices[0].deviceId);
		}
	};

	if (!devices.length || devices.length === 1) return null;
	if (devices.length === 2) {
		return (
			<Button
				size="icon"
				color="ghost"
				className="absolute bottom-2 left-2 text-white"
				onClick={swapCamera}
			>
				<Icon name="refresh" />
			</Button>
		);
	}

	return (
		<Select
			value={selectedDeviceId || 'default'}
			onValueChange={selectDeviceId}
		>
			<SelectTrigger asChild>
				<Button
					size="icon"
					color="ghost"
					className="absolute bottom-2 left-2 text-white"
				>
					<Icon name="refresh" />
				</Button>
			</SelectTrigger>
			<SelectContent>
				{devices.map((device) => (
					<SelectItem key={device.deviceId} value={device.deviceId}>
						{device.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};
