import { Icon } from "../icon";

export function FAB() {
	const display = this.display || "inline-flex";
	const extraoptions = this.extraOptions || {};
	const color = this.color || "primary";
	const size = this.size || "normal";
	const elevation = this.elevation || "normal";
	const icon = this.icon || undefined;
	const text = this.text || undefined;
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
		.FAB-layer {
			position: absolute;
			inset: 0;
			transition: all 200ms;
			opacity: 0;
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
		.color-primary > .FAB-layer {
			background-color: rgb(var(--m3-scheme-on-primary-container));
		}
		.color-surface {
			background-color: rgb(var(--m3-scheme-surface-container-low));
			color: rgb(var(--m3-scheme-primary));
		}
		.color-surface.elevation-normal {
			background-color: rgb(var(--m3-scheme-surface-container-high));
		}
		.color-surface > .FAB-layer {
			background-color: rgb(var(--m3-scheme-primary));
		}
		.color-secondary {
			background-color: rgb(var(--m3-scheme-secondary-container));
			color: rgb(var(--m3-scheme-on-secondary-container));
		}
		.color-secondary > .FAB-layer {
			background-color: rgb(var(--m3-scheme-on-secondary-container));
		}
		.color-tertiary {
			background-color: rgb(var(--m3-scheme-tertiary-container));
			color: rgb(var(--m3-scheme-on-tertiary-container));
		}
		.color-tertiary > .FAB-layer {
			background-color: rgb(var(--m3-scheme-on-tertiary-container));
		}
		
		button {
			-webkit-tap-highlight-color: transparent;
		}
		@media (hover: hover) {
			button:hover > .FAB-layer {
				opacity: 0.08;
			}
			.elevation-normal:hover {
				box-shadow: var(--m3-util-elevation-4);
			}
			.elevation-lowered:hover {
				box-shadow: var(--m3-util-elevation-2);
			}
		}
		button:focus-visible > .FAB-layer,
		button:active > .FAB-layer {
			opacity: 0.12;
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
	return (
		<span class={cssClass}>
			<button {...extraoptions} on:click={this["on:click"] || (() => { })} class={`FAB-m3-container m3-font-label-large color-${color} size-${size} elevation-${elevation}`} style={`display: ${display};`}>
				<div class={`FAB-layer`} />
				{icon ?
					<Icon icon={icon} /> : null}
				{text ? text : null}
			</button>
		</span>
	)
}
