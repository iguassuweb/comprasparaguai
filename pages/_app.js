import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from '../src/config/theme'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Loumar Turismo</title>
    </Head>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
}

export default MyApp;
