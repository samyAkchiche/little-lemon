import Logo from "../icons_assets/Logo.svg";
import styles from "./CssComponents/footer.module.css";
import { Link } from "react-router-dom";
import ytLogo from "../icons_assets/youtube-brands-solid-full.svg";
import fbLogo from "../icons_assets/facebook-brands-solid-full.svg";
import whatsAppLogo from "../icons_assets/whatsapp-brands-solid-full.svg";
import instaLogo from "../icons_assets/instagram-brands-solid-full.svg";

const doormatLinks = [
    { text: "Home", path: "/" },
    { text: "About", path: "/aboutPage" },
    { text: "Menu", path: "/menuPage" },
    { text: "Reservation", path: "/reservationPage" },
    { text: "Online Order", path: "/onlineOrderPage" },
    { text: "Login", path: "/loginPage" },
];
const contacts = [
    "20B Lorem Street Chicago, US",
    "+213 5* *** ** **",
    "samyakchiche04@gmail.com",
];
const socialLinks = [
    { name: "Facebook", logo: fbLogo, url: "https://facebook.com" },
    { name: "Instagram", logo: instaLogo, url: "https://instagram.com" },
    { name: "YouTube", logo: ytLogo, url: "https://youtube.com" },
    { name: "WhatsApp", logo: whatsAppLogo, url: "https://whatsapp.com" },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Link to={"/"}>
                <img
                    src={Logo}
                    alt="Little Lemon logo"
                    className={styles.footerLogo}
                />
            </Link>
            <div className={styles.column}>
                <h4>Doormat Navigation</h4>
                <ul className={styles.list}>
                    {doormatLinks.map((linkInfo) => (
                        <li key={linkInfo.text}>
                            <Link to={linkInfo.path} className={styles.link}>
                                {linkInfo.text}
                            </Link>
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
                <h4>Social Media</h4>
                <ul className={`${styles.list} ${styles.socialList}`}>
                    {socialLinks.map((linkInfo) => (
                        <li key={linkInfo.name}>
                            <a
                                href={linkInfo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit our ${linkInfo.name} page`}
                            >
                                <img
                                    src={linkInfo.logo}
                                    alt={`${linkInfo.name} icon`}
                                    className={styles.icon}
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
