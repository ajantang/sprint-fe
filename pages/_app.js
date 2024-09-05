import { createContext } from "react";
import useCheckWidth from "@/components/hooks/useCheckWidth";

import "@/styles/globals.css";

export const deviceContext = createContext();

export default function App({ Component, pageProps }) {
  const [device] = useCheckWidth();

  return (
    <deviceContext.Provider value={device}>
      <Component {...pageProps} />
    </deviceContext.Provider>
  );
}
