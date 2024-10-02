import { AnyColor, Colord, extend } from 'colord';
import a11yPlugin from 'colord/plugins/a11y';
import harmoniesPlugin from 'colord/plugins/harmonies';
import { HSL, Theme } from '@/types/theme-schema';

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
    s: faker.number.int({ min: 30, max: 70 }),
    l: faker.number.int({ min: 30, max: 70 }),
  };
};

const createForegroundDark = (hue: number): HSL => {
  return {
    h: hue,
    s: faker.number.int({ min: 30, max: 70 }),
    l: faker.number.int({ min: 30, max: 70 }),
  };
};

export const createDestructive = () => {
  return new Colord({
    h: faker.number.int({ min: 0, max: 360 }),
    s: faker.number.int({ min: 0, max: 100 }),
    l: faker.number.int({ min: 20, max: 45 }),
  });
};

const modes = ['complementary', 'triadic', 'analogous', 'slick'] as const;

const createColorHarmony = (
  primary: Colord,
  mode: (typeof modes)[number],
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
      const baseLightness = faker.number.int({ min: 80, max: 92 });

      const clr = new Colord({
        h: primary.toHsl().h,
        s: baseSaturation,
        l: baseLightness,
      });

      return {
        secondary: clr,
        accent: clr,
      };
    }

    const baseSaturation = faker.number.int({ min: 0, max: 20 });
    const baseLightness = faker.number.int({ min: 80, max: 92 });

    const clr = new Colord({
      h: primary.toHsl().h,
      s: baseSaturation,
      l: baseLightness,
    });

    return {
      secondary: clr,
      accent: clr,
    };
  }

  throw new Error('Invalid mode');
};

export const createThemeConfig = (lockedColors: Partial<Theme> = {}) => {
  const primaryBase = new Colord(lockedColors.primary ?? createPrimaryColor());
  const primaryLightColord = new Colord(
    lockedColors.primary ?? primaryBase.toHsl()
  );
  const primaryDarkColord = new Colord(
    lockedColors.primary ?? primaryBase.toHsl()
  );

  const primaryLight = colordToHSL(primaryLightColord);
  const primaryDark = colordToHSL(primaryDarkColord);
  const primaryLightForeground = colordToHSL(
    createContrast(primaryLightColord)
  );
  const primaryDarkForeground = colordToHSL(createContrast(primaryDarkColord));

  const backgroundDark =
    lockedColors.background ?? createBackgroundDark(primaryBase.hue());
  const backgroundLight =
    lockedColors.background ?? createBackgroundLight(primaryBase.hue());

  const foregroundDark =
    lockedColors.foreground ?? createForegroundDark(primaryBase.hue());
  const foregroundLight =
    lockedColors.foreground ?? createForegroundLight(primaryBase.hue());

  const cardBoolean = faker.datatype.boolean();

  const cardLight = cardBoolean
    ? colordToHSL(new Colord(backgroundLight).darken(0.05))
    : backgroundLight;
  const cardDark = cardBoolean
    ? colordToHSL(new Colord(backgroundDark).lighten(0.05))
    : backgroundDark;

  const cardLightForeground = colordToHSL(
    createContrast(new Colord(cardLight))
  );
  const cardDarkForeground = colordToHSL(createContrast(new Colord(cardDark)));

  const popoverBoolean = faker.datatype.boolean();

  const popoverLight = popoverBoolean ? cardLight : backgroundLight;
  const popoverDark = popoverBoolean ? cardDark : backgroundDark;

  const popoverLightForeground = colordToHSL(
    createContrast(new Colord(popoverLight))
  );
  const popoverDarkForeground = colordToHSL(
    createContrast(new Colord(popoverDark))
  );

  const harmonyMode = faker.helpers.arrayElement(modes);

  const shouldMatch = faker.datatype.boolean();

  const lightHarmonies = createColorHarmony(
    primaryLightColord,
    harmonyMode,
    shouldMatch
  );

  const secondaryLight = colordToHSL(
    new Colord((lockedColors.secondary ?? lightHarmonies.secondary) as AnyColor)
  );
  const secondaryLightForeground = colordToHSL(
    createContrast(
      new Colord(
        (lockedColors.secondary ?? lightHarmonies.secondary) as AnyColor
      )
    )
  );

  const accentLight = colordToHSL(
    new Colord((lockedColors.accent ?? lightHarmonies.accent) as AnyColor)
  );
  const accentLightForeground = colordToHSL(
    createContrast(
      new Colord((lockedColors.accent ?? lightHarmonies.accent) as AnyColor)
    )
  );

  const darkHarmonies = createColorHarmony(
    primaryDarkColord,
    harmonyMode,
    true
  );

  const secondaryDark = colordToHSL(
    new Colord((lockedColors.secondary ?? darkHarmonies.secondary) as AnyColor)
  );
  const secondaryDarkForeground = colordToHSL(
    createContrast(
      new Colord(
        (lockedColors.secondary ?? darkHarmonies.secondary) as AnyColor
      )
    )
  );

  const accentDark = colordToHSL(
    new Colord((lockedColors.accent ?? darkHarmonies.accent) as AnyColor)
  );
  const accentDarkForeground = colordToHSL(
    createContrast(
      new Colord((lockedColors.accent ?? darkHarmonies.accent) as AnyColor)
    )
  );

  const destructiveBase = createDestructive();
  const destructiveLight = colordToHSL(destructiveBase);

  const destructiveDarkHsl = destructiveBase.toHsl();
  const destructiveDark = {
    h: destructiveDarkHsl.h,
    s: destructiveDarkHsl.s,
    l: destructiveDarkHsl.l - 20,
  };

  const destructiveLightForeground = colordToHSL(
    createContrast(destructiveBase)
  );

  const destructiveDarkForeground = colordToHSL(
    createContrast(new Colord(destructiveDark))
  );

  const mutedBaseDeviations = {
    s: faker.number.int({ min: 0, max: 10 }),
    l: faker.number.int({ min: 0, max: 10 }),
  };

  const mutedLight = {
    h: primaryBase.toHsl().h,
    s: primaryBase.toHsl().s - mutedBaseDeviations.s,
    l: primaryBase.toHsl().l + mutedBaseDeviations.l,
  };

  const mutedDark = {
    h: primaryBase.toHsl().h,
    s: primaryBase.toHsl().s - mutedBaseDeviations.s,
    l: primaryBase.toHsl().l - mutedBaseDeviations.l,
  };

  const mutedForegroundBaseDeviations = {
    s: faker.number.int({ min: 0, max: 10 }),
    l: faker.number.int({ min: 0, max: 10 }),
  };

  const mutedForegroundLight = {
    h: primaryBase.toHsl().h,
    s: primaryBase.toHsl().s - mutedForegroundBaseDeviations.s,
    l: primaryBase.toHsl().l + mutedForegroundBaseDeviations.l,
  };

  const mutedForegroundDark = {
    h: primaryBase.toHsl().h,
    s: primaryBase.toHsl().s - mutedForegroundBaseDeviations.s,
    l: primaryBase.toHsl().l - mutedForegroundBaseDeviations.l,
  };

  const inputBaseDeviations = {
    s: faker.number.int({ min: 0, max: 10 }),
    l: faker.number.int({ min: 0, max: 10 }),
  };

  const borderLight = {
    h: primaryBase.toHsl().h,
    s: primaryBase.toHsl().s - inputBaseDeviations.s,
    l: primaryBase.toHsl().l + inputBaseDeviations.l,
  };

  const borderDark = {
    h: primaryBase.toHsl().h,
    s: primaryBase.toHsl().s - inputBaseDeviations.s,
    l: primaryBase.toHsl().l - inputBaseDeviations.l,
  };

  return {
    light: {
      background: lockedColors.background ?? backgroundLight,
      foreground: lockedColors.foreground ?? foregroundLight,
      card: lockedColors.card ?? cardLight,
      cardForeground: lockedColors.cardForeground ?? cardLightForeground,
      popover: lockedColors.popover ?? popoverLight,
      popoverForeground:
        lockedColors.popoverForeground ?? popoverLightForeground,
      primary: lockedColors.primary ?? primaryLight,
      primaryForeground:
        lockedColors.primaryForeground ?? primaryLightForeground,
      secondary: lockedColors.secondary ?? secondaryLight,
      secondaryForeground:
        lockedColors.secondaryForeground ?? secondaryLightForeground,
      accent: lockedColors.accent ?? accentLight,
      accentForeground: lockedColors.accentForeground ?? accentLightForeground,
      destructive: lockedColors.destructive ?? destructiveLight,
      destructiveForeground:
        lockedColors.destructiveForeground ?? destructiveLightForeground,
      muted: lockedColors.muted ?? mutedLight,
      mutedForeground: lockedColors.mutedForeground ?? mutedForegroundLight,
      border: lockedColors.border ?? borderLight,
      input: lockedColors.input ?? borderLight,
      ring: lockedColors.ring ?? primaryLight,
    },
    dark: {
      background: lockedColors.background ?? backgroundDark,
      foreground: lockedColors.foreground ?? foregroundDark,
      card: lockedColors.card ?? cardDark,
      cardForeground: lockedColors.cardForeground ?? cardDarkForeground,
      popover: lockedColors.popover ?? popoverDark,
      popoverForeground:
        lockedColors.popoverForeground ?? popoverDarkForeground,
      primary: lockedColors.primary ?? primaryDark,
      primaryForeground:
        lockedColors.primaryForeground ?? primaryDarkForeground,
      secondary: lockedColors.secondary ?? secondaryDark,
      secondaryForeground:
        lockedColors.secondaryForeground ?? secondaryDarkForeground,
      accent: lockedColors.accent ?? accentDark,
      accentForeground: lockedColors.accentForeground ?? accentDarkForeground,
      destructive: lockedColors.destructive ?? destructiveDark,
      destructiveForeground:
        lockedColors.destructiveForeground ?? destructiveDarkForeground,
      muted: lockedColors.muted ?? mutedDark,
      mutedForeground: lockedColors.mutedForeground ?? mutedForegroundDark,
      border: lockedColors.border ?? borderDark,
      input: lockedColors.input ?? borderDark,
      ring: lockedColors.ring ?? primaryDark,
    },
  };
};
