export function SegmentedButtonContainer() {
	const display = this.display || "inline-flex";
	const extraoptions = this.extraOptions || {};
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
			<div class={`SegmentedButtonContainer-m3-container`} style={`display: ${display};`} {...extraoptions}>
				{this.children}
			</div>
		</span>
	)
}
