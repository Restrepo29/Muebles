import { CarImg } from "../components/CarImg"
import { CarTotal } from "../components/CarTotal"

import '../components/CarImg.css'
export const Carrito = () => {


  return (
    <>
    <div  className="product-container-cart">
<div className="productCart">
<CarImg/>
<CarTotal/>
</div>
  </div>  
    </>
    
  )
}
