import styles from "./Favoritos.module.css";

import Banner from "../../componentes/Banner";
import Titulo from "../../componentes/Titulo";
import Card from "../../componentes/Card";
import { useFavoritoContext } from "../../contextos/Favoritos";

const Favoritos = () => {
  const { favorito } = useFavoritoContext();

  return (
    <>
      <Banner imagem={"Favoritos"} />
      <Titulo>Meus Favoritos</Titulo>

      {favorito.length > 0 ? (
        <section className={styles.container}>
          {favorito.map((fav) => {
            return <Card {...fav} key={fav.id} />;
          })}
        </section>
      ) : (
        <section className={styles.vazia}>
          <p>Ainda não possui favoritos...</p>
        </section>
      )}
    </>
  );
};

export default Favoritos;
