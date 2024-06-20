import type { IconifyIcon } from "@iconify/types";

export const Icon: Component<{ icon: IconifyIcon, width: string | undefined, height: string | undefined, class: string | undefined }, {}> = function() {
	const body = this.icon.body;
	this.mount = () => { this.root.innerHTML = body };
	return <svg width={this.width || "1em"} height={this.height || "1em"} viewBox={`0 0 ${this.icon.width} ${this.icon.height}`} xmlns="http://www.w3.org/2000/svg" {...(this.class ? { class: this.class } : {})}></svg>
}
