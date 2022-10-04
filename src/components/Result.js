import { AppContext } from "../App";
import React, { useContext } from "react";
import "../styles/Result.css";

const Result = () => {
    const hooks = useContext(AppContext);
    return (
        <div className="result round-borders">
            {hooks?.name && (
                <>
                    <h2 className="title">{hooks.name}</h2>
                    <div className="center-p">
                        <code className="literal-template">{hooks.example}</code>
                    </div>
                </>
            )}
        </div>
    );
};

export default Result;
