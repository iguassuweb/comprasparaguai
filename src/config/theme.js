import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1E3460",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#007A73",
      contrastText: "#FFFFFF",
    },
    tertiary: {
      main: "#818181",
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      mdlg: 1100,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeightRegular: 400,
    fontSize: 12,
    LineHeight: 21,
    "@media (min-width:600px)": {
      fontSize: 14,
      LineHeight: 21,
    },
    h1: {
      fontSize: "28px",
      fontWeight: 500,
      LineHeight: 33.6,
    },
    h2: {
      fontSize: 24,
      fontWeight: 500,
      LineHeight: 28.8,
      "@media (min-width:600px)": {
        fontSize: 20,
        LineHeight: 24,
      },
    },
    subtitle: {
      fontSize: 24,
      fontWeight: 500,
      LineHeight: 30,
      "@media (min-width:600px)": {
        fontSize: 20,
        LineHeight: 30,
      },
    },
    subtitleBold: {
      fontSize: 18,
      fontWeight: 500,
      LineHeight: 27,
    },
    subtitleRegular: {
      fontSize: 18,
      fontWeight: 400,
      LineHeight: 27,
    },
    paragraphBold: {
      fontSize: 16,
      fontWeight: 500,
      LineHeight: 24,
    },
    captionBold: {
      fontSize: 14,
      fontWeight: 500,
      LineHeight: 21,
      "@media (min-width:600px)": {
        fontSize: 12,
        LineHeight: 18,
      },
    },
    captionRegular: {
      fontSize: 14,
      fontWeight: 400,
      LineHeight: 21,
      "@media (min-width:600px)": {
        fontSize: 12,
        LineHeight: 18,
      },
    },
    captionUnderlined: {
      fontSize: 12,
      fontWeight: 400,
      LineHeight: 21,
      textDecorationLine: "underline",
      "@media (min-width:600px)": {
        fontSize: 12,
        LineHeight: 18,
      },
    },
  },
});
