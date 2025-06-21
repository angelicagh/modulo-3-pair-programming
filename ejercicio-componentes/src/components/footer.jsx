import insta from "../images/insta.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import arrow from "../images/arrow-short-up.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__box">
          <h3>Tienda</h3>
          <ul className="footer__ul">
            <li>
              <a href="https://adalab.es/" target="_blank">
                Productos
              </a>
            </li>
            <li>
              <a href="https://adalab.es/" target="_blank">
                Cajoneras
              </a>
            </li>
            <li>
              <a href="https://adalab.es/" target="_blank">
                Para toda la casa
              </a>
            </li>
            <li>
              <a href="https://adalab.es/" target="_blank">
                Habitaciones
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__box">
          <h3>Nosotros</h3>
          <ul className="footer__ul">
            <li>
              <a href="https://adalab.es/" target="_blank">
                Nuestra guía
              </a>
            </li>
            <li>
              <a href="https://adalab.es/" target="_blank">
                Nuestro diseño
              </a>
            </li>
            <li>
              <a href="https://adalab.es/" target="_blank">
                Nuestra historia
              </a>
            </li>
            <li>
              <a href="https://adalab.es/" target="_blank">
                Ayuda
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__box">
          <h3>Contacto</h3>
          <ul className="footer__ul">
            <li>
              <a href="https://adalab.es/" target="_blank">
                ayuda@openspaces.com
              </a>
            </li>
            <li>
              <a href="https://adalab.es/" target="_blank">
                Socios
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__icons">
          <a href="https://adalab.es/" target="_blank">
            <img
              src={insta}
              alt="logo-instagram"
              className="footer__icon footer__insta"
            />
          </a>
          <a href="https://adalab.es/" target="_blank">
            <img
              src={linkedin}
              alt="logo-linkedin"
              className="footer__icon footer__linkedin"
            />
          </a>
          <a href="https://adalab.es/" target="_blank">
            <img
              src={twitter}
              alt="logo-twitter"
              className="footer__icon footer__twitter"
            />
          </a>
        </div>

        <div className="footer__flecha">
          <a href="#top">
            <img src={arrow} alt="flecha" className="flecha" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
