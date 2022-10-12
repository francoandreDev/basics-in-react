import { CardsContext } from "./Cards";
import React, { useContext } from "react";
import "../styles/Result.css";
import { Link } from "react-scroll";

const Result = () => {
    const hooks = useContext(CardsContext);
    return (
        <div className="cards crystal result round-borders">
            {hooks?.name && (
                <div style={{ position: "relative", zIndex: 2, opacity: 0.9 }}>
                    <h2 className="title" id="title-result">{hooks.name}</h2>
                    <div className="center-p" style={{ position: "relative" }}>
                        <code className="literal-template">
                            {hooks.example}
                        </code>
                        <code
                            className="literal-template text-shadow"
                            style={{ position: "absolute" }}
                        >
                            {hooks.example}
                        </code>
                    </div>
                </div>
            )}
            <button style={{backgroundColor: "transparent", position: "relative", top: "25px"}}>
                <Link to="begin" smooth={true} duration={1700} style={{color: "var(--color-result-section-color)"}}>Come back</Link>
            </button>
        </div>
    );
};

export default Result;
