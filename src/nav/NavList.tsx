export function NavList() {
	const display = this.display || "flex";
	const extraoptions = this.extraOptions || {};
	const type = this.type;
	const cssClass = css`
		position: relative;
		flex-grow: 1;
		background-color: rgb(var(--m3-scheme-surface-container));
		padding: 0.75rem 0.5rem 1rem 0.5rem;
		justify-content: space-evenly;
		gap: 0.5rem;
		
		&.type-rail {
			background-color: rgb(var(--m3-scheme-surface));
			flex-direction: column;
			width: 5rem;
			gap: 0.75rem;
		}
		@media (min-width: 37.5rem) {
			&.type-auto {
				background-color: rgb(var(--m3-scheme-surface));
				flex-direction: column;
				width: 5rem;
				gap: 0.75rem;
			}
		}
	`;
	this._leak = true;
	return (
		<nav {...extraoptions} style={`display: ${display};`} class={`NavList-m3-container type-${type} ${cssClass}`}>
			{this.children}
		</nav>
	)
}
