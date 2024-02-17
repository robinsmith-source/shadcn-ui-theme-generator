import type {SelectionValues} from "@/lib/types.ts";
import {Color} from "@/utils/color-adjuster.ts";

export function generateTheme(themeInputs: SelectionValues) {
    return {
        light: generateLightPalette(themeInputs),
        dark: generateDarkPalette(themeInputs),
    };
}

function generateLightPalette(themeInputs: SelectionValues) {
    const {hue, saturation, lightness} = themeInputs;

    const background = new Color(hue, saturation, lightness).adjustWithinThresholds(35, 60, 90, 95);
    const foreground = new Color(hue, saturation, lightness).adjustWithinThresholds(50, 75, 0, 5);

    const card = new Color(hue, saturation, lightness).adjustWithinThresholds(40, 60, 90, 95);
    const primary = new Color(hue, saturation, lightness).adjustWithinThresholds(40, 60, 30, 50);
    const primaryForeground = new Color(hue, saturation, lightness).adjustWithinThresholds(5, 40, 85, 98);

    const secondary = new Color(hue - 120, saturation, lightness).adjustWithinThresholds(40, 60, 30, 50);
    const secondaryForeground = new Color(hue - 120, saturation, lightness).adjustWithinThresholds(0, 20, 85, 98);

    const muted = new Color(hue, saturation, lightness).adjustWithinThresholds(20, 50, 80, 95);
    const mutedForeground = new Color(hue, saturation, lightness).adjustWithinThresholds(0, 15, 5, 40);

    const accent = new Color(hue, saturation, lightness).adjustWithinThresholds(20, 55, 75, 85);
    const accentForeground = new Color(hue, saturation, lightness).adjustWithinThresholds(15, 55, 5, 15);

    const destructive = new Color(hue, saturation, lightness).adjustWithinThresholds(80, 95, 0, 40);
    const destructiveForeground = new Color(hue, saturation, lightness).adjustWithinThresholds(80, 95, 80, 95);

    const border = new Color(hue, saturation, lightness).adjustWithinThresholds(0, 15, 80, 95);
    const input = new Color(hue, saturation, lightness).adjustWithinThresholds(0, 15, 80, 95);
    const ring = new Color(hue, saturation, lightness).adjustWithinThresholds(35, 80, 10, 40);


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
        "--radius": `${themeInputs.config.radius || 0.5}rem`,
    }
}

function generateDarkPalette(themeInputs: SelectionValues) {
    const {hue, saturation, lightness} = themeInputs;

    const background = new Color(hue, saturation, lightness).adjustWithinThresholds(20, 100, 0, 5);
    const foreground = new Color(hue, saturation, lightness).adjustWithinThresholds(10, 40, 95, 100);

    const card = new Color(hue, saturation, lightness).adjustWithinThresholds(10, 40, 1, 5);
    const primary = new Color(hue, saturation, lightness).adjustWithinThresholds(40, 90, 40, 80);
    const primaryForeground = new Color(hue, saturation, lightness).adjustWithinThresholds(10, 40, 95, 100);

    const secondary = new Color(hue - 120, saturation, lightness).adjustWithinThresholds(5, 50, 10, 50);
    const secondaryForeground = new Color(hue - 120, saturation, lightness).adjustWithinThresholds(5, 50, 80, 95);

    const muted = new Color(hue, saturation, lightness).adjustWithinThresholds(10, 40, 5, 15);
    const mutedForeground = new Color(hue, saturation, lightness).adjustWithinThresholds(0, 15, 60, 75);

    const accent = new Color(hue, saturation, lightness).adjustWithinThresholds(10, 60, 20, 40);
    const accentForeground = new Color(hue, saturation, lightness).adjustWithinThresholds(10, 60, 85, 100);

    const destructive = new Color(20, saturation, lightness).adjustWithinThresholds(80, 90, 40, 60);
    const destructiveForeground = new Color(0, 0, 100)

    const border = new Color(hue, saturation, lightness).adjustWithinThresholds(0, 15, 10, 20);
    const input = new Color(hue, saturation, lightness).adjustWithinThresholds(0, 15, 10, 20);
    const ring = new Color(hue, saturation, lightness).adjustWithinThresholds(80, 100, 40, 60);

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