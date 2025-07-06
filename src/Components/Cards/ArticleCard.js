import styles from "../CssComponents/articleCard.module.css";
import { Link } from "react-router-dom";
import bikeIcon from "../../icons_assets/bike-city.svg";

export default function ArticleCard({ img, title, price, description }) {
    return (
        <article className={styles.article}>
            <img src={img} className={styles.img} />
            <div className={styles.textContainer}>
                <p className={styles.title}>
                    {title} <span className={styles.price}>{price}</span>
                </p>
                <p className={styles.description}>{description}</p>
                <Link className={styles.link} to={"/onlineonlineOrderPage"}>
                    Order a Delivery
                    <img
                        className={styles.bikeIcon}
                        src={bikeIcon}
                        alt="bike icon"
                    />
                </Link>
            </div>
        </article>
    );
}
