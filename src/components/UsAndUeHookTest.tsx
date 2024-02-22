import {useEffect, useState} from "react";

type UserMock = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export const UsAndUeHookTest = () => {
    const [data, setData] = useState<UserMock []>([])

    useEffect(() => {
        const getTodos = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos');
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            setData(await res.json())
        }
        getTodos()
    }, [setData]);
    return (
        <>{JSON.stringify(data)}</>
    );
};