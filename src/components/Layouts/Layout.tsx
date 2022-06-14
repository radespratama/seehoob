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
        <meta
          property="og:image"
          content="https://github.com/radespratama/Seehoob/blob/main/public/Banner.png?raw=true"
        />
        <meta
          property="twitter:image"
          content="https://github.com/radespratama/Seehoob/blob/main/public/Banner.png?raw=true"
        />
      </Head>
      <main className="flex-wrap flex-grow px-[6px] min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
