import styles from "./CabecalhoLink.module.css"
import { Link } from "react-router-dom"

const CabecalhoLink = ({url, children}) => {
    return(
        <Link className={styles.link} to={url}>{children}</Link>
    )
}

export default CabecalhoLink