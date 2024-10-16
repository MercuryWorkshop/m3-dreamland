export const NavList: Component<{
	type: "rail" | "bar" | "auto",

	display?: string,
	extraOptions: any,
}, {}> = function() {
	this.display = this.display || "flex";
	this.extraOptions = this.extraOptions || {};

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
		<nav
			{...this.extraOptions}

			style={use`display: ${this.display};`}
			class={use`NavList-m3-container type-${this.type} ${cssClass}`}
		>
			{this.children}
		</nav>
	)
}
