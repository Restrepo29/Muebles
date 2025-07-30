
import { useEffect, useState } from "react";
import { productos } from "../data/productos";
import { Link } from "react-router-dom";


export const ImgProductos = () => {

     const [producto, setProducto] = useState([]);
     useEffect(() => {
    setProducto(productos);
     }, []);
  return (
    
    <div className="products-list">


  
          {producto.map((element) => (
            <div className="product"  key={element.id}>
              <img 
                     src={`../assets/img/${element.image}`}
                     alt={element.description}/>
                   <div className="text-product">
                        <h3>{element.description}</h3>
                         
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, alias.</p>
                        <p className="price">{element.price}</p>
                        <Link className="btn"  to="/">
                   Agregar al carrito
                </Link>
                    </div> 
            </div>  
          ))}
    
    </div>
  )
}
