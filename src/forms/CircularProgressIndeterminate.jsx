export function CircularProgressIndeterminate() {
	const display = this.display || "inline-flex";
	const extraoptions = this.extraOptions || {};
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
			<svg role={`progressbar`} {...extraoptions} xmlns={`http://www.w3.org/2000/svg`} viewBox={`0 0 48 48`} class={`CircularProgressIndeterminate-m3-container`} style={`display: ${display};`}>
				<circle stroke-dasharray={`125.66 125.66`} cy={`24`} stroke-linecap={`round`} r={`20`} fill={`none`} cx={`24`} stroke-width={`4`} stroke={`rgb(var(--m3-scheme-primary))`}></circle>
			</svg>
		</span>
	)
}
