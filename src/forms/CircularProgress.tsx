export const CircularProgress: Component<{
	percent: number,

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
			transform: rotate(-90deg);
		}
		circle {
			stroke-dashoffset: calc((var(--percent) / -100 + 1px) * 125.66);
			transition: all 200ms;
		}
	`;
	this._leak = true;

	return (
		<span class={cssClass}>
			<svg
				viewBox="0 0 48 48"
				xmlns="http://www.w3.org/2000/svg"
				class="CircularProgress-m3-container"
				style={use`display: ${this.display}; --percent: ${this.percent}px`}
				role="progressbar"
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
				/>
			</svg>
		</span >
	)
}
