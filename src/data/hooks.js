const basicHooks = [
    {
        key: 0,
        name: "useState",
        example:
            'import {useState} from "react"; \n\n' +
            "const [state, setState] = useState(0); \n" +
            "console.log(state); //0 \n" +
            "setState(state+1); \n" +
            "console.log(state); //1 \n"
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
            "}, [data]);"
    },
    {
        key: 2,
        name: "useContext",
        example:
            'import {createContext} from "react"; \n\n' +
            "export const NameContext = createContext(null); \n\n" +
            '<NameContext.Provider value=("example")> \n' +
            "\t</Component> \n" +
            "</NameContext.Provider> \n\n" +
            'import NameContext from "../Parent"; \n' +
            'import {useContext} from "react"; \n\n' +
            "const example = useContext(NameContext); \n" +
            "console.log(example); //example"
    },
    {
        key: 3,
        name: "useReducer",
        example:
            'import {useReducer} from "react"; \n\n' +
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
            "<button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button> \n"
    },
    {
        key: 4,
        name: "useCallback",
        example:
            'import {useCallback} from "react"; \n\n' +
            "const sum(a,b){ \n" +
            "\treturn a+b \n" +
            "} \n\n" +
            "const memorizedCallback = useCallback(() => {sum(a, b)}, [a, b]);"
    },
    {
        key: 5,
        name: "useMemo",
        example:
            'import {useMemo} from "react"; \n\n' +
            "const sum(a,b){ \n" +
            "\treturn a+b \n" +
            "} \n\n" +
            "const memoizedValue = useMemo(() => sum(a, b), [a, b]);"
    },
    {
        key: 6,
        name: "useRef",
        example:
            'import {useReducer} from "react"; \n\n' +
            "const myRef = useRef(null); \n\n" +
            "const onButtonClick = () => { \n" +
            "\tmyRef.current.focus(); \n" +
            "} \n\n" +
            '<input ref={myRef} type="text"> \n' +
            "<button onClick={() => onButtonClick()}>Press me</button>"
    },
    {
        key: 7,
        name: "useImperativeHandle",
        example:
            'import React, { useRef } from "react" \n\n' +
            "const scrollableRef = useRef() \n\n" +
            "const scrollDown = () => { \n" +
            "\tscrollableRef.current.scrollY(100); \n" +
            "} \n\n" +
            "const scrollUp = () => { \n" +
            "\tscrollableRef.current.scrollY(-100); \n" +
            "} \n\n" +
            "<Component \n" +
            "\tref={scrollableRef} \n" +
            "\tstyle={{ height: 200, width: 400, overflowY: 'auto' }} \n" +
            "> \n" +
            "\t...\n" +
            "/> \n" +
            "<div> \n" +
            "\t<button onClick={scrollDown}> \n" +
            "\t\tScroll Down 100px \n" +
            "\t </button> \n" +
            "\t<button onClick={scrollUp}> \n" +
            "\t\tscroll Up 100px \n" +
            "\t </button> \n" +
            "</div> \n\n\n" +
            'import {forwardRef, useImperativeHandle, useRef} from "react"; \n\n' +
            "const { children, ...rest } = props \n" +
            "const domRef = useRef() \n\n" +
            "useImperativeHandle(ref, () => ({ \n" +
            "\tscrollY(px = 0) { \n" +
            "\t\tdomRef.current.scrollTop = domRef.current.scrollTop + px; \n" +
            "\t } \n" +
            "}), []) \n\n" +
            "return ( \n" +
            "\t<div ref={domRef} {...rest}> \n" +
            "\t\t{children} \t" +
            "\t</div> \n" +
            ")"
    },
    {
        key: 8,
        name: "useDebugValue",
        example:
            'import { useDebugValue } from "react" \n\n' +
            "useDebugValue(value)"
    },
    {
        key: 9,
        name: "useDeferredValue",
        example:
            'import { useDeferredValue } from "react" \n\n' +
            "const deferredValue = useDeferredValue(value);"
    },
    {
        key: 10,
        name: "useTransition",
        example:
            'import { useTransition } from "react" \n\n' +
            "const [isPending, startTransition] = useTransition(); \n" +
            "const [count, setCount] = useState(0); \n\n" +
            "function handleClick() { \n" +
            "\tstartTransition(() => { \n" +
            "\t\tsetCount(c => c + 1); \n" +
            "\t}); \n" +
            "} \n\n" +
            "<div> \n" +
            "\t{isPending && <Spinner />} \n" +
            "\t<button onClick={handleClick}>{count}</button> \n" +
            "</div>"
    },
    {
        key: 11,
        name: "useId",
        example:
            'import { useId } from "react"; \n\n' +
            "const id = useId(); \n\n" +
            "<div> \n" +
            "\t<label htmlFor={id + '-firstName'}>First Name</label> \n" +
            "\t\t<input id={id + '-firstName'} type=\"text\" /> \n" +
            "\t<label htmlFor={id + '-lastName'}>Last Name</label> \n" +
            "\t<input id={id + '-lastName'} type=\"text\" /> \n" +
            "</div>"
    },
    {
        key: 12,
        name: "useSyncExternalStore",
        example:
            'import { useSyncExternalStore } from "react" \n' +
            "const width = useSyncExternalStore((listener) => { \n" +
            "\twindow.addEventListener('resize', listener); \n" +
            "\treturn () => { \n" +
            "\t\twindow.removeEventListener('resize', listener); \n" +
            "\t}; \n" +
            "}, () => window.innerWidth); \n\n" +
            "<p>Size: {width}</p>"
    },
    {
        key: 13,
        name: "useInsertEffect",
        example:
            'import { useInsertEffect } from "react" \n' +
            "useInsertionEffect(didUpdate);"
    },
    {
        key: 14,
        name: "hooks",
    },
    {
        key: 15,
        name: null
    }
];
let exampleHooks = ""
basicHooks.forEach((hook) => {
    if (hook.example !== undefined) {
        if(hook.name !== null) {
            exampleHooks = exampleHooks === "" ? exampleHooks.concat(hook.name)
            : exampleHooks.concat(", ", hook.name)
        }
    }
    if (hook.name === "hooks") {
        hook.example = exampleHooks
    }
});

export default basicHooks;
