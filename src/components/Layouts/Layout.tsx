import React from "react";
import Head from "next/head";
import Footer from "./Footer";

type LayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="twitter:title" content={title} />
        <meta
          name="description"
          content="😎 Beautiful looking GitHub profiles with handy data"
        />
        <meta
          property="og:description"
          content="😎 Beautiful looking GitHub profiles with handy data"
        />
        <meta
          property="twitter:description"
          content="😎 Beautiful looking GitHub profiles with handy data"
        />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#61C3B" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐱</text></svg>"
        />
        <meta
          property="og:image"
          content="https://github.com/radespratama/Seehoob/blob/main/public/Banner.png?raw=true"
        />
        <meta
          property="twitter:image"
          content="https://github.com/radespratama/Seehoob/blob/main/public/Banner.png?raw=true"
        />
      </Head>
      <main className="flex-wrap flex-grow flex flex-col items-center justify-center min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
