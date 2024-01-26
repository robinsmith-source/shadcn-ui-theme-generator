import RadiusSelector from "@/components/selector/radius-selector.tsx";
import {ModeToggle} from "@/components/misc/mode-toggle.tsx";
import SaturationSelector from "@/components/selector/saturation-selector.tsx";
import LightnessSelector from "@/components/selector/lightness-selector.tsx";
import HueSelector from "@/components/selector/hue-selector.tsx";
import CopyButton from "@/components/misc/copy-button.tsx";


export default function ThemeSection() {
    return (
        <section className="w-full sm:w-96">
            <div className="flex flex-col justify-center items-center gap-8">

                <RadiusSelector onChange={(radius) => {
                    console.log("radius", radius)
                }}/>

                <HueSelector onChange={(radius) => {
                    console.log("hue", radius)
                }}/>

                <SaturationSelector onChange={
                    (saturation) => {
                        console.log("saturation", saturation)
                    }
                }/>

                <LightnessSelector onChange={(brightness) => {
                    console.log("brightness", brightness)
                }}/>
                <ModeToggle onChange={
                    (mode) => {
                        console.log("mode", mode)
                    }
                }/>

                <CopyButton/>
            </div>
        </section>
    )
}