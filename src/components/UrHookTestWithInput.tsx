import {useEffect, useRef} from "react";

export const UrHookTestWithInput = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, []);
    const show = () => {
        console.log(inputRef.current?.value)
    }

    return (
        <>
            <input className='p-3 rounded-lg' ref={inputRef} type='text' placeholder="Input ..."/>
            <button onClick={show}>Show in Console</button>
        </>
    );
};