import { HSL } from '@/types/theme-schema';

export const hslToVariableValue = (hsl: HSL) => {
  return `${hsl.h} ${hsl.s}% ${hsl.l}%`;
};

export const hslToCssValue = (hsl: HSL) => {
  return `hsl(${hslToVariableValue(hsl)})`;
};
