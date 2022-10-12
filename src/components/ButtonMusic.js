import React, { useEffect, useState } from "react";

const ButtonMusic = ({ optionButton, song, type }) => {
    const [iconIsPlay, setIconIsPlay] = useState(optionButton);

    useEffect(() => {
        setIconIsPlay(optionButton);
    }, [optionButton]);

    return (
        <div className={`${type} music-button`}>
            <i
                className={`fa-solid fa-${iconIsPlay ? "play" : "pause"} ${
                    iconIsPlay ? "bright" : "dim"
                }`}
            ></i>
            <span>{song}</span>
        </div>
    );
};

export default ButtonMusic;
