export const RadioAnim3: Component<{

	display?: string,
	extraOptions?: any,
}, {
	children: any,
	_leak: true,
}> = function() {
	this.display = this.display || "inline-flex";
	this.extraOptions = this.extraOptions || {};

	const cssClass = css`
		.RadioAnim3-m3-container {
			position: relative;
			width: 1.25rem;
			height: 1.25rem;
		}
		.RadioAnim3-m3-container input {
			position: absolute;
			opacity: 0;
		}
		.RadioAnim3-layer {
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
		.RadioAnim3-layer::before {
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
		.RadioAnim3-layer::after {
			content: " ";
			display: block;
			position: absolute;
			inset: 0.75rem;
			width: 1rem;
			height: 1rem;
			border-radius: var(--m3-util-rounding-full);
			outline: solid 0 rgb(var(--color));
			transition: all 0.3s;
		}
		
		@media (hover: hover) {
			.RadioAnim3-layer:hover {
				--color: var(--m3-scheme-on-surface);
				background-color: rgb(var(--color) / 0.08);
			}
		}
		.RadioAnim3-layer:active,
		input:focus-visible + .RadioAnim3-layer {
			--color: var(--m3-scheme-on-surface);
			background-color: rgb(var(--color) / 0.12);
		}
		input:enabled + .RadioAnim3-layer:active::before {
			transform: scale(0.9);
		}
		input:checked + .RadioAnim3-layer {
			--color: var(--m3-scheme-primary);
		}
		input:checked + .RadioAnim3-layer::after {
			outline-width: 0.3125rem;
			outline-offset: -0.5rem;
		}
		
		input:disabled + .RadioAnim3-layer {
			background-color: transparent;
			--color: var(--m3-scheme-on-surface) / 0.38;
			pointer-events: none;
		}

		.RadioAnim3-m3-container {
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}
		@media screen and (forced-colors: active) {
			input:checked + .RadioAnim3-layer::before {
				border-color: selecteditem;
			}
			.RadioAnim3-layer::after {
				outline-color: selecteditem;
			}
			input:disabled + .RadioAnim3-layer {
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

				class="RadioAnim3-m3-container"
			>
				{this.children}
				<div class="RadioAnim3-layer" />
			</div>
		</label>
	)
}
