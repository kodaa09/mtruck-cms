"use client";
import { ptMono, poppins, tajawal } from "./fonts";
import "@/styles/main.scss";
import Header from "./components/client/Header";
import Footer from "./components/server/Footer";
import BurgerMenu from "./components/client/BurgerMenu";
import WaitingScreen from "./components/client/WaitingScreen";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [logoSize, setLogoSize] = useState(150);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const pathname = usePathname();

  function onScroll() {
    if (window.pageYOffset > 750) {
      setIsScrolling(true);
      setLogoSize(130);
    } else {
      setIsScrolling(false);
      setLogoSize(150);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const loader = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => {
      clearTimeout(loader);
    };
  }, []);

  return (
    <html lang="fr" className={`${ptMono.variable} ${poppins.variable} ${tajawal.variable}`}>
      <head />
      <body className={(isOpen ? "is-burger-open " : "") + (isScrolling ? "is-scrolling " : "") + (isLoading ? "is-loading " : "")}>
        <WaitingScreen />
        <BurgerMenu setIsOpen={setIsOpen} />
        <Header isOpen={isOpen} setIsOpen={setIsOpen} logoSize={logoSize} />
        {children}
        {pathname !== "/vehicules" && <Footer />}
      </body>
    </html>
  );
}
