export const Checkbox: Component<{
	display?: string,
	extraOptions?: any,
}, {
	children: any,
	_leak: true,
}> = function() {
	this.display = this.display || "inline-flex";
	this.extraOptions = this.extraOptions || {};

	const cssClass = css`
		display: flex;
		align-items: center;
		justify-content: center;

		.Checkbox-m3-container {
			position: relative;
			width: 1.125rem;
			height: 1.125rem;
		}
		.Checkbox-m3-container input {
			position: absolute;
			opacity: 0;
		}
		.Checkbox-layer {
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
		.Checkbox-layer::before {
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
			opacity: 0;
			transition: opacity 200ms;
		}
		
		@media (hover: hover) {
			.Checkbox-layer:hover {
				--color: var(--m3-scheme-on-surface);
				background-color: rgb(var(--color) / 0.08);
			}
		}
		.Checkbox-layer:active,
		input:focus-visible + .Checkbox-layer {
			--color: var(--m3-scheme-on-surface);
			background-color: rgb(var(--color) / 0.12);
		}
		input:checked + .Checkbox-layer {
			--color: var(--m3-scheme-primary);
		}
		input:checked + .Checkbox-layer::before {
			background-color: rgb(var(--color));
		}
		input:checked + .Checkbox-layer svg {
			opacity: 1;
		}
		
		input:disabled + .Checkbox-layer {
			background-color: transparent;
			--color: var(--m3-scheme-on-surface) / 0.38;
			pointer-events: none;
		}
		input:disabled + .Checkbox-layer svg {
			color: rgb(var(--m3-scheme-surface));
		}
		input:disabled:checked + .Checkbox-layer::before {
			border-color: transparent;
		}

		.Checkbox-m3-container {
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}
		@media screen and (forced-colors: active) {
			input:checked + .Checkbox-layer::before {
				background-color: selecteditem;
				border-color: selecteditem !important;
			}
			input:disabled + .Checkbox-layer {
				opacity: 0.38;
			}
		}
	`;

	this._leak = true;
	return (
		<span class={cssClass}>
			<div class="Checkbox-m3-container" style={use`display: ${this.display};`} {...this.extraOptions}>
				{this.children}
				<div class="Checkbox-layer">
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
		</span>
	)
}
