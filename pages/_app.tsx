import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "@auth0/nextjs-auth0";
import { extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";
const theme = extendTheme({
  colors: {
    brand: {
      100: "#fdfffc",
      200: "#ff9f1c",
      500: "#e71d36",
      700: "#2ec4b6",
      900: "#011627",
    },
  },
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </ChakraProvider>
  );
}

export default MyApp;
