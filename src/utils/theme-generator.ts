import type {CSSVariables, SelectionValues} from "@/types.ts";


export function generateTheme(themeInputs: SelectionValues) {
    return new ThemePalette(themeInputs).generateTheme();
}

class ThemePalette {
    themeInputs: SelectionValues;

    constructor(themeInputs: SelectionValues) {
        this.themeInputs = themeInputs;
    }
    generateTheme() {
        // const lightPalette = new LightPalette(this.themeInputs);
        return new DarkPalette(this.themeInputs).generateDarkTheme();

    }
}

class DarkPalette extends ThemePalette {
    constructor(themeInputs: SelectionValues) {
        super(themeInputs);
    }

    private getBackground() {
        return  }

    private getForeground() {
        return
    }

    private getCard() {

        return   }

    private getCardForeground() {
        return
    }

    private getPopover() {
        return
    }

    private getPopoverForeground() {
        return
    }

    private getPrimary() {
        return `${this.themeInputs.hue} , ${this.themeInputs.saturation}%, ${this.themeInputs.lightness}%`

    }

    private getSecondary() {
        return
    }

    private getSecondaryForeground() {
        return
    }

    private getMuted() {
        return
    }

    private getMutedForeground() {
        return
    }

    private getAccent() {
        return
    }

    private getAccentForeground() {
        return
    }

    private getDestructive() {
        return
    }

    private getDestructiveForeground() {
        return
    }

    private getBorder() {
        return

    }

    private getInput() {
        return
    }

    private getRing() {
        return
    }

    private getRadius() {
        return
    }

    generateDarkTheme() {
        return {
            /*"--background": this.getBackground(),
            "--foreground": this.getForeground(),
            "--card": this.getCard(),
            "--card-foreground": this.getCardForeground(),
            "--popover": this.getPopover(),
            "--popover-foreground": this.getPopoverForeground(),*/
            "--primary": this.getPrimary(),
           /* "--primary-foreground": this.getForeground(),
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
            "--ring": this.getRing(),*/
        }
    }
}

