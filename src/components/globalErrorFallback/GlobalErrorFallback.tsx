import { useLocalStorage } from '../../hooks/useStorage.js';
import { Box, type BoxProps } from '../box/Box.js';
import { Button, ButtonProps } from '../button/Button.js';
import { Icon } from '../icon/Icon.js';
import { Heading, P } from '../typography/typography.js';

export interface GlobalErrorFallbackProps extends BoxProps {}

export function GlobalErrorFallback({
	children,
	...rest
}: GlobalErrorFallbackProps) {
	const hadRecentError = useHadRecentError();

	return (
		<Box col layout="center center" p {...rest}>
			<Box
				col
				items="start"
				justify="center"
				gap
				style={{ maxWidth: 'max-content' }}
			>
				<Heading emphasis="primary" render={<h1 />}>
					Something went wrong
				</Heading>
				<P>
					Sorry about this. The app has crashed.{' '}
					{hadRecentError
						? `Looks like refreshing didn't work either...`
						: `You can try refreshing.`}
				</P>
				{children}
				<ReloadButton />
			</Box>
		</Box>
	);
}

export interface ReloadButtonProps extends ButtonProps {}

export function ReloadButton({ onClick, ...props }: ReloadButtonProps) {
	const [_, setLastErrorReload] = useLastErrorReload();

	const refresh = () => {
		setLastErrorReload(Date.now() + 500);
		window.location.reload();
	};

	return (
		<Button
			{...props}
			onClick={(ev) => {
				onClick?.(ev);
				refresh();
			}}
		>
			<Icon name="refresh" />
			<span>Refresh</span>
		</Button>
	);
}

function useLastErrorReload() {
	return useLocalStorage('@a-type/ui/lastErrorReload', 0);
}

const now = Date.now();
export function useHadRecentError() {
	const [lastErrorReload] = useLocalStorage('@a-type/ui/lastErrorReload', 0);

	const hadRecentError =
		lastErrorReload < now && lastErrorReload > now - 1000 * 60 * 60;

	return hadRecentError;
}
