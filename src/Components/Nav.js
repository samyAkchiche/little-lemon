import styles from "./CssComponents/nav.module.css";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul className={styles.navList}>
                <li>
                    <Link className={styles.navLinks} to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className={styles.navLinks} to="/aboutPage">
                        About
                    </Link>
                </li>
                <li>
                    <Link className={styles.navLinks} to="/menuPage">
                        Menu
                    </Link>
                </li>
                <li>
                    <Link className={styles.navLinks} to="/reservationPage">
                        Reservation
                    </Link>
                </li>
                <li>
                    <Link className={styles.navLinks} to="/onlineOrderPage">
                        Online Order
                    </Link>
                </li>
                <li>
                    <Link className={styles.navLinks} to="/loginPage">
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
