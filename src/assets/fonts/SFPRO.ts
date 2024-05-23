import localFont from 'next/font/local';

export const SFPRO = localFont({
  src: [
    {
      path: './sf-pro-text-regular-webfont.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './sf-pro-text-semibold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: './sf-pro-text-bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: './sf-pro-text-black.woff2',
      weight: '900',
      style: 'normal'
    }
  ]
});
