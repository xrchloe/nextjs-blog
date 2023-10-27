import Head from "next/head";
import Script from "next/script";
import Navbar from "./Navbar";

const name = "[Your Name]";
export const siteTitle = "Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className="relative">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>

      <Navbar />
      <main>{children}</main>
    </div>
  );
}
