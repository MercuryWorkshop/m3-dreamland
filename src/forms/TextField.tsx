import { IconifyIcon } from "@iconify/types";
import { Icon } from "../icon";
import { v4 as uuidv4 } from "uuid";

export const TextField: Component<{
	name?: string,
	value?: string,

	error?: boolean,
	disabled?: boolean,
	required?: boolean,

	leadingIcon?: IconifyIcon | null,
	trailingIcon?: IconifyIcon | null,

	"on:trailingclick"?: () => void,

	display?: string,
	extraOptions?: any,
	extraWrapperOptions: any,
}, {}> = function() {
	this.error = this.error || false;
	this.disabled = this.disabled || false;
	this.required = this.required || false;

	this["on:trailingclick"] = this["on:trailingclick"] || (() => { });

	this.display = this.display || "inline-flex";
	this.extraOptions = this.extraOptions || {};
	this.extraWrapperOptions = this.extraWrapperOptions || {};

	const id = uuidv4();

	const cssClass = css`
		--m3-textfield-filled-shape: var(--m3-util-rounding-extra-small);

		.TextField-m3-container {
			position: relative;
			align-items: center;
			height: 3.5rem;
			min-width: 15rem;
		}
		input {
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			border: none;
			outline: none;
			padding: 1.5rem 1rem 0.5rem 1rem;
			border-radius: var(--m3-textfield-filled-shape) var(--m3-textfield-filled-shape) 0 0;
			background-color: rgb(var(--m3-scheme-surface-container-highest));
			color: rgb(var(--m3-scheme-on-surface));
		}
		label {
			position: absolute;
			left: 1rem;
			top: 1rem;
			color: rgb(var(--error, var(--m3-scheme-on-surface-variant)));
			pointer-events: none;
			transition:
			all 200ms,
			font-size 300ms,
			line-height 300ms,
			letter-spacing 300ms;
		}
		.TextField-layer {
			position: absolute;
			inset: 0;
			border-radius: var(--m3-textfield-filled-shape) var(--m3-textfield-filled-shape) 0 0;
			pointer-events: none;
			transition: all 200ms;
		}
		.TextField-layer::after {
			position: absolute;
			content: " ";
			display: block;
			width: 100%;
			bottom: 0;

			height: 0.0625rem;
			background-color: rgb(var(--error, var(--m3-scheme-on-surface-variant)));
			transition: all 200ms;
		}
		.TextField-m3-container svg {
			width: 1.5rem;
			height: 1.5rem;
			color: rgb(var(--m3-scheme-on-surface-variant));
			pointer-events: none;
		}
		.TextField-m3-container > .leading {
			position: relative;
			margin-left: 0.75rem;
		}
		.trailing {
			position: absolute;
			padding-left: 0.75rem;
			padding-right: 0.75rem;
			height: 100%;
			right: 0;

			display: flex;
			align-items: center;
			justify-content: center;
			border: none;
			background-color: transparent;
			border-top-right-radius: 0.25rem;
			border-bottom-right-radius: 0.25rem;

			-webkit-tap-highlight-color: transparent;
			cursor: pointer;
			transition: all 200ms;
		}
		
		input:enabled:hover ~ .TextField-layer {
			background-color: rgb(var(--m3-scheme-on-surface) / 0.08);
		}
		input:hover ~ label {
			color: rgb(var(--error, var(--m3-scheme-on-surface)));
		}
		input:focus ~ label,
		input:not(:placeholder-shown) ~ label {
			top: 0.5rem;
			font-size: var(--m3-font-body-small-size, 0.75rem);
			line-height: var(--m3-font-body-small-height, 1rem);
			letter-spacing: var(--m3-font-body-small-tracking, 0.4);
		}
		input:focus ~ label {
			color: rgb(var(--error, var(--m3-scheme-primary)));
		}
		input:focus ~ .TextField-layer::after {
			height: 0.125rem;
			background-color: rgb(var(--error, var(--m3-scheme-primary)));
		}
		@media (hover: hover) {
			button:hover {
				background-color: rgb(var(--m3-scheme-on-surface-variant) / 0.08);
			}
		}
		button:focus-visible,
		button:active {
			background-color: rgb(var(--m3-scheme-on-surface-variant) / 0.12);
		}
		
		.leading_icon > input {
			padding-left: 3.25rem;
		}
		.leading_icon > label {
			left: 3.25rem;
		}
		.trailing-icon > input {
			padding-right: 3.25rem;
		}
		.error {
			--error: var(--m3-scheme-error);
		}
		.error > input:hover ~ label,
		.error > input:hover ~ .TextField-layer {
			--error: var(--m3-scheme-on-error-container);
		}
		input:disabled {
			background-color: rgb(var(--m3-scheme-on-surface) / 0.04);
			color: rgb(var(--m3-scheme-on-surface) / 0.38);
		}
		input:disabled ~ label {
			color: rgb(var(--m3-scheme-on-surface) / 0.38);
		}
		input:disabled ~ .TextField-layer::after {
			background-color: rgb(var(--m3-scheme-on-surface) / 0.38);
		}
		input:disabled ~ svg {
			color: rgb(var(--m3-scheme-on-surface) / 0.38);
		}
		
		.TextField-m3-container {
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}
		@media screen and (forced-colors: active) {
			input {
				background-color: field;
			}
			.TextField-layer::after,
			input:focus ~ .TextField-layer::after {
				background-color: canvastext;
			}
		}
	`;
	this._leak = true;

	return (
		<span class={cssClass}>
			<div
				class="TextField-m3-container"
				class:leading_icon={use(this.leadingIcon, x => !!x)}
				class:error={use(this.error)}
				style={use`display: ${this.display}`}
				{...this.extraWrapperOptions}
			>
				<input
					class="m3-font-body-large"
					placeholder=" "
					bind:value={use(this.value)}
					id={id}
					disabled={use(this.disabled)}
					required={use(this.required)}
					{...this.extraOptions}
				/>
				<label class="m3-font-body-large" for={id}>{use(this.name)}</label>
				<div class="TextField-layer" />

				{use(this.leadingIcon, x => x ?
					<Icon icon={x} class="leading" />
					: null)}

				{use(this.trailingIcon, x => x ?
					<button on:click={this["on:trailingclick"]} class="trailing">
						<Icon icon={x} />
					</button>
					: null)}
			</div>
		</span>
	)
}
