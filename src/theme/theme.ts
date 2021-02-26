// Here we define all our colors
export const palette = {
  black: '#000000',
  whitegrey: '#C6C6C6',
  darkGrey: '#333',
  grey: '#928989',
  white: '#ffffff',
  darkPurple: '#6C1664',
  purple: '#9C497C',
  orange: '#DA8F20',
  curiousBlue: '#34A9DB',
  yellow: '#C6BB59',
  calypsoBlue: '#2F7C8D',
  red: '#B11818',
  green: '#288642',
  pink: '#CD7069',
  fuchsia: '#CD70C9',
  blue: '#0C5487',
};

//Here we define possible weights that will be used by our typos
const weights: {
  [key: string]: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
} = {
  thin: '100',
  ultraThin: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  heavy: '800',
  black: '900',
};

//Here we define all our typos
export const typos = {
  u: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: weights.bold,
  },
  h1: {
    fontSize: 64,
    lineHeight: 72,
    fontWeight: weights.bold,
  },
  h2: {
    fontSize: 36,
    lineHeight: 42,
    fontWeight: weights.regular,
  },
  h3: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: weights.bold,
  },
  h3s: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: weights.semiBold,
  },
  h4: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: weights.bold,
  },
  l: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: weights.regular,
  },
  mb: {
    fontSize: 20,
    lineHeight: 23,
    fontWeight: weights.bold,
  },
  m: {
    fontSize: 20,
    lineHeight: 23,
    fontWeight: weights.regular,
  },
  s: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: weights.medium,
  },
  sb: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: weights.bold,
  },
  xs: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: weights.medium,
  },
  xsb: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: weights.bold,
  },
  xxs: {
    fontSize: 11,
    lineHeight: 13,
    fontWeight: weights.medium,
  },
};

export const shadows = {
  lightShadow: {
    elevation: 8,
    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },
};

export const radius = {
  medium: 16,
  small: 12,
  extraSmall: 8,
};

export const spacing = 4;
