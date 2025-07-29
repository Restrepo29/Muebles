import { Link } from "react-router-dom";
import { ImgLong, ImgMedium, ImgSmall } from "../components/index";
import { useEffect, useState } from "react";
import { categorias } from "../data/categorias";

export const Inicio = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    setCategory(categorias);
  }, []);

  return (
    <>
      <section className="container categories">
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
      </section>

      <section className="about-us">
        <div className="container about-us-grid">
          <div className="text-about">
            <h2>Sobre Nosotros</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              repellat aut id quae sequi nulla, magni inventore omnis voluptas
              error perspiciatis nesciunt vero hic ab veniam iste laboriosam,
              commodi nisi! Soluta, eius neque. Iure voluptates maxime ut.
              Assumenda, eius mayores?
            </p>
          </div>
        </div>
      </section>

      <main className="content-principal container">
        <h2 className="text-center">Nuestros Productos</h2>
        <div className="products-list">
          <ImgLong
            url={"../assets/img/producto1.jpg"}
            price={"$1'000.000"}
            numProduct={"Producto 1"}
          />

          <ImgMedium
            url={"../assets/img/producto2.jpg"}
            price={"$1'000.000"}
            numProduct={"Producto 2"}
          />

          <ImgMedium
            url={"../assets/img/producto3.jpg"}
            price={"$1'000.000"}
            numProduct={"Producto 3"}
          />

          <ImgSmall
            url={"../assets/img/producto4.jpg"}
            price={"$1'000.000"}
            numProduct={"Producto 4"}
          />

          <ImgSmall
            url={"../assets/img/producto5.jpg"}
            price={"$1'000.000"}
            numProduct={"Producto 5"}
          />

          <ImgSmall
            url={"../assets/img/producto6.jpg"}
            price={"$1'000.000"}
            numProduct={"Producto 6"}
          />
        </div>
      </main>
    </>
  );
};
