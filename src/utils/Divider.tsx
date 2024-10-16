export function Divider() {
	const cssClass = css`
		hr {
			margin: 0;
			height: 0;
			border: none;
			border-bottom: solid 1px rgb(var(--m3-scheme-outline-variant));
		}
		.inset {
			margin-left: 1rem;
			margin-right: 1rem;
		}
	`;
	this._leak = true;
	return (
		<span class={cssClass}>
			<hr class:inset={use(this.inset)} />
		</span>
	)
}
