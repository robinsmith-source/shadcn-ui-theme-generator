'use client';

import { Theme } from '@/types/theme-schema';
import { useActiveTheme, useSetThemeConfig } from '@/stores/theme-store';
import { ColorSelection } from '@/components/color-picker';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { createThemeConfig } from '@/utils/generator';
import { useTheme } from '@/components/layout/theme-provider';
import GeneratorButton from '@/components/misc/generator-button';
import CopyButton from '@/components/misc/copy-button';
import { useState } from 'react';
import { Lock, Unlock } from 'lucide-react';

export default function Customizer() {
  const [lockedStates, setLockedStates] = useState<
    Record<keyof Theme, boolean>
  >({
    background: false,
    foreground: false,
    card: false,
    cardForeground: false,
    popover: false,
    popoverForeground: false,
    primary: false,
    primaryForeground: false,
    secondary: false,
    secondaryForeground: false,
    muted: false,
    mutedForeground: false,
    accent: false,
    accentForeground: false,
    destructive: false,
    destructiveForeground: false,
    border: false,
    input: false,
    ring: false,
  });

  return (
    <section className='mx-auto flex flex-col items-center justify-center gap-12 rounded-md border bg-muted/30 p-6'>
      <div className='grid grid-cols-2 items-end gap-x-6 gap-y-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
        {changeableThemeValues.map(({ label, themeKey }) => (
          <ThemeValue
            label={label}
            themeKey={themeKey}
            key={themeKey}
            lockedStates={lockedStates}
            setLockedStates={setLockedStates}
          />
        ))}
      </div>
      <div className='flex flex-col gap-6'>
        <GenerateTheme lockedStates={lockedStates} />
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
  lockedStates,
  setLockedStates,
}: {
  themeKey: keyof Theme;
  label: string;
  lockedStates: Record<keyof Theme, boolean>;
  setLockedStates: React.Dispatch<
    React.SetStateAction<Record<keyof Theme, boolean>>
  >;
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
    <div className='grid grid-cols-[3fr_1fr] gap-1'>
      <Label className='col-span-2 flex-shrink-0'>{label}</Label>
      <ColorSelection
        color={color}
        onColorChange={({ h, s, l }) => {
          changeThemeValue(themeKey, { h, s, l });
        }}
      />
      <Button
        onClick={() =>
          setLockedStates((prev) => ({ ...prev, [themeKey]: !prev[themeKey] }))
        }
        size='icon'
      >
        {lockedStates[themeKey] ? (
          <Lock className='size-5' />
        ) : (
          <Unlock className='size-5' />
        )}
      </Button>
    </div>
  );
};

function GenerateTheme({
  lockedStates,
}: {
  lockedStates: Record<keyof Theme, boolean>;
}) {
  const theme = useActiveTheme();
  const setThemeConfig = useSetThemeConfig();

  if (!theme) return null;

  const getLockedColors = () => {
    const lockedColors: Partial<Theme> = {};
    changeableThemeValues.forEach(({ themeKey }) => {
      const value = theme[themeKey];
      if (lockedStates[themeKey]) {
        lockedColors[themeKey] = value;
      }
    });
    return lockedColors;
  };

  return (
    <div>
      <span>Generate a theme based on the locked colors</span>
      <div className='mt-2'>
        <Button
          size='sm'
          className='mt-2'
          onClick={() => {
            const lockedColors = getLockedColors();
            console.log(lockedColors);
            const newThemeConfig = createThemeConfig(lockedColors);
            setThemeConfig(newThemeConfig);
          }}
        >
          Generate
        </Button>
      </div>
    </div>
  );
}
