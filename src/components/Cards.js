import React, { createContext, useState } from "react";
import basicHooks from "../data/hooks";
import { Card, HookElement, Result } from "./components";

export const CardsContext = createContext(null);

const Cards = () => {
    const [hooks, setHooks] = useState(basicHooks);
    const [hook, setHook] = useState(null);

    const hookContent = (
        <ul className="list">
            {basicHooks.map((obj, index) => {
                return (
                    <CardsContext.Provider
                        value={[hooks, setHooks, setHook]}
                        key={obj.key}
                    >
                        <HookElement index={index} />
                    </CardsContext.Provider>
                );
            })}
        </ul>
    );

    const resultContent = (
        <CardsContext.Provider value={hook}>
            <Result className="cards result round-borders" />
        </CardsContext.Provider>
    );

    return (
        <>
            <Card classes={"hooks"} content={hookContent} />
            <Card classes={"result column"} content={resultContent} />
        </>
    );
};

export default Cards;
