import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group.tsx";

export default function RadiusSelector({onChange}: { onChange: (radius: number) => void }) {
    return (
        <div className="w-full">
            <small className="text-sm font-medium leading-none">Radius</small>
            <ToggleGroup className="flex justify-between" type="single" onValueChange={(value) => onChange(Number(value))} defaultValue="0.5">
                <ToggleGroupItem value="0" aria-label="Toggle radius 0">
                    0
                </ToggleGroupItem>
                <ToggleGroupItem value="0.3" aria-label="Toggle radius 0.3">
                    0.3
                </ToggleGroupItem>
                <ToggleGroupItem value="0.5" aria-label="Toggle radius 0.5">
                    0.5
                </ToggleGroupItem>
                <ToggleGroupItem value="0.75" aria-label="Toggle radius 0.75">
                    0.75
                </ToggleGroupItem>
                <ToggleGroupItem value="1.0" aria-label="Toggle radius 1.0">
                    1.0
                </ToggleGroupItem>
            </ToggleGroup>
        </div>
    )
}