import icono1 from '../images/icon_1.png';
import icono2 from '../images/bag.png';
import icono3 from '../images/park.png';
import icono4 from '../images/go_6.png';


function Page() {
  return (
    <>
      <main>
        <section className="seccion1__main">
          <h2 className="title2">
            Volverse organizado se siente mejor con OPEN SPACES
          </h2>

          <div className="main__articles">
            <article className="main__article">
              <img
                src={icono1}
                alt="icon_1"
                className="seccion1__icon1"/>
              <h3>Lo que necesitas</h3>
              <p>Una línea de productos diseñados para todos tus espacios</p>
            </article>

            <article className="main__article">
              <img
                src={icono2}
                alt="icon_2"
                className="seccion1__icon2"/>
              <h3>Materias primas sustentables</h3>
              <p>Todos los productos con materias primas sustentables</p>
            </article>

            <article className="main__article">
              <img
                src={icono3}
                alt="icon_3"
                className="seccion1__icon3"/>
              <h3>Guía</h3>
              <p>Soporte y asesoramiento para ayudarte con tu objetivo</p>
            </article>
          </div>
        </section>

        <section>
          <article className="main__article4">
            <img
              src={icono4}
              alt="icon_4"
              className="seccion1__icon4"
            />
            <h2 className="naranja">Envío gratis garantizado</h2>
            <p>Envío gratis en compras desde 100</p>
            <a href="#" className="article4__btn">
              Comprar ahora
            </a>
          </article>
        </section>

        <section className="cta">
          <article className="main__article5">
            <h2 className="cta__title">Disfruta creando espacios</h2>
            <p className="cta__p">
              Una línea de productos diseñados para todos tus espacios
            </p>
            <a href="#" className="header__btn">
              Comprar ahora
            </a>
          </article>
          <div className="banner">
          </div>
        </section>
      </main>
    </>
  );
}

export default Page;
