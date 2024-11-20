import { Layer } from "../ripple";

export const ListItemButton: Component<{
	overline?: string,
	headline?: string,
	supporting?: string,

	lines?: number | null,

	"on:click"?: (e?: PointerEvent) => void,

	display?: string,
	extraOptions?: any,
}, {
	_lines: number,
	_leak: true,
	children: any,
}> = function() {
	this.overline = this.overline || "";
	this.headline = this.headline || "";
	this.supporting = this.supporting || "";

	this.display = this.display || "flex";
	this.extraOptions = this.extraOptions || {};

	this["on:click"] = this["on:click"] || (() => { });

	useChange([this.overline, this.headline, this.supporting, this.lines], () => {
		this._lines = this.lines || (this.overline && this.supporting ? 3 : this.overline || this.supporting ? 2 : 1);
	});

	const cssClass = css`
		button {
			width: 100%;
		}
		.ListItemButton-m3-container {
			align-items: center;
			padding: 0.5rem 1.5rem 0.5rem 1rem;
			gap: 1rem;
			text-align: inherit;

			background-color: transparent;
			border: none;
			position: relative;

			-webkit-tap-highlight-color: transparent;
			cursor: pointer;
			transition: background-color 200ms;
		}
		.lines-1 {
			height: 3.5rem;
		}
		.lines-2 {
			height: 4.5rem;
		}
		.lines-3 {
			height: 5.5rem;
			padding-top: 0.75rem;
			padding-bottom: 0.75rem;
			align-items: flex-start;
		}
		.leading,
		.trailing {
			display: contents;
			color: rgb(var(--m3-scheme-on-surface-variant));
		}
		.leading > svg,
		.trailing > svg {
			width: 1.5rem;
			height: 1.5rem;
			flex-shrink: 0;
		}

		p {
			margin: 0;
		}
		.supporting,
		.overline {
			color: rgb(var(--m3-scheme-on-surface-variant));
		}
		.headline {
			color: rgb(var(--m3-scheme-on-surface));
		}
	`;
	this._leak = true;

	const layer = <Layer />;
	return (
		<span class={cssClass}>
			<button
				on:click={this["on:click"]}

				class={use`ListItemButton-m3-container lines-${this._lines}`}
				style={use`display: ${this.display}`}
				{...this.extraOptions}
				on:pointerdown={layer.$.ripple}
			>
				{layer}
				<div class="leading">
					{this.children[0]}
				</div>
				<div class="body">
					{use(this.overline, x => x ? <p class="overline m3-font-label-small">{x}</p> : null)}
					{use(this.headline, x => x ? <p class="headline m3-font-body-large">{x}</p> : null)}
					{use(this.supporting, x => x ? <p class="supporting m3-font-body-medium">{x}</p> : null)}
				</div>
				<div class="trailing m3-font-label-small">
					{this.children[1]}
				</div>
			</button>
		</span>
	)
}
