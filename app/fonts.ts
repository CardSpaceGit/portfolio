import localFont from 'next/font/local';

export const mtnBrighterSans = localFont({
  src: [
    {
      path: '../public/fonts/MTNBrighterSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/MTNBrighterSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/MTNBrighterSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/MTNBrighterSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/MTNBrighterSans-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-mtn-brighter-sans',
  display: 'swap',
});

// Also export under the old name for backward compatibility
export const titlingGothic = mtnBrighterSans; 