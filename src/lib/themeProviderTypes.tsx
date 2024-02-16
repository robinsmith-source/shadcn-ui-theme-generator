import {ReactNode, useContext} from "react";
import {CSSVariables} from "@/lib/types.ts";
import {ThemeProviderContext} from "@/components/misc/theme-provider.tsx";

export type Theme = "dark" | "light" | "system" | {
    light: CSSVariables,
    dark: CSSVariables,
}

export type ThemeProviderProps = {
    children: ReactNode
    defaultTheme?: Theme
    storageKey?: string
}

export type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext)

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider")

    return context
}