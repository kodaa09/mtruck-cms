import '../styles/main.scss';
import Header from './components/client/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
