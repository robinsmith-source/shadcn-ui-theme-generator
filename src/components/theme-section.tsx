"use client"
import RadiusSelector from "@/components/selector/radius-selector.tsx";
import {ModeToggle} from "@/components/misc/mode-toggle.tsx";
import SaturationSelector from "@/components/selector/saturation-selector.tsx";
import LightnessSelector from "@/components/selector/lightness-selector.tsx";
import HueSelector from "@/components/selector/hue-selector.tsx";
import CopyButton from "@/components/misc/copy-button.tsx";
import {useEffect} from "react";
import {generateTheme} from "@/utils/theme-generator.ts";
import {syncTheme} from "@/utils/theme-syncer.ts";
import {useGeneratedTheme} from "@/lib/generatedThemeContext.ts";
import {useSelectionContext} from "@/lib/selectionContext.ts";




export default function ThemeSection() {
    const {theme, setTheme } = useGeneratedTheme();
const { selection, setSelection } = useSelectionContext();
   /* const [selection, setSelection] = useState<SelectionValues>(
        {
            hue: 0,
            saturation: 50,
            lightness: 50,
            config: {
                radius: 0,
            },
        }
    )*/


    useEffect(() => {
   const generatedTheme = generateTheme(selection);
setTheme(generatedTheme);
syncTheme(generatedTheme, ".dynamic-theme");
    }, [selection, setTheme]);

    console.log(theme)

    return (
        <section className="w-full sm:w-96">
            <div className="flex flex-col justify-center items-center gap-8">
                <RadiusSelector onChange={(radius) => setSelection({
                    ...selection,
                    config: {
                        ...selection.config,
                        radius
                    }
                })}/>

                <HueSelector onChange={(hue) => setSelection({
                    ...selection,
                    hue
                })}/>

                <SaturationSelector onChange={
                    (saturation) => setSelection({
                        ...selection,
                        saturation
                    })
                }/>

                <LightnessSelector onChange={(lightness) => setSelection({
                    ...selection,
                    lightness
                })}/>

                <ModeToggle/>

                <CopyButton/>
            </div>
        </section>
    )
}