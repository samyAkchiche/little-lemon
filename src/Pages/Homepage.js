import Articles from "../Components/Articles";
import Footer from "../Components/Footer";
import Main from "../Components/Main";
import Testimonials from "../Components/Testimonials";

export default function Homepage() {
    return (
        <div>
            <Main />
            <Articles />
            <Testimonials />
            <Footer />
        </div>
    );
}
