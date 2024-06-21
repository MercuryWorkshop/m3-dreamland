export function NavDrawer() {
	const display = this.display || "flex";
	const extraoptions = this.extraOptions || {};
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
			<nav style={`display: ${display};`} class={`NavDrawer-m3-container`} {...extraoptions}>
				{this.children}
			</nav>
		</span>
	)
}
