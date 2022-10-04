import ReactHookExample from "./components/ReactHookExample";
import { createContext, useState } from "react";

import "./App.css";
import Result from "./components/Result";

export const AppContext = createContext(null);

function App() {
    const basicHooks = [
        {
            key: 0,
            name: "useState",
            example:
                'import {useState} from "react"; \n\n' +
                "const [state, setState] = useState(0); \n" +
                "console.log(state); //0 \n" +
                "setState(state+1); \n" +
                "console.log(state); //1 \n",
        },
        {
            key: 1,
            name: "useEffect",
            example:
                'import {useEffect} from "react"; \n\n' +
                "useEffect(() => { \n" +
                "\taxios.get(url) \n" +
                "\t\t.then((res)=>{ setData(res.data); }) \n" +
                "\t\t.catch((e)=>{ console.log(e); }) \n" +
                "}, [data]);",
        },
        {
            key: 2,
            name: "useContext",
            example:
                'import {createContext} from "react"; \n' +
                "export const NameContext = createContext(null); \n\n" +
                '<NameContext.Provider value=("example")> \n' +
                "\t</Component> \n" +
                "</NameContext.Provider> \n\n" +
                'import NameContext from "../Parent"; \n' +
                'import {useContext} from "react"; \n\n' +
                "const example = useContext(NameContext); \n" +
                "console.log(example); //example",
        },
        {
            key: 3,
            name: "useReducer",
            example:
                'import {useReducer} from "react"; \n' +
                "const initialState = {variable: 0}; \n\n" +
                "function reducer(state, action) { \n" +
                "\tswitch (action.type) { \n" +
                "\t\tcase 'INCREMENT': \n" +
                "\t\t\treturn {variable: state.variable + 1}; \n" +
                "\t\tcase 'DECREMENT': \n" +
                "\t\t\treturn {variable: state.variable - 1}; \n" +
                "\t\tdefault: \n" +
                "\t\t\treturn {variable: action.payload || 0}; \n" +
                "\t} \n" +
                "} \n\n" +
                "const [state, dispatch] = useReducer(reducer, initialState); \n" +
                "<button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button> \n" +
                "<button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button> \n",
        },
        {
            key: 4,
            name: "useCallback",
            example:
                "const sum(a,b){ \n" +
                "\treturn a+b \n" +
                "} \n\n" +
                "const memorizedCallback = useCallback(() => {sum(a, b)}, [a, b]);"
        },
        {
          key: 5,
          name: "useMemo",
          example:
            "const sum(a,b){ \n" +
            "\treturn a+b \n" +
            "} \n\n" +
            "const memoizedValue = useMemo(() => sum(a, b), [a, b]);"
        },
        {
            key: 10,
            name: null,
        },
    ];

    const [hooks, setHooks] = useState(basicHooks);
    const [hook, setHook] = useState(null);

    return (
        <div className="App">
            <h1>Basics for React Development</h1>
            <div className="rows">
                <section className="hooks half round-borders">
                    <ul className="list">
                        {basicHooks.map((obj, index) => {
                            return (
                                <AppContext.Provider
                                    value={[hooks, setHooks, setHook]}
                                    key={obj.key}
                                >
                                    <ReactHookExample index={index} />
                                </AppContext.Provider>
                            );
                        })}
                    </ul>
                </section>
                <section className="half round-borders result column">
                    <AppContext.Provider value={hook}>
                        <Result />
                    </AppContext.Provider>
                </section>
            </div>
        </div>
    );
}

export default App;
