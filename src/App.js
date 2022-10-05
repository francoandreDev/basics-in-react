import { createContext, useState, useRef, useEffect } from "react";
import basicHooks from "./data/hooks";
import Result from "./components/Result";
import ReactHookExample from "./components/ReactHookExample";
import Cards from "./components/Cards";
import "./App.css";
import music from "./assets/audios/music.mp3";

export const CardContext = createContext(null);

function App() {
    const [hooks, setHooks] = useState(basicHooks);
    const [hook, setHook] = useState(null);

    const hookContent = (
        <ul className="list">
            {basicHooks.map((obj, index) => {
                return (
                    <CardContext.Provider
                        value={[hooks, setHooks, setHook]}
                        key={obj.key}
                    >
                        <ReactHookExample index={index} />
                    </CardContext.Provider>
                );
            })}
        </ul>
    );

    const resultContent = (
        <CardContext.Provider value={hook}>
            <Result className="cards result round-borders"/>
        </CardContext.Provider>
    );

    const audioRef = useRef(null)

    useEffect(() => {
        if (audioRef !== null) {
            const currentAudio = audioRef.current
            currentAudio.volume = 0.2
        }
    }, [audioRef]);

    return (
        <div className="App">
            <h1>Basics for React Development</h1>
            <div className="rows">
                <Cards classes={"hooks"} content={hookContent} />
                <Cards classes={"result column"} content={resultContent} />
            </div>
            <video autoPlay loop controls src={music} ref={audioRef} />
        </div>
    );
}
export default App;
