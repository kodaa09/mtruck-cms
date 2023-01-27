import { ptMono, poppins, tajawal } from './fonts';
import '../styles/main.scss';
import Header from './components/client/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${ptMono.variable} ${poppins.variable} ${tajawal.variable}`}>
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
