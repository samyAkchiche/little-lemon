import ArticleCard from "./Cards/ArticleCard";
import styles from "./CssComponents/articles.module.css";
import bruchetta from "../icons_assets/bruchetta.svg";
import greekSalad from "../icons_assets/greek salad.jpg";
import lemonDessert from "../icons_assets/lemon dessert.jpg";
import Button from "./Button";

export default function Articles() {
    return (
        <section className={styles.container}>
            <div className={styles.specialLine}>
                <h1>This weeks specials!</h1>
                <Button children="Online Menu" />
            </div>

            <ArticleCard
                img={bruchetta}
                title={"Bruchetta"}
                price={"$9.55"}
                description={
                    "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                }
            />
            <ArticleCard
                img={greekSalad}
                title={"Greek Salad"}
                price={"$9.55"}
                description={
                    "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                }
            />
            <ArticleCard
                img={lemonDessert}
                title={"Lemon Dessert"}
                price={"$9.55"}
                description={
                    "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                }
            />
        </section>
    );
}
