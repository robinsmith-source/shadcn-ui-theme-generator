'use client';

import { Theme } from '@/types/theme-schema';
import { useActiveTheme, useSetThemeConfig } from '@/stores/theme-store';
import { ColorSelection } from '@/components/color-picker';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { createThemeConfig } from '@/utils/generator';
import { useTheme } from '@/components/layout/theme-provider';
import GeneratorButton from '@/components/misc/generator-button.tsx';

export default function Customizer() {
  return (
    <div className='flex items-start justify-between rounded border bg-slate-300 p-4 text-black dark:bg-black/50'>
      <div className='grid w-80 grid-cols-2 items-end gap-2 px-3'>
        {changeableThemeValues.map(({ label, themeKey }) => (
          <ThemeValue label={label} themeKey={themeKey} key={themeKey} />
        ))}
      </div>
      <GenerateTheme />
      <GeneratorButton />
    </div>
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
    <div className='border border-dotted px-2 py-4'>
      <p className='text-sm font-medium'>Generate theme</p>
      <p className='text-xs text-muted-foreground'>
        Based on the primary color
      </p>
      <div className='flex items-center justify-between gap-1 py-2'>
        <ThemeValue label='Primary' themeKey='primary' />
        <Button
          className='h-auto px-4 py-1 text-sm'
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
