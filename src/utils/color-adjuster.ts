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
    
    setMinLightness(min: number) {
        this.lightness = Math.max(min, this.lightness);
    }

    setMaxLightness(max: number) {
        this.lightness = Math.min(max, this.lightness);
    }

    setMinSaturation(min: number) {
        this.saturation = Math.max(min, this.saturation);
    }

    setMaxSaturation(max: number) {
        this.saturation = Math.min(max, this.saturation);
    }
}