import React, { useEffect, useRef, useState } from "react";
import ButtonMusic from "./ButtonMusic";

const Video = ({ music, name, type }) => {

    const playOrStopSound = () => {
        play ? audioRef.current.play() : audioRef.current.pause();
        setPlay(!play);
    };

    const [play, setPlay] = useState(true);
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef !== null) {
            const currentAudio = audioRef.current;
            currentAudio.volume = 0.2;
        }
    }, [audioRef]);

    return (
        <div className="crystal light round-borders">
            <button
                onClick={() => playOrStopSound()}
                className="crystal border-color-gray"
            >
                <ButtonMusic optionButton={play} song={name} type={type}/>
            </button>
            <video
                loop
                src={music}
                ref={audioRef}
                style={{ display: "none" }}
            />
        </div>
    );
};

export default Video;