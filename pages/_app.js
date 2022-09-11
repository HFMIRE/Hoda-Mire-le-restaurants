import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import React from "react";

import { Provider } from "react-redux";
import store from "../redux/store";
import { saveState } from "../redux/browser-storage";
import { debounce } from "debounce";
import Layout from "../components/Layout";
import { Box } from "@chakra-ui/react";
const theme = extendTheme({
  colors: {
    brand: {
      100: "#fdfffc", // white
      150: "#E3ECDE", // greyish white
      200: "#ff9f1c", // orange
      250: "#D9B88B", // light orange
      500: "#e71d36", // red
      550: "#951B2A", // darker red
      600: "#A5FAF2", // light turoquise
      700: "#2ec4b6", // turoquise
      750: "#13514B", // dark green/turoquise
      850: "#1A4F7A", // light navy
      900: "#011627", // navy
    },
  },
});
store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

export default function App({ Component, pageProps }) {
  if (!process.browser) React.useLayoutEffect = React.useEffect;

  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <SessionProvider session={pageProps.session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </Provider>
    </ChakraProvider>
  );
}
