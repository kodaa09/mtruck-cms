"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo-mtruck.svg";

export default function Header({ isOpen, setIsOpen, logoSize }: any) {
  function onToggleBurger() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="header">
      <div className="header-wrapper">
        <nav className="navbar">
          <ul className="navbar-left">
            <li className="navbar-item hide-on-mobile">
              <Link className="navbar-item-link" href="/vehicules">
                Vehicules
              </Link>
            </li>
            <li className="navbar-item hide-on-mobile">
              <a className="navbar-item-link" href="#service">
                Services
              </a>
            </li>
          </ul>
          <div className="navbar-center">
            <Link href="/">
              <Image src={logo} alt="Mtruck logo" width={logoSize} />
            </Link>
          </div>
          <ul className="navbar-right">
            <li className="navbar-item hide-on-mobile">
              <a className="navbar-item-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-burger-container">
          <button className="header-burger" onClick={onToggleBurger}>
            <i></i>
            <i></i>
            <span className="hide-access">Ouvrir le menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
