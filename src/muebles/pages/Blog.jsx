import { Link } from "react-router-dom"
Link

export const Blog = () => {
  return (
  <>
  <main className="content-principal container">
        <h2 className="text-center">Nuestro Blog</h2>

        <section className="container-blog">
            <div className="blog">
                <article className="entry-blog">
                    <h2>Guía de Colores</h2>

                    <div className="image-blog">
                        <img src={'../assets/img/nosotros.jpg'} alt="Imagen Blog"/>
                    </div>

                    <div className="content-info-blog">
                        <div className="info-meta-blog">
                            <p>Fecha: <span>22 de Mayo de 2023</span></p>
                            <p>Escrito por: <span>Tienda Muebles</span></p>
                        </div>

                        <div className="entri-blog">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, voluptates tempora.
                                Exercitationem nobis veritatis accusantium quos error vero quod eius quaerat officia.
                                Quae
                                veritatis qui, eaque atque eius illum nisi aspernatur velit dicta fugit doloremque, ab
                                asperiores suscipit. Aliquam, repudiandae.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, voluptates tempora.
                                Exercitationem nobis veritatis
                                accusantium quos error vero quod eius quaerat officia. Quae veritatis qui, eaque atque
                                eius
                                illum nisi aspernatur
                                velit dicta fugit doloremque, ab asperiores suscipit. Aliquam, repudiandae.</p>
                        </div>
                         <Link className="btn max-width-30"  to="/post"> Leer mas </Link>
                      
                    </div>

                </article>

                <article className="entry-blog">
                    <h2>Guía de Colores</h2>

                    <div className="image-blog">
                        <img src={'../assets/img/nosotros.jpg'} alt="Imagen Blog"/>
                    </div>

                    <div className="content-info-blog">
                        <div className="info-meta-blog">
                            <p>Fecha: <span>22 de Mayo de 2023</span></p>
                            <p>Escrito por: <span>Tienda Muebles</span></p>
                        </div>

                        <div className="entri-blog">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, voluptates tempora.
                                Exercitationem nobis veritatis accusantium quos error vero quod eius quaerat officia.
                                Quae
                                veritatis qui, eaque atque eius illum nisi aspernatur velit dicta fugit doloremque, ab
                                asperiores suscipit. Aliquam, repudiandae.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, voluptates tempora.
                                Exercitationem nobis veritatis
                                accusantium quos error vero quod eius quaerat officia. Quae veritatis qui, eaque atque
                                eius
                                illum nisi aspernatur
                                velit dicta fugit doloremque, ab asperiores suscipit. Aliquam, repudiandae.</p>
                        </div>


                       <Link className="btn max-width-30"  to="/post"> Leer mas </Link>
                    </div>

                </article>

            </div>

            <aside>
                <h3>Otras entradas de blog</h3>
                <ul>
                    <li>
                       <Link  to="/post">Guia de Colores  </Link>
                     
                    </li>
                    <li>
                      <Link  to="/post">Nuevos Modelos 2023  </Link>
                       
                    </li>
                    <li>
                       <Link  to="/post"> Guia para diseño de interiores</Link>
                        
                    </li>
                    <li>
                      <Link  to="/post"> Guia para diseño de exteriores</Link>
                        
                    </li>
                </ul>
            </aside>
        </section>

    </main>
  </>
  )
}
