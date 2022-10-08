import { HashRouter, Route, Routes } from "react-router-dom";
import { Cards, GalleryVideo, NavBar, Redirect } from "./components/components";
import "./App.css";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <h1>Basics for React Development</h1>
                <NavBar />
                <div className="rows">
                    <Routes>
                        <Route
                            path="/"
                            element={<Redirect newPath={"/cards"}></Redirect>}
                        />
                        <Route exact path="/cards" element={<Cards />} />
                        <Route exact path="/music" element={<GalleryVideo />} />
                        <Route
                            path="*"
                            element={<Redirect newPath={"/cards"}></Redirect>}
                        />
                    </Routes>
                </div>
            </div>
        </HashRouter>
    );
}
export default App;
