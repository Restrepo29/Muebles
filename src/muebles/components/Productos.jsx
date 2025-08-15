import { useContext } from "react";

import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { Carrito } from "../pages/carrito";

export const Productos = ({ producto }) => {
  
const {cart, setcart,comprarProducto} = useContext(UserContext)
//console.log( cart)

  //const agregar=(producto)=>{
    //setcart([...cart, producto])
  // console.log(producto)
 // }
  

  return (


    <article className="product">
      <img
        src={`/assets/img/${producto.image}`} // Asegúrate que estén en /public/assets/img
        alt={producto.name}
      />
      <div className="text-product">
        <h3>{producto.name}</h3>
        <p>{producto.description}</p>
        <p className="price">{producto.price}</p>
        <Link className="btn" to="" onClick={()=>comprarProducto((producto))}>
          Agregar al carrito
        </Link>

       
      </div>
    </article>
  );
};