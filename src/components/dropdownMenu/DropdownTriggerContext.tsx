import { createContext, ReactNode, useContext } from 'react';

const DropdownTriggerContext = createContext(false);

export function DropdownTriggerProvider({
	children,
}: {
	children?: ReactNode;
}) {
	return (
		<DropdownTriggerContext.Provider value={true}>
			{children}
		</DropdownTriggerContext.Provider>
	);
}

export function useIsDropdownTrigger() {
	return useContext(DropdownTriggerContext);
}
