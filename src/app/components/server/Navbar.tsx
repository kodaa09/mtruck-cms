import Image from "next/image";
import logo from "../../../../public/logo-mtruck.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-left">
        <li className="navbar-item hide-on-mobile">
          <a className="navbar-item-link" href="vehicule">
            Vehicules
          </a>
        </li>
        <li className="navbar-item hide-on-mobile">
          <a className="navbar-item-link" href="/#service">
            Services
          </a>
        </li>
      </ul>
      <div className="navbar-center">
        <a href="/">
          <Image
            src={logo}
            alt="Mtruck logo"
            width={130}
          />
        </a>
      </div>
      <ul className="navbar-right">
        <li className="navbar-item hide-on-mobile">
          <a className="navbar-item-link" href="contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
