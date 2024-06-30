import { Icon } from "../icon";

export function NavDrawerLink() {
	const href = this.href;
	const extraoptions = this.extraOptions || {};
	const icon = this.icon;
	const cssClass = css`
		
		  .destination {
		    height: 3.5rem;
		    border-radius: 1.75rem;
		    padding: 0 1.5rem 0 1rem;
		
		    display: flex;
		    align-items: center;
		    gap: 0.75rem;
		    position: relative;
		    overflow: hidden;
		
		    background-color: transparent;
		    --text: var(--m3-scheme-on-surface-variant);
		    color: rgb(var(--text));
		    transition: background-color 300ms;
		    -webkit-tap-highlight-color: transparent;
		    cursor: pointer;
		  }
		  .NavDrawerLink-layer {
		    position: absolute;
		    inset: 0;
		    transition: all 200ms;
		  }
		  .destination :global(svg) {
		    width: 1.5rem;
		    height: 1.5rem;
		  }
		
		  @media (hover: hover) {
		    .destination:hover {
		      --text: var(--m3-scheme-on-surface);
		    }
		    .destination:hover .NavDrawerLink-layer {
		      background-color: rgb(var(--text) / 0.08);
		    }
		  }
		  .destination:focus-visible .NavDrawerLink-layer,
		  .destination:active .NavDrawerLink-layer {
		    background-color: rgb(var(--text) / 0.12);
		  }
		
		  .destination.selected {
		    background-color: rgb(var(--m3-scheme-secondary-container));
		    --text: var(--m3-scheme-on-secondary-container);
		  }
		
		  .destination {
		    print-color-adjust: exact;
		    -webkit-print-color-adjust: exact;
		  }
		  @media screen and (forced-colors: active) {
		    .destination.selected {
		      background-color: selecteditem;
		    }
		  }
		
	`;
	this._leak = true;
	return (
		<span class={cssClass}>
			<a href={href} class="destination" class:selected={use(this.selected)} {...extraoptions}>
				<div class="NavDrawerLink-layer" />
				<Icon icon={icon} />
				<span class="m3-font-label-large">{this.children}</span>
			</a>
		</span>
	)
}