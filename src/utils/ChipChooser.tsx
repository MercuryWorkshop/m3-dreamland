import { IconifyIcon } from "@iconify/types";
import { Chip } from "../forms/Chip.jsx";

export type Option = { label: string, value: string, icon?: IconifyIcon };

export const ChipChooser: Component<{
	options: Option[],
	chosenOptions: string[],
}, {
	_leak: true,
}> = function() {
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
			<div class="ChipChooser-m3-container">
				{use(this.options, x => x.map((option) =>
					<Chip
						{...option}
						type="input"
						selected={use(this.chosenOptions, t => t.includes(option.value))}
						on:click={() => {
							this.chosenOptions.includes(option.value)
								? (this.chosenOptions = this.chosenOptions.filter((o) => o != option.value))
								: (this.chosenOptions = [...this.chosenOptions, option.value])
						}}
					>
						{option.label}
					</Chip>
				))}
			</div>
		</span>
	)
}
