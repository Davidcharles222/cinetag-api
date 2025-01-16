import styles from "./Inicio.module.css";

import Banner from "../../componentes/Banner";
import Card from "../../componentes/Card";
import Titulo from "../../componentes/Titulo";
import { useEffect, useState } from "react";

const Inicio = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Davidcharles222/cinetag-api/videos"
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideos(dados);
      });
  }, []);

  return (
    <>
      <Banner imagem={"Home"} />
      <Titulo>Um lugar para guardar seus vídeos e filmes!</Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
};

export default Inicio;
