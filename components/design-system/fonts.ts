import { Manrope, Spectral_SC } from 'next/font/google'
import localFont from 'next/font/local'

// Spectral SC font for headers
export const spectralSC = Spectral_SC({
  weight: ['400', '500'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-spectral',
})

// Manrope font for body text
export const manrope = Manrope({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-manrope',
})

// Nevduplenysh custom font
export const nevduplenysh = localFont({
  src: [
    {
      path: '../../public/fonts/Nevduplenysh.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-nevduplenysh',
})
