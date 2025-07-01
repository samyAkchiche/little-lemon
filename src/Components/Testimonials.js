import TestimonialCard from "./TestimonialCard";
import ProfilePictureOne from "../icons_assets/ProfilePictureOne.jpg";
import ProfilePictureTwo from "../icons_assets/ProfilePictureTwo.jpg";
import ProfilePictureThree from "../icons_assets/ProfilePictureThree.jpg";
import ProfilePictureFour from "../icons_assets/ProfilePictureFour.jpg";
import styles from "./CssComponents/testimonials.module.css";

export default function Testimonials() {
    return (
        <section className={styles.testimonialsSection}>
            <h1 className={styles.heading}>Testimonials</h1>
            <TestimonialCard
                img={ProfilePictureOne}
                rating={"5"}
                name={"Adrian Marlow"}
                review={
                    "Absolutely delicious! The food was full of flavor, and the staff made us feel so welcome. We'll definitely be coming back!"
                }
            />
            <TestimonialCard
                img={ProfilePictureTwo}
                rating={"4"}
                name={"James Hooligan"}
                review={
                    "One of the best dining experiences I've had in a long time. The ambiance was cozy, and every dish was cooked to perfection."
                }
            />
            <TestimonialCard
                img={ProfilePictureThree}
                rating={"4.6"}
                name={"Tony Stark"}
                review={
                    "From the appetizers to dessert, everything was amazing. The website made it so easy to reserve a table too!"
                }
            />
            <TestimonialCard
                img={ProfilePictureFour}
                rating={"5"}
                name={"Mickel Jordan"}
                review={
                    "A hidden gem! The service was impeccable and the food was divine. Highly recommend the lemon dessert."
                }
            />
        </section>
    );
}
