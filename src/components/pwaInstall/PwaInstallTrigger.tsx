import { Button, ButtonProps } from '../button/Button.js';
import { Icon } from '../icon/Icon.js';
import { pwaInstallerState } from './state.js';
import { useIsInstalled } from './useIsInstallReady.js';

export interface PwaInstallTriggerProps extends ButtonProps {}

export function PwaInstallTrigger({
	children,
	...rest
}: PwaInstallTriggerProps) {
	const installed = useIsInstalled();
	if (installed) {
		return null;
	}

	return (
		<Button
			color="primary"
			emphasis="light"
			{...rest}
			onClick={() => {
				pwaInstallerState.open = true;
			}}
		>
			{children ?? (
				<>
					<Icon name="star" /> Install
				</>
			)}
		</Button>
	);
}
