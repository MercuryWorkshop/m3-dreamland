export const List: Component<{}, { _leak: true, children: any }> = function() {

	const cssClass = css`
		display: flex;
		flex-direction: column;
		background-color: rgb(var(--m3-scheme-surface-container-high));
	`;
	this._leak = true;
	
	return (
		<div class={cssClass}>
			{this.children}
		</div>
	)
}
