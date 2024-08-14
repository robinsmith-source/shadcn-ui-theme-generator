'use client';

import { PopoverContent } from '@radix-ui/react-popover';
import {
  type ColorResult,
  hslaToHsva,
  type HslColor,
  hsvaToHex,
} from '@uiw/react-color';
import ChromeColorPicker from '@uiw/react-color-chrome';
import { Popover, PopoverTrigger } from '@/components/ui/popover';

export const ColorSelection = ({
  color,
  onColorChange,
}: {
  color: HslColor;
  onColorChange: (color: ColorResult) => void;
}) => {
  const hsva = hslaToHsva({
    ...color,
    a: 1,
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className='h-6 w-full flex-shrink-0 rounded border'
          style={{
            backgroundColor: hsvaToHex(hsva),
          }}
        ></button>
      </PopoverTrigger>
      <PopoverContent className='isolate z-50'>
        <ChromeColorPicker color={hsva} onChange={onColorChange} />
      </PopoverContent>
    </Popover>
  );
};
