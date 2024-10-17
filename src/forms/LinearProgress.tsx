export const LinearProgress: Component<{
	percent: number,

	display?: string,
	extraOptions?: any,
}, {}> = function() {
	this.display = this.display || "inline-flex";
	this.extraOptions = this.extraOptions || {};

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
			<div
				style={use`display: ${this.display};`}
				class="LinearProgress-m3-container"

				role="progressbar"
				{...this.extraOptions}
			>
				<div style={use`width: ${this.percent}%`} class="percent" />
			</div>
		</span>
	)
}
