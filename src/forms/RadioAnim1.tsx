import { Layer } from "../ripple";

export const RadioAnim1: Component<{

	display?: string,
	extraOptions?: any,
}, {
	children: any,
	_leak: true,
}> = function() {
	this.display = this.display || "inline-flex";
	this.extraOptions = this.extraOptions || {};

	const cssClass = css`
		.RadioAnim1-m3-container {
			position: relative;
			width: 1.25rem;
			height: 1.25rem;
		}

		.RadioAnim1-m3-container input {
			position: absolute;
			opacity: 0;
		}

		.layer-container {
			position: absolute;
			inset: -0.625rem;
			width: 2.5rem;
			height: 2.5rem;
			border-radius: var(--m3-util-rounding-full);
			color: rgb(var(--m3-scheme-on-surface-variant));
			cursor: pointer;
		}

		.radio-circle {
			position: absolute;
			inset: 0.625rem;
			width: 1.25rem;
			height: 1.25rem;
			border-radius: var(--m3-util-rounding-full);
			border: solid 0.125rem currentColor;
			transition: all 0.3s;
			-webkit-tap-highlight-color: transparent;
		}

		.radio-dot {
			position: absolute;
			inset: 0.9375rem;
			width: 0.625rem;
			height: 0.625rem;
			scale: 0;
			border-radius: var(--m3-util-rounding-full);
			background-color: currentColor;
			transition: all 0.3s;
			-webkit-tap-highlight-color: transparent;
		}

		input:focus-visible + .layer-container {
			color: rgb(var(--m3-scheme-on-surface));
		}

		input:checked + .layer-container {
			color: rgb(var(--m3-scheme-primary));
		}

		input:checked + .layer-container .radio-dot {
			scale: 1;
		}

		input:disabled + .layer-container {
			color: rgb(var(--m3-scheme-on-surface) / 0.38);
			cursor: not-allowed;
		}

		.RadioAnim1-m3-container {
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}

		@media screen and (forced-colors: active) {
			input:checked + .layer-container .radio-circle {
				border-color: selecteditem;
			}
			.radio-dot {
				background-color: selecteditem;
			}
			input:disabled + .layer-container {
				opacity: 0.38;
			}
		}
	`;
	this._leak = true;

	const layer = <Layer />;
	return (
		<label class={cssClass}>
			<div
				style={use`display: ${this.display};`}
				{...this.extraOptions}

				class="RadioAnim1-m3-container"
			>
				{this.children}
				<div class="layer-container" on:pointerdown={layer.$.ripple}>
					{layer}
					<div class="radio-circle"></div>
					<div class="radio-dot"></div>
				</div>
			</div>
		</label>
	)
}
