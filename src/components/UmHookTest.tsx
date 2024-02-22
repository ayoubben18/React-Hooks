import {useState} from "react";
import {initialItem} from "./utils.ts";

export const UmHookTest = () => {
    const [count, setCount] = useState(0)
    const [items] = useState(initialItem)
    const selectedItem = items.find(item => item.isSelected)
    return (
        <>
            <h3>{count}</h3>
            <button onClick={() => setCount(count => count + 1)}/>
            <h3>{JSON.stringify(selectedItem)}</h3>
        </>
    );
};