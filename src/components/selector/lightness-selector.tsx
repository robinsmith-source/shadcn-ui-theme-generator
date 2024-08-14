import { Slider } from '@/components/ui/slider';

export default function LightnessSelector({
  onChange,
}: {
  onChange: (radius: number) => void;
}) {
  return (
    <div className='w-full'>
      <small className='text-sm font-medium leading-none'>Lightness</small>
      <Slider
        onValueChange={(value) => onChange(Number(value))}
        defaultValue={[50]}
        min={0}
        max={100}
        step={1}
      />
    </div>
  );
}
