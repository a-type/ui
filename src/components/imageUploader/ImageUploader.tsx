import classNames, { clsx } from 'clsx';
import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useId,
	useState,
} from 'react';
import { Button, ButtonProps } from '../button/index.js';
import {
	CameraDeviceSelector,
	CameraFullscreenButton,
	CameraRoot,
	CameraShutterButton,
} from '../camera/index.js';
import { Icon } from '../icon/index.js';

export interface ImageUploaderProps {
	value: string | null;
	onChange: (value: File | null) => void;
	className?: string;
	maxDimension?: number;
	children?: ReactNode;
}

/**
 * Renders an image if one is already set, and allows either clicking
 * on the image to select a new one, or dragging a new image onto the
 * component to replace the existing one.
 */
export function ImageUploaderRoot({
	value,
	onChange: handleChange,
	maxDimension,
	children,
	...rest
}: ImageUploaderProps) {
	const inputId = useId();
	const [dragging, setDragging] = useState(false);
	const [draggingOver, setDraggingOver] = useState(false);

	const onDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setDraggingOver(true);
	}, []);

	const onDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setDraggingOver(false);
	}, []);

	const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setDraggingOver(true);
	}, []);

	const onChange = useCallback(
		async (file: File | null) => {
			if (!file) {
				handleChange(null);
			} else if (maxDimension) {
				let resizer = await import('browser-image-resizer');
				// @ts-ignore
				resizer = resizer.readAndCompressImage ? resizer : resizer.default;
				if (!resizer || !resizer.readAndCompressImage) {
					// fallback. this happens in dev environments using untransformed TS.
					// TODO: fix this.
					console.warn(
						'browser-image-resizer not available, uploading original image',
					);
					handleChange(file);
					return;
				}

				const resizedImage = await resizer.readAndCompressImage(file, {
					maxWidth: maxDimension,
					maxHeight: maxDimension,
					mimeType: file.type,
				});
				handleChange(new File([resizedImage], file.name, { type: file.type }));
			} else {
				handleChange(file);
			}
		},
		[handleChange, maxDimension],
	);

	const onDrop = useCallback(
		(e: React.DragEvent<HTMLDivElement>) => {
			e.preventDefault();
			e.stopPropagation();
			setDraggingOver(false);
			if (e.dataTransfer.files.length > 0) {
				onChange(e.dataTransfer.files[0]);
			}
		},
		[onChange],
	);

	const onDragStart = useCallback((e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setDragging(true);
	}, []);

	const onDragEnd = useCallback((e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setDragging(false);
	}, []);

	const onFileChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			if (e.target.files && e.target.files.length > 0) {
				onChange(e.target.files[0]);
			}
		},
		[onChange],
	);

	const onFileClick = useCallback((e: React.MouseEvent<HTMLInputElement>) => {
		e.stopPropagation();
	}, []);

	return (
		<ImageUploaderContext.Provider
			value={{ inputId, dragging, draggingOver, value, onChange }}
		>
			<div
				className={classNames(
					'relative overflow-hidden rounded-lg',
					rest.className,
				)}
				onDragEnter={onDragEnter}
				onDragLeave={onDragLeave}
				onDragOver={onDragOver}
				onDrop={onDrop}
				onDragStart={onDragStart}
				onDragEnd={onDragEnd}
			>
				{!value && (
					<input
						type="file"
						accept="image/*"
						onChange={onFileChange}
						onClick={onFileClick}
						className="absolute inset--99999 op-0"
						id={inputId}
					/>
				)}
				{children}
			</div>
		</ImageUploaderContext.Provider>
	);
}

const ImageUploaderContext = createContext<{
	inputId: string;
	dragging: boolean;
	draggingOver: boolean;
	value: string | null;
	onChange: (file: File | null) => void;
} | null>(null);
function useUploaderContext() {
	const context = useContext(ImageUploaderContext);
	if (!context) {
		throw new Error('ImageUploaderContext not found');
	}
	return context;
}

function ImageUploaderPrebuilt(
	props: Omit<ImageUploaderProps, 'children'> & {
		facingMode?: 'user' | 'environment';
	},
) {
	const [cameraOpen, setCameraOpen] = useState(false);
	const openCamera = () => setCameraOpen(true);

	return (
		<ImageUploaderRoot {...props}>
			<ImageUploaderDisplay />

			<ImageUploaderEmptyControls>
				<ImageUploaderFileButton />
				<Button color="ghost" onClick={openCamera}>
					<Icon name="camera" />
					<span>Camera</span>
				</Button>
			</ImageUploaderEmptyControls>
			{!props.value && cameraOpen && (
				<CameraRoot
					className="absolute w-full h-full z-1"
					format="image/png"
					onCapture={(file) => {
						props.onChange(file);
						setCameraOpen(false);
					}}
					facingMode={props.facingMode}
				>
					<CameraShutterButton />
					<CameraDeviceSelector />
					<CameraFullscreenButton />
					<Button
						onClick={() => setCameraOpen(false)}
						color="ghost"
						size="small"
						className="text-white absolute top-2 left-2"
					>
						Cancel
					</Button>
				</CameraRoot>
			)}
			<ImageUploaderRemoveButton />
		</ImageUploaderRoot>
	);
}

export function ImageUploaderFileButton({ children, ...props }: ButtonProps) {
	const { inputId, dragging } = useUploaderContext();

	return (
		<Button color="ghost" asChild {...props}>
			<label htmlFor={inputId}>
				{children ?? (
					<>
						<Icon name="upload" />
						<span>{dragging ? 'Drop' : 'Upload'}</span>
					</>
				)}
			</label>
		</Button>
	);
}

export function ImageUploaderRemoveButton({ className, ...rest }: ButtonProps) {
	const { value, onChange } = useUploaderContext();
	if (!value) return null;
	return (
		<Button
			color="ghost"
			size="icon"
			className={clsx(
				'layer-variants:(absolute top-2 right-2 w-32px h-32px border-none p-2 cursor-pointer bg-white color-black rounded-lg transition-colors shadow-sm z-10)',
				className,
			)}
			onClick={() => onChange(null)}
			{...rest}
		>
			<Icon name="x" />
		</Button>
	);
}

export function ImageUploaderDisplay({
	className,
	...rest
}: {
	className?: string;
}) {
	const { value } = useUploaderContext();
	return value ? (
		<img
			src={value}
			className={clsx(
				'layer-components:(w-full h-full object-cover object-center)',
				className,
			)}
			{...rest}
		/>
	) : null;
}

export function ImageUploaderEmptyControls({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	const { value, draggingOver } = useUploaderContext();

	if (value) return null;

	return (
		<div
			className={classNames(
				'layer-components:(absolute inset-0 flex flex-col items-center justify-center gap-3)',
				{
					'layer-components:bg-[rgba(0,0,0,0.05)]': !draggingOver,
					'layer-components:bg-[rgba(0,0,0,0.1)]': draggingOver,
				},
				className,
			)}
		>
			{children}
		</div>
	);
}

export const ImageUploader = Object.assign(ImageUploaderPrebuilt, {
	Root: ImageUploaderRoot,
	FileButton: ImageUploaderFileButton,
	RemoveButton: ImageUploaderRemoveButton,
	Display: ImageUploaderDisplay,
	EmptyControls: ImageUploaderEmptyControls,
});
