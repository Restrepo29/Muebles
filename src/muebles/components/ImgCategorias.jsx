
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { categorias } from "../data/categorias";

export const ImgCategorias = () => {
    
 const [category, setCategory] = useState([]);
 
  useEffect(() => {
   setCategory(categorias);
    }, []);

  return (
    <>
     <h2 className="text-center">Categorias de Productos</h2>
        <div className="category-list">
          {category.map((element) => (
            <div className="category" key={element.id}>
              <img
                src={`../assets/img/${element.image}.jpg`}
                alt={element.description}
              />
              <Link to="/">{element.description}</Link>
            </div>
          ))}
        </div>
    </>

  )
}