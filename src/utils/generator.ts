import { Colord, extend } from 'colord';
import a11yPlugin from 'colord/plugins/a11y';
import harmoniesPlugin from 'colord/plugins/harmonies';
import { HSL } from '@/types/theme-schema';

extend([a11yPlugin, harmoniesPlugin]);

const faker = {
  number: {
    int: (options: { min: number; max: number }) => {
      return (
        Math.floor(Math.random() * (options.max - options.min + 1)) +
        options.min
      );
    },
    float: (options: { min: number; max: number }) => {
      return Math.random() * (options.max - options.min) + options.min;
    },
  },
  datatype: {
    boolean: () => {
      return Math.random() < 0.5;
    },
  },
  helpers: {
    arrayElement: <T extends readonly unknown[] | Array<unknown>>(
      arr: T
    ): T[number] => {
      return arr[Math.floor(Math.random() * arr.length)];
    },
  },
};

const createPrimaryColor = (): HSL => {
  return {
    h: faker.number.int({ min: 0, max: 360 }),
    s: faker.number.int({ min: 0, max: 100 }),
    l: faker.number.int({ min: 10, max: 90 }),
  };
};

const createContrast = (color: Colord) => {
  const isLight = color.isLight();
  let opposite = color;

  let i = 0;
  while (opposite.contrast(color) < 6) {
    opposite = isLight ? opposite.darken(0.2) : opposite.lighten(0.2);
    if (i++ > 10) break;
  }
  return opposite;
};

const colordToHSL = (color: Colord): HSL => {
  const HSLa = color.toHsl();

  return {
    h: HSLa.h,
    s: HSLa.s,
    l: HSLa.l,
  };
};

const createBackgroundLight = (hue: number): HSL => {
  return {
    h: hue,
    s: faker.number.int({ min: 30, max: 70 }),
    l: faker.number.int({ min: 96, max: 100 }),
  };
};

const createBackgroundDark = (hue: number): HSL => {
  return {
    h: hue,
    s: faker.number.int({ min: 30, max: 60 }),
    l: faker.number.int({ min: 0, max: 4 }),
  };
};

const createForegroundLight = (hue: number): HSL => {
  return {
    h: hue,
    s: faker.number.int({
      min: 50,
      max: 80,
    }),
    l: faker.number.int({
      min: 0,
      max: 5,
    }),
  };
};

const createForegroundDark = (hue: number): HSL => {
  return {
    h: hue,
    s: faker.number.int({
      min: 10,
      max: 40,
    }),
    l: faker.number.int({
      min: 97,
      max: 100,
    }),
  };
};

export const createDestructive = () => {
  return new Colord({
    h: faker.number.int({
      min: 0,
      max: 22,
    }),
    s: faker.number.int({
      min: 80,
      max: 100,
    }),
    l: faker.number.int({
      min: 20,
      max: 45,
    }),
  });
};

const modes = ['complementary', 'triadic', 'analogous', 'slick'] as const;

const createColorHarmony = (
  primary: Colord,
  mode: (typeof modes)[number],
  shouldMatch: boolean,
  isDark?: boolean
) => {
  if (mode === 'triadic') {
    const [, secondary, accent] = primary.harmonies(mode);
    if (!secondary || !accent) throw new Error('Failed to create harmony');

    return {
      secondary,
      accent,
    };
  }

  if (mode === 'complementary') {
    const [, secondary] = primary.harmonies(mode);
    if (!secondary) throw new Error('Failed to create harmony');

    return {
      secondary,
      accent: secondary,
    };
  }

  if (mode === 'analogous') {
    const [secondary, , accent] = primary.harmonies(mode);
    if (!secondary || !accent) throw new Error('Failed to create harmony');

    return {
      secondary,
      accent,
    };
  }

  if (mode === 'slick') {
    if (isDark) {
      const baseSaturation = faker.number.int({ min: 0, max: 20 });
      const baseLightness = faker.number.int({ min: 8, max: 20 });

      const clr = new Colord({
        h: primary.hue(),
        s: baseSaturation,
        l: baseLightness,
      });

      return {
        secondary: clr,
        accent: shouldMatch
          ? clr
          : clr
              .saturate(faker.number.float({ min: 0.05, max: 0.1 }))
              .lighten(faker.number.float({ min: 0.05, max: 0.1 })),
      };
    }

    const baseSaturation = faker.number.int({ min: 0, max: 20 });
    const baseLightness = faker.number.int({ min: 80, max: 92 });

    const clr = new Colord({
      h: primary.hue(),
      s: baseSaturation,
      l: baseLightness,
    });

    return {
      secondary: clr,
      accent: shouldMatch
        ? clr
        : clr
            .darken(faker.number.float({ min: 0.05, max: 0.1 }))
            .saturate(faker.number.float({ min: 0.05, max: 0.1 })),
    };
  }

  throw new Error('Invalid mode');
};

export const createThemeConfig = (primaryColor?: HSL) => {
  const primaryBase = new Colord(primaryColor ?? createPrimaryColor());

  const primaryLightColord = primaryBase;
  const primaryDarkColord = primaryBase;

  const primaryLight = colordToHSL(primaryLightColord);
  const primaryDark = colordToHSL(primaryDarkColord);
  const primaryLightForeground = colordToHSL(
    createContrast(primaryLightColord)
  );
  const primaryDarkForeground = colordToHSL(createContrast(primaryDarkColord));

  const backgroundDark = createBackgroundDark(primaryBase.hue());
  const backgroundLight = createBackgroundLight(primaryBase.hue());

  const foregroundDark = createForegroundDark(primaryBase.hue());
  const foregroundLight = createForegroundLight(primaryBase.hue());

  const cardBoolean = faker.datatype.boolean();

  const cardLight = cardBoolean
    ? colordToHSL(new Colord(backgroundLight).darken(0.05))
    : backgroundLight;
  const cardDark = cardBoolean
    ? colordToHSL(new Colord(backgroundDark).lighten(0.03))
    : backgroundDark;

  const cardLightForeground = cardBoolean
    ? colordToHSL(new Colord(foregroundLight).darken(0.01))
    : foregroundLight;

  const cardDarkForeground = cardBoolean
    ? colordToHSL(new Colord(foregroundDark).lighten(0.01))
    : foregroundDark;

  const popoverBoolean = faker.datatype.boolean();

  const popoverLight = popoverBoolean ? cardLight : backgroundLight;
  const popoverDark = popoverBoolean ? cardDark : backgroundDark;

  const popoverLightForeground = popoverBoolean
    ? cardLightForeground
    : foregroundLight;

  const popoverDarkForeground = popoverBoolean
    ? cardDarkForeground
    : foregroundDark;

  const harmonyMode = faker.helpers.arrayElement(modes);

  // Whether the secondary and accent colors should match if mode is "slick"
  const shouldMatch = faker.datatype.boolean();

  const lightHarmonies = createColorHarmony(
    primaryLightColord,
    harmonyMode,
    shouldMatch,
    false
  );

  const secondaryLight = colordToHSL(lightHarmonies.secondary);
  const secondaryLightForeground = colordToHSL(
    createContrast(lightHarmonies.secondary)
  );

  const accentLight = colordToHSL(lightHarmonies.accent);
  const accentLightForeground = colordToHSL(
    createContrast(lightHarmonies.accent)
  );

  const darkHarmonies = createColorHarmony(
    primaryDarkColord,
    harmonyMode,
    shouldMatch,
    true
  );

  const secondaryDark = colordToHSL(darkHarmonies.secondary);
  const secondaryDarkForeground = colordToHSL(
    createContrast(darkHarmonies.secondary)
  );

  const accentDark = colordToHSL(darkHarmonies.accent);
  const accentDarkForeground = colordToHSL(
    createContrast(darkHarmonies.accent)
  );

  const destructiveBase = createDestructive();
  const destructiveLight = colordToHSL(destructiveBase);

  const destructiveDark = {
    h: destructiveLight.h,
    s: destructiveLight.s,
    l: faker.number.int({ min: 45, max: 60 }),
  };

  const destructiveLightForeground = colordToHSL(
    createContrast(destructiveBase)
  );

  const destructiveDarkForeground = colordToHSL(
    createContrast(new Colord(destructiveDark))
  );

  const mutedBaseDeviations = {
    s: faker.number.int({ min: 5, max: 40 }),
    l: faker.number.int({ min: 0, max: 10 }),
  };

  const mutedLight = {
    h: secondaryLight.h,
    s: mutedBaseDeviations.s,
    l: 85 + mutedBaseDeviations.l,
  };

  const mutedDark = {
    h: secondaryDark.h,
    s: mutedBaseDeviations.s,
    l: 15 - mutedBaseDeviations.l,
  };

  const mutedForegroundBaseDeviations = {
    s: faker.number.int({ min: 0, max: 15 }),
    l: faker.number.int({ min: 0, max: 15 }),
  };

  const mutedForegroundLight = {
    h: mutedLight.h,
    s: mutedForegroundBaseDeviations.s,
    l: 25 + mutedForegroundBaseDeviations.l,
  };

  const mutedForegroundDark = {
    h: mutedDark.h,
    s: mutedForegroundBaseDeviations.s,
    l: 75 - mutedForegroundBaseDeviations.l,
  };

  const inputBaseDeviations = {
    s: faker.number.int({ min: 2, max: 15 }),
    l: faker.number.int({ min: 5, max: 10 }),
  };

  const borderLight = {
    h: backgroundLight.h,
    s: inputBaseDeviations.s,
    l: backgroundLight.l - inputBaseDeviations.l,
  };

  const borderDark = {
    h: backgroundDark.h,
    s: inputBaseDeviations.s,
    l: faker.number.int({ min: 10, max: 15 }),
  };

  return {
    light: {
      background: backgroundLight,
      foreground: foregroundLight,
      card: cardLight,
      cardForeground: cardLightForeground,
      popover: popoverLight,
      popoverForeground: popoverLightForeground,
      primary: primaryLight,
      primaryForeground: primaryLightForeground,
      secondary: secondaryLight,
      secondaryForeground: secondaryLightForeground,
      accent: accentLight,
      accentForeground: accentLightForeground,
      destructive: destructiveLight,
      destructiveForeground: destructiveLightForeground,
      muted: mutedLight,
      mutedForeground: mutedForegroundLight,
      border: borderLight,
      input: borderLight,
      ring: primaryLight,
    },
    dark: {
      background: backgroundDark,
      foreground: foregroundDark,
      card: cardDark,
      cardForeground: cardDarkForeground,
      popover: popoverDark,
      popoverForeground: popoverDarkForeground,
      primary: primaryDark,
      primaryForeground: primaryDarkForeground,
      secondary: secondaryDark,
      secondaryForeground: secondaryDarkForeground,
      accent: accentDark,
      accentForeground: accentDarkForeground,
      destructive: destructiveDark,
      destructiveForeground: destructiveDarkForeground,
      muted: mutedDark,
      mutedForeground: mutedForegroundDark,
      border: borderDark,
      input: borderDark,
      ring: primaryDark,
    },
  };
};
