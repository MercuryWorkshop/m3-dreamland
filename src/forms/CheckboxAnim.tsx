export const CheckboxAnim: Component<{
	display?: string,
	extraOptions?: any,
}, {
	children: any,
	_leak: true,
}> = function() {
	this.display = this.display || "inline-flex";
	this.extraOptions = this.extraOptions || {};

	const cssClass = css`
		.CheckboxAnim-m3-container {
			position: relative;
			width: 1.125rem;
			height: 1.125rem;
		}
		.CheckboxAnim-m3-container input {
			position: absolute;
			opacity: 0;
		}
		.CheckboxAnim-layer {
			position: absolute;
			inset: -0.6875rem;
			width: 2.5rem;
			height: 2.5rem;
			border-radius: var(--m3-util-rounding-full);

			transition: all 200ms;
			cursor: pointer;
			--color: var(--m3-scheme-on-surface-variant);
			-webkit-tap-highlight-color: transparent;
		}
		.CheckboxAnim-layer::before {
			content: " ";
			display: block;
			position: absolute;
			inset: 0.6875rem;
			border-radius: 0.125rem;
			border: solid 0.125rem rgb(var(--color));
			transition: all 200ms;
		}
		svg {
			position: absolute;
			inset: 0.6875rem;
			color: rgb(var(--m3-scheme-on-primary));
		}
		path {
			stroke-dasharray: 20.874 20.874;
			stroke-dashoffset: 20.874;
			opacity: 0;
			transition:
			opacity 200ms,
			stroke-dashoffset 0ms 200ms;
		}
		
		@media (hover: hover) {
			.CheckboxAnim-layer:hover {
				--color: var(--m3-scheme-on-surface);
				background-color: rgb(var(--color) / 0.08);
			}
		}
		.CheckboxAnim-layer:active,
		input:focus-visible + .CheckboxAnim-layer {
			--color: var(--m3-scheme-on-surface);
			background-color: rgb(var(--color) / 0.12);
		}
		input:checked + .CheckboxAnim-layer {
			--color: var(--m3-scheme-primary);
		}
		input:checked + .CheckboxAnim-layer::before {
			background-color: rgb(var(--color));
		}
		input:checked + .CheckboxAnim-layer path {
			stroke-dashoffset: 0;
			opacity: 1;
			transition: stroke-dashoffset 200ms;
		}

		input:disabled + .CheckboxAnim-layer {
			background-color: transparent;
			--color: var(--m3-scheme-on-surface) / 0.38;
			pointer-events: none;
		}
		input:disabled + .CheckboxAnim-layer svg {
			color: rgb(var(--m3-scheme-surface));
		}
		input:disabled:checked + .CheckboxAnim-layer::before {
			border-color: transparent;
		}

		.CheckboxAnim-m3-container {
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}
		@media screen and (forced-colors: active) {
			input:checked + .CheckboxAnim-layer::before {
				background-color: selecteditem;
				border-color: selecteditem !important;
			}
			input:disabled + .CheckboxAnim-layer {
				opacity: 0.38;
			}
		}
	`;
	this._leak = true;

	return (
		<label class={cssClass}>
			<div style={use`display: ${this.display};`} {...this.extraOptions} class="CheckboxAnim-m3-container">
				{this.children}
				<div class="CheckboxAnim-layer">
					<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M 4.83 13.41 L 9 17.585 L 19.59 7"
							fill="none"
							stroke="currentColor"
							stroke-width="1.41"
						/>
					</svg>
				</div>
			</div>
		</label>
	)
}
