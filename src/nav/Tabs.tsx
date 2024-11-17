import { IconifyIcon } from "@iconify/types";
import { Icon } from "../icon";
import { v4 as uuidv4 } from "uuid";
import { Layer } from "../ripple";

export type TabsItem = { name: string, value: string, icon?: IconifyIcon };

export const Tabs: Component<{
	items: TabsItem[],
	tab: string,

	secondary?: boolean,

	display?: string,
	extraOptions?: any,
	extraWrapperOptions?: any,
}, {
	tabidx: number,
	_leak: true,
}> = function() {
	this.secondary = this.secondary || false;

	this.display = this.display || "flex";
	this.extraOptions = this.extraOptions || {};
	this.extraWrapperOptions = this.extraWrapperOptions || {};

	const name = uuidv4();

	const cssClass = css`
		.Tabs-m3-container {
			position: relative;
			background-color: rgb(var(--m3-scheme-surface));
		}
		input {
			position: absolute;
			opacity: 0;
			pointer-events: none;
		}
		.divider {
			position: absolute;
			inset: auto 0 0 0;
			height: 0.0625rem;
			background-color: rgb(var(--m3-scheme-surface-container-highest));
		}
		label {
			flex: 1 0;
			height: 3rem;
			min-width: 5rem;
			white-space: nowrap;
			padding: 0 1rem;

			position: relative;
			display: flex;
			gap: 0.5rem;
			align-items: center;
			justify-content: center;

			color: rgb(var(--m3-scheme-on-surface-variant));
			user-select: none;
			-webkit-tap-highlight-color: transparent;
			cursor: pointer;
			transition: all 200ms;
		}
		label > svg {
			width: 1.5rem;
			height: 1.5rem;
		}

		@media (hover: hover) {
			.Tabs-m3-container label:hover {
				color: rgb(var(--m3-scheme-on-surface));
			}
		}
		input:focus-visible + label,
		input:active + label,
		input:checked + label {
			color: rgb(var(--m3-scheme-on-surface));
		}
		
		.bar {
			position: absolute;
			background-color: rgb(var(--m3-scheme-primary));
			width: calc(100% / var(--items));
			left: calc(100% / var(--items) * var(--i));
			height: 0;
			bottom: 0;
			pointer-events: none;
			transition: all 200ms;
		}
		input:checked:nth-of-type(-n + 5) ~ .bar {
			height: 0.125rem;
		}
		
		.primary > label {
			flex-direction: column;
			gap: 0;
		}
		.primary > label.tall {
			height: 4rem;
		}
		.primary > label > svg {
			width: 1.5rem;
			height: 1.5rem;
		}
		.primary > input:checked + label {
			color: rgb(var(--m3-scheme-primary));
		}
		.primary > .bar {
			width: 3rem;
			height: 0.1875rem;
			border-radius: 0.1875rem 0.1875rem 0 0;
			margin-left: calc(50% / var(--items));
			transform: translateX(-50%);
		}
		
		.bar {
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}
		@media screen and (forced-colors: active) {
			.bar {
				background-color: selecteditem;
			}
		}
	`;
	this._leak = true;

	useChange([this.items, this.tab], () => {
		this.tabidx = this.items.findIndex(i => i.value == this.tab);
	})
	return (
		<span class={cssClass}>
			<div
				class="Tabs-m3-container"
				class:primary={use(this.secondary, x => !x)}
				style={use`display: ${this.display}; --items: ${use(this.items, x => x.length)}; --i: ${use(this.tabidx)};`}
				{...this.extraWrapperOptions}
			>
				<div class="divider" />
				{use(this.items, x => x.map((x) => {
					const id = name + x.value;
					const layer = <Layer />;
					return (
						<>
							<input
								type="radio"
								name={name}
								id={id}
								value={x.value}
								on:change={() => { this.tab = x.value; }}
								checked={use(this.tab, y => y == x.value)}
								{...this.extraOptions}
							/>
							<label for={id} class:tall={x.icon} on:pointerdown={layer.$.ripple}>
								{layer}
								{x.icon ?
									<Icon icon={x.icon} /> : null}
								<span class="m3-font-title-small">{x.name}</span>
							</label>
						</>
					)
				}))}
				<div class="bar" />
			</div>
		</span >
	)
}
