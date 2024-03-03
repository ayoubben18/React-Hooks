import {useCallback, useState} from "react";
import Search from "./Search.tsx";
import {shuffle} from "./utils.ts";

const people = [
    'Ayoub',
    'Hassan',
    'Ayman',
    'Hakim',
    'Mohamed'
]

// interface DemoProps {
// }

export const UcbHookTest = () => {
    const [users, setUsers] = useState(people)
    //function in React are considered in every render , like it is reseted to default
    //we use useCallback to make a frozen function
    const handleSearch = useCallback((text: string) => {
        const filteredUsers = people.filter((user) => user.toLowerCase().includes(text))
        setUsers(filteredUsers)
    }, [])
    return (
        <>
            <div className='align-center mb-2 flex gap-2'>
                <button className='p-2 text-black text-lg bg-amber-50'
                        onClick={() => setUsers(shuffle(people))}>
                    Shuffle
                </button>
                <Search onChange={handleSearch}/>
            </div>
            <div>{users.map((user) => (
                <div key={user}>
                    {user}
                </div>
            ))}</div>
        </>
    );
};