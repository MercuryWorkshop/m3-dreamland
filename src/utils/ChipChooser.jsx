import { Chip } from "../forms/Chip.jsx";

export function ChipChooser() {
	const options = this.options;
	const cssClass = css`
		.ChipChooser-m3-container {
			display: flex;
			flex-wrap: wrap;
			gap: 0.5rem;
		}
	`;
	this._leak = true;
	return (
		<span class={cssClass}>
			<div class={`ChipChooser-m3-container`}>
				{options.map((option) =>
					<Chip
						{...option}
						type="input"
						bind:selected={use(this.chosenOptions, t => t.includes(option.value))}
						on:click={() => {
							this.chosenOptions.includes(option.value)
								? (this.chosenOptions = this.chosenOptions.filter((o) => o != option.value))
								: (this.chosenOptions = [...this.chosenOptions, option.value])
							console.log(this.chosenOptions);
						}}>
						{option.label}
					</Chip>
				)}
			</div>
		</span >
	)
}
