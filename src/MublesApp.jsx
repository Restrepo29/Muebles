import { AppRouter } from "./router/AppRouter";
import { Footer, Navbar } from "./ui/componentes";

export const MublesApp = () => {
  return (
    <>
      <header>
        <h1 className="name-site">
          Tienda <span>Muebles</span>
        </h1>

      </header>
      

      <Navbar />

      <AppRouter />

      <Footer />
    </>
  );
};