import React, { useState, useRef, useEffect } from "react";

const Video = ({ music, name }) => {
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
        <>
            <div className="crystal light round-borders">
                <button
                    onClick={() => playOrStopSound()}
                    style={{ border: "2px solid black" }}
                >
                    {play ? "Play" : "Stop"} {name}
                </button>
                <video
                    loop
                    src={music}
                    ref={audioRef}
                    style={{ display: "none" }}
                />
            </div>
        </>
    );
};

export default Video;
