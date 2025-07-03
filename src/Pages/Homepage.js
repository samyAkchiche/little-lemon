import About from "../Components/About";
import Articles from "../Components/Articles";
import Main from "../Components/Main";
import Testimonials from "../Components/Testimonials";

export default function Homepage() {
    return (
        <div>
            <Main />
            <Articles />
            <Testimonials />
            <About />
        </div>
    );
}
