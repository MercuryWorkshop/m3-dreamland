import { Icon } from "../icon";

export function NavDrawerButton() {
	const extraoptions = this.extraOptions || {};
	const icon = this.icon;
	const cssClass = css`
		.destination {
			height: 3.5rem;
			border: none;
			border-radius: 1.75rem;
			padding: 0 1.5rem 0 1rem;

			display: flex;
			align-items: center;
			gap: 0.75rem;
			position: relative;
			overflow: hidden;

			background-color: transparent;
			--text: var(--m3-scheme-on-surface-variant);
			color: rgb(var(--text));
			transition: background-color 300ms;
			-webkit-tap-highlight-color: transparent;
			cursor: pointer;
		}
		.NavDrawerButton-layer {
			position: absolute;
			inset: 0;
			transition: all 200ms;
		}
		.destination svg {
			width: 1.5rem;
			height: 1.5rem;
		}
		
		@media (hover: hover) {
			.destination:hover {
				--text: var(--m3-scheme-on-surface);
			}
			.destination:hover .NavDrawerButton-layer {
				background-color: rgb(var(--text) / 0.08);
			}
		}
		.destination:focus-visible .NavDrawerButton-layer,
		.destination:active .NavDrawerButton-layer {
			background-color: rgb(var(--text) / 0.12);
		}
		
		.destination.selected {
			background-color: rgb(var(--m3-scheme-secondary-container));
			--text: var(--m3-scheme-on-secondary-container);
		}

		.destination {
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}
		@media screen and (forced-colors: active) {
			.destination.selected {
				background-color: selecteditem;
			}
		}
	`;
	this._leak = true;
	return (
		<span class={cssClass}>
			<button class="destination" class:selected={use(this.selected)} on:click={this["on:click"] || (() => { })} {...extraoptions}>
				<div class="NavDrawerButton-layer" />
				<Icon icon={icon} />
				<span class="m3-font-label-large">{this.children}</span>
			</button>
		</span>
	)
}
