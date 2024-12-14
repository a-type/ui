import * as React from 'react';

function useMergedRef<T>(
	...refs: (React.Ref<T> | undefined)[]
): React.RefCallback<T> {
	return React.useCallback((element: T) => {
		for (let i = 0; i < refs.length; i++) {
			const ref = refs[i];
			if (typeof ref === 'function') ref(element);
			else if (ref && typeof ref === 'object')
				(ref as React.MutableRefObject<T>).current = element;
		}
	}, refs);
}

export default useMergedRef;
