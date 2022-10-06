import { createContext, useState } from "react";
import videos from "./data/videos"
import basicHooks from "./data/hooks";
import Video from "./components/Video";
import Result from "./components/Result";
import ReactHookExample from "./components/ReactHookExample";
import Cards from "./components/Cards";
import "./App.css";

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
            <Result className="cards result round-borders" />
        </CardContext.Provider>
    );

    const myVideos = (
        <div className="columns">
            {videos.map((obj) => {
                return <Video music={obj.music} name={obj.name} type={obj.type}/>;
            })}
        </div>
    );

    return (
        <div className="App">
            <h1>Basics for React Development</h1>
            <div className="rows">
                <Cards classes={"hooks"} content={hookContent} />
                <Cards classes={"result column"} content={resultContent} />
            </div>
            {myVideos}
        </div>
    );
}
export default App;
