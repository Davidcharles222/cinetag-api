import { Outlet } from "react-router-dom";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import Container from "../../componentes/Container";
import FavoritosProvider from "../../contextos/Favoritos";

const PaginaBase = () => {
  return (
    <main>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Rodape />
    </main>
  );
};

export default PaginaBase;
