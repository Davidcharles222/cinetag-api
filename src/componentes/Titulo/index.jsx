import styles from "./Titulo.module.css";

const Titulo = ({ children }) => {
  return (
    <div className={styles.texto}>
      <h1>{children}</h1>
    </div>
  );
};

export default Titulo;
