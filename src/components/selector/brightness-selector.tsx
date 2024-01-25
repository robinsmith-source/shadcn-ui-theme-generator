import {useEffect, useState} from "react";
import {Slider} from "@/components/ui/slider.tsx";


export default function BrightnessSelector({onChange}: { onChange: (radius: number) => void }) {

const [brightness, setBrightness] = useState(0.5)
    useEffect(() => {
        onChange(brightness)
    }, [onChange, brightness]);

    return (
        <div className="w-full">
            <small className="text-sm font-medium leading-none">Brightness</small>
            <Slider onValueChange={(value) => setBrightness(Number(value))} defaultValue={[0.5]} min={0} max={1} step={0.01}/>
        </div>
    )
}