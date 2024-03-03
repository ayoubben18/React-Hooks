import {createContext, useContext} from "react";
import {User} from "./DemoUc.tsx";

export const CardContext = createContext<User | undefined>(undefined);

export const StringContext = createContext<string | null>(null)

export function useUserContext() {
    const user: User | undefined = useContext(CardContext);

    if (!user) return null

    return user;
}

export function useStringContext() {
    const text = useContext(StringContext)

    if (!text) throw new Error("There is no string")

    return text
}