import Head from 'next/head'
import React from 'react'

const Header: React.FC = () => {
  return (
    <Head>
      <title>Seehoob</title>
      <meta property='og:title' content='Seehoob' />
      <meta property='twitter:title' content='Seehoob' />
      <meta
        name='description'
        content='😎 Beautiful looking GitHub profiles with handy data'
      />
      <meta
        property='og:description'
        content='😎 Beautiful looking GitHub profiles with handy data'
      />
      <meta
        property='twitter:description'
        content='😎 Beautiful looking GitHub profiles with handy data'
      />
      <meta property='og:type' content='website' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='theme-color' content='#61C3B' />
      <link
        rel='icon'
        href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐱</text></svg>'
      />
      <meta
        property='og:image'
        content='https://github.com/radespratama/Seehoob/blob/main/public/Banner.png?raw=true'
      />
      <meta
        property='twitter:image'
        content='https://github.com/radespratama/Seehoob/blob/main/public/Banner.png?raw=true'
      />
    </Head>
  )
}

export default Header
