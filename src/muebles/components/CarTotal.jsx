import { useContext } from "react"
import { UserContext } from "../Context/UserContext"
import '././CarImg.css'


export const CarTotal = () => {
    const {cart} = useContext(UserContext)

    const total = cart.reduce((acc,el)=> acc +  el.price * el.quanty,   0)
    const Total=total.toLocaleString()
  return (
    <div  className="cartTotal">
        <h3 >Total a pagar: {Total}</h3>
    </div>
  )
}
