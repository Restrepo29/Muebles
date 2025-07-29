import { useEffect, useState } from "react"
import { galeria } from "../data/galeria"


export const ImgGalery = () => {

const [galery, setgalery] = useState([])

useEffect(() => {
 setgalery(galeria)

 
}, [])

  return (
<ul className="gallery">
 {galery.map((element) => (
   <li key={element.id}>
                     <a href={`../assets/img/${element.image}`} >
                    <img src={`../assets/img/${element.image}`} alt=""/>
                </a>
            </li>
 ))}
 
</ul>
  )
  

}




 
