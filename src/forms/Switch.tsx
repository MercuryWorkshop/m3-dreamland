import { Icon } from "../icon"
import iconCheck from "@ktibow/iconset-material-symbols/check";

export const Switch: Component<{
	checked?: boolean,
	disabled?: boolean,

	display?: string,
	extraOptions?: any,
	extraWrapperOptions?: any,
}, {
	_leak: true,
}> = function() {
	this.checked = this.checked || false;
	this.disabled = this.disabled || false;

	this.display = this.display || "inline-flex";
	this.extraOptions = this.extraOptions || {};
	this.extraWrapperOptions = this.extraWrapperOptions || {};

	const cssClass = css`
		--m3-switch-track-shape: var(--m3-util-rounding-full);
		--m3-switch-handle-shape: var(--m3-util-rounding-full);

		.Switch-m3-container {
			position: relative;
			width: 3.25rem;
			height: 2rem;
		}
		input {
			appearance: none;
			width: 3.25rem;
			height: 2rem;
			margin: 0;
			border-radius: var(--m3-switch-track-shape);

			background-color: rgb(var(--m3-scheme-surface-container-highest));
			border: solid 0.125rem rgb(var(--m3-scheme-outline));
			cursor: pointer;
			-webkit-tap-highlight-color: transparent;
			transition: all 300ms;
		}
		.Switch-handle {
			position: absolute;
			width: 1rem;
			height: 1rem;
			border-radius: var(--m3-switch-handle-shape);

			background-color: rgb(var(--m3-scheme-outline));
			cursor: pointer;
			-webkit-tap-highlight-color: transparent;
			transition: all 300ms cubic-bezier(0.271, -0.011, 0, 1.449);

			left: 0.5rem;
			top: 50%;
			translate: 0 -50%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.Switch-handle > svg {
			width: 1rem;
			height: 1rem;
			color: rgb(var(--m3-scheme-on-primary-container));
			opacity: 0;
			transition:
			opacity 300ms cubic-bezier(0.271, -0.011, 0, 1.449),
			scale 300ms cubic-bezier(0.271, -0.011, 0, 1.449);
		}
		.Switch-hover {
			position: absolute;
			width: 3rem;
			height: 3rem;
			border-radius: var(--m3-util-rounding-full);

			cursor: pointer;
			-webkit-tap-highlight-color: transparent;
			transition: all 300ms cubic-bezier(0.271, -0.011, 0, 1.449);

			left: 1rem;
			top: 50%;
			translate: -50% -50%;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.Switch-m3-container:hover > input:enabled + .Switch-handle,
		.Switch-m3-container > input:enabled:is(:active, :focus-visible) + .Switch-handle {
			background-color: rgb(var(--m3-scheme-on-surface-variant));
		}
		.Switch-m3-container:hover > input:enabled:checked + .Switch-handle,
		.Switch-m3-container > input:enabled:checked:is(:active, :focus-visible) + .Switch-handle {
			background-color: rgb(var(--m3-scheme-primary-container));
		}
		.Switch-m3-container:hover > input ~ .Switch-hover {
			background-color: rgb(var(--m3-scheme-on-surface) / 0.08);
		}
		.Switch-m3-container:hover > input:checked ~ .Switch-hover {
			background-color: rgb(var(--m3-scheme-primary) / 0.08);
		}

		input:checked {
			background-color: rgb(var(--m3-scheme-primary));
			border-color: rgb(var(--m3-scheme-primary));
		}
		input:checked + .Switch-handle {
			background-color: rgb(var(--m3-scheme-on-primary));
			scale: 1.5;
			left: 1.75rem;
		}
		input:checked + .Switch-handle > svg {
			scale: 0.667;
			opacity: 1;
		}
		input:checked ~ .Switch-hover {
			left: 2.25rem;
		}
		.Switch-m3-container:active > input:enabled + .Switch-handle {
			scale: 1.75;
		}
		.Switch-m3-container:active > input:enabled + .Switch-handle > svg {
			scale: 0.571;
		}

		input:disabled {
			background-color: rgb(var(--m3-scheme-surface-container-highest) / 0.12);
			border-color: rgb(var(--m3-scheme-outline) / 0.12);
			cursor: auto;
		}
		input:disabled:checked {
			background-color: rgb(var(--m3-scheme-on-surface) / 0.12);
			border-color: transparent;
		}
		input:disabled + .Switch-handle {
			background-color: rgb(var(--m3-scheme-on-surface) / 0.38);
			cursor: auto;
		}
		input:disabled:checked + .Switch-handle {
			background-color: rgb(var(--m3-scheme-surface));
		}
		input:disabled:checked + .Switch-handle > svg {
			color: rgb(var(--m3-scheme-on-surface) / 0.38);
		}
		input:disabled ~ .Switch-hover {
			display: none;
		}

		.Switch-m3-container {
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}
		@media screen and (forced-colors: active) {
			input:checked {
				background-color: canvastext !important;
			}
			.Switch-handle {
				background-color: canvastext !important;
			}
			input:checked + .Switch-handle {
				background-color: canvas !important;
			}
			input:disabled,
			input:disabled + .Switch-handle {
				opacity: 0.38;
			}
		}
	`;

	let startX: number | undefined;

	const handleMouseUp = (e: MouseEvent) => {
		if (!startX) return;
		const distance = e.clientX - startX;
		if (distance > 16 && !this.checked) this.checked = true;
		if (distance < -16 && this.checked) this.checked = false;
		startX = undefined;
	};
	this._leak = true;

	this.mount = () => {
		window.addEventListener("pointerup", handleMouseUp);
	}

	return (
		<label class={cssClass}>
			<div
				style={use`display: ${this.display};`}
				class="Switch-m3-container"
				{...this.extraWrapperOptions}

				on:pointerdown={(e: MouseEvent) => { if (!this.disabled) { startX = e.clientX } }}
				on:dragstart={(e: Event) => { e.preventDefault() }}
			>
				<input
					{...this.extraOptions}
					disabled={use(this.disabled)}
					bind:checked={use(this.checked)}

					on:keydown={(e: KeyboardEvent) => {
						if (e.code == "Enter") this.checked = !this.checked;
						if (e.code == "ArrowLeft") this.checked = false;
						if (e.code == "ArrowRight") this.checked = true;
					}}

					role="switch"
					type="checkbox"
				/>
				<div class="Switch-handle">
					<Icon icon={iconCheck} />
				</div>
				<div class="Switch-hover" />
			</div>
		</label>
	)
}
