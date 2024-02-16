export class Color {
    constructor(private hue: number, private saturation: number, private lightness: number) {
    }

    adjustLightness(percent: number) {
        this.lightness = Math.max(0, Math.min(1, this.lightness + percent));
    }

    getColor(): string {
        return `${this.hue}, ${this.saturation}%, ${this.lightness}%`;
    }

    adjustWithinThresholds(minSaturation: number, maxSaturation: number, minLightness: number, maxLightness: number): Color {
        this.lightness = Math.max(minLightness, Math.min(maxLightness, this.lightness));
        this.saturation = Math.max(minSaturation, Math.min(maxSaturation, this.saturation));
        return this;
    }
}