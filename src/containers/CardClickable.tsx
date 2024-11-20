import { Layer } from "../ripple";

export const CardClickable: Component<{
	type: "filled" | "elevated" | "outlined",
	"on:click"?: () => void|(e: PointerEvent) => void,

	display?: string,
	extraOptions?: any,
}, {
	children: any,
	_leak: true,
}> = function() {
	this["on:click"] = this["on:click"] || (() => { });

	this.display = this.display || "flex";
	this.extraOptions = this.extraOptions || {};

	const cssClass = css`
		--m3-card-shape: var(--m3-util-rounding-medium);
		.CardClickable-m3-container {
			flex-direction: column;
			position: relative;
			padding: 1rem; /* protip: use margin: -1rem (adjust as needed) to make images stretch to the end */
			border: none;
			border-radius: var(--m3-card-shape);
			background-color: rgb(var(--m3-scheme-surface));
			color: rgb(var(--m3-scheme-on-surface));
			transition: all 200ms;
		}

		.type-elevated {
			background-color: rgb(var(--m3-scheme-surface-container-low));
		}
		.type-filled {
			background-color: rgb(var(--m3-scheme-surface-container-highest));
		}
		.type-outlined {
			border: solid 0.0625rem rgb(var(--m3-scheme-outline));
		}

		.type-elevated {
			box-shadow: var(--m3-util-elevation-1);
		}

		button {
			text-align: inherit;
			font: inherit;
			letter-spacing: inherit;
			cursor: pointer;
			-webkit-tap-highlight-color: transparent;
		}
		@media (hover: hover) {
			button:hover {
				box-shadow: var(--m3-util-elevation-1);
			}
			button.type-elevated:hover {
				box-shadow: var(--m3-util-elevation-2);
			}
		}

		@media print, (forced-colors: active) {
			.type-filled {
				outline: solid 0.125rem;
			}
		}
		@media (forced-colors: active) {
			.type-elevated {
				outline: solid 0.125rem;
			}
		}
	`;
	this._leak = true;

	const layer = <Layer />;
	return (
		<span class={cssClass}>
			<button
				style={use`display: ${this.display};`}
				class={use`CardClickable-m3-container type-${this.type}`}

				on:click={this["on:click"]}
				on:pointerdown={layer.$.ripple}
				{...this.extraOptions}
			>
				{layer}
				{this.children}
			</button>
		</span >
	)
}
