'use client';

import { useMemo } from 'react';
import { useThemeConfig } from '@/stores/theme-store';
import { themeToStyles } from '@/lib/theme-to-styles';

export const ThemeStyleSheet = () => {
  const config = useThemeConfig();

  const style = useMemo(() => {
    const styles = {
      light: themeToStyles(config.light),
      dark: themeToStyles(config.dark),
    };

    const lightStyles = Object.entries(styles.light)
      .map(([key, value]) => `${key}: ${value};`)
      .join('\n');

    const darkStyles = Object.entries(styles.dark)
      .map(([key, value]) => `${key}: ${value};`)
      .join('\n');

    return `
    .ported {
      ${lightStyles}
    }

    html.dark .ported {
      ${darkStyles}
    }`;
  }, [config]);

  return <style dangerouslySetInnerHTML={{ __html: style }} />;
};
