import {HslColor} from "@uiw/color-convert";

export type CSSVariables = {
    "--background": string
    "--foreground": string
    "--card": string
    "--card-foreground": string
    "--popover": string
    "--popover-foreground": string
    "--primary": string
    "--primary-foreground": string
    "--secondary": string
    "--secondary-foreground": string
    "--muted": string
    "--muted-foreground": string
    "--accent": string
    "--accent-foreground": string
    "--destructive": string
    "--destructive-foreground": string
    "--border": string
    "--input": string
    "--ring": string
    "--radius": string
}


export type SelectionValues = {
    hue: number
    saturation: number
    lightness: number
    config : {
        radius: number
        theme: "light" | "dark"
    }
}

export type ThemeInput = {
    color: HslColor
    config: {
        radius: number
        theme: "light" | "dark"
    }
}