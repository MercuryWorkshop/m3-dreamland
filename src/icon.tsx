import type { IconifyIcon } from "@iconify/types";

export const Icon: Component<{
	icon: IconifyIcon,
	width?: string | undefined,
	height?: string | undefined,
	class?: string | undefined
}, {}> = function() {
	this.mount = () => {
		this.root.innerHTML = this.icon.body;
		useChange([this.icon], () => {
			this.root.innerHTML = this.icon.body;
		})
	};
	return (
		<svg
			width={use(this.width, x => x || "1em")}
			height={use(this.height, x => x || "1em")}
			viewBox={use`0 0 ${this.icon.width} ${this.icon.height}`}
			xmlns="http://www.w3.org/2000/svg"
			{...(this.class ? { class: this.class } : {})}
		></svg>
	);
}
