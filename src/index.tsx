import { SerializedScheme, genCSS } from "./utils.js";

export { SerializedScheme, serializeScheme, genScheme, genCSS } from "./utils.js";
export { argbFromHex, hexFromArgb, sourceColorFromImage } from "@material/material-color-utilities";

export { Button } from "./buttons/Button.jsx";
export { ButtonLink } from "./buttons/ButtonLink.jsx";
export { SegmentedButtonContainer } from "./buttons/SegmentedButtonContainer.jsx";
export { SegmentedButtonItem } from "./buttons/SegmentedButtonItem.jsx";
export { FAB } from "./buttons/FAB.jsx";

export { Card } from "./containers/Card.jsx";
export { CardClickable } from "./containers/CardClickable.jsx";

export { Switch } from "./forms/Switch.jsx";
export { CircularProgress } from "./forms/CircularProgress.jsx";
export { CircularProgressIndeterminate } from "./forms/CircularProgressIndeterminate.jsx";
export { LinearProgress } from "./forms/LinearProgress.jsx";
export { LinearProgressIndeterminate } from "./forms/LinearProgressIndeterminate.jsx";
export { CheckboxAnim } from "./forms/CheckboxAnim.jsx";
export { Checkbox } from "./forms/Checkbox.jsx";
export { Chip } from "./forms/Chip.jsx";
export { RadioAnim1 } from "./forms/RadioAnim1.jsx";
export { RadioAnim2 } from "./forms/RadioAnim2.jsx";
export { RadioAnim3 } from "./forms/RadioAnim3.jsx";
export { TextField } from "./forms/TextField.jsx";

export { ChipChooser } from "./utils/ChipChooser.jsx";
export { Divider } from "./utils/Divider.jsx";

export { NavDrawer } from "./nav/NavDrawer.jsx";
export { NavDrawerButton } from "./nav/NavDrawerButton.jsx";
export { NavDrawerLink } from "./nav/NavDrawerLink.jsx";
export { NavList } from "./nav/NavList.jsx";
export { NavListButton } from "./nav/NavListButton.jsx";
export { NavListLink } from "./nav/NavListLink.jsx";
export { Tabs } from "./nav/Tabs.jsx";

export { Icon } from "./icon.jsx";

export const Styles: Component<{ light: SerializedScheme, dark: SerializedScheme, disableExtraStyles: boolean | undefined }, { gennedCssEl: HTMLElement }> = function() {
	this.gennedCssEl = h("style", [], genCSS(this.light, this.dark)) as HTMLElement;
	useChange([this.light, this.dark], ()=>{this.gennedCssEl.innerText = genCSS(this.light, this.dark)});
	this.mount = () => {
		if (!this.disableExtraStyles) {
			this.root.appendChild(h("style", [], `
body {
	font-family: var(--m3-font-body, var(--m3-font));
	font-size: var(--m3-font-body-large-size, 1rem);
	line-height: var(--m3-font-body-large-height, 1.5rem);
	letter-spacing: var(--m3-font-body-large-tracking, 0.03125rem);
	font-weight: var(--m3-font-body-large-weight, 400);
	background-color: rgb(var(--m3-scheme-background));
	color: rgb(var(--m3-scheme-on-background));
}
			`));
		}
		this.root.appendChild(this.gennedCssEl);
		this.root.appendChild(h("style", [], `
/* Needed for elevation to work */
:root {
  --m3-util-elevation-0: none;
  --m3-util-elevation-1: 0px 3px 1px -2px rgb(var(--m3-scheme-shadow) / 0.2),
    0px 2px 2px 0px rgb(var(--m3-scheme-shadow) / 0.14),
    0px 1px 5px 0px rgb(var(--m3-scheme-shadow) / 0.12);
  --m3-util-elevation-2: 0px 2px 4px -1px rgb(var(--m3-scheme-shadow) / 0.2),
    0px 4px 5px 0px rgb(var(--m3-scheme-shadow) / 0.14),
    0px 1px 10px 0px rgb(var(--m3-scheme-shadow) / 0.12);
  --m3-util-elevation-3: 0px 5px 5px -3px rgb(var(--m3-scheme-shadow) / 0.2),
    0px 8px 10px 1px rgb(var(--m3-scheme-shadow) / 0.14),
    0px 3px 14px 2px rgb(var(--m3-scheme-shadow) / 0.12);
  --m3-util-elevation-4: 0px 5px 5px -3px rgb(var(--m3-scheme-shadow) / 0.2),
    0px 8px 10px 1px rgb(var(--m3-scheme-shadow) / 0.14),
    0px 3px 14px 2px rgb(var(--m3-scheme-shadow) / 0.12);
  --m3-util-elevation-5: 0px 8px 10px -6px rgb(var(--m3-scheme-shadow) / 0.2),
    0px 16px 24px 2px rgb(var(--m3-scheme-shadow) / 0.14),
    0px 6px 30px 5px rgb(var(--m3-scheme-shadow) / 0.12);
  --m3-util-bottom-offset: 0;

  /*Shape*/
  --m3-util-rounding-none: 0;
  --m3-util-rounding-extra-small: 0.25rem;
  --m3-util-rounding-small: 0.5rem;
  --m3-util-rounding-medium: 0.75rem;
  --m3-util-rounding-large: 1rem;
  --m3-util-rounding-extra-large: 1.75rem;
  --m3-util-rounding-full: 100rem;

  --m3-font: Roboto, system-ui, sans-serif;
}
.m3-font-display-large,
.m3-font-display-medium,
.m3-font-display-small {
  font-family: var(--m3-font-display, var(--m3-font));
}
.m3-font-headline-large,
.m3-font-headline-medium,
.m3-font-headline-small {
  font-family: var(--m3-font-headline, var(--m3-font));
}
.m3-font-title-large,
.m3-font-title-medium,
.m3-font-title-small {
  font-family: var(--m3-font-title, var(--m3-font));
}
.m3-font-label-large,
.m3-font-label-medium,
.m3-font-label-small {
  font-family: var(--m3-font-label, var(--m3-font));
}
.m3-font-body-large,
.m3-font-body-medium,
.m3-font-body-small {
  font-family: var(--m3-font-body, var(--m3-font));
}
/* As the largest text on the screen, display styles are reserved for short, important text or numerals. */
.m3-font-display-large {
  font-size: var(--m3-font-display-large-size, 3.5625rem);
  line-height: var(--m3-font-display-large-height, 4rem);
  letter-spacing: var(--m3-font-display-large-tracking, -0.015625rem);
  font-weight: var(--m3-font-display-large-weight, 400);
}
.m3-font-display-medium {
  font-size: var(--m3-font-display-medium-size, 2.8125rem);
  line-height: var(--m3-font-display-medium-height, 3.25rem);
  letter-spacing: var(--m3-font-display-medium-tracking, 0);
  font-weight: var(--m3-font-display-medium-weight, 400);
}
.m3-font-display-small {
  font-size: var(--m3-font-display-small-size, 2.25rem);
  line-height: var(--m3-font-display-small-height, 2.75rem);
  letter-spacing: var(--m3-font-display-small-tracking, 0);
  font-weight: var(--m3-font-display-small-weight, 400);
}
/* Headlines are best-suited for short, high-emphasis text on smaller screens. */
.m3-font-headline-large {
  font-size: var(--m3-font-headline-large-size, 2rem);
  line-height: var(--m3-font-headline-large-height, 2.5rem);
  letter-spacing: var(--m3-font-headline-large-tracking, 0);
  font-weight: var(--m3-font-headline-large-weight, 400);
}
.m3-font-headline-medium {
  font-size: var(--m3-font-headline-medium-size, 1.75rem);
  line-height: var(--m3-font-headline-medium-height, 2.25rem);
  letter-spacing: var(--m3-font-headline-medium-tracking, 0);
  font-weight: var(--m3-font-headline-medium-weight, 400);
}
.m3-font-headline-small {
  font-size: var(--m3-font-headline-small-size, 1.5rem);
  line-height: var(--m3-font-headline-small-height, 2rem);
  letter-spacing: var(--m3-font-headline-small-tracking, 0);
  font-weight: var(--m3-font-headline-small-weight, 400);
}
/* Titles are smaller than headline styles, and should be used for medium-emphasis text that remains relatively short. */
.m3-font-title-large {
  font-size: var(--m3-font-title-large-size, 1.375rem);
  line-height: var(--m3-font-title-large-height, 1.75rem);
  letter-spacing: var(--m3-font-title-large-tracking, 0);
  font-weight: var(--m3-font-title-large-weight, 400);
}
.m3-font-title-medium {
  font-size: var(--m3-font-title-medium-size, 1rem);
  line-height: var(--m3-font-title-medium-height, 1.5rem);
  letter-spacing: var(--m3-font-title-medium-tracking, 0.009375rem);
  font-weight: var(--m3-font-title-medium-weight, 500);
}
.m3-font-title-small {
  font-size: var(--m3-font-title-small-size, 0.875rem);
  line-height: var(--m3-font-title-small-height, 1.25rem);
  letter-spacing: var(--m3-font-title-small-tracking, 0.00625rem);
  font-weight: var(--m3-font-title-small-weight, 500);
}
/* Label styles are smaller, utilitarian styles, used for things like the text inside components
or for very small text in the content body, such as captions. */
.m3-font-label-large {
  font-size: var(--m3-font-label-large-size, 0.875rem);
  line-height: var(--m3-font-label-large-height, 1.25rem);
  letter-spacing: var(--m3-font-label-large-tracking, 0.00625rem);
  font-weight: var(--m3-font-label-large-weight, 500);
}
.m3-font-label-medium {
  font-size: var(--m3-font-label-medium-size, 0.75rem);
  line-height: var(--m3-font-label-medium-height, 1rem);
  letter-spacing: var(--m3-font-label-medium-tracking, 0.03125rem);
  font-weight: var(--m3-font-label-medium-weight, 500);
}
.m3-font-label-small {
  font-size: var(--m3-font-label-small-size, 0.6875rem);
  line-height: var(--m3-font-label-small-height, 1rem);
  letter-spacing: var(--m3-font-label-small-tracking, 0.03125rem);
  font-weight: var(--m3-font-label-small-weight, 500);
}
/* Body styles are used for longer passages of text in your app. */
.m3-font-body-large {
  font-size: var(--m3-font-body-large-size, 1rem);
  line-height: var(--m3-font-body-large-height, 1.5rem);
  letter-spacing: var(--m3-font-body-large-tracking, 0.03125rem);
  font-weight: var(--m3-font-body-large-weight, 400);
}
.m3-font-body-medium {
  font-size: var(--m3-font-body-medium-size, 0.875rem);
  line-height: var(--m3-font-body-medium-height, 1.25rem);
  letter-spacing: var(--m3-font-body-medium-tracking, 0.015625rem);
  font-weight: var(--m3-font-body-medium-weight, 400);
}
.m3-font-body-small {
  font-size: var(--m3-font-body-small-size, 0.75rem);
  line-height: var(--m3-font-body-small-height, 1rem);
  letter-spacing: var(--m3-font-body-small-tracking, 0.025rem);
  font-weight: var(--m3-font-body-small-weight, 400);
}
/* Fix some browser stuff */
[class*="-m3-container"] {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
[class*="-m3-container"] a,
a[class*="-m3-container"] {
  text-decoration: none;
}
	`));
	}
	return <div />;
};
