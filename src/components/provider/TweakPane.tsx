import { useDeferredValue, useEffect, useState } from 'react';
import { PROPS } from '../../uno/index.js';
import { Box } from '../box/Box.js';
import { Button } from '../button/Button.js';
import { Collapsible } from '../collapsible/Collapsible.js';
import { Icon } from '../icon/Icon.js';
import { Slider } from '../slider/Slider.js';

function getPropertyValue(prop: string, defaultValue: number) {
	const value = document.documentElement.style.getPropertyValue(prop);
	const parsed = parseFloat(value);
	return isNaN(parsed) ? defaultValue : parsed;
}

function useTweakProperty(prop: string, defaultValue: number) {
	const [value, setValue] = useState(() => {
		const v = document.documentElement.style.getPropertyValue(prop);
		const parsed = parseFloat(v);
		return isNaN(parsed) ? defaultValue : parsed;
	});
	const delayedValue = useDeferredValue(value);
	useEffect(() => {
		document.documentElement.style.setProperty(prop, `${delayedValue}`);
	}, [delayedValue]);
	return [value, setValue] as const;
}

function TweakSlider({
	prop,
	min,
	max,
	label,
	step,
	defaultValue,
}: {
	prop: string;
	min: number;
	max: number;
	label: string;
	step?: number;
	defaultValue: number;
}) {
	const [value, setValue] = useTweakProperty(prop, defaultValue);
	return (
		<Slider.Root
			value={value}
			onValueChange={(v) => {
				setValue(Slider.getSingle(v));
			}}
			min={min}
			max={max}
			step={step}
			className="w-200px flex flex-col gap-xs"
		>
			<div className="w-full flex flex-row items-center justify-between">
				<label>{label}</label>
				<Slider.Value />
			</div>
			<Slider.Ui />
		</Slider.Root>
	);
}

export function TweakPane() {
	return (
		<Box
			elevated="lg"
			surface="white"
			border
			className="fixed right-xs top-xs z-1000000"
		>
			<Collapsible>
				<Collapsible.Trigger render={<Button size="small" emphasis="ghost" />}>
					<Icon name="gear" />
				</Collapsible.Trigger>
				<Collapsible.Content>
					<Box col p gap="sm">
						<TweakSlider
							prop={PROPS.USER.COLOR.PRIMARY_HUE}
							min={0}
							max={360}
							step={1}
							defaultValue={80}
							label="Primary hue"
						/>
						<TweakSlider
							prop={PROPS.USER.COLOR.ACCENT_HUE}
							min={0}
							max={360}
							step={1}
							defaultValue={340}
							label="Accent hue"
						/>
						<TweakSlider
							prop={PROPS.USER.SATURATION}
							min={0}
							max={1}
							step={0.05}
							defaultValue={1}
							label="Saturation"
						/>
						<TweakSlider
							prop={PROPS.USER.SHADOW_SPREAD}
							min={0}
							max={1}
							step={0.25}
							defaultValue={0}
							label="Shadow Spread"
						/>
						<TweakSlider
							prop={PROPS.USER.BORDER_SCALE}
							min={0}
							max={4}
							step={0.25}
							defaultValue={1}
							label="Border Scale"
						/>
						<TweakSlider
							prop={PROPS.USER.CORNER_SCALE}
							min={0}
							max={2}
							step={0.125}
							defaultValue={1}
							label="Corner Scale"
						/>
						<TweakSlider
							prop={PROPS.USER.SPACING_SCALE}
							min={0}
							max={2}
							step={0.125}
							defaultValue={1}
							label="Spacing Scale"
						/>
					</Box>
				</Collapsible.Content>
			</Collapsible>
		</Box>
	);
}
