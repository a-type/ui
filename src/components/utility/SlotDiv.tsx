import { useRender, UseRenderComponentProps } from '@base-ui/react/use-render';

export interface SlotDivProps extends UseRenderComponentProps<'div'> {}
export const SlotDiv = function SlotDiv({
	ref,
	render,
	...rest
}: SlotDivProps) {
	const result = useRender({
		defaultTagName: 'div',
		props: rest,
		ref,
		render,
	});
	return result;
};
