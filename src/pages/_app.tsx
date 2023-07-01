import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { PrismicPreview } from "@prismicio/next";

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
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
      <PrismicPreview repositoryName={'centraltower'} />

    </main>
  );
}
