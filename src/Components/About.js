import imageOne from "../icons_assets/Mario and Adrian A.jpg";
import imageTwo from "../icons_assets/Mario and Adrian b.jpg";
import styles from "./CssComponents/about.module.css";

export default function About() {
    return (
        <section className={styles.about}>
            <div>
                <h1>Little Lemon</h1>
                <h1>Chicago</h1>
                <p>
                    We are a family owned Mediterranean restaurant, focused on
                    traditional recipes served with a modern twist.
                </p>
            </div>
            <div className={styles.imgContainer}>
                <img src={imageOne} alt="Mario and Adrian" />
                <img src={imageTwo} alt="Mario and Adrian" />
            </div>
        </section>
    );
}
