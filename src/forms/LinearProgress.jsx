export function LinearProgress() {
	const display = this.display || "inline-flex";
	const extraoptions = this.extraOptions || {};
	const percent = this.percent;
	const cssClass = css`
		--m3-linear-progress-shape: var(--m3-util-rounding-full);
		.LinearProgress-m3-container {
			background-color: rgb(var(--m3-scheme-primary-container));
			height: 0.25rem;
			min-width: 8rem;
			overflow: hidden;
			border-radius: var(--m3-linear-progress-shape);
		}
		.percent {
			background-color: rgb(var(--m3-scheme-primary));
			transition: all 200ms;
			border-radius: var(--m3-linear-progress-shape);
		}

		.LinearProgress-m3-container {
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}
		@media screen and (forced-colors: active) {
			.percent {
				background-color: selecteditem;
			}
		}
	`;
	this._leak = true;
	return (
		<span class={cssClass}>
			<div class={`LinearProgress-m3-container`} {...extraoptions} style={`display: ${display};`} role={`progressbar`}>
				<div style={`width: ${percent}%;`} class={`percent`} />
			</div>
		</span>
	)
}
