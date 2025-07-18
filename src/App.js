import Homepage from "./Pages/Homepage";
import hamburgerIcon from "./icons_assets/hamburgerIcon.svg";
import AboutPage from "./Pages/AboutPage";
import ReservationPage from "./Pages/ReservationPage";
import { Routes, Route } from "react-router-dom";
import MenuPage from "./Pages/MenuPage";
import { initializeTimes, updateTimes } from "./Components/utils/times";
import OnlineOrderPage from "./Pages/OnlineOrderPage";
import LoginPage from "./Pages/LoginPage";
import "./app.css";
import Header from "./Components/Header";
import { useReducer, useState } from "react";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

function App() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        [],
        initializeTimes
    );

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <button className="menuIcon" onClick={toggleNav}>
                <img src={hamburgerIcon} alt="menu icon" />
            </button>
            <div className={`navBar ${isNavOpen ? "open" : ""}`}>
                <Header />
                <Nav />
            </div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/aboutPage" element={<AboutPage />} />
                <Route
                    path="/reservationPage"
                    element={
                        <ReservationPage
                            availableTimes={availableTimes}
                            dispatch={dispatch}
                        />
                    }
                />
                <Route path="/menuPage" element={<MenuPage />} />
                <Route path="/onlineOrderPage" element={<OnlineOrderPage />} />
                <Route path="/loginPage" element={<LoginPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
