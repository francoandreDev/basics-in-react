import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
    return (
        <ul className="navbar light crystal">
            <li>
                <Link to="/cards" className="link">Home</Link>
            </li>
            <li>
                <Link to="/music" className="link">Music</Link>
            </li>
        </ul>
    );
};

export default NavBar;