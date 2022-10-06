import { CardContext } from "../App";
import React, { useContext } from "react";
import "../styles/Result.css";

const Result = () => {
    const hooks = useContext(CardContext);
    return (
        <div className="cards crystal result round-borders">
            {hooks?.name && (
                <div style={{position: "relative", zIndex:2, opacity: 0.8}}>
                    <h2 className="title" >{hooks.name}</h2>
                    <div className="center-p" style={{position: "relative"}}>
                        <code className="literal-template" >{hooks.example}</code>
                        <code className="literal-template" style={{position: "absolute", zIndex: 0, fontSize: "17px", opacity: 0.1}} >{hooks.example}</code>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Result;
