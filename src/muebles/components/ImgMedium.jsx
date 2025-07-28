import { Link } from "react-router-dom"



export const ImgMedium = ({price, numProduct,url}) => {
  return (
     <div className="product">
                    <img src={url} alt={numProduct}/>
                    <div className="text-product">
                        <h3>{numProduct}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, alias.</p>
                        <p className="price">{price}</p>
                        <Link className="btn"  to="/">
                   Agregar al carrito
                </Link>
                    </div> 
                </div>  
  )
}
