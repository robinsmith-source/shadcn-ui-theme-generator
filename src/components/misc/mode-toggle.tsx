import {useTheme} from "@/components/misc/theme-provider.tsx"
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group.tsx";
import {useEffect} from "react";

export function ModeToggle(
    {onChange}: { onChange: (mode: "light" | "dark") => void }
) {
    const {setTheme, theme} = useTheme()

    useEffect(() => {
        onChange(theme as "light" | "dark")
    }, [onChange, theme]);

    return (
        <ToggleGroup type="single" onValueChange={(value: "light" | "dark") => setTheme(value)}>
            <ToggleGroupItem value="light">
                Light
            </ToggleGroupItem>
            <ToggleGroupItem value="dark">
                Dark
            </ToggleGroupItem>
        </ToggleGroup>

    )
}
