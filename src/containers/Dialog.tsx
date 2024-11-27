import { IconifyIcon } from "@iconify/types";
import { Icon } from "../icon";

export const Dialog: Component<{
	headline: string,
	open: boolean,

	"on:closeesc"?: () => void,
	"on:closeclick"?: () => void,

	icon?: IconifyIcon | null,
	closeOnEsc?: boolean,
	closeOnClick?: boolean,

	display?: string,
	extraOptions?: any,
}, {
	children: any,
	dialog: HTMLDialogElement,
	_leak: true,
}> = function() {
	this["on:closeesc"] = this["on:closeesc"] || (() => { });
	this["on:closeclick"] = this["on:closeclick"] || (() => { });

	this.closeOnEsc = this.closeOnEsc != null ? this.closeOnEsc : true;
	this.closeOnClick = this.closeOnClick != null ? this.closeOnClick : true;

	this.display = this.display || "flex";
	this.extraOptions = this.extraOptions || {};

	const cssClass = css`
		--m3-dialog-shape: var(--m3-util-rounding-extra-large);

		dialog {
			background-color: rgb(var(--m3-scheme-surface-container-high));
			border: none;
			border-radius: var(--m3-dialog-shape);
			min-width: 17.5rem;
			max-width: 35rem;
			padding: 0;
			overflow: auto;
		}
		.Dialog-m3-container {
			display: flex;
			flex-direction: column;
			padding: 1.5rem;
			width: 100%;
		}

		.Dialog-m3-container > svg {
			color: rgb(var(--m3-scheme-secondary));
			width: 1.5rem;
			height: 1.5rem;

			flex-shrink: 0;
			align-self: center;
			margin-bottom: 1rem;
		}
		.headline {
			color: rgb(var(--m3-scheme-on-surface));
			margin-top: 0;
			margin-bottom: 1rem;
		}
		.headline.center {
			text-align: center;
		}
		.Dialog-m3-container > .content {
			color: rgb(var(--m3-scheme-on-surface-variant));
			margin-bottom: 1.5rem;
		}
		.buttons {
			display: flex;
			justify-content: flex-end;
			gap: 0.5rem;
		}

		dialog {
			position: fixed;
			inset: 0;
			opacity: 0;
			visibility: hidden;
			pointer-events: none;
			transition:
			opacity 200ms,
			visibility 200ms;
		}
		dialog[open] {
			opacity: 1;
			visibility: visible;
			pointer-events: auto;
			animation:
				dialogIn 0.5s cubic-bezier(0.05, 0.7, 0.1, 1),
				opacity 100ms cubic-bezier(0.05, 0.7, 0.1, 1);
		}
		dialog[open] > .Dialog-m3-container > .headline {
			animation: opacity 150ms;
		}
		dialog[open] > .Dialog-m3-container > .content {
			animation: opacity 200ms;
		}
		dialog[open] > .Dialog-m3-container > .buttons {
			position: relative;
			animation:
				buttonsIn 0.5s cubic-bezier(0.05, 0.7, 0.1, 1),
				opacity 200ms 100ms backwards;
		}
		dialog::backdrop {
			background-color: rgb(var(--m3-scheme-scrim) / 0.3);
			animation: opacity 400ms;
		}
		@keyframes dialogIn {
			0% {
				transform: translateY(-3rem) scaleY(90%);
				clip-path: inset(0 0 100% 0 round var(--m3-dialog-shape));
			}
			100% {
				transform: translateY(0) scaleY(100%);
				clip-path: inset(0 0 0 0 round var(--m3-dialog-shape));
			}
		}
		@keyframes buttonsIn {
			0% {
				bottom: 100%;
			}
			100% {
				bottom: 0;
			}
		}
		@keyframes opacity {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}

		@media print, (forced-colors: active) {
			dialog {
				outline: solid 0.125rem canvastext;
			}
		}
	`;
	this._leak = true;

	useChange([this.open], () => {
		if (!this.dialog) return;

		if (this.open) this.dialog.showModal()
		else this.dialog.close()
	});

	return (
		<div class={cssClass}>
			<dialog
				on:cancel={(e: Event) => {
					if (this.closeOnEsc) {
						this["on:closeesc"]();
						this.open = false;
					} else {
						e.preventDefault();
					}
				}}
				on:click={() => {
					if (this.closeOnClick) {
						this["on:closeclick"]();
						this.open = false;
					}
				}}
				bind:this={use(this.dialog)}
				style={use`display: ${this.display};`}
				{...this.extraOptions}
			>
				<div class="Dialog-m3-container">
					{use(this.icon, x => x ? <Icon icon={this.icon} /> : null)}
					<p class="headline m3-font-headline-small" class:center={use(this.icon, x => !!x)}>{this.headline}</p>
					<div class="content m3-font-body-medium">
						{this.children[0]}
					</div>
					<div class="buttons">
						{this.children[1]}
					</div>
				</div>
			</dialog>
		</div >
	);
}
