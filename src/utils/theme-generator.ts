import type {SelectionValues} from "@/types.ts";
import {Color} from "@/utils/color-adjuster.ts";

export function generateTheme(themeInputs: SelectionValues) {
    return {
        light: generateLightPalette(themeInputs),
        dark: generateDarkPalette(themeInputs),
    };
}
function generateLightPalette(themeInputs: SelectionValues) {
    const background = new Color(0,0,100).getColor();
    const foreground = new Color(themeInputs.hue - 40, 70, 4).getColor();
    const card = new Color(0,0,100).getColor();
    const primary = new Color(themeInputs.hue - 5, 83, 57).getColor();
    const primaryForeground = new Color(themeInputs.hue, 70, 4).getColor();
    const secondary = new Color(themeInputs.hue - 40, 14, 50).getColor();
    const muted = new Color(themeInputs.hue - 40, 14, 95).getColor();
    const mutedForeground = new Color(themeInputs.hue - 40, 9, 45).getColor();
    const accent = new Color(themeInputs.hue - 40, 14, 95).getColor();
    const accentForeground = new Color(themeInputs.hue - 40, 40, 11).getColor();
    const destructive = new Color(0, 84, 60).getColor();
    const destructiveForeground = new Color(themeInputs.hue - 50, 20, 98).getColor();
    const border = new Color(themeInputs.hue - 40, 13, 91).getColor();
    const input = new Color(themeInputs.hue - 40, 13, 91).getColor();
    const ring = new Color(themeInputs.hue, 93, 58).getColor();

    return {
        "--background": background,
        "--foreground": foreground,
        "--card": card,
        "--card-foreground": foreground,
        "--popover": card,
        "--popover-foreground": foreground,
        "--primary": primary,
        "--primary-foreground": primaryForeground,
        "--secondary": secondary,
        "--secondary-foreground": primaryForeground,
        "--muted": muted,
        "--muted-foreground": mutedForeground,
        "--accent": accent,
        "--accent-foreground": accentForeground,
        "--destructive": destructive,
        "--destructive-foreground": destructiveForeground,
        "--border": border,
        "--input": input,
        "--ring": ring,
        "--radius": `${themeInputs.config.radius}rem`,
    }
}
function generateDarkPalette(themeInputs: SelectionValues) {
    const background = new Color(themeInputs.hue - 40,71,4).getColor();
    const foreground = new Color(themeInputs.hue - 50,20,98).getColor();
    const card = new Color(themeInputs.hue - 40, 71,4).getColor();
    const primary = new Color(themeInputs.hue, 70, 50).getColor();
    const primaryForeground = new Color(themeInputs.hue - 40, 20, 98).getColor();

    const secondary = new Color(themeInputs.hue - 40, 27, 17).getColor();
    const muted = new Color(themeInputs.hue - 50, 27, 17).getColor();
    const mutedForeground = new Color(themeInputs.hue - 38, 10, 65).getColor();
    const accent = new Color(themeInputs.hue - 40, 27, 17).getColor();
    const accentForeground = new Color(themeInputs.hue - 40, 20, 98).getColor();
    const destructive = new Color(0,63,30).getColor();
    const destructiveForeground = new Color(themeInputs.hue - 40, 20, 98).getColor();
    const border = new Color(themeInputs.hue - 40, 27, 17).getColor();
    const input = new Color(themeInputs.hue - 40, 27, 17).getColor();
    const ring = new Color(themeInputs.hue, 70, 50).getColor();

    return {
        "--background": background,
        "--foreground": foreground,
        "--card": card,
        "--card-foreground": foreground,
        "--popover": card,
        "--popover-foreground": foreground,
        "--primary": primary,
        "--primary-foreground": primaryForeground,
        "--secondary": secondary,
        "--secondary-foreground": primaryForeground,
        "--muted": muted,
        "--muted-foreground": mutedForeground,
        "--accent": accent,
        "--accent-foreground": accentForeground,
        "--destructive": destructive,
        "--destructive-foreground": destructiveForeground,
        "--border": border,
        "--input": input,
        "--ring": ring,
    }
}