import { CardsContext } from "./Cards";
import React, { useContext } from "react";
import "../styles/Result.css";

const Result = () => {
    const hooks = useContext(CardsContext);
    return (
        <div className="cards crystal result round-borders">
            {hooks?.name && (
                <div style={{ position: "relative", zIndex: 2, opacity: 0.9 }}>
                    <h2 className="title">{hooks.name}</h2>
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
        </div>
    );
};

export default Result;
