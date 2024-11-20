import { IconifyIcon } from "@iconify/types";
import { Icon } from "../icon";

export const NavListButton: Component<{
	type: "rail" | "bar" | "auto",
	icon: IconifyIcon,

	selected?: boolean,

	"on:click"?: () => void|(e: PointerEvent) => void,

	display?: string,
	extraOptions?: any,
}, {
	children: any,
	_leak: true,
}> = function() {
	this.selected = this.selected || false;
	this["on:click"] = this["on:click"] || (() => { });

	this.display = this.display || "flex";
	this.extraOptions = this.extraOptions || {};

	const cssClass = css`
		.NavListButton-m3-container {
			flex-direction: column;
			height: 3.25rem;
			gap: 0.25rem;
			padding: 0;
			border: none;
			text-align: center;

			background-color: transparent;
			--text: var(--m3-scheme-on-surface-variant);
			color: rgb(var(--text));
			-webkit-tap-highlight-color: transparent;
			cursor: pointer;
		}
		.icon-space {
			display: flex;
			flex: none;
			align-self: center;
			justify-content: center;
			align-items: center;

			position: relative;
			width: 4rem;
			height: 2rem;
			border-radius: 2rem;
			transition: background-color 200ms;
		}
		.icon-space::before {
			position: absolute;
			display: block;
			content: " ";
			background-color: rgb(var(--m3-scheme-secondary-container));

			opacity: 0;
			inset: 0 50%;
			width: 0;
			border-radius: 2rem;
			transition:
				opacity 200ms,
				inset 0ms 200ms,
				width 0ms 200ms;
		}
		.icon-space > svg {
			z-index: 1;
			width: 1.5rem;
			height: 1.5rem;
			transition: color 200ms;
		}
		p {
			margin: 0;
			width: 100%;
			transition: color 200ms;
		}
		
		.type-rail {
			height: 3.5rem;
		}
		.type-rail > .icon-space {
			width: 3.5rem;
		}
		@media (min-width: 37.5rem) {
			.type-auto {
				height: 3.5rem;
			}
			.type-auto > .icon-space {
				width: 3.5rem;
			}
		}
		
		.selected {
			--text: var(--m3-scheme-on-surface);
		}
		.selected > .icon-space::before {
			opacity: 1;
			inset: 0 0;
			width: 100%;
			transition:
				width 400ms cubic-bezier(0.356, 0.701, 0, 1.004),
				inset 400ms cubic-bezier(0.356, 0.701, 0, 1.004);
		}
		.selected > .icon-space > svg {
			color: rgb(var(--m3-scheme-on-secondary-container));
		}
		
		@media (hover: hover) {
			.NavListButton-m3-container:hover > .icon-space {
				background-color: rgb(var(--text) / 0.08);
			}
		}
		.NavListButton-m3-container:focus-visible > .icon-space,
		.NavListButton-m3-container:active > .icon-space {
			background-color: rgb(var(--text) / 0.12);
		}

		.selected {
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}
		@media screen and (forced-colors: active) {
			.icon-space::before {
				background-color: selecteditem;
				color: selecteditemtext;
			}
		}
	`;
	this._leak = true;

	return (
		<span class={cssClass}>
			<button
				on:click={this["on:click"]}
				class={use`NavListButton-m3-container type-${this.type}`}
				style={use`display: ${this.display};`}
				class:selected={use(this.selected)}
				{...this.extraOptions}
			>
				<div class="icon-space">
					<Icon icon={use(this.icon)} />
				</div>
				<p class="m3-font-label-medium">{this.children}</p>
			</button>
		</span >
	)
}
