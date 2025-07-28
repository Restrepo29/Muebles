import { Route, Routes } from "react-router-dom"
import { Inicio } from "../muebles/pages/Inicio"
import { Blog } from "../muebles/pages/Blog"
import { Contacto } from "../muebles/pages/Contacto"
import { Nosotros } from "../muebles/pages/Nosotros"
import { Tienda } from "../muebles/pages/Tienda"
import { Galeria } from "../muebles/pages/Galeria"
import { Post } from "../muebles/pages/Post"




export const AppRouter = () => {
  return (
    <>
    <Routes>

        <Route path="/" element={<Inicio />}/>
        <Route path="blog" element={<Blog />}/>
        <Route path="contacto" element={<Contacto />}/>
        <Route path="galeria" element={<Galeria />}/>
        <Route path="nosotros" element={<Nosotros />}/>
        <Route path="tienda" element={<Tienda />}/>
        <Route path="post" element={<Post />}/>
        
    </Routes>
    
    </>
  )
}
