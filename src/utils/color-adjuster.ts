export class Color {
    private hue: number;
    private saturation: number;
    private lightness: number;

    constructor(hue: number, saturation: number, lightness: number) {
        this.hue = hue;
        this.saturation = saturation;
        this.lightness = lightness;
    }

    lighten(percent: number) {
        this.lightness = Math.min(1, this.lightness + percent);
    }

    darken(percent: number) {
        this.lightness = Math.max(0, this.lightness - percent);
    }

    getColor(): string {
        return `${this.hue}, ${this.saturation}%, ${this.lightness}%`;
    }
    
    getColorWithThreshold(saturationThreshold: number, lightnessThreshold: number): string {
        const saturation = this.saturation < saturationThreshold ? this.saturation : saturationThreshold;
        const lightness = this.lightness < lightnessThreshold ? this.lightness : lightnessThreshold;
        return `${this.hue}, ${saturation}%, ${lightness}%`;
    }
}