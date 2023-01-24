import '../styles/main.scss';
import Header from './components/client/Header';
import Navbar from './components/server/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head />
      <body>
        <Header>
          <Navbar />
        </Header>
        {children}
      </body>
    </html>
  )
}
