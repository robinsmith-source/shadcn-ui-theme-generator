import {Slider} from "@/components/ui/slider.tsx";

export default function HueSelector({onChange}: { onChange: (radius: number) => void }) {
   /* const root = document.querySelector(":root") as HTMLElement
    //60 9.1% 97.8%;
    root.style.setProperty("--primary", `${hue} , 100%, 50%`)*/
    return (
        <div className="w-full">
            <small className="text-sm font-medium leading-none">Hue</small>
            <Slider onValueChange={(value) => onChange(Number(value))} defaultValue={[0.5]} min={0} max={360} step={10}/>
        </div>
    )
}