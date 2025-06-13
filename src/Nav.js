import styles from "./nav.module.css";

export default function Nav() {
    return (
        <nav>
            <ul className={styles.navList}>
                <li>
                    <a href="" className={styles.navLinks}>
                        Home
                    </a>
                </li>{" "}
                <li>
                    <a href="" className={styles.navLinks}>
                        About
                    </a>
                </li>
                <li>
                    <a href="" className={styles.navLinks}>
                        Menu
                    </a>
                </li>
                <li>
                    <a href="" className={styles.navLinks}>
                        Reservation
                    </a>
                </li>
                <li>
                    <a href="" className={styles.navLinks}>
                        Online Order
                    </a>
                </li>
                <li>
                    <a href="" className={styles.navLinks}>
                        Login
                    </a>
                </li>
            </ul>
        </nav>
    );
}
