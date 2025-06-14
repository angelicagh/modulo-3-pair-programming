import logo from '../images/logo.png'

function header () {
 

    return (
      <>
  <header class="header">
  
  <img src={logo} alt="logo" class="nav__logo"/>

  <section class="header__hero">
    <h1>Disfruta creando espacios</h1>
    <a href="#" class="header__btn">Comprar ahora</a>
  </section>
</header>
      </>
  ) 
  }
  
  export default header