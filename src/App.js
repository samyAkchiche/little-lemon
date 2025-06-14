import Homepage from "./Pages/Homepage";
import AboutPage from "./Pages/AboutPage";
import ReservationPage from "./Pages/ReservationPage";
import { Routes, Route } from "react-router-dom";
import MenuPage from "./Pages/MenuPage";
import OnlineOrderPage from "./Pages/OnlineOrderPage";
import LoginPage from "./Pages/LoginPage";
import "./app.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";

function App() {
    return (
        <>
            <div className="navBar">
                <Header />
                <Nav />
            </div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/aboutPage" element={<AboutPage />} />
                <Route path="/reservationPage" element={<ReservationPage />} />
                <Route path="/menuPage" element={<MenuPage />} />
                <Route path="/onlineOrderPage" element={<OnlineOrderPage />} />
                <Route path="/loginPage" element={<LoginPage />} />
            </Routes>
        </>
    );
}

export default App;
