import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/redux/store";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
