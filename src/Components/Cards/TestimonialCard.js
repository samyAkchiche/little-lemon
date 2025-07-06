import styles from "../CssComponents/testimonialCard.module.css";
import starIcon from "../../icons_assets/star-svgrepo-com.svg";

export default function TestimonialCard({ img, rating, name, review }) {
    const renderStars = () => {
        const starCount = Math.floor(parseFloat(rating));
        return Array.from({ length: starCount }, (_, i) => {
            return (
                <img
                    key={i}
                    src={starIcon}
                    alt="star"
                    className={styles.starIcon}
                />
            );
        });
    };
    return (
        <article className={styles.testimonialCard}>
            <div className={styles.ratingContainer}>{renderStars()}</div>
            <div className={styles.userInfo}>
                <img
                    src={img}
                    className={styles.profilePicture}
                    alt={`profile of ${name}`}
                />
                <p className={styles.name}>{name}</p>
            </div>
            <p className={styles.review}>{review}</p>
        </article>
    );
}
