import mainImage from "./icons_assets/restauranfood.jpg";
import styles from "./main.module.css";

export default function Main() {
    return (
        <main className={styles.main}>
            <div className={styles.mainText}>
                <h1>Little Lemon</h1>
                <h2 className={styles.mainSubHeading}>Chicago</h2>
                <p>
                    We are family owned Mediterranean restaurant focused on
                    traditional recipes served with a modern twist.
                </p>
                <button>Reserve a Table</button>
            </div>
            <img
                className={styles.mainImage}
                src={mainImage}
                alt="Image of restaurant's food"
            />
        </main>
    );
}
