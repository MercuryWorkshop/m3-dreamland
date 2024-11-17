function getCss(cssClass: string): string {
	return `
		@media (hover: hover) {
			:not(input:disabled + label, input:disabled + .layer-container, :disabled):hover > .${cssClass} > .tint {
				opacity: 0.08;
			}
		}

		:not(input:disabled + label, input:disabled + .layer-container, :disabled):focus-visible > .${cssClass} > .tint {
			opacity: 0.12;
		}
		:not(input:disabled + label, input:disabled + .layer-container, :disabled):active > .${cssClass} > .ripple-container.broken + .tint {
			opacity: 0.12;
		}
	`;
}

const Ripple: Component<{}, { node: HTMLElement, cancelRipples: (() => void)[] }, { ripple: (e: MouseEvent) => void }> = function() {
	const cssClass = css`
		border-radius: inherit;
		position: absolute;
		inset: 0;
		.ripple-container {
			position: absolute;
			inset: 0;
			border-radius: inherit;
			pointer-events: none;

			overflow: hidden;
		}
		.tint {
			position: absolute;
			inset: 0;
			border-radius: inherit;
			pointer-events: none;

			background-color: currentColor;
			opacity: 0;
			transition: opacity 200ms;
		}
	`;

	this.cancelRipples = [];

	this.ripple = (e: MouseEvent) => {
		const parent = this.root.parentElement!;
		if (e.button != 0) return;
		if (parent instanceof HTMLButtonElement) {
			if (parent.disabled) return;
		}
		if (parent instanceof HTMLLabelElement) {
			const control = parent.control;
			if (control instanceof HTMLInputElement && control.disabled) return;
		}
		if (parent.classList.contains("layer-container")) {
			const input = parent.previousElementSibling;
			if (input instanceof HTMLInputElement && input.disabled) return;
		}

		const rect = parent.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const size = Math.hypot(Math.max(x, rect.width - x), Math.max(y, rect.height - y)) * 2.5;
		const speed = Math.max(Math.min(Math.log(size) * 50, 600), 200);

		const gradient = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
		gradient.id = `ripple-${Date.now()}`;

		const stops = [
			{ offset: "0%", opacity: "0.12" },
			{ offset: "70%", opacity: "0.12" },
			{ offset: "100%", opacity: "0" },
		];

		stops.forEach(({ offset, opacity }) => {
			const stop = document.createElementNS("http://www.w3.org/2000/svg", "stop");
			stop.setAttribute("offset", offset);
			stop.setAttribute("stop-color", "currentColor");
			stop.setAttribute("stop-opacity", opacity);
			gradient.appendChild(stop);
		});

		const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		circle.setAttribute("cx", `${size / 2}`);
		circle.setAttribute("cy", `${size / 2}`);
		circle.setAttribute("r", "0");
		circle.setAttribute("fill", `url(#${gradient.id})`);

		const expand = document.createElementNS("http://www.w3.org/2000/svg", "animate");
		expand.setAttribute("attributeName", "r");
		expand.setAttribute("from", "0");
		expand.setAttribute("to", `${size / 2}`);
		expand.setAttribute("dur", `${speed}ms`);
		expand.setAttribute("fill", "freeze");
		expand.setAttribute("calcMode", "spline");
		expand.setAttribute("keySplines", "0.4 0, 0.2 1");

		circle.appendChild(expand);

		const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		svg.style.cssText = `
				position: absolute;
				left: ${x - size / 2}px;
				top: ${y - size / 2}px;
				width: ${size}px;
				height: ${size}px;
				pointer-events: none;
				overflow: visible;
			`;
		svg.appendChild(gradient);
		svg.appendChild(circle);

		if (
			!navigator.userAgent.includes("Firefox") &&
			!navigator.userAgent.includes("Safari") &&
			size > 100
		) {
			const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
			filter.id = `noise-${Date.now()}`;

			const turb = document.createElementNS("http://www.w3.org/2000/svg", "feTurbulence");
			turb.setAttribute("type", "fractalNoise");
			turb.setAttribute("baseFrequency", "0.6");
			turb.setAttribute("seed", Math.random().toString());

			const blur = document.createElementNS("http://www.w3.org/2000/svg", "feDisplacementMap");
			blur.setAttribute("in", "SourceGraphic");
			blur.setAttribute("in2", "turbulence");
			blur.setAttribute("scale", `${size ** 2 * 0.0002}`);
			blur.setAttribute("xChannelSelector", "R");
			blur.setAttribute("yChannelSelector", "B");

			filter.appendChild(turb);
			filter.appendChild(blur);

			circle.setAttribute("filter", `url(#${filter.id})`);
			svg.appendChild(filter);
		}

		this.node.appendChild(svg);

		this.cancelRipples.push(() => {
			const fade = document.createElementNS("http://www.w3.org/2000/svg", "animate");
			fade.setAttribute("attributeName", "opacity");
			fade.setAttribute("from", "1");
			fade.setAttribute("to", "0");
			fade.setAttribute("dur", "800ms");
			fade.setAttribute("fill", "freeze");
			fade.setAttribute("calcMode", "spline");
			fade.setAttribute("keySplines", "0.4 0, 0.2 1");
			circle.appendChild(fade);
			fade.beginElement();
			setTimeout(() => svg.remove(), 800);
		});
	};

	this.mount = () => {
		this.node.classList.remove("broken");
	}

	window.addEventListener("pointerup", () => {
		this.cancelRipples.forEach((cancel) => cancel());
		this.cancelRipples = [];
	});

	return (
		<span class={cssClass}>
			<style>{getCss(cssClass)}</style>
			<div class="ripple-container broken" bind:this={use(this.node)} />
			<div class="tint"></div>
		</span>
	)
}

const RippleSimple: Component<{}, {}, { ripple: (e: MouseEvent) => void }> = function() {
	const cssClass = css`
		.tint {
			position: absolute;
			inset: 0;
			border-radius: inherit;
			pointer-events: none;

			background-color: currentColor;
			opacity: 0;
			transition: opacity 200ms;
		}
	`;

	this.ripple = (e) => { };

	return (
		<span class={cssClass}>
			<style children={getCss(cssClass)} />
			<div class="tint" />
		</span>
	)
}

let ripple = RippleSimple;
if (
	// @ts-ignore
	typeof M3_DREAMLAND_NO_RIPPLE == "undefined" &&
	(typeof window == "undefined" || !window.matchMedia("(prefers-reduced-motion: reduce)").matches)
) {
	ripple = Ripple;
}
export const Layer = ripple;
