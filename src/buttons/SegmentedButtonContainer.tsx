export const SegmentedButtonContainer: Component<{
	display?: string,
	extraOptions?: any,
}, {
	children: any,
}> = function() {
	this.display = this.display || "inline-flex";
	this.extraOptions = this.extraOptions || {};

	const cssClass = css`
		--m3-segmented-button-shape: var(--m3-util-rounding-full);
		  
		.SegmentedButtonContainer-m3-container {
			border: 0.0625rem solid rgb(var(--m3-scheme-outline));
			height: 2.5rem;
			border-radius: var(--m3-segmented-button-shape);
			overflow: hidden;
		}
		.SegmentedButtonContainer-m3-container > span > input {
			position: absolute;
			opacity: 0;
			pointer-events: none;
		}
	`;
	this._leak = true;

	return (
		<span class={cssClass}>
			<div class={`SegmentedButtonContainer-m3-container`} style={use`display: ${this.display};`} {...this.extraOptions}>
				{this.children}
			</div>
		</span>
	)
}
