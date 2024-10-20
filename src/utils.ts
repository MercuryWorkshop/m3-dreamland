import {
	DynamicScheme,
	Hct,
	MaterialDynamicColors,
	SchemeContent,
	SchemeExpressive,
	SchemeFidelity,
	SchemeMonochrome,
	SchemeNeutral,
	SchemeTonalSpot,
	SchemeVibrant,
} from "@material/material-color-utilities";

export type Color =
	| "primary"
	| "onPrimary"
	| "primaryContainer"
	| "onPrimaryContainer"
	| "inversePrimary"
	| "secondary"
	| "onSecondary"
	| "secondaryContainer"
	| "onSecondaryContainer"
	| "tertiary"
	| "onTertiary"
	| "tertiaryContainer"
	| "onTertiaryContainer"
	| "error"
	| "onError"
	| "errorContainer"
	| "onErrorContainer"
	| "background"
	| "onBackground"
	| "surface"
	| "onSurface"
	| "surfaceVariant"
	| "onSurfaceVariant"
	| "inverseSurface"
	| "inverseOnSurface"
	| "outline"
	| "outlineVariant"
	| "shadow"
	| "scrim"
	| "surfaceDim"
	| "surfaceBright"
	| "surfaceContainerLowest"
	| "surfaceContainerLow"
	| "surfaceContainer"
	| "surfaceContainerHigh"
	| "surfaceContainerHighest"
	| "surfaceTint";
export type SerializedScheme = Record<Color, number>;
export type SchemeInput = "tonal_spot" | "content" | "fidelity" | "vibrant" | "expressive" | "neutral" | "monochrome" | { new(sourceColorHct: Hct, isDark: boolean, contrastLevel: number): DynamicScheme };

const colors: Color[] = [
	"primary",
	"onPrimary",
	"primaryContainer",
	"onPrimaryContainer",
	"inversePrimary",
	"secondary",
	"onSecondary",
	"secondaryContainer",
	"onSecondaryContainer",
	"tertiary",
	"onTertiary",
	"tertiaryContainer",
	"onTertiaryContainer",
	"error",
	"onError",
	"errorContainer",
	"onErrorContainer",
	"background",
	"onBackground",
	"surface",
	"onSurface",
	"surfaceVariant",
	"onSurfaceVariant",
	"inverseSurface",
	"inverseOnSurface",
	"outline",
	"outlineVariant",
	"shadow",
	"scrim",
	"surfaceDim",
	"surfaceBright",
	"surfaceContainerLowest",
	"surfaceContainerLow",
	"surfaceContainer",
	"surfaceContainerHigh",
	"surfaceContainerHighest",
	"surfaceTint",
];

const schemes = {
	tonal_spot: SchemeTonalSpot,
	content: SchemeContent,
	fidelity: SchemeFidelity,
	vibrant: SchemeVibrant,
	expressive: SchemeExpressive,
	neutral: SchemeNeutral,
	monochrome: SchemeMonochrome,
};

export const serializeScheme = (scheme: DynamicScheme) => {
	const out: Record<string, number> = {};
	for (const color of colors) {
		out[color] = MaterialDynamicColors[color].getArgb(scheme);
	}
	return out as SerializedScheme;
};

export const genScheme = (
	scheme: SchemeInput,
	contrast: number,
	color: number
) => {
	const resolvedScheme = typeof scheme === "string" ? schemes[scheme] : scheme;
	const light = new resolvedScheme(Hct.fromInt(color), false, contrast);
	const dark = new resolvedScheme(Hct.fromInt(color), true, contrast);
	return { light: serializeScheme(light), dark: serializeScheme(dark) };
};

export const genCSS = (light: SerializedScheme, dark: SerializedScheme) => {
	const genColorVariable = (name: string, argb: number) => {
		const kebabCase = name.replace(/[A-Z]/g, (letter: string) => `-${letter.toLowerCase()}`);
		const red = (argb >> 16) & 255;
		const green = (argb >> 8) & 255;
		const blue = argb & 255;
		return `--m3-scheme-${kebabCase}: ${red} ${green} ${blue};`;
	};
	const lightColors = Object.entries(light)
		.map(([name, argb]) => genColorVariable(name, argb))
		.join("\n");
	const darkColors = Object.entries(dark)
		.map(([name, argb]) => genColorVariable(name, argb))
		.join("\n");
	const colors = `
:root {
	accent-color: rgb(var(--m3-scheme-primary));
}
@media (prefers-color-scheme: light) {
	:root {
		color-scheme: light;
	}
	:root, ::backdrop {
		${lightColors}
	}
}
@media (prefers-color-scheme: dark) {
	:root {
		color-scheme: dark;
	}
	:root, ::backdrop {
		${darkColors}
	}
}`;
	return colors;
};


