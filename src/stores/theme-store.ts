import { create } from 'zustand';
import { ThemeConfig } from '@/types/theme-schema';
import { createThemeConfig } from '@/utils/generator';
import { useTheme } from '@/components/layout/theme-provider';

const STACK_MAX_SIZE = 50;

type ThemeStore = {
  themeConfig: ThemeConfig;
  themeStack: ThemeConfig[];
  setThemeConfig: (
    theme: ThemeConfig | ((theme: ThemeConfig) => ThemeConfig),
    addToStack?: boolean
  ) => void;
  setThemeStack: (stack: ThemeConfig[]) => void;
};

export const useThemeStore = create<ThemeStore>((set, get) => ({
  themeConfig: createThemeConfig(),
  themeStack: [],
  setThemeConfig: (value, addToStack = true) => {
    const { themeConfig, themeStack } = get();
    const newThemeConfig =
      typeof value === 'function' ? value(themeConfig) : value;
    set({ themeConfig: newThemeConfig });

    if (addToStack) {
      const newStack =
        themeStack.length < STACK_MAX_SIZE
          ? [...themeStack, themeConfig]
          : [...themeStack.slice(1), themeConfig];
      set({ themeStack: newStack });
    }
  },
  setThemeStack: (stack) => {
    set({ themeStack: stack });
  },
}));

export const useThemeConfig = () => {
  return useThemeStore((state) => state.themeConfig);
};

export const useSetThemeConfig = () => {
  return useThemeStore((state) => state.setThemeConfig);
};

export const useSetThemeStack = () => {
  return useThemeStore((state) => state.setThemeStack);
};

export const useActiveTheme = () => {
  const { theme } = useTheme();
  const config = useThemeConfig();

  let activeTheme = theme;
  if (theme === 'system') {
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    activeTheme = systemPrefersDark ? 'dark' : 'light';
  }

  return config[activeTheme as keyof ThemeConfig];
};
