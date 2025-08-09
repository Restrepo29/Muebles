import { Link } from "react-router-dom";

export const Productos = ({ producto }) => {
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
        <Link className="btn" to="/">
          Agregar al carrito
        </Link>
      </div>
    </article>
  );
};
