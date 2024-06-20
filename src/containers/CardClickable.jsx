export function CardClickable() {
	const display = this.display || "flex";
	const extraoptions = this.extraOptions || {};
	const type = this.type;
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
		.CardClickable-layer {
			position: absolute;
			inset: 0;
			border-radius: inherit;
			transition: all 200ms;
			pointer-events: none;
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
			button:hover > .CardClickable-layer {
				background-color: rgb(var(--m3-scheme-on-surface) / 0.08);
			}
		}
		button:is(:focus-visible, :active) > .CardClickable-layer {
			background-color: rgb(var(--m3-scheme-on-surface) / 0.12);
		}

		@media print, (forced-colors: active) {
			.CardClickable-layer {
				display: none;
			}
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
	return (
		<span class={cssClass}>
			<button on:click={this["on:click"] || (() => { })} {...extraoptions} style={`display: ${display};`} class={`CardClickable-m3-container type-${type}`}>
				<div class={`CardClickable-layer`}></div>
				{this.children}
			</button>
		</span >
	)
}
