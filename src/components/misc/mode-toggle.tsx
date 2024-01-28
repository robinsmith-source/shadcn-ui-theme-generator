import {useTheme} from "@/components/misc/theme-provider.tsx"
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group.tsx";

export function ModeToggle(
) {
    const {setTheme} = useTheme()

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
