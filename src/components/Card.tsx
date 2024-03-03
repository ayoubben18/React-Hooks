import {useStringContext, useUserContext} from "./context.ts";

export const Card = () => {
    // const user = useUserContext();
    // if (!user) return <h1>The is no User</h1>

    const text = useStringContext()


    return (
        <>
            <h3>{text}</h3>
            {/*<h1>{user.name}</h1>*/}
            {/*<h2>{user.isSelected ? 'You are Selected' : 'You are not selected'}</h2>*/}
        </>
    );
};