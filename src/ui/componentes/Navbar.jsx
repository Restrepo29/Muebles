import {  NavLink } from "react-router-dom"



export const Navbar = () => {
  return (
   <>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2  ">
            

  <div className="navbar-collapse">
                <div className="navbar-nav  ">

           
<NavLink
                        className={({isActive})=>`nav-link nav-link 
                        ${isActive ? 'active'  : ''}`}
                         to="/"
                         >
                        Inicio
                    </NavLink>{/** clase de ruta activa */}

                    <NavLink 
                        
                        className={({isActive})=>`nav-link nav-link 
                        ${isActive ? 'active'  : ''}`}
                         to="/nosotros"
                         >
                      
                        Nosotros
                    </NavLink>
                    
                    <NavLink
                        className={({isActive})=>`nav-link nav-link 
                        ${isActive ? 'active'  : ''}`}
                         to="/tienda"
                         >
                        Tienda
                    </NavLink>
                    <NavLink
                        className={({isActive})=>` nav-link nav-link 
                        ${isActive ? 'active'  : ''}`}
                         to="/blog"
                         >
                        Blog
                    </NavLink>
                    <NavLink
                        className={({isActive})=>` nav-link nav-link 
                        ${isActive ? 'active'  : ''}`}
                         to="/galeria"
                         >
                        Galeria
                    </NavLink>
                    <NavLink
                        className={({isActive})=>`nav-link nav-link 
                        ${isActive ? 'active'  : ''}`}
                         to="/contacto"
                         >
                        Contacto
                    </NavLink>
                
          </div>  
          </div>
</nav>


   
   
   
   </>
  )
}
