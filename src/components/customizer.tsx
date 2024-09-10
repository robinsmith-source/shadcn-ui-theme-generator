'use client';

import { Theme } from '@/types/theme-schema';
import { useActiveTheme, useSetThemeConfig } from '@/stores/theme-store';
import { ColorSelection } from '@/components/color-picker';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { createThemeConfig } from '@/utils/generator';
import { useTheme } from '@/components/layout/theme-provider';
import GeneratorButton from '@/components/misc/generator-button.tsx';
import CopyButton from '@/components/misc/copy-button.tsx';

export default function Customizer() {
  return (
    <section className='mx-auto flex flex-col items-center justify-center gap-12 rounded-md border bg-muted/30 p-6'>
      <div className='grid grid-cols-4 items-end gap-x-6 gap-y-3'>
        {changeableThemeValues.map(({ label, themeKey }) => (
          <ThemeValue label={label} themeKey={themeKey} key={themeKey} />
        ))}
      </div>
      <div className='flex flex-col gap-6'>
        <GenerateTheme />
        <div className='grid grid-cols-2 items-center gap-4'>
          <CopyButton className='' />
          <GeneratorButton />
        </div>
      </div>
    </section>
  );
}

const changeableThemeValues: Array<{ label: string; themeKey: keyof Theme }> = [
  {
    label: 'Background',
    themeKey: 'background',
  },
  {
    label: 'Foreground',
    themeKey: 'foreground',
  },
  {
    label: 'Card',
    themeKey: 'card',
  },
  {
    label: 'Card Foreground',
    themeKey: 'cardForeground',
  },
  {
    label: 'Popover',
    themeKey: 'popover',
  },
  {
    label: 'Popover Foreground',
    themeKey: 'popoverForeground',
  },
  {
    label: 'Primary',
    themeKey: 'primary',
  },
  {
    label: 'Primary Foreground',
    themeKey: 'primaryForeground',
  },
  {
    label: 'Secondary',
    themeKey: 'secondary',
  },
  {
    label: 'Secondary Foreground',
    themeKey: 'secondaryForeground',
  },
  {
    label: 'Muted',
    themeKey: 'muted',
  },
  {
    label: 'Muted Foreground',
    themeKey: 'mutedForeground',
  },
  {
    label: 'Accent',
    themeKey: 'accent',
  },
  {
    label: 'Accent Foreground',
    themeKey: 'accentForeground',
  },
  {
    label: 'Destructive',
    themeKey: 'destructive',
  },
  {
    label: 'Destructive Foreground',
    themeKey: 'destructiveForeground',
  },
  {
    label: 'Border',
    themeKey: 'border',
  },
  {
    label: 'Input',
    themeKey: 'input',
  },
  {
    label: 'Ring',
    themeKey: 'ring',
  },
];

const ThemeValue = ({
  label,
  themeKey,
}: {
  themeKey: keyof Theme;
  label: string;
}) => {
  const { theme } = useTheme();

  const activeTheme = useActiveTheme();
  const setConfig = useSetThemeConfig();

  if (!activeTheme) return null;

  const color = activeTheme[themeKey];

  const changeThemeValue = <TKey extends keyof Theme>(
    key: TKey,
    value: Theme[TKey]
  ) => {
    if (!theme) return;

    const newActiveThemeConfig = {
      ...activeTheme,
      [key]: value,
    };

    setConfig(
      (prev) => ({
        ...prev,
        [theme]: newActiveThemeConfig,
      }),
      false
    );
  };

  return (
    <div className='flex flex-col gap-1'>
      <Label className='flex-shrink-0'>{label}</Label>

      <ColorSelection
        color={color}
        onColorChange={({ h, s, l }) => {
          changeThemeValue(themeKey, { h, s, l });
        }}
      />
    </div>
  );
};

function GenerateTheme() {
  const theme = useActiveTheme();
  const setThemeConfig = useSetThemeConfig();

  if (!theme) return null;

  return (
    <div>
      <span>Generate a theme based on the primary color</span>
      <div className='mt-2'>
        <ThemeValue label='Primary' themeKey='primary' />
        <Button
          size='sm'
          className='mt-2'
          onClick={() => {
            setThemeConfig(createThemeConfig(theme.primary));
          }}
        >
          Generate
        </Button>
      </div>
    </div>
  );
}
