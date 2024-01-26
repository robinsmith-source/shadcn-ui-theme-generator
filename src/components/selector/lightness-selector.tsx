import {useEffect, useState} from "react";
import {Slider} from "@/components/ui/slider.tsx";


export default function LightnessSelector({onChange}: { onChange: (radius: number) => void }) {

const [lightness, setLightness] = useState(0.5)
    useEffect(() => {
        onChange(lightness)
    }, [onChange, lightness]);

    return (
        <div className="w-full">
            <small className="text-sm font-medium leading-none">Lightness</small>
            <Slider onValueChange={(value) => setLightness(Number(value))} defaultValue={[0.5]} min={0} max={1} step={0.01}/>
        </div>
    )
}