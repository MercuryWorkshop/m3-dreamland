export const CircularProgressIndeterminate: Component<{

	display?: string,
	extraOptions?: any,
}, {
	_leak: true,
}> = function() {
	this.display = this.display || "inline-flex";
	this.extraOptions = this.extraOptions || {};

	const cssClass = css`
		svg {
			width: 3rem;
			height: 3rem;
			animation: progressRotate 2.2s infinite linear;
		}
		circle {
			transition: all 200ms;
			animation: progressSize 2.2s infinite linear;
		}
		@keyframes progressRotate {
			0% {
				transform: rotate(0deg);
			}
			40% {
				transform: rotate(360deg);
			}
			100% {
				transform: rotate(1080deg);
			}
		}
		@keyframes progressSize {
			0% {
				stroke-dashoffset: 125.66;
			}
			40% {
				stroke-dashoffset: 62.83;
			}
			100% {
				stroke-dashoffset: 125.66;
			}
		}
	`;
	this._leak = true;

	return (
		<span class={cssClass}>
			<svg
				role="progressbar"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 48 48"
				class="CircularProgressIndeterminate-m3-container"

				style={use`display: ${this.display};`}
				{...this.extraOptions}
			>
				<circle
					cx="24"
					cy="24"
					r="20"

					stroke="rgb(var(--m3-scheme-primary))"
					stroke-width="4"
					stroke-dasharray="125.66 125.66"
					stroke-linecap="round"
					fill="none"
				></circle>
			</svg>
		</span>
	)
}
