import { createTheme } from '@mui/material/styles';

import PoppinsRegularWoff2 from '../assets/fonts/Poppins-Regular.woff2';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mob: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
  }
}

export const colors = {
  blue: '#3772FF',
  blueDark: '#3d70e8',
  black: '#141416',
  blueLight: 'linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), #3772FF;',
  dark: '#23262F',
  gray: '#777E91',
  grayLight: '#F4F5F6',
  green: '#45B36B',
  white: '#FFFFFF',
  whiteDark: '#E6E8EC',
  whiteLight: '#E6E8EC',
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 900,
      lg: 1200,
      xl: 1536,
      mob: 445,
      tablet: 640,
      laptop: 1024,
    },
  },
  palette: {
    primary: {
      main: colors.blue,
      dark: colors.blueDark,
      light: colors.blueLight,
    },
    secondary: {
      main: colors.dark,
      light: colors.gray,
      dark: colors.black,
    },
    success: {
      main: colors.green,
    },
    info: {
      main: colors.white,
      dark: colors.whiteDark,
      light: colors.grayLight,
    },
  },

  typography: {
    fontFamily: ['Poppins'].join(','),
    caption: {
      fontSize: 14,
      '@media (max-width:28rem)': {
        fontSize: 12,
      },
    },
    body1: {
      fontSize: 12,
      color: colors.gray,
      lineHeight: '0.8rem',
    },
    body2: {
      fontSize: 16,
      fontWeight: '500',
      lineHeight: '1.5rem',
      '@media (max-width:28rem)': {
        fontSize: 12,
      },
    },
    button: {
      fontSize: 14,
      fontWeight: 700,
    },
    h5: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: '2rem',
      '@media (max-width:28rem)': {
        fontSize: 16,
      },
    },
    h4: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: '2.5rem',
    },
    h3: {
      fontSize: 40,
      color: colors.dark,
      fontWeight: 700,
      lineHeight: '3rem',
      '@media (max-width:48rem)': {
        fontSize: 32,
        lineHeight: '2.5rem',
      },
    },
    h2: {
      fontSize: 48,
      color: colors.dark,
      fontWeight: 700,
    },
    h1: {
      fontSize: 64,
      color: colors.dark,
      fontWeight: 700,
      '@media (max-width:64rem)': {
        fontSize: 48,
        lineHeight: '130%',
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Poppins'), local('Poppins-Regular'), url(${PoppinsRegularWoff2}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191
          , U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              borderRadius: 25,
              textTransform: 'inherit',
            }),
          ...(ownerState.variant === 'outlined' && {
            borderRadius: 25,
            textTransform: 'inherit',
          }),
          ...(ownerState.variant === 'outlined' &&
            ownerState.color === 'secondary' && {
              borderRadius: 25,
              textTransform: 'inherit',
              '&:hover': {
                backgroundColor: colors.blue,
                color: colors.white,
                borderColor: colors.blue,
              },
            }),
          ...(ownerState.size === 'large' && {
            fontSize: '1rem',
            height: '3rem',
          }),
          ...(ownerState.size === 'small' &&
            ownerState.variant === 'outlined' && {
              borderRadius: '50%',
              height: '2.5rem',
              minWidth: '2.5rem',
              '&:hover': {
                backgroundColor: colors.white,
                color: colors.white,
                borderColor: colors.whiteDark,
              },
            }),
          ...(ownerState.size === 'small' &&
            ownerState.variant === 'outlined' &&
            ownerState.color === 'info' && {
              borderRadius: 'none',
              minWidth: 'auto',
              width: 'max-content',
              padding: 0,
              '&:hover': {
                borderColor: colors.white,
                padding: 0,
              },
            }),
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'outlined' && {
            borderRadius: theme.spacing(2),
            width: theme.spacing(64),
            border: `${theme.spacing(1)} solid ${colors.whiteLight}`,
            boxShadow: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: theme.spacing(4),
          }),
        }),
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'inset' && {
            borderRight: `${theme.spacing(0.5)} solid ${colors.whiteLight}`,
            borderRadius: theme.spacing(0.5),
            height: theme.spacing(10),
            marginLeft: 0,
          }),
        }),
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (max-width:48rem)': {
            paddingLeft: '1rem',
            paddingRight: '1rem',
          },
        },
      },
    },
  },
  spacing: 4,
});

// theme.typography.h3 = {
//   fontSize: '1.3rem',
//   '@media (min-width:37,5rem)': {
//     fontSize: '1.5rem',
//   },
// };

export default theme;
