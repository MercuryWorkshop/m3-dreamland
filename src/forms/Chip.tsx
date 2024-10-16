import { Icon } from "../icon"

export function Chip() {
	const display = this.display || "inline-flex";
	const extraoptions = this.extraOptions || {};
	const type = this.type;
	const icon = this.icon || null;
	const trailingicon = this.trailingIcon || null;
	const disabled = this.disabled || false;
	const cssClass = css`
		--m3-chip-shape: var(--m3-util-rounding-small);

		.Chip-m3-container {
			height: 2rem;
			border-radius: var(--m3-chip-shape);
			padding: 0 1rem;
			gap: 0.5rem;
			align-items: center;

			background-color: rgb(var(--m3-scheme-surface));
			color: rgb(var(--m3-scheme-on-surface-variant));
			border: solid 0.0625rem rgb(var(--m3-scheme-outline));
			position: relative;
			cursor: pointer;
			-webkit-tap-highlight-color: transparent;
			transition: all 200ms;
		}
		.Chip-layer {
			position: absolute;
			inset: -0.0625rem;
			border-radius: var(--m3-chip-shape);
			transition: all 200ms;
		}
		
		.Chip-m3-container > svg {
			width: 1.125rem;
			height: 1.125rem;
		}
		.Chip-m3-container:enabled:not(.type-input):not(.selected) > .leading {
			color: rgb(var(--m3-scheme-primary));
		}
		.Chip-m3-container > .leading {
			margin-left: -0.5rem;
		}
		.Chip-m3-container > .trailing {
			margin-right: -0.5rem;
		}
		.type-input > .leading {
			margin-left: -0.25rem;
		}
		.type-input > .trailing {
			margin-right: -0.25rem;
		}
		
		.type-assist {
			color: rgb(var(--m3-scheme-on-surface));
		}
		.type-input {
			padding: 0 0.75rem;
		}
		.elevated {
			border-color: transparent;
			background-color: rgb(var(--m3-scheme-surface-container-low));
			box-shadow: var(--m3-util-elevation-1);
		}
		.selected {
			border-color: transparent;
			background-color: rgb(var(--m3-scheme-secondary-container));
			color: rgb(var(--m3-scheme-on-secondary-container));
		}
		
		.Chip-layer {
			background-color: currentColor;
			opacity: 0;
		}
		@media (hover: hover) {
			.selected:hover:enabled {
				box-shadow: var(--m3-util-elevation-1);
			}
			.elevated:hover:enabled {
				box-shadow: var(--m3-util-elevation-2);
			}
			.Chip-m3-container:hover:enabled > .Chip-layer {
				opacity: 0.08;
			}
		}
		.Chip-m3-container:focus-visible:enabled > .Chip-layer {
			opacity: 0.08;
		}
		.Chip-m3-container:active:enabled > .Chip-layer {
			opacity: 0.12;
		}
		
		.Chip-m3-container:disabled {
			cursor: auto;
			box-shadow: none;
			border-color: rgb(var(--m3-scheme-on-surface) / 0.12);
			background-color: rgb(var(--m3-scheme-surface));
			color: rgb(var(--m3-scheme-on-surface) / 0.38);
		}
		.selected:disabled,
		.elevated:disabled {
			border-color: transparent;
		}
		.selected:disabled,
		.elevated:disabled {
			background-color: rgb(var(--m3-scheme-on-surface) / 0.12);
		}
		
		.Chip-m3-container {
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}
		@media screen and (forced-colors: active) {
			.selected {
				background-color: selecteditem !important;
			}
			.Chip-m3-container.disabled {
				opacity: 0.38;
			}
		}
	`;
	this._leak = true;
	return (
		<span class={cssClass}>
			<button class={`Chip-m3-container type-${type}`} class:elevated={use(this.elevated)} class:selected={use(this.selected)} disabled={disabled} style={`display: ${display}`} on:click={this["on:click"] || (() => { })} {...extraoptions}>
				<div class="Chip-layer" />
				{icon ?
					<Icon icon={icon} class="leading" />
					: null}
				<span class="m3-font-label-large">{this.children}</span>
				{trailingicon ?
					<Icon icon={trailingicon} class="trailing" />
					: null}
			</button>
		</span>
	)
}