import { Link } from "react-router-dom"
import{ImgLong,ImgMedium,ImgSmall} from "../components/index"

export const Inicio = () => {
  return (
    <>
    
    <div className="hero"></div>

    <section className="container categories">
        <h2 className="text-center">Categorias de Productos</h2>
        <div className="category-list">
            <div className="category">
                <img src={'../assets/img/categoria1.jpg'} alt={"oficina"}/>
               
                    <Link 
                 to="/">
               Oficina
            </Link>
            </div>
            <div className="category">
                <img src={'../assets/img/categoria2.jpg'} alt={"hogar"}/>
                 <Link 
                 to="/">
               Hogar
            </Link>
            </div>
            <div className="category">
                <img src={'../assets/img/categoria3.jpg'} alt={"cocina"}/>
                 <Link 
                 to="/">
               Cocina
            </Link>
            </div>
        </div>
    </section>


 <section className="about-us">
  
        <div className="container about-us-grid">
            <div className="text-about">
                <h2>Sobre Nosotros</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellat aut id quae sequi nulla, magni
                    inventore omnis voluptas error perspiciatis nesciunt vero hic ab veniam iste laboriosam, commodi
                    nisi!
                    Soluta, eius neque. Iure voluptates maxime ut. Assumenda, eius maiores?</p>
            </div>
        </div>
    </section>
    

     <main className="content-principal container">
        <h2 className="text-center">Nuestros Productos</h2>

        <div className="products-list">
            <ImgLong url={'../assets/img/producto1.jpg'}  price={"$1'000.000"} numProduct={'Producto 1'}/>

            {/** <div className="product">
                <img src={'../assets/img/producto1.jpg'} alt={"Producto 1"}/>
                <div className="text-product">
                    <h3>Producto 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, alias.</p>
                    <p className="price">$1'000.000</p>
                    
             <Link className="btn"  to="/">
               Agregar al carrito
            </Link>
                </div> 
            </div>  */}
           

     <ImgMedium  url={'../assets/img/producto2.jpg'}  price={"$1'000.000"} numProduct={'Producto 2'}/>       
{/** <div className="product">
                <img src={'../assets/img/producto2.jpg'} alt="Producto 2"/>
                <div className="text-product">
                    <h3>Producto 2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, alias.</p>
                    <p className="price">$1'000.000</p>
                    <Link className="btn"  to="/">
               Agregar al carrito
            </Link>
                </div> 
            </div>  
 */}
           
<ImgMedium  url={'../assets/img/producto3.jpg'}  price={"$1'000.000"} numProduct={'Producto 3'}/>
{/* <div className="product">
                <img src={'../assets/img/producto3.jpg'} alt="Producto 3"/>
                <div className="text-product">
                    <h3>Producto 3</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, alias.</p>
                    <p className="price">$1'000.000</p>
                    <Link className="btn"  to="/">
               Agregar al carrito
            </Link>
                </div> 
            </div>  
*/ }
<ImgSmall url={'../assets/img/producto4.jpg'}  price={"$1'000.000"} numProduct={'Producto 4'}/>
           {/**<div className="product">
                <img src={'../assets/img/producto4.jpg'} alt="Producto 4"/>
                <div className="text-product">
                    <h3>Producto 4</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, alias.</p>
                    <p className="price">$1'000.000</p>
                    <Link className="btn"  to="/">
               Agregar al carrito
            </Link>
                </div> 
            </div>  
 */}

        <ImgSmall url={'../assets/img/producto5.jpg'}  price={"$1'000.000"} numProduct={'Producto 5'}/>   
        {/** <div className="product">
                <img src={'../assets/img/producto5.jpg'} alt="Producto 5"/>
                <div className="text-product">
                    <h3>Producto 5</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, alias.</p>
                    <p className="price">$1'000.000</p>
                   <Link className="btn"  to="/">
               Agregar al carrito
            </Link>
                </div>
            </div>  */} 
            
  <ImgSmall url={'../assets/img/producto6.jpg'}  price={"$1'000.000"} numProduct={'Producto 6'}/> 
  {/**<div className="product">
                <img src={'../assets/img/producto6.jpg'} alt="Producto 6"/>
                <div className="text-product">
                    <h3>Producto 6</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, alias.</p>
                    <p className="price">$1'000.000</p>
                   <Link className="btn"  to="/">
               Agregar al carrito
            </Link>
                </div> 
            </div>  
 */} 
            
        </div> {/** <!-- Fin del Listado de Produtos -->*/}

    </main>
    
    </>
    
    
    
  )
}
