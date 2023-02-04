import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-media">
            <Image src="./mt-black.svg" alt="" width={50} height={50} />
          </div>
          <div className="footer-nav-contact">
            <div className="footer-nav">
              <h3 className="footer-title">Explorer</h3>
              <ul className="footer-elements">
                <li className="footer-element">
                  <Link className="footer-element-link" href="/vehicules">
                    Véhicules
                  </Link>
                </li>
                <li className="footer-element">
                  <a className="footer-element-link" href="#service">
                    Services
                  </a>
                </li>
                <li className="footer-element">
                  <a className="footer-element-link" href="#partner">
                    Partenaires
                  </a>
                </li>
                <li className="footer-element">
                  <a className="footer-element-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-contact">
              <h3 className="footer-contact-title">Contact</h3>
              <a href="" className="footer-contact-link">
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5l-8-5h16m0 12H4V8l8 5l8-5v10Z"></path>
                </svg>
                contact@mtruck.fr
              </a>
              <a href="" className="footer-contact-link">
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path>
                </svg>
                +33 7 56 96 32 03
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p className="footer-copyright-text">© MTRUCK. All Rights Reserved</p>
          <div className="footer-copyright-rsx">
            <a href="" className="footer-rsx">
              <svg width="32" height="32" viewBox="0 0 16 16">
                <path
                  fill="currentColor"
                  d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599c.28.28.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598a2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233c0-2.136.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92c.28-.28.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334z"></path>
              </svg>{" "}
              instagram
            </a>
            <a href="" className="footer-rsx">
              <svg width="32" height="32" viewBox="0 0 32 32">
                <path
                  fill="currentColor"
                  d="M26.2 4H5.8C4.8 4 4 4.8 4 5.7v20.5c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V5.7c0-.9-.8-1.7-1.8-1.7zM11.1 24.4H7.6V13h3.5v11.4zm-1.7-13c-1.1 0-2.1-.9-2.1-2.1c0-1.2.9-2.1 2.1-2.1c1.1 0 2.1.9 2.1 2.1s-1 2.1-2.1 2.1zm15.1 12.9H21v-5.6c0-1.3 0-3.1-1.9-3.1S17 17.1 17 18.5v5.7h-3.5V13h3.3v1.5h.1c.5-.9 1.7-1.9 3.4-1.9c3.6 0 4.3 2.4 4.3 5.5v6.2z"></path>
              </svg>
              linkedin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
