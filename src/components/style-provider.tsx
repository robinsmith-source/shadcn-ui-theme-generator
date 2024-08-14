'use client';

import { type ReactNode, useEffect } from 'react';

import * as Portal from '@radix-ui/react-portal';
import { range } from 'lodash';
import { themeToStyles } from '@/lib/theme-to-styles';
import { Skeleton } from '@/components/ui/skeleton';
import { ThemeStyleSheet } from '@/lib/theme-style-sheet';
import { useActiveTheme } from '@/stores/theme-store';

export const StyleProvider = ({ children }: { children: ReactNode }) => {
  const activeTheme = useActiveTheme();

  if (!activeTheme)
    return (
      <div className='h-full w-full bg-background text-foreground'>
        <div className='flex h-full flex-col items-center justify-center'>
          {range(5).map((i) => (
            <Skeleton key={i} className='h-8 w-full' />
          ))}
        </div>
      </div>
    );

  const style = themeToStyles(activeTheme);

  return (
    <div style={style} className='h-full w-full bg-background text-foreground'>
      {children}
      <Portal.Root asChild>
        <ThemeStyleSheet />
      </Portal.Root>
    </div>
  );
};
