export const Icon = function() {
	const body = this.icon.body;
	this.mount = () => { this.root.innerHTML = body };
	return h("svg", Object.assign({ width: this.width || "1em", height: this.height || "1em", viewBox: `0 0 ${this.icon.width} ${this.icon.height}`, xmlns: "http://www.w3.org/2000/svg" }, this.class ? { class: this.class } : {}), []);
}
