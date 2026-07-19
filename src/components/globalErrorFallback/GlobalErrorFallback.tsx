import { Box, BoxProps, Heading, P } from '@a-type/ui';
import { useLocalStorage } from '../../hooks.js';

export function GlobalErrorFallback({ children, ...rest }: BoxProps) {
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
						? `Looks like refreshing didn't work either... I recommend reporting a bug using the button below.`
						: `You can try refreshing, but if
					that doesn't work, use the button below to report the issue.`}
				</P>
				{children}
				<ReloadButton />
			</Box>
		</Box>
	);
}

import { Button, ButtonProps, Icon } from '@a-type/ui';

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
