export const RadioAnim2: Component<{

	display?: string,
	extraOptions?: any,
}, {
	children: HTMLInputElement,
	_leak: true,
}> = function() {
	this.display = this.display || "inline-flex";
	this.extraOptions = this.extraOptions || {};

	const cssClass = css`
		.RadioAnim2-m3-container {
			position: relative;
			width: 1.25rem;
			height: 1.25rem;
		}
		.RadioAnim2-m3-container input {
			position: absolute;
			opacity: 0;
		}
		.RadioAnim2-layer {
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
		.RadioAnim2-layer::before {
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
		.RadioAnim2-layer::after {
			content: " ";
			display: block;
			position: absolute;
			inset: 1.25rem;
			width: 0rem;
			height: 0rem;
			border-radius: var(--m3-util-rounding-full);
			background-color: rgb(var(--color));
		}
		
		@media (hover: hover) {
			.RadioAnim2-layer:hover {
				--color: var(--m3-scheme-on-surface);
				background-color: rgb(var(--color) / 0.08);
			}
		}
		.RadioAnim2-layer:active,
		input:focus-visible + .RadioAnim2-layer {
			--color: var(--m3-scheme-on-surface);
			background-color: rgb(var(--color) / 0.12);
		}
		input:enabled + .RadioAnim2-layer:active::before {
			transform: scale(0.9);
		}
		input:checked + .RadioAnim2-layer {
			--color: var(--m3-scheme-primary);
		}
		input:checked + .RadioAnim2-layer::after {
			inset: 0.9375rem;
			width: 0.625rem;
			height: 0.625rem;
			transition: all 0.3s;
		}
		
		input:disabled + .RadioAnim2-layer {
			background-color: transparent;
			--color: var(--m3-scheme-on-surface) / 0.38;
			pointer-events: none;
		}

		.RadioAnim2-m3-container {
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}
		@media screen and (forced-colors: active) {
			input:checked + .RadioAnim2-layer::before {
				border-color: selecteditem;
			}
			.RadioAnim2-layer::after {
				background-color: selecteditem;
			}
			input:disabled + .RadioAnim2-layer {
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

				class="RadioAnim2-m3-container"
			>
				{this.children}
				<div class="RadioAnim2-layer" />
			</div>
		</label>
	)
}
