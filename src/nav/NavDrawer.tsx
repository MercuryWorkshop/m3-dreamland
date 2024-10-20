export const NavDrawer: Component<{

	display?: string,
	extraOptions?: any,
}, {
	children: any
	_leak: true,
}> = function() {
	this.display = this.display || "flex";
	this.extraOptions = this.extraOptions || {};

	const cssClass = css`
		.NavDrawer-m3-container {
			flex-direction: column;
			width: 22.5rem;
			padding: 1rem 0.75rem 0 0.75rem;
			background-color: rgb(var(--m3-scheme-surface));
		}
	`;
	this._leak = true;

	return (
		<span class={cssClass}>
			<nav style={use`display: ${this.display};`} class="NavDrawer-m3-container" {...this.extraOptions}>
				{this.children}
			</nav>
		</span>
	)
}
