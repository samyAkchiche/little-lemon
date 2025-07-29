import styles from "./CssComponents/nav.module.css";
import { Link } from "react-router-dom";


export default function Nav({ closeNav }) {
    return (
        <>

            <nav>
                <ul className={styles.navList}>
                    <li>
                        <Link className={styles.navLinks} to="/" onClick={closeNav}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.navLinks} to="/aboutPage" onClick={closeNav}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.navLinks} to="/menuPage" onClick={closeNav}>
                            Menu
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.navLinks} to="/reservationPage" onClick={closeNav}>
                            Reservation
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.navLinks} to="/onlineOrderPage" onClick={closeNav}>
                            Online Order
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.navLinks} to="/loginPage" onClick={closeNav}>
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
