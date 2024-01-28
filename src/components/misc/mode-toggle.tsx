import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group.tsx";

export function ModeToggle() {
    return (
        <ToggleGroup type="single">
            <ToggleGroupItem value="light">
                Light
            </ToggleGroupItem>
            <ToggleGroupItem value="dark">
                Dark
            </ToggleGroupItem>
        </ToggleGroup>

    )
}
