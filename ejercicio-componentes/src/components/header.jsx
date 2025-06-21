import logo from "../images/logo.png";

function Header() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="logo" className="nav__logo" />

        <section className="header__hero">
          <h1>Disfruta creando espacios</h1>
          <a href="#" className="header__btn">
            Comprar ahora
          </a>
        </section>
      </header>
    </>
  );
}

export default Header;
