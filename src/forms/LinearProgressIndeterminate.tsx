export const LinearProgressIndeterminate: Component<{

	display?: string,
	extraOptions?: any,
}, {
	_leak: true,
}> = function() {
	this.display = this.display || "inline-flex";
	this.extraOptions = this.extraOptions || {};

	const cssClass = css`
		--m3-linear-progress-shape: var(--m3-util-rounding-full);
		.LinearProgressIndeterminate-m3-container {
			background-color: rgb(var(--m3-scheme-primary-container));
			height: 0.25rem;
			min-width: 8rem;
			position: relative;
			overflow: hidden;
			border-radius: var(--m3-linear-progress-shape);
		}
		.percent {
			background-color: rgb(var(--m3-scheme-primary));
			animation: progress infinite 1.5s ease-out;
			border-radius: var(--m3-linear-progress-shape);
			width: 50%;
			top: 0;
			bottom: 0;
			position: absolute;
		}
		@keyframes progress {
			0% {
				left: -50%;
			}
			100% {
				left: 125%;
			}
		}

		.LinearProgressIndeterminate-m3-container {
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
				{...this.extraOptions}

				role="progressbar"
				class="LinearProgressIndeterminate-m3-container"
			>
				<div class="percent" />
			</div>
		</span>
	)
}
