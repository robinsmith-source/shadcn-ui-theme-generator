import {CSSVariables} from "@/types.ts";


function generateCSSVariables(cssVariables: CSSVariables, className: string) {
    return Object.entries(cssVariables)
        .reduce((acc, [key, value]) => `${acc} \n\t${key}: ${value};`, `${className} {`) + '\n}\n';

}

export function syncTheme(theme: {
    dark: CSSVariables,
    light: CSSVariables,
}, className?: string) {
    const cssLight = generateCSSVariables(theme.light, `:root ${className}`);
    const cssDark = generateCSSVariables(theme.dark, `.dark ${className}`);

    let styleTag = document.getElementById('dynamic-theme-style');
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'dynamic-theme-style';
        document.head.appendChild(styleTag);
    }
    styleTag.innerHTML = cssLight + cssDark;
}