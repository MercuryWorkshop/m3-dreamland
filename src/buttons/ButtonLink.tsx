import { Layer } from "../ripple";

export const ButtonLink: Component<{
	type: "elevated" | "filled" | "tonal" | "outlined" | "text",
	href: string,

	iconType?: "none" | "left" | "full",
	display?: string,
	extraOptions?: any,
}, {
	children: any,
	_leak: true,
}> = function() {
	this.iconType = this.iconType || "none";
	this.display = this.display || "inline-flex";
	this.extraOptions = this.extraOptions || {};

	const cssClass = css`
		--m3-button-shape: var(--m3-util-rounding-full);

		.ButtonLink-m3-container {
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
			user-select: none;
		}

		.ButtonLink-m3-container > * {
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

		.ButtonLink-m3-container.elevated {
			background-color: rgb(var(--m3-scheme-surface-container-low));
			--text: var(--m3-scheme-primary);
			box-shadow: var(--m3-util-elevation-1);
		}

		.ButtonLink-m3-container.filled {
			background-color: rgb(var(--m3-scheme-primary));
			--text: var(--m3-scheme-on-primary);
		}

		.ButtonLink-m3-container.tonal {
			background-color: rgb(var(--m3-scheme-secondary-container));
			--text: var(--m3-scheme-on-secondary-container);
		}

		.ButtonLink-m3-container.outlined {
			background-color: transparent;
			border: 0.0625rem solid rgb(var(--m3-scheme-outline));
			--text: var(--m3-scheme-primary);
		}

		.ButtonLink-m3-container.text {
			background-color: transparent;
			padding: 0 0.75rem;
			--text: var(--m3-scheme-primary);
		}
		.ButtonLink-m3-container.text.icon-left {
			padding-right: 1rem;
		}

		.ButtonLink-m3-container {
			-webkit-tap-highlight-color: transparent;
		}
		@media (hover: hover) {
			.ButtonLink-m3-container.elevated:hover {
				box-shadow: var(--m3-util-elevation-2);
			}
			.ButtonLink-m3-container.filled:hover {
				box-shadow: var(--m3-util-elevation-1);
			}
			.ButtonLink-m3-container.tonal:hover {
				box-shadow: var(--m3-util-elevation-1);
			}
		}

		.ButtonLink-m3-container {
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}
		@media screen and (forced-colors: active) {
			.ButtonLink-m3-container:is(.elevated, .filled, .tonal) {
				background-color: transparent;
				border: 0.0625rem solid;
			}
		}

	`;

	this._leak = true;
	const layer = <Layer />;
	return (
		<span class={cssClass}>
			<a
				style={use`display: ${this.display};`}
				class={use`ButtonLink-m3-container m3-font-label-large ${this.type} icon-${this.iconType}`}

				href={use(this.href)}
				{...this.extraOptions}

				on:pointerdown={layer.$.ripple}
			>
				{layer}
				{this.children}
			</a>
		</span>
	)
}
