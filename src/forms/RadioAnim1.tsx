export const RadioAnim1: Component<{

	display?: string,
	extraOptions: any,
}, {
	children: HTMLInputElement,
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
		.RadioAnim1-layer {
			position: absolute;
			inset: -0.625rem;
			width: 2.5rem;
			height: 2.5rem;
			border-radius: var(--m3-util-rounding-full);
			transition: all 200ms;
			cursor: pointer;
			--color: var(--m3-scheme-on-surface-variant);
			-webkit-tap-highlight-color: transparent;
		}
		.RadioAnim1-layer::before {
			content: " ";
			display: block;
			position: absolute;
			inset: 0.625rem;
			width: 1.25rem;
			height: 1.25rem;
			border-radius: var(--m3-util-rounding-full);
			border: solid 0.125rem rgb(var(--color));
			transition: all 0.3s;
		}
		.RadioAnim1-layer::after {
			content: " ";
			display: block;
			position: absolute;
			inset: 1.25rem;
			width: 0rem;
			height: 0rem;
			border-radius: var(--m3-util-rounding-full);
			background-color: rgb(var(--color));
			transition: all 0.3s;
		}
		
		@media (hover: hover) {
			.RadioAnim1-layer:hover {
				--color: var(--m3-scheme-on-surface);
				background-color: rgb(var(--color) / 0.08);
			}
		}
		.RadioAnim1-layer:active,
		input:focus-visible + .RadioAnim1-layer {
			--color: var(--m3-scheme-on-surface);
			background-color: rgb(var(--color) / 0.12);
		}
		input:enabled + .RadioAnim1-layer:active::before {
			transform: scale(0.9);
		}
		input:checked + .RadioAnim1-layer {
			--color: var(--m3-scheme-primary);
		}
		input:checked + .RadioAnim1-layer::after {
			inset: 0.9375rem;
			width: 0.625rem;
			height: 0.625rem;
		}
		
		input:disabled + .RadioAnim1-layer {
			background-color: transparent;
			--color: var(--m3-scheme-on-surface) / 0.38;
			pointer-events: none;
		}

		.RadioAnim1-m3-container {
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}
		@media screen and (forced-colors: active) {
			input:checked + .RadioAnim1-layer::before {
				border-color: selecteditem;
			}
			.RadioAnim1-layer::after {
				background-color: selecteditem;
			}
			input:disabled + .RadioAnim1-layer {
				opacity: 0.38;
			}
		}
		
	`;
	this._leak = true;

	return (
		<label class={cssClass}>
			<div
				style={use`display: ${this.display};`}
				{...this.extraOptions}

				class="RadioAnim1-m3-container"
			>
				{this.children}
				<div class="RadioAnim1-layer" />
			</div>
		</label>
	)
}
