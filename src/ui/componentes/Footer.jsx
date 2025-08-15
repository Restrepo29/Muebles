import { Link } from "react-router-dom"



export const Footer = () => {
  return (
   <footer className="site-footer">
        <div className="grid-footer container">
            <div>
                <h3>Categorías</h3>

                <nav className="footer-menu" >
                     <Link to="/"> Cocina </Link>
                    <Link to="/"> Oficina </Link>
                    <Link to="/"> Jardin </Link>
                    <Link to="/"> Cochera </Link>
                    <Link to="/"> Dormitrios </Link>
                </nav>
            </div>

            <div>
                <h3>Sobre Nosotros</h3>

                <nav className="footer-menu">
                    <Link to="/"> Nuestra Historia </Link>
                     <Link to="/">Misión, Visión y Valores  </Link>
                   <Link to="/"> Carreras </Link>
                   <Link to="/"> Política de Privacidad </Link>
                     <Link to="/"> Términos del Servicio </Link>
                    
                </nav>
            </div>

            <div>
                <h3>Soportes</h3>

                <nav className="footer-menu">
                       <Link to="/"> Pregruntas Frecuentes </Link>
                      <Link to="/"> Ayuda en linea </Link>
                     <Link to="/"> Confianza y Seguridad </Link>
                    
                </nav>
            </div>
        </div>
        <p className="copyright">Todos los derechos reservados - Tienda Muebles</p>

    </footer>

  )
}
