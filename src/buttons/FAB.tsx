import { IconifyIcon } from "@iconify/types";
import { Icon } from "../icon";
import { Layer } from "../ripple";

export const FAB: Component<{
	icon?: IconifyIcon | null,
	text?: string,
	"on:click"?: () => void|(e: PointerEvent) => void,

	color?: "primary" | "surface" | "secondary" | "tertiary",
	size?: "small" | "normal" | "large",
	elevation?: "normal" | "lowered" | "none",

	display?: string,
	extraOptions?: any,
}, {
	_leak: true,
}> = function() {
	this.color = this.color || "primary";
	this.size = this.size || "normal";
	this.elevation = this.elevation || "normal";
	this["on:click"] = this["on:click"] || (() => { });

	this.display = this.display || "inline-flex";
	this.extraOptions = this.extraOptions || {};

	useChange([this.size, this.icon, this.text], () => {
		if (!this.icon && !this.text) console.warn("[m3-dreamland]: you need something in a FAB");
		if (this.size !== "normal" && this.text) console.warn("[m3-dreamland]: extended fabs are supposed to use size normal");
	});

	const cssClass = css`
		--m3-fab-small-shape: var(--m3-util-rounding-small);
		--m3-fab-normal-shape: var(--m3-util-rounding-large);
		--m3-fab-large-shape: var(--m3-util-rounding-extra-large);
		button {
			border: none;
			position: relative;
			overflow: hidden;

			align-items: center;
			justify-content: center;
			cursor: pointer;
			transition: all 200ms;
		}

		.elevation-normal {
			box-shadow: var(--m3-util-elevation-3);
		}
		.elevation-lowered {
			box-shadow: var(--m3-util-elevation-1);
		}
		
		.size-small {
			height: 2.5rem;
			padding: 0.5rem;
			gap: 0.5rem;
			border-radius: var(--m3-fab-small-shape);
		}
		.size-normal {
			height: 3.5rem;
			padding: 1rem;
			gap: 0.75rem;
			border-radius: var(--m3-fab-normal-shape);
		}
		.size-large {
			height: 6rem;
			padding: 1.875rem;
			gap: 1.875rem;
			border-radius: var(--m3-fab-large-shape);
		}
		.size-small > svg,
		.size-normal > svg {
			width: 1.5rem;
			height: 1.5rem;
		}
		.size-large > svg {
			width: 2.25rem;
			height: 2.25rem;
		}
		
		.color-primary {
			background-color: rgb(var(--m3-scheme-primary-container));
			color: rgb(var(--m3-scheme-on-primary-container));
		}
		.color-surface {
			background-color: rgb(var(--m3-scheme-surface-container-low));
			color: rgb(var(--m3-scheme-primary));
		}
		.color-surface.elevation-normal {
			background-color: rgb(var(--m3-scheme-surface-container-high));
		}
		.color-secondary {
			background-color: rgb(var(--m3-scheme-secondary-container));
			color: rgb(var(--m3-scheme-on-secondary-container));
		}
		.color-tertiary {
			background-color: rgb(var(--m3-scheme-tertiary-container));
			color: rgb(var(--m3-scheme-on-tertiary-container));
		}
		
		button {
			-webkit-tap-highlight-color: transparent;
		}
		@media (hover: hover) {
			.elevation-normal:hover {
				box-shadow: var(--m3-util-elevation-4);
			}
			.elevation-lowered:hover {
				box-shadow: var(--m3-util-elevation-2);
			}
		}

		.FAB-m3-container {
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}
		@media screen and (forced-colors: active) {
			button {
				outline: solid 0.25rem;
			}
		}
		
	`;

	this._leak = true;
	const layer = <Layer />;
	return (
		<span class={cssClass}>
			<button
				class={use`FAB-m3-container m3-font-label-large color-${this.color} size-${this.size} elevation-${this.elevation}`}
				style={use`display: ${this.display};`}

				on:click={this["on:click"]}
				on:pointerdown={layer.$.ripple}

				{...this.extraOptions}
			>
				{layer}
				{use(this.icon, x => x ?
					<Icon icon={this.icon} /> : null)}
				{use(this.text, x => x ? x : null)}
			</button>
		</span>
	)
}
