export const ListItemCheckbox: Component<{}, {_leak: true, children: any}> = function() {
	
	const cssClass = css`
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		width: 1.5rem;
		height: 1.5rem;
	`;
	this._leak = true;

	return (
		<div class={cssClass}>
			{this.children}
		</div>
	)
}
