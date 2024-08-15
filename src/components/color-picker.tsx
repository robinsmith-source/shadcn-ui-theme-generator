import { useMemo, useCallback, ChangeEvent } from 'react';
import { Input } from '@/components/ui/input';
import { HslColor, colord } from 'colord';
import { useDebounceCallback } from 'usehooks-ts';

export const ColorSelection = ({
  color,
  onColorChange,
}: {
  color: HslColor;
  onColorChange: (color: HslColor) => void;
}) => {
  const initialHex = useMemo(() => colord(color).toHex(), [color]);

  const debouncedColorChange = useDebounceCallback((newHex: string) => {
    const newHsva = colord(newHex).toHsv();
    onColorChange(colord(newHsva).toHsl());
  }, 200);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newHex = event.target.value;
      debouncedColorChange(newHex);
    },
    [debouncedColorChange]
  );

  return (
    <Input
      type='color'
      value={initialHex}
      onChange={handleInputChange}
      className='h-8 w-full cursor-pointer appearance-none overflow-hidden rounded-md border-none p-0'
    />
  );
};
