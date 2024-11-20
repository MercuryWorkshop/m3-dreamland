import { Layer } from "../ripple";

export const Button: Component<{
	type: "elevated" | "filled" | "tonal" | "outlined" | "text",

	disabled?: boolean,
	iconType?: "none" | "left" | "full",
	display?: string,
	extraOptions?: any,
	"on:click"?: (() => void) | ((e: PointerEvent) => void),
}, {
	children: any,
	_leak: true,
}> = function() {
	this.disabled = this.disabled || false;
	this.iconType = this.iconType || "none";
	this.display = this.display || "inline-flex";
	this.extraOptions = this.extraOptions || {};
	this["on:click"] = this["on:click"] || (() => { });

	const cssClass = css`
		--m3-button-shape: var(--m3-util-rounding-full);
		  
		.Button-m3-container {
			border: none;
			height: 2.5rem;
			padding: 0 1.5rem;
			border-radius: var(--m3-button-shape);
			color: rgb(var(--text));
			transition: all 200ms;

			align-items: center;
			justify-content: center;
			cursor: pointer;
			position: relative;
			overflow: hidden;
		}

		.Button-m3-container > * {
			flex-shrink: 0;
		}
		.icon-left {
			padding-left: 1rem;
			gap: 0.5rem;
		}
		.icon-left > svg {
			width: 1.125rem;
			height: 1.125rem;
		}
		.icon-full {
			width: 2.5rem;
			padding: 0;
		}
		.icon-full > svg {
			width: 1.5rem;
			height: 1.5rem;
		}
		
		.Button-m3-container:disabled {
			background-color: rgb(var(--m3-scheme-on-surface) / 0.12);
			color: rgb(var(--m3-scheme-on-surface) / 0.38);
			cursor: auto;
		}

		.Button-m3-container:enabled.elevated {
			background-color: rgb(var(--m3-scheme-surface-container-low));
			--text: var(--m3-scheme-primary);
			box-shadow: var(--m3-util-elevation-1);
		}

		.Button-m3-container:enabled.filled {
			background-color: rgb(var(--m3-scheme-primary));
			--text: var(--m3-scheme-on-primary);
		}

		.Button-m3-container:enabled.tonal {
			background-color: rgb(var(--m3-scheme-secondary-container));
			--text: var(--m3-scheme-on-secondary-container);
		}
		
		.Button-m3-container.outlined {
			background-color: transparent;
			border: 0.0625rem solid rgb(var(--m3-scheme-on-surface) / 0.12);
		}
		.Button-m3-container:enabled.outlined {
			border: 0.0625rem solid rgb(var(--m3-scheme-outline));
			--text: var(--m3-scheme-primary);
		}

		.Button-m3-container.text {
			background-color: transparent;
			padding: 0 0.75rem;
			--text: var(--m3-scheme-primary);
		}
		.Button-m3-container.text.icon-left {
			padding-right: 1rem;
		}
		
		.Button-m3-container {
			-webkit-tap-highlight-color: transparent;
		}
		@media (hover: hover) {
			.Button-m3-container:enabled.elevated:hover {
				box-shadow: var(--m3-util-elevation-2);
			}
			.Button-m3-container:enabled.filled:hover {
				box-shadow: var(--m3-util-elevation-1);
			}
			.Button-m3-container:enabled.tonal:hover {
				box-shadow: var(--m3-util-elevation-1);
			}
		}

		.Button-m3-container {
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}
		@media screen and (forced-colors: active) {
			.Button-m3-container:is(.elevated, .filled, .tonal) {
				background-color: transparent;
				border: 0.0625rem solid;
			}
			.Button-m3-container:disabled {
				opacity: 0.38;
			}
		}
		
	`;
	this._leak = true;

	const layer = <Layer />;
	return (
		<span class={cssClass}>
			<button
				class={use`Button-m3-container m3-font-label-large ${this.type} icon-${this.iconType}`}
				style={use`display: ${this.display};`}

				disabled={use(this.disabled)}
				{...this.extraOptions}

				on:click={this["on:click"]}
				on:pointerdown={layer.$.ripple}
			>
				{layer}
				{this.children}
			</button>
		</span>
	)
}
