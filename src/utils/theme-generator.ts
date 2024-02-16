import type {SelectionValues} from "@/lib/types.ts";
import {Color} from "@/utils/color-adjuster.ts";

export function generateTheme(themeInputs: SelectionValues) {
    return {
        light: generateLightPalette(themeInputs),
        dark: generateDarkPalette(themeInputs),
    };
}

function generateLightPalette(themeInputs: SelectionValues) {
    /*    const background = new Color(0,0,100).getColor();
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
        const ring = new Color(themeInputs.hue, 93, 58).getColor(); */

    //with thresholds
    const background = new Color(0, 0, 100).getColor();
    const foreground = new Color(themeInputs.hue - 40, 70, 4).getColor();
    const card = new Color(0, 0, 100).getColor();
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
        "--radius": `${themeInputs.config.radius || 0.5}rem`,
    }
}

function generateDarkPalette(themeInputs: SelectionValues) {

    const background = new Color(themeInputs.hue, themeInputs.saturation, themeInputs.lightness).adjustWithinThresholds(20, 100, 0, 5);
    const foreground = new Color(themeInputs.hue, themeInputs.saturation, themeInputs.lightness).adjustWithinThresholds(10, 40, 95, 100);

    const card = new Color(themeInputs.hue, themeInputs.saturation, themeInputs.lightness).adjustWithinThresholds(10, 40, 1, 5);
    const primary = new Color(themeInputs.hue, themeInputs.saturation, themeInputs.lightness).adjustWithinThresholds(40, 90, 40, 80);
    const primaryForeground = new Color(themeInputs.hue, themeInputs.saturation, themeInputs.lightness).adjustWithinThresholds(10, 40, 95, 100);

    const secondary = new Color(themeInputs.hue-120, themeInputs.saturation, themeInputs.lightness).adjustWithinThresholds(5, 50, 10, 50);
    const secondaryForeground = new Color(themeInputs.hue-120, themeInputs.saturation, themeInputs.lightness).adjustWithinThresholds(5, 50, 80, 95);

    const muted = new Color(themeInputs.hue, themeInputs.saturation, themeInputs.lightness).adjustWithinThresholds(10, 40, 5, 15);
    const mutedForeground = new Color(themeInputs.hue, themeInputs.saturation, themeInputs.lightness).adjustWithinThresholds(0, 15, 60, 75);

    const accent = new Color(themeInputs.hue, themeInputs.saturation, themeInputs.lightness).adjustWithinThresholds(10, 60, 40, 80);
    const accentForeground = new Color(themeInputs.hue, themeInputs.saturation, themeInputs.lightness).adjustWithinThresholds(10, 60, 70, 95);

    const destructive = new Color(20, themeInputs.saturation, themeInputs.lightness).adjustWithinThresholds(80, 90, 40, 60);
    const destructiveForeground = new Color(0,0,100)

    const border = new Color(themeInputs.hue, themeInputs.saturation, themeInputs.lightness).adjustWithinThresholds(0, 15, 10, 20);
    const input = new Color(themeInputs.hue, themeInputs.saturation, themeInputs.lightness).adjustWithinThresholds(0, 15, 10, 20);
    const ring = new Color(themeInputs.hue, themeInputs.saturation, themeInputs.lightness).adjustWithinThresholds(80, 100, 40, 60);

    return {
        "--background": background.getColor(),
        "--foreground": foreground.getColor(),
        "--card": card.getColor(),
        "--card-foreground": foreground.getColor(),
        "--popover": card.getColor(),
        "--popover-foreground": foreground.getColor(),
        "--primary": primary.getColor(),
        "--primary-foreground": primaryForeground.getColor(),
        "--secondary": secondary.getColor(),
        "--secondary-foreground": secondaryForeground.getColor(),
        "--muted": muted.getColor(),
        "--muted-foreground": mutedForeground.getColor(),
        "--accent": accent.getColor(),
        "--accent-foreground": accentForeground.getColor(),
        "--destructive": destructive.getColor(),
        "--destructive-foreground": destructiveForeground.getColor(),
        "--border": border.getColor(),
        "--input": input.getColor(),
        "--ring": ring.getColor(),
    }
}