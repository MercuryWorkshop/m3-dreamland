import { IconifyIcon } from "@iconify/types";
import { Icon } from "../icon";
import { v4 as uuidv4 } from "uuid";

export const TextFieldMultiline: Component<{
	name?: string,
	value?: string,

	error?: boolean,
	disabled?: boolean,
	required?: boolean,

	leadingIcon?: IconifyIcon | null,
	trailingIcon?: IconifyIcon | null,

	display?: string,
	extraOptions?: any,
	extraWrapperOptions: any,
}, {
	_leak: true,
}> = function() {
	this.error = this.error || false;
	this.disabled = this.disabled || false;
	this.required = this.required || false;

	this.display = this.display || "inline-flex";
	this.extraOptions = this.extraOptions || {};
	this.extraWrapperOptions = this.extraWrapperOptions || {};

	const id = uuidv4();


	const cssClass = css`
		--m3-textfield-filled-shape: var(--m3-util-rounding-extra-small);

		.TextFieldMultiline-m3-container {
			position: relative;
			align-items: center;
			min-height: 5rem;
			min-width: 15rem;
		}
		textarea {
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
			resize: none;
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
		.TextFieldMultiline-layer {
			position: absolute;
			inset: 0;
			border-radius: var(--m3-textfield-filled-shape) var(--m3-textfield-filled-shape) 0 0;
			pointer-events: none;
			transition: all 200ms;
		}
		.TextFieldMultiline-layer::after {
			position: absolute;
			content: " ";
			display: block;
			width: 100%;
			bottom: 0;

			height: 0.0625rem;
			background-color: rgb(var(--error, var(--m3-scheme-on-surface-variant)));
			transition: all 200ms;
		}
		.TextFieldMultiline-m3-container > :global(svg) {
			position: relative;
			width: 1.5rem;
			height: 1.5rem;
			margin-left: 0.75rem;
			color: rgb(var(--m3-scheme-on-surface-variant));
			pointer-events: none;
		}

		textarea:enabled:hover ~ .TextFieldMultiline-layer {
			background-color: rgb(var(--m3-scheme-on-surface) / 0.08);
		}
		textarea:hover ~ label {
			color: rgb(var(--error, var(--m3-scheme-on-surface)));
		}
		textarea:focus ~ label,
		textarea:not(:placeholder-shown) ~ label {
			top: 0.5rem;
			font-size: var(--m3-font-body-small-size, 0.75rem);
			line-height: var(--m3-font-body-small-height, 1rem);
			letter-spacing: var(--m3-font-body-small-tracking, 0.4);
		}
		textarea:focus ~ label {
			color: rgb(var(--error, var(--m3-scheme-primary)));
		}
		textarea:focus ~ .TextFieldMultiline-layer::after {
			height: 0.125rem;
			background-color: rgb(var(--error, var(--m3-scheme-primary)));
		}

		.leading_icon > textarea {
			padding-left: 3.25rem;
		}
		.leading_icon > label {
			left: 3.25rem;
		}
		.error {
			--error: var(--m3-scheme-error);
		}
		.error > textarea:hover ~ label,
		.error > textarea:hover ~ .TextFieldMultiline-layer {
			--error: var(--m3-scheme-on-error-container);
		}
		textarea:disabled {
			background-color: rgb(var(--m3-scheme-on-surface) / 0.04);
			color: rgb(var(--m3-scheme-on-surface) / 0.38);
		}
		textarea:disabled ~ label {
			color: rgb(var(--m3-scheme-on-surface) / 0.38);
		}
		textarea:disabled ~ .TextFieldMultiline-layer::after {
			background-color: rgb(var(--m3-scheme-on-surface) / 0.38);
		}
		textarea:disabled ~ :global(svg) {
			color: rgb(var(--m3-scheme-on-surface) / 0.38);
		}

		.TextFieldMultiline-m3-container {
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}
		@media screen and (forced-colors: active) {
			textarea {
				background-color: field;
			}
			.TextFieldMultiline-layer::after,
			textarea:focus ~ .TextFieldMultiline-layer::after {
				background-color: canvastext;
			}
		}
	`;
	this._leak = true;

	this.mount = () => {
		const resize = new ResizeObserver(() => {
			const update = () => {
				const root = this.root.firstElementChild as HTMLElement;
				const textarea = root.firstElementChild;
				root.style.height = "unset";
				root.style.height = textarea.scrollHeight + "px";
			};
			this.root.addEventListener("input", update);
			useChange([this.value], update);
		})
		resize.observe(this.root.firstElementChild);
	}

	return (
		<span class={cssClass}>
			<div
				class="TextFieldMultiline-m3-container"
				class:leading_icon={use(this.leadingIcon, x => !!x)}
				class:error={use(this.error)}
				style={use`display: ${this.display}`}
				{...this.extraWrapperOptions}
			>
				<textarea
					class="m3-font-body-large"
					placeholder=" "
					bind:value={use(this.value)}
					id={id}
					disabled={use(this.disabled)}
					required={use(this.required)}
					{...this.extraOptions}
				/>

				<label class="m3-font-body-large" for={id}>{use(this.name)}</label>
				<div class="TextFieldMultiline-layer" />

				{use(this.leadingIcon, x => x ?
					<Icon icon={x} class="leading" />
					: null)}
			</div>
		</span>
	)
}
