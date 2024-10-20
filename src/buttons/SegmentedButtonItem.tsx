import { IconifyIcon } from "@iconify/types";
import { Icon } from "../icon"
import iconCheck from "@ktibow/iconset-material-symbols/check"

export const SegmentedButtonItem: Component<{
	type?: "radio" | "checkbox",
	input: string,
	name: string,
	checked?: boolean,
	disabled?: boolean,
	extraInputOptions: any,

	inner?: HTMLInputElement,

	icon?: IconifyIcon | null,

	display?: string,
	extraOptions?: any,
}, {
	children: string,
	_leak: true,
}> = function() {
	this.type = this.type || "radio";
	this.checked = this.checked || false;
	this.disabled = this.disabled || false;
	this.extraInputOptions = this.extraInputOptions || {};

	this.display = this.display || "inline-flex";
	this.extraOptions = this.extraOptions || {};

	const cssClass = css`
		label {
			padding: 0 1rem;
			/* flex: 1; */
			min-width: 3rem;
			align-items: center;
			justify-content: center;

			--text: var(--m3-scheme-on-surface);
			color: rgb(var(--text));
			transition: all 200ms;

			cursor: pointer;
			white-space: nowrap;
			user-select: none;
			position: relative;
			height: 100%;
		}
		label ~ label {
			border-left: 0.0625rem solid rgb(var(--m3-scheme-outline));
		}
		input:disabled + label {
			color: rgb(var(--m3-scheme-on-surface) / 0.38);
			cursor: auto;
		}
		.SegmentedButtonItem-layer {
			position: absolute;
			inset: 0;
			transition: all 200ms;
		}
		.icon {
			height: 1.125rem;
			transition: all 200ms;
			flex-shrink: 0;
			transform-origin: 0.563rem 0.563rem;
		}
		.icon > svg {
			width: 1.125rem;
			height: 1.125rem;
		}
		
		.check.icon {
			width: 0;
			opacity: 0;
		}
		input:checked + label > .check.icon {
			opacity: 1;
		}
		.custom.icon + .check.icon {
			rotate: -60deg;
		}
		input:checked + label > .custom.icon + .check.icon {
			rotate: 0deg;
		}
		.custom.icon {
			width: 0;
			opacity: 0;
			rotate: 60deg;
		}
		input:not(:checked) + label > .custom.icon {
			opacity: 1;
			rotate: 0deg;
		}
		
		.pad {
			transition: all 200ms;
			flex-shrink: 0;
		}
		.start-pad {
			width: 0.8125rem;
		}
		.end-pad {
			width: 0.8125rem;
		}
		input:checked + label > .start-pad,
		.custom.icon ~ .start-pad {
			width: 1.625rem;
		}
		input:checked + label > .end-pad {
			width: 0rem;
		}

		label {
			-webkit-tap-highlight-color: transparent;
		}
		@media (hover: hover) {
			input:not(:disabled) + label:hover > .SegmentedButtonItem-layer {
				background-color: rgb(var(--text) / 0.08);
			}
		}

		input:checked + label {
			background-color: rgb(var(--m3-scheme-secondary-container));
			--text: var(--m3-scheme-on-secondary-container);
		}
		input:enabled:focus-visible + label > .SegmentedButtonItem-layer,
		input:enabled + label:active > .SegmentedButtonItem-layer {
			background-color: rgb(var(--text) / 0.12);
		}
	`;
	this._leak = true;

	return (
		<span class={cssClass}>
			<input
				type={use(this.type)}
				id={use(this.input)}
				name={use(this.name)}
				bind:this={use(this.inner)}
				checked={use(this.checked)}
				disabled={use(this.disabled)}
			/>
			<label
				style={use`display: ${this.display}; overflow: hidden;`}
				for={use(this.input)}
				class="m3-font-label-large"
				{...this.extraOptions}
			>
				<div class="SegmentedButtonItem-layer" />
				{use(this.icon, x => x ?
					<div class="custom icon">
						<Icon icon={x} />
					</div> : null
				)}
				<div class="check icon">
					<Icon icon={iconCheck} />
				</div>
				<div class="start-pad pad" />
				{this.children}
				{use(this.icon, x => !x ? <div class="end-pad pad" /> : null)}
			</label>
		</span>
	)
}
