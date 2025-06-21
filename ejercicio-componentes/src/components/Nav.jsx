import favicon from '../images/favicon.png'

function Nav() {
 

    return (
      <>
    
      { <nav className="nav">
       <a href="https://adalab.es/" target="_blank"><img src={favicon} alt="burger"className="nav__menu-burger"/></a>
        <ul className="nav__text">
          <li><a href="https://adalab.es/" target="_blank">Productos</a></li>
          <li><a href="https://adalab.es/" target="_blank">Colecciones</a></li>
          <li><a href="https://adalab.es/" target="_blank">Tienda</a></li>
          <li><a href="https://adalab.es/" target="_blank">Inicio</a></li>
        </ul>
      </nav> }
    
      </>
  ) 
  }
  
  export default Nav