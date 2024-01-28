import type {SelectionValues} from "@/types.ts";
import {Color} from "@/utils/color-adjuster.ts";

//TODO: Scary implementation fix this!!
export function generateTheme(themeInputs: SelectionValues) {
    return new ThemePalette(themeInputs).generateTheme();
}

class ThemePalette {
    themeInputs: SelectionValues;

    constructor(themeInputs: SelectionValues) {
        this.themeInputs = themeInputs;
    }

    generateTheme() {
        return {
            light: new LightPalette(this.themeInputs).generateLightTheme(),
            dark: new DarkPalette(this.themeInputs).generateDarkTheme(),
        }
    }
}

class LightPalette extends ThemePalette {
    constructor(themeInputs: SelectionValues) {
        super(themeInputs);
    }

    private getBackground() {
        return new Color(this.themeInputs.hue, this.themeInputs.saturation, this.themeInputs.lightness).getColorWithThreshold(50, 10);
    }

    private getForeground() {
        return new Color(this.themeInputs.hue, this.themeInputs.saturation, this.themeInputs.lightness).getColorWithThreshold(5, 90);
    }

    private getCard() {
        return new Color(this.themeInputs.hue, this.themeInputs.saturation, this.themeInputs.lightness).getColorWithThreshold(80, 5);
    }

    private getCardForeground() {
        return this.getForeground()
    }

    private getPopover() {
        return this.getCard()
    }

    private getPopoverForeground() {
        return this.getForeground()
    }

    private getPrimary() {
        return `${this.themeInputs.hue - 5} , ${this.themeInputs.saturation}%, ${this.themeInputs.lightness}%`

    }

    private getPrimaryForeground() {
        return `${0} , ${100}%, ${100}%`

    }

    private getSecondary() {
        return `${this.themeInputs.hue - 180} , ${this.themeInputs.saturation < 30 ? this.themeInputs.saturation : 30}%, ${this.themeInputs.lightness}%`
    }

    private getSecondaryForeground() {
        return this.getPrimaryForeground()
    }

    private getMuted() {
        return `${this.themeInputs.hue - 50} , ${this.themeInputs.saturation < 30 ? this.themeInputs.saturation : 30}%, ${25}%`
    }

    private getMutedForeground() {
        return `${this.themeInputs.hue} , ${5}%, ${60}%`
    }

    private getAccent() {
        return `${this.themeInputs.hue - 50} , ${this.themeInputs.saturation < 30 ? this.themeInputs.saturation : 30}%, ${this.themeInputs.lightness < 25 ? this.themeInputs.lightness : 25}%`
    }

    private getAccentForeground() {
        return `${this.themeInputs.hue - 50} , ${5}%, ${90}%`
    }

    private getDestructive() {
        return new Color(0, 50, 50).getColor()
    }

    private getDestructiveForeground() {
        return `${this.themeInputs.hue - 50} , ${5}%, ${90}%`
    }

    private getBorder() {
        return `${this.themeInputs.hue - 50} , ${this.themeInputs.saturation < 30 ? this.themeInputs.saturation : 30}%, ${this.themeInputs.lightness < 50 ? this.themeInputs.lightness : 50}%`

    }

    private getInput() {
        return `${this.themeInputs.hue - 50} , ${this.themeInputs.saturation < 30 ? this.themeInputs.saturation : 30}%, ${this.themeInputs.lightness < 50 ? this.themeInputs.lightness : 50}%`
    }

    private getRing() {
        return `${this.themeInputs.hue - 50} , ${55}%, ${40}%`
    }

    generateLightTheme() {
        return {
            "--background": this.getBackground(),
            "--foreground": this.getForeground(),
            "--card": this.getCard(),
            "--card-foreground": this.getCardForeground(),
            "--popover": this.getPopover(),
            "--popover-foreground": this.getPopoverForeground(),
            "--primary": this.getPrimary(),
             "--primary-foreground": this.getForeground(),
             "--secondary": this.getSecondary(),
             "--secondary-foreground": this.getSecondaryForeground(),
             "--muted": this.getMuted(),
             "--muted-foreground": this.getMutedForeground(),
             "--accent": this.getAccent(),
             "--accent-foreground": this.getAccentForeground(),
             "--destructive": this.getDestructive(),
             "--destructive-foreground": this.getDestructiveForeground(),
             "--border": this.getBorder(),
             "--input": this.getInput(),
             "--ring": this.getRing(),
        }
    }
}

class DarkPalette extends ThemePalette {
    constructor(themeInputs: SelectionValues) {
        super(themeInputs);
    }

    private getBackground() {
        return new Color(this.themeInputs.hue, this.themeInputs.saturation, this.themeInputs.lightness).getColorWithThreshold(50, 10);
    }

    private getForeground() {
        return new Color(this.themeInputs.hue, this.themeInputs.saturation, this.themeInputs.lightness).getColorWithThreshold(5, 90);
    }

    private getCard() {
        return new Color(this.themeInputs.hue, this.themeInputs.saturation, this.themeInputs.lightness).getColorWithThreshold(80, 5);
    }

    private getCardForeground() {
        return this.getForeground()
    }

    private getPopover() {
        return this.getCard()
    }

    private getPopoverForeground() {
        return this.getForeground()
    }

    private getPrimary() {
        return `${this.themeInputs.hue - 5} , ${this.themeInputs.saturation}%, ${this.themeInputs.lightness}%`

    }

    private getPrimaryForeground() {
        return `${0} , ${100}%, ${100}%`

    }

    private getSecondary() {
        return `${this.themeInputs.hue - 180} , ${this.themeInputs.saturation < 30 ? this.themeInputs.saturation : 30}%, ${this.themeInputs.lightness}%`
    }

    private getSecondaryForeground() {
        return this.getPrimaryForeground()
    }

    private getMuted() {
        return `${this.themeInputs.hue - 50} , ${this.themeInputs.saturation < 30 ? this.themeInputs.saturation : 30}%, ${25}%`
    }

    private getMutedForeground() {
        return `${this.themeInputs.hue} , ${5}%, ${60}%`
    }

    private getAccent() {
        return `${this.themeInputs.hue - 50} , ${this.themeInputs.saturation < 30 ? this.themeInputs.saturation : 30}%, ${this.themeInputs.lightness < 25 ? this.themeInputs.lightness : 25}%`
    }

    private getAccentForeground() {
        return `${this.themeInputs.hue - 50} , ${5}%, ${90}%`
    }

    private getDestructive() {
        return new Color(0, 50, 50).getColor()
    }

    private getDestructiveForeground() {
        return `${this.themeInputs.hue - 50} , ${5}%, ${90}%`
    }

    private getBorder() {
        return `${this.themeInputs.hue - 50} , ${this.themeInputs.saturation < 30 ? this.themeInputs.saturation : 30}%, ${this.themeInputs.lightness < 50 ? this.themeInputs.lightness : 50}%`

    }

    private getInput() {
        return `${this.themeInputs.hue - 50} , ${this.themeInputs.saturation < 30 ? this.themeInputs.saturation : 30}%, ${this.themeInputs.lightness < 50 ? this.themeInputs.lightness : 50}%`
    }

    private getRing() {
        return `${this.themeInputs.hue - 50} , ${55}%, ${40}%`
    }

    generateDarkTheme() {
        return {
            "--background": this.getBackground(),
            "--foreground": this.getForeground(),
            "--card": this.getCard(),
            "--card-foreground": this.getCardForeground(),
            "--popover": this.getPopover(),
            "--popover-foreground": this.getPopoverForeground(),
            "--primary": this.getPrimary(),
             "--primary-foreground": this.getForeground(),
             "--secondary": this.getSecondary(),
             "--secondary-foreground": this.getSecondaryForeground(),
             "--muted": this.getMuted(),
             "--muted-foreground": this.getMutedForeground(),
             "--accent": this.getAccent(),
             "--accent-foreground": this.getAccentForeground(),
             "--destructive": this.getDestructive(),
             "--destructive-foreground": this.getDestructiveForeground(),
             "--border": this.getBorder(),
             "--input": this.getInput(),
             "--ring": this.getRing(),
        }
    }
}

