export function syncTheme(theme, className) {
    const css = Object.entries(theme)
        .reduce((acc, [key, value]) => `${acc} ${key}: ${value};`, `.${className} {`) + '}';

    let styleTag = document.getElementById('dynamic-theme-style');
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'dynamic-theme-style';
        document.head.appendChild(styleTag);
    }
    styleTag.innerHTML = css;
}