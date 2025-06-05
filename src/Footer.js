import Logo from "./icons_assets/Logo.svg";

export default function Footer() {
    return (
        <footer>
            <img src={Logo} />
            <div>
                <h4>Doormat Navigation</h4>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Menu</a>
                    </li>
                    <li>
                        <a href="">Reservation</a>
                    </li>
                    <li>
                        <a href="">Order Online</a>
                    </li>
                    <li>
                        <a href="">Login</a>
                    </li>
                </ul>
            </div>
            <div>
                <h4>Contact</h4>
                <ul>
                    <li>
                        <a href="">Address</a>
                    </li>
                    <li>
                        <a href="">Phone number</a>
                    </li>
                    <li>
                        <a href="">Email</a>
                    </li>
                </ul>
            </div>
            <div>
                <h4>Social Media Links</h4>
                <ul>
                    <li>
                        <a href="">Facebook</a>
                    </li>
                    <li>
                        <a href="">Instagram</a>
                    </li>
                    <li>
                        <a href="">Youtube</a>
                    </li>
                    <li>
                        <a href="">WhatsApp</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
