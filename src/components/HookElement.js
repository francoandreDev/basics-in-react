import { CardsContext } from "./Cards";
import React, { useContext } from "react";

import "../styles/HookElement.css";
import { Link } from "react-scroll";

const HookElement = ({ index }) => {
    const assignName = (name) => {
        return name === null ? "Empty" : name;
    };

    const selectHook = () => {
        updateHook();
        changeOrderOfHooks();
    };

    const updateHook = () => {
        const setSelectedHook = hooks[2];
        setSelectedHook(currentHook.name === null ? null : currentHook);
    };

    const changeOrderOfHooks = () => {
        const anotherHooks = getHooks.filter((childHook) => {
            return childHook !== currentHook;
        });
        const selectHook = getHooks.filter((childHook) => {
            return childHook === currentHook;
        });
        const newOrder = [...selectHook, ...anotherHooks];
        if (currentHook.name === null) {
            newOrder.sort((a, b) => {
                return a.key < b.key ? -1 : 1;
            });
        }
        setHooks(newOrder);
    };

    const hooks = useContext(CardsContext);
    const getHooks = hooks[0];
    const setHooks = hooks[1];
    const currentHook = getHooks[index];
    const nameHook = assignName(currentHook.name);

    return (
        <li className="hook">
            <div className="crystal">
                <h2 className="hook-name">{nameHook}</h2>
                {nameHook !== "Empty" ? (
                    <Link
                        to="title-result"
                        smooth={true}
                        duration={25}
                        delay={450}
                    >
                        <button
                            className="dark"
                            style={{ color: "var(--color-hook-section-color)" }}
                            onClick={() => selectHook()}
                        >
                            Click me
                        </button>
                    </Link>
                ) : (
                    <button
                        className="dark"
                        style={{ color: "var(--color-hook-section-color)" }}
                        onClick={() => selectHook()}
                    >
                        Click me
                    </button>
                )}
            </div>
        </li>
    );
};

export default HookElement;
