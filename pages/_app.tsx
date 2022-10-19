import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DarkModeProvider } from "@/contexts/DarkMode";
import Layout from "@/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DarkModeProvider>
  );
}

export default MyApp;
