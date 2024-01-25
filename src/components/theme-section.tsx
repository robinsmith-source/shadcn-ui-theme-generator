import {Slider} from "@/components/ui/slider.tsx";
import Colorful from "@uiw/react-color-colorful";
import {useState} from "react";
import RadiusSelector from "@/components/selector/radius-selector.tsx";
import {ModeToggle} from "@/components/misc/mode-toggle.tsx";
import SaturationSelector from "@/components/selector/saturation-selector.tsx";
import BrightnessSelector from "@/components/selector/brightness-selector.tsx";


export default function ThemeSection() {
    const [hsva, setHsva] = useState({h: 0, s: 0, v: 68, a: 1});
    return (
        <section className="grid grid-cols-2">
            <Colorful
                disableAlpha
                color={hsva}
                onChange={(color) => {
                    setHsva(color.hsva);
                }}
            />
            <div className="flex flex-col justify-center items-center gap-8">


                <RadiusSelector onChange={(radius) => {
                    console.log("radius", radius)
                }}/>

                <SaturationSelector onChange={
                    (saturation) => {
                        console.log("saturation", saturation)
                    }
                }/>
                <BrightnessSelector onChange={(brightness) => {
                    console.log("brightness", brightness)
                }}/>
                <ModeToggle/>
            </div>
        </section>
    )
}