import Logo from "../icons_assets/Logo .svg";
import styles from "./CssComponents/header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <img src={Logo} alt="Little Lemon logo" />
            </Link>
        </header>
    );
}
