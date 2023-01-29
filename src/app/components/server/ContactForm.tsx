import Title from "../client/Title";

export default function ContactForm() {
  return (
    <div className="contact" id="contact">
      <div className="contact-wrapper">
        <div className="contact-content">
          <Title title="Contactez nous" />
          <div className="contact-infos">
            <p className="contact-text">Lorem ipsum is placeholder text commonly used</p>
            <a href="" className="contact-email">
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5l-8-5h16m0 12H4V8l8 5l8-5v10Z"></path>
              </svg>
              contact@mtruck.fr
            </a>
            <a href="" className="contact-phone">
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path>
              </svg>
              +33 7 56 96 32 03
            </a>
          </div>
        </div>
        <form action="" className="contact-form">
          <div className="contact-form-group">
            <input type="text" placeholder="Prénom" />
          </div>
          <div className="contact-form-group">
            <input type="email" placeholder="Email" />
          </div>
          <div className="contact-form-group">
            <textarea name="" id="" placeholder="Message"></textarea>
          </div>
          <button type="submit" className="contact-form-btn">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
