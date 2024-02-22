import {useState} from 'react';

import {Card} from "./Card.tsx";
import {CardContext} from "./context.ts";

export interface User {
    isSelected: boolean;
    name: string;
}

export const DemoUc = () => {
    const [user] = useState<User>({
        isSelected: true,
        name: 'You',
    });

    return (
        <div>
            <CardContext.Provider value={user}>
                <Card/>
            </CardContext.Provider>
        </div>
    )
};