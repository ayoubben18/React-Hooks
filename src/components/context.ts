import {createContext, useContext} from "react";
import {User} from "./DemoUc.tsx";

export const CardContext = createContext<User | undefined>(undefined);

export function useUserContext() {
    const user = useContext(CardContext);

    if (!user) throw new Error('User is not provided')

    return user;
}