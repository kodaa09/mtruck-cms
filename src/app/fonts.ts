import { PT_Mono, Poppins, Tajawal } from '@next/font/google';

export const ptMono = PT_Mono({
  weight: "400",
  variable: "--pt-mono",
  subsets: ['latin'],
  display: 'optional',
});

export const poppins = Poppins({
  weight: ["500", "700"],
  variable: "--poppins",
  subsets: ['latin'],
  display: 'optional',
});

export const tajawal = Tajawal({
  weight: ["400", "700", "900"],
  variable: "--tajawal",
  subsets: ['latin'],
  display: 'swap',
});