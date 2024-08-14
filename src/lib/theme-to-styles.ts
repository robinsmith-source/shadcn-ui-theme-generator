import { fromPairs, keys } from 'lodash';
import { Theme } from '@/types/theme-schema';
import { hslToVariableValue } from '@/lib/hsl-to-variable';

const variables: Record<keyof Theme, string> = {
  background: 'background',
  foreground: 'foreground',
  muted: 'muted',
  mutedForeground: 'muted-foreground',
  popover: 'popover',
  popoverForeground: 'popover-foreground',
  card: 'card',
  cardForeground: 'card-foreground',
  border: 'border',
  input: 'input',
  primary: 'primary',
  primaryForeground: 'primary-foreground',
  secondary: 'secondary',
  secondaryForeground: 'secondary-foreground',
  accent: 'accent',
  accentForeground: 'accent-foreground',
  destructive: 'destructive',
  destructiveForeground: 'destructive-foreground',
  ring: 'ring',
};

export const themeToStyles = (theme: Theme) => {
  const order = keys(variables);

  const ordered = order.map((key: string) => {
    return [
      `--${variables[key as keyof Theme]}`,
      hslToVariableValue(theme[key as keyof Theme]),
    ] as const;
  });

  const mutableOrdered = ordered.map((pair) => [...pair] as [string, string]);
  return fromPairs(mutableOrdered);
};
