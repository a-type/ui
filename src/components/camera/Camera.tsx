import {
	Button as BaseButton,
	ButtonProps as BaseButtonProps,
} from '@base-ui/react/button';
import { clsx } from 'clsx';
import {
	MouseEvent,
	ReactNode,
	Ref,
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import { withClassName } from '../../hooks.js';
import { Box } from '../box/Box.js';
import { Button, ButtonProps } from '../button/index.js';
import { Icon } from '../icon/index.js';
import { Select, SelectContent, SelectItem } from '../select/index.js';
import cls from './Camera.module.css';

const CameraContext = createContext<{
	triggerCapture: () => void;
	selectedDeviceId: string | undefined | null;
	selectDeviceId: (id: string | null) => void;
	devices: MediaDeviceInfo[];
	fullscreen: boolean;
	setFullscreen: (fullscreen: boolean) => void;
}>({
	triggerCapture: () => {},
	selectedDeviceId: 'default',
	selectDeviceId: () => {},
	devices: [],
	fullscreen: false,
	setFullscreen: () => {},
});

export interface CameraRootProps {
	className?: string;
	onCapture?: (data: File) => void;
	children?: ReactNode;
	format?: 'image/png' | 'image/jpeg';
	facingMode?: 'user' | 'environment';
	ref?: Ref<HTMLDivElement>;
}

export function CameraRoot({
	className,
	onCapture,
	children,
	facingMode,
	format = 'image/png',
	ref,
	...rest
}: CameraRootProps) {
	const videoRef = useRef<HTMLVideoElement>(null);

	const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
	const [stream, setStream] = useState<MediaStream | undefined>();

	useEffect(() => {
		navigator.mediaDevices?.enumerateDevices().then((devices): void => {
			setDevices(devices.filter((device) => device.kind === 'videoinput'));
		});
	}, [!!stream]);

	const [selectedDeviceId, setSelectedDeviceId] = useState<
		string | undefined | null
	>();

	const cleanupRef = useRef<() => void>(undefined);
	useEffect(() => {
		const init = () => {
			cleanupRef.current?.();
			navigator.mediaDevices
				?.getUserMedia({
					video: {
						deviceId: selectedDeviceId || undefined,
						facingMode,
					},
				})
				.then((s) => {
					setStream(s);
					cleanupRef.current = () =>
						s.getTracks().forEach((track) => track.stop());
				});
		};
		init();

		// reconnect if browser was backgrounded
		const reconnect = () => {
			if (stream?.active || document.visibilityState !== 'visible') {
				return;
			}
			init();
		};
		document.addEventListener('visibilitychange', reconnect);

		return () => {
			document.removeEventListener('visibilitychange', reconnect);
			cleanupRef.current?.();
		};
	}, [selectedDeviceId, facingMode]);

	useEffect(() => {
		const video = videoRef.current;
		if (video && stream) {
			video.srcObject = stream;
			return () => {
				video.srcObject = null;
			};
		}
	}, [stream]);

	const [capture, setCapture] = useState<ImageCapture>();

	useEffect(() => {
		if (typeof window !== 'undefined' && 'ImageCapture' in window) {
			const videoTrack = stream?.getVideoTracks()[0];
			if (videoTrack) {
				const capturer = new ImageCapture(videoTrack);
				setCapture(capturer);
				capturer.getPhotoCapabilities().then((capabilities) => {
					console.log('ImageCapture capabilities:', capabilities);
				});
			}
		}
	}, [stream]);

	const triggerCapture = () => {
		if (capture) {
			capture.takePhoto().then((blob) => {
				const file = new File([blob], `image.${format.split('/')[1]}`, {
					type: format,
				});
				onCapture?.(file);
			});
		} else {
			// ImageCapture not supported, fallback to
			// canvas capture
			const video = videoRef.current;
			if (video) {
				const canvas = document.createElement('canvas');
				canvas.width = video.videoWidth;
				canvas.height = video.videoHeight;
				canvas.getContext('2d')?.drawImage(video, 0, 0);
				const data = canvas.toDataURL(format);
				const file = dataURItoFile(data);
				onCapture?.(file);
			}
		}
	};

	const [fullscreen, setFullscreen] = useState(false);

	return (
		<CameraContext.Provider
			value={{
				devices,
				triggerCapture,
				selectedDeviceId,
				selectDeviceId: setSelectedDeviceId,
				setFullscreen,
				fullscreen,
			}}
		>
			<Box
				surface="ambient"
				rounded="md"
				overflow="hidden"
				className={clsx(
					'@mode-dark',
					cls.root,
					fullscreen && cls.fullscreen,
					className,
				)}
				{...rest}
				ref={ref}
			>
				<video
					ref={videoRef}
					className={cls.video}
					autoPlay
					muted
					playsInline
				></video>
				{children}
			</Box>
		</CameraContext.Provider>
	);
}

export type CameraShutterButtonProps = BaseButtonProps & {
	className?: string;
	onClick?: (ev: MouseEvent<HTMLButtonElement>) => void;
	ref?: Ref<HTMLButtonElement>;
};

export function CameraShutterButton({
	onClick,
	ref,
	...rest
}: CameraShutterButtonProps) {
	const { triggerCapture } = useContext(CameraContext);

	return (
		<StyledShutterButton
			ref={ref}
			aria-label={'Capture photo'}
			onClick={(ev) => {
				triggerCapture();
				onClick?.(ev);
			}}
			{...rest}
		/>
	);
}

const StyledShutterButton = withClassName(
	BaseButton,
	'@mode-light',
	cls.shutterButton,
);

export interface CameraDeviceSelectorProps {
	className?: string;
}

export const CameraDeviceSelector = ({
	className,
	...props
}: CameraDeviceSelectorProps) => {
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
				emphasis="ghost"
				className={clsx(cls.swapButton, className)}
				onClick={swapCamera}
				{...props}
			>
				<Icon name="refresh" />
			</Button>
		);
	}

	return (
		<Select
			value={selectedDeviceId || 'default'}
			onValueChange={selectDeviceId}
			{...props}
		>
			<Select.Trigger
				render={
					<Button emphasis="ghost" className={clsx(cls.swapButton, className)}>
						<Icon name="refresh" />
					</Button>
				}
			/>
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

export const CameraFullscreenButton = (props: ButtonProps) => {
	const { setFullscreen, fullscreen } = useContext(CameraContext);
	return (
		<Button
			{...props}
			emphasis="ghost"
			className={clsx(cls.fullscreenButton, props.className)}
			onClick={() => setFullscreen(!fullscreen)}
		>
			<Icon name={fullscreen ? 'x' : 'maximize'} />
		</Button>
	);
};

const CameraBase = (props: CameraRootProps) => {
	return (
		<CameraRoot {...props}>
			<CameraShutterButton />
			<CameraDeviceSelector />
			<CameraFullscreenButton />
		</CameraRoot>
	);
};

export const Camera = Object.assign(CameraBase, {
	Root: CameraRoot,
	ShutterButton: CameraShutterButton,
	DeviceSelector: CameraDeviceSelector,
	FullscreenButton: CameraFullscreenButton,
});

function dataURItoFile(dataURI: string) {
	// convert base64/URLEncoded data component to raw binary data held in a string
	let byteString;
	if (dataURI.split(',')[0].indexOf('base64') >= 0)
		byteString = atob(dataURI.split(',')[1]);
	else byteString = unescape(dataURI.split(',')[1]);
	// separate out the mime component
	const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
	// write the bytes of the string to a typed array
	const ia = new Uint8Array(byteString.length);
	for (let i = 0; i < byteString.length; i++) {
		ia[i] = byteString.charCodeAt(i);
	}
	const fileExt = mimeString.split('/')[1];
	return new File([ia], `image.${fileExt}`, { type: mimeString });
}
