import { Layer } from "../ripple";

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

		.layer-container {
			position: absolute;
			inset: -0.6875rem;
			width: 2.5rem;
			height: 2.5rem;
			border-radius: var(--m3-util-rounding-full);
			color: rgb(var(--m3-scheme-on-surface-variant));
			cursor: pointer;
		}

		.checkbox-box {
			position: absolute;
			inset: 0.6875rem;
			border-radius: 0.125rem;
			border: solid 0.125rem currentColor;
			transition: all 200ms;
			-webkit-tap-highlight-color: transparent;
		}

		.Checkbox-m3-container > svg {
			position: absolute;
			inset: 0;
			color: rgb(var(--m3-scheme-on-primary));
			pointer-events: none;
		}
		path {
			stroke-dasharray: 20.874 20.874;
			stroke-dashoffset: 20.874;
			opacity: 0;
			transition: opacity 200ms;
		}

		input:focus-visible + .layer-container {
			color: rgb(var(--m3-scheme-on-surface));
		}

		input:checked + .layer-container {
			color: rgb(var(--m3-scheme-primary));
		}
		input:checked + .layer-container .checkbox-box {
			background-color: rgb(var(--m3-scheme-primary));
		}
		input:checked ~ svg > path {
			stroke-dashoffset: 0;
			opacity: 1;
		}

		input:disabled + .layer-container {
			color: rgb(var(--m3-scheme-on-surface) / 0.38);
			cursor: not-allowed;
		}

		input:disabled:checked + .layer-container {
			color: transparent;
		}
		input:disabled:checked + .layer-container .checkbox-box {
			background-color: rgb(var(--m3-scheme-on-surface) / 0.38);
		}

		input:disabled ~ svg {
			color: rgb(var(--m3-scheme-surface));
		}

		.Checkbox-m3-container {
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}
		@media screen and (forced-colors: active) {
			input:checked + .layer-container .checkbox-box {
				background-color: selecteditem;
				border-color: selecteditem !important;
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
			<div class="Checkbox-m3-container" style={use`display: ${this.display};`} {...this.extraOptions}>
				{this.children}
				<div class="layer-container" on:pointerdown={layer.$.ripple}>
					{layer}
					<div class="checkbox-box" />
				</div>
				<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M 4.83 13.41 L 9 17.585 L 19.59 7"
						fill="none"
						stroke="currentColor"
						stroke-width="1.41"
					/>
				</svg>
			</div>
		</label>
	)
}
