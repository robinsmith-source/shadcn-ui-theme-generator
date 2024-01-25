import {useEffect, useState} from "react";
import {Slider} from "@/components/ui/slider.tsx";


export default function SaturationSelector({onChange}: { onChange: (radius: number) => void }) {

const [saturation, setSaturation] = useState(0.5)
    useEffect(() => {
        onChange(saturation)
    }, [onChange, saturation]);

    return (
        <div className="w-full">
            <small className="text-sm font-medium leading-none">Saturation</small>
            <Slider onValueChange={(value) => setSaturation(Number(value))} defaultValue={[0.5]} min={0} max={1} step={0.01}/>
        </div>
    )
}