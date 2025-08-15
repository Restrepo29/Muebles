import { useState } from "react"
import { UserContext } from "./UserContext"




export const UserProvider = ({children}) => {

    const [cart, setcart] = useState([])

    const comprarProducto=(producto)=>{
      const productRepeat= cart.find((item)=>item.id=== producto.id)
      if(productRepeat){
        setcart(cart.map((item)=>(item.id===producto.id ? {...producto, quanty: productRepeat.quanty + 1} :  item)))
      }else{
         setcart([...cart, producto])
      }
  }
  

  return (
   <UserContext.Provider value={{cart,setcart,comprarProducto}}>
    {children}
   </UserContext.Provider>
  )
}
