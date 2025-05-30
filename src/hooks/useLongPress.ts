import { preventDefault } from '@a-type/utils';
import { useDrag } from '@use-gesture/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useAnimationFrame } from './useAnimationFrame.js';
import { useStableCallback } from './useStableCallback.js';

/**
 * The press gesture must remain within THRESHOLD_DISTANCE until delay time has passed
 * to be considered a press.
 *
 * After delay, the gesture must remain within CANCEL_DISTANCE or be cancelled.
 */

const THRESHOLD_DISTANCE = 10;
const CANCEL_DISTANCE = 30;

export function useLongPress({
	onActivate,
	onDurationReached,
	duration = 2000,
	delay = 200,
}: {
	onActivate: () => void;
	onDurationReached: () => void;
	duration?: number;
	delay?: number;
}) {
	const [gestureState, setGestureState] = useState<'released' | 'pressed'>(
		'released',
	);
	const [state, setState] = useState<
		'holding' | 'candidate' | 'idle' | 'failed' | 'pending'
	>('idle');
	const timeoutRef = useRef<number | null>(null);
	const ref = useRef<any>(null);

	const gestureStateRef = useRef<{ distance: number; startedAt: number }>({
		distance: 0,
		startedAt: 0,
	});
	useDrag(
		({ first, cancel, elapsedTime, down, distance }) => {
			const totalDistance = Math.sqrt(
				Math.pow(distance[0], 2) + Math.pow(distance[1], 2),
			);
			gestureStateRef.current.distance = totalDistance;

			if (elapsedTime < delay && totalDistance > THRESHOLD_DISTANCE) {
				cancel();
				setGestureState('released');
				return;
			}

			if (totalDistance > CANCEL_DISTANCE) {
				cancel();
				setGestureState('released');
				return;
			}

			if (first) {
				gestureStateRef.current.startedAt = Date.now();
				try {
					navigator?.vibrate?.(200);
				} catch (err) {
					console.log(err);
				}
			}

			if (down) {
				setGestureState('pressed');
			} else {
				setGestureState('released');
			}
		},
		{
			// triggerAllEvents: true,
			// preventDefault: true,
			target: ref,
		},
	);

	useAnimationFrame(() => {
		const gestureDuration = gestureStateRef.current.startedAt
			? Date.now() - gestureStateRef.current.startedAt
			: 0;
		const distance = gestureStateRef.current.distance;

		// nothing to do in this case
		if (
			gestureState === 'released' &&
			(state === 'idle' || state === 'failed')
		) {
			return;
		}

		if (gestureState === 'released') {
			if (state === 'holding' || state === 'candidate') {
				// holding for longer than duration - activate
				if (gestureDuration >= duration + delay && distance < CANCEL_DISTANCE) {
					onActivate();
					setState('idle');
				} else {
					// normal release before duration - cancel
					setState('idle');
				}
			} else if (state === 'pending' && distance < THRESHOLD_DISTANCE) {
				setState('failed');
			}
		} else if (gestureState === 'pressed') {
			// begin a new press
			if (state === 'idle' || state === 'failed') {
				setState('pending');
			} else if (state === 'pending' && gestureDuration >= delay) {
				// begin holding after delay has passed
				setState('holding');
			} else if (distance > CANCEL_DISTANCE) {
				// cancel if moved too far
				setState('idle');
			} else if (gestureDuration >= duration + delay) {
				// not yet confirmed, but meets criteria
				setState('candidate');
			}
		}
	});

	const onDurationReachedStable = useStableCallback(onDurationReached);
	useEffect(() => {
		if (state === 'failed') {
			const timeout = setTimeout(() => {
				setState('idle');
			}, 1000);
			return () => {
				clearTimeout(timeout);
			};
		} else if (state === 'candidate') {
			onDurationReachedStable();
		}
	}, [state, onDurationReachedStable]);

	const props = useMemo(
		() => ({
			onContextMenu: preventDefault,
			style: {
				touchAction: 'none',
			},
		}),
		[],
	);

	return {
		ref,
		timeoutRef,
		state,
		props,
	};
}
