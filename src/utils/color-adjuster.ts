export class Color {
    constructor(private hue: number, private saturation: number, private lightness: number) {
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