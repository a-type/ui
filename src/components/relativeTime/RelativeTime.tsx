'use client';

import { shortenTimeUnits } from '@a-type/utils';
import { differenceInMinutes } from 'date-fns/differenceInMinutes';
import { formatDistanceToNowStrict } from 'date-fns/formatDistanceToNowStrict';
import { useEffect, useMemo, useState } from 'react';

export interface RelativeTimeProps {
	value: number;
	abbreviate?: boolean;
	/**
	 * Makes it count down seconds for a future date value as it approaches.
	 * Does not affect past dates.
	 */
	countdownSeconds?: boolean;
	/**
	 * Remove "from now" or "ago" from the output.
	 */
	disableRelativeText?: boolean;
}

function formatDistanceToNow(date: Date, relativeText = true) {
	const now = Date.now();
	if (Math.abs(date.getTime() - now) < 1000) {
		return 'just now';
	}
	return (
		formatDistanceToNowStrict(date) +
		(relativeText ? (date.getTime() < now ? ' ago' : ' from now') : '')
	);
}

export function RelativeTime({
	value,
	abbreviate,
	countdownSeconds,
	disableRelativeText,
}: RelativeTimeProps) {
	const asDate = useMemo(() => new Date(value), [value]);
	const [time, setTime] = useState(() =>
		abbreviate
			? shortenTimeUnits(formatDistanceToNow(asDate, !disableRelativeText))
			: formatDistanceToNow(asDate, !disableRelativeText),
	);
	// increase update rate if the date is less than 1 minute away and in the future
	// (past is ok to just leave ~1 minute)
	const updateRate =
		countdownSeconds &&
		asDate.getTime() > Date.now() &&
		Math.abs(differenceInMinutes(asDate, new Date())) < 1
			? 1000
			: 60 * 1000;

	useEffect(() => {
		const update = () => {
			setTime(
				abbreviate
					? shortenTimeUnits(formatDistanceToNow(asDate, !disableRelativeText))
					: formatDistanceToNow(asDate, !disableRelativeText),
			);
		};
		const interval = setInterval(update, updateRate);
		update();
		return () => clearInterval(interval);
	}, [asDate, abbreviate, updateRate, disableRelativeText]);

	return <>{time}</>;
}
