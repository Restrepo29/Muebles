
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import '././CarImg.css'

export const CartCounter = ({producto}) => {

const {cart, setcart, comprarProducto} = useContext(UserContext)


const decrese=()=>{
      const productRepeat= cart.find((item)=>item.id=== producto.id)
      productRepeat.quanty !== 1 &&
        setcart(cart.map((item)=>(item.id===producto.id ? {...producto, quanty: productRepeat.quanty -1} : item )))
   
        
        }

  return (
<>
<p  className="counter-button"  onClick={decrese}> - </p>
    <p > {producto.quanty} </p>
    <p  className="counter-button"  onClick={()=>comprarProducto((producto))}> + </p>
</>
    

  )
}
