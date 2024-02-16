import {createContext, Dispatch, SetStateAction, useContext} from "react";
import type {CSSVariables} from "@/lib/types.ts";

export const GeneratedThemeContext = createContext<{
    theme: {
        dark: CSSVariables,
        light: CSSVariables,
    } | null;
    //TODO: define default theme here
    setTheme: Dispatch<SetStateAction<{
        dark: CSSVariables,
        light: CSSVariables,
    } | null>>;
}>({
    theme: null,
    setTheme: () => {
    },
});

export const useGeneratedTheme = () => useContext(GeneratedThemeContext);