import {useRef, useState} from "react";

export const UrHookTest = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    // we use useRef to avoid rerendering

    const handleIncrement = () => {
        countRef.current++;
        setCount(countRef.current);
        //the new value here is only accessible in the new render
        console.log("State : ", count);
        console.log('Ref : ', countRef.current);
    }
    return (
        <div className=' gap-3 flex grid items-center'>
            <div>Count: {count}</div>
            {/*Use ref is not going to rerender and show the new count ,
             uncomment the useState and put the count to see the count increasing*/}
            <div>Count : {countRef.current}</div>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};