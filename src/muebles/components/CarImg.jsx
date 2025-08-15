import { useContext } from "react"
import { UserContext } from "../Context/UserContext"
import './CarImg.css'
import { CartCounter } from "./CartCounter"


export const CarImg = () => {

    const {cart,setcart} = useContext(UserContext)

    const deleteProduct = (id)=>{
      const buscarId=cart.find((element)=>element.id === id);
      //console.log(bucarId)
      const newCart= cart.filter((element)=>{
      return  element !== buscarId;
      
})
setcart(newCart)
    }


    return cart.map((producto)=>{
  return (

  <div key={producto.id} className="product-container-cart">
        <img
                src={`/assets/img/${producto.image}`} // Asegúrate que estén en /public/assets/img
                alt={producto.name}
              />
                <h3>{producto.name}</h3>

                    <CartCounter  producto={producto}/>
             <h4 className="price">{producto.price}</h4>
            
       
   <h3 className="cart-delete-product"  onClick={()=>deleteProduct(producto.id)}>
    ❌
   </h3>
              </div>


   
  )

  
    })
  
  }

