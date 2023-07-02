import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { PrismicPreview } from "@prismicio/next";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const myFont = localFont({
  src: [
    {
      path: "../../public/FiraGO-Bold.woff",
      weight: "800",
      style: "bold",
    },
    {
      path: "../../public/FiraGO-Book.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-firago",
});
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <main className={myFont.className}>
      <AnimatePresence initial={true} mode="wait">
        <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
      <PrismicPreview repositoryName={'centraltower'} />

    </main>
  );
}
