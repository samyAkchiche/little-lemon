import Logo from "../icons_assets/Logo.svg";
import styles from "./CssComponents/footer.module.css";

const doormatLinks = [
    "Home",
    "About",
    "Menu",
    "Reservation",
    "Online Order",
    "Login",
];
const contacts = ["Address", "Phone Number", "Email"];
const mediaLinks = ["Facebook", "Instagram", "Youtube", "WhatsApp"];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <img src={Logo} alt="Little Lemon logo" />
            <div className={styles.column}>
                <h4>Doormat Navigation</h4>
                <ul className={styles.list}>
                    {doormatLinks.map((link) => (
                        <li key={link}>
                            <a href="#" className={styles.link}>
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.column}>
                <h4>Contact</h4>
                <ul className={styles.list}>
                    {contacts.map((contact) => (
                        <li key={contact}>
                            <a href="#" className={styles.link}>
                                {contact}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.column}>
                <h4>Social Media Links</h4>
                <ul className={styles.list}>
                    {mediaLinks.map((mediaLink) => (
                        <li key={mediaLink}>
                            <a href="#" className={styles.link}>
                                {mediaLink}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
