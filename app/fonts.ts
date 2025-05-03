import localFont from 'next/font/local';

export const titlingGothic = localFont({
  src: [
    {
      path: '../public/fonts/TitlingGothicFBExt-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/TitlingGothicFBExt-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/TitlingGothicFBExt-Reg.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/TitlingGothicFBExt-Med.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/TitlingGothicFBExt-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/TitlingGothicFBExt-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-titling-gothic',
  display: 'swap',
}); 