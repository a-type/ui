export function ArrowSvg(props: React.ComponentProps<'svg'>) {
	return (
		<svg
			width="10"
			height="5"
			viewBox="0 0 30 10"
			preserveAspectRatio="none"
			style={{ display: 'block', width: '100%', height: '100%' }}
			{...props}
		>
			<polygon points="0,0 30,0 15,10"></polygon>
		</svg>
	);
}
