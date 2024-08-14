export type CSSVariables = {
  '--background': string;
  '--foreground': string;
  '--card': string;
  '--card-foreground': string;
  '--popover': string;
  '--popover-foreground': string;
  '--primary': string;
  '--primary-foreground': string;
  '--secondary': string;
  '--secondary-foreground': string;
  '--muted': string;
  '--muted-foreground': string;
  '--accent': string;
  '--accent-foreground': string;
  '--destructive': string;
  '--destructive-foreground': string;
  '--border': string;
  '--input': string;
  '--ring': string;
};

export type SelectionValues = {
  hue: number;
  saturation: number;
  lightness: number;
  config: {
    radius: number;
  };
};

export type ThemeOutputs = {
  dark: CSSVariables;
  light: CSSVariables & {
    '--radius': string;
  };
};
