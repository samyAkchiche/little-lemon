import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Nav from "./Nav";
import Footer from "./Footer";
function App() {
    return (
        <>
            <div className="navbar">
                <Header />
                <Nav />
            </div>
            <Main />
            <Footer />
        </>
    );
}

export default App;
