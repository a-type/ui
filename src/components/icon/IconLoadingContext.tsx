import { createContext, useContext } from 'react';

const IconLoadingContext = createContext(false);
export const IconLoadingProvider = IconLoadingContext.Provider;
export function useIconLoading() {
	return useContext(IconLoadingContext);
}
