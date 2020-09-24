// Here we define all our colors, but do not use them directly in components
const palette = {
  black: '#000000',
  grey: '#C6C6C6',
  darkGrey: '#333',
  white: '#ffffff',
  darkPurple: '#8A3581',
  purple: '#9C497C',
};

// Here we define themed colors. This has more a logical sens, for example "buttons", "pages", ...
export const colors = {
  button: {
    backgroundColor: palette.purple,
  },
  pages: {
    backgroundColor: palette.white,
  },
  ues: {
    cs: palette.purple,
    st: palette.darkPurple,
  },
  icons: { color: palette.white },
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
    fontSize: 40,
    lineHeight: 56,
    fontWeight: weights.bold,
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
    lineHeight: 30,
    fontWeight: weights.bold,
  },
  m: {
    fontSize: 20,
    lineHeight: 30,
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
};

export const spacing = 4;
