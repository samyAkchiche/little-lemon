import imageOne from "../icons_assets/Mario and Adrian A.jpg";
import imageTwo from "../icons_assets/Mario and Adrian b.jpg";
import styles from "./CssComponents/about.module.css";

export default function About() {
    return (
        <section className={styles.about}>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Little Lemon is a charming neighbourhood bistro that serves
                    simple food and classic cocktails in a lively but casual
                    environment. The restaurant features a locally-sourced menu
                    with daily specials.
                </p>
            </div>
            <div className={styles.imgContainer}>
                <img src={imageOne} alt="Mario and Adrian" />
                <img src={imageTwo} alt="Mario and Adrian" />
            </div>
        </section>
    );
}
