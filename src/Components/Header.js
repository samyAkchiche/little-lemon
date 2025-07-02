import Logo from "../icons_assets/Logo .svg";
import styles from "./CssComponents/header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <img src={Logo} />
        </header>
    );
}
