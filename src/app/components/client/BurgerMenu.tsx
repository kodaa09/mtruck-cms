"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function BurgerMenu({ setIsOpen }: any) {
  const pathname = usePathname();

  return (
    <div className="burger-menu">
      <div className="burger-menu-wrapper">
        <div className="burger-menu-container">
          <div className="burger-menu-media">
            <Link href="/">
              <Image src="./logo-mtruck.svg" alt="" width={50} height={50} />
            </Link>
          </div>
          <button className="burger-menu-btn" onClick={() => setIsOpen(false)}>
            <i></i>
            <i></i>
          </button>
        </div>
      </div>
      <div className="burger-menu-content">
        <ul className="burger-menu-content-list">
          <li className="burger-menu-content-item">
            <Link className="burger-menu-content-item-link" href="/vehicules" prefetch={false}>
              Vehicules
            </Link>
          </li>
          <li className="burger-menu-content-item">
            <a className="burger-menu-content-item-link" href="/#service" onClick={() => {if(pathname !== "/vehicules")setIsOpen(false)}}>
              Services
            </a>
          </li>
          <li className="burger-menu-content-item">
            <a className="burger-menu-content-item-link" href="/#partner" onClick={() => {if(pathname !== "/vehicules")setIsOpen(false)}}>
              Nos partenaires
            </a>
          </li>
          <li className="burger-menu-content-item">
            <a className="burger-menu-content-item-link" href="/#contact" onClick={() => {if(pathname !== "/vehicules")setIsOpen(false)}}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
