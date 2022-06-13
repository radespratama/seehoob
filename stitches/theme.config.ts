import { createCss } from '@stitches/react'

export const { css, styled, global, getCssString, keyframes } = createCss({
  theme: {
    colors: {
      main: '#FFF',
      dark: '#2A2A39',
    },
    fontSizes: {
      1: '14px',
      2: '18px',
      3: '20px',
      4: '24px',
      5: '36px',
      6: '48px',
    },
    fonts: {
      main: 'Lexend Deca, sans-serif',
      mono: 'JetBrains Mono, monospace',
    },
  },
  media: {
    iPadPro: '(max-width: 1024px)',
    iPad: '(max-width: 768px)',
    iPhonePlus: '(max-width: 414px)',
    iPhone: '(max-width: 375px)',
    iPhoneSE: '(max-width: 320px)',
  },
})
