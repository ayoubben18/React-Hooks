import {useReducer} from "react";

interface State {
    count: number;
    error: string | null;
}

interface Action {
    type: "increment" | "decrement" | "reset";
}

function reducer(state: State, action: Action) {
    const {type} = action;
    switch (type) {
        case "increment": {
            const newCount = state.count + 1;
            const thereIsAnError = newCount > 5;

            return {
                ...state, count: thereIsAnError ? state.count : state.count + 1,
                error: thereIsAnError ? "Too much" : null
            };
        }
        case "decrement": {
            const newCount = state.count - 1;
            const thereIsAnError = newCount < -5;

            return {
                ...state, count: thereIsAnError ? state.count : state.count - 1,
                error: thereIsAnError ? "Too Low" : null
            };
        }
        case "reset":
            return {
                ...state, count: 0, error: null
            };
        default:
            return state;
    }
}

export const UreducerHookTest = () => {
    //the advantage from useState we have more control over the state
    // we can update multiple states at ounce
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        error: null
    });
    return (
        <div className=' flex flex-col gap-2'>
            <h2 className='font-bold text-2xl'>Count : {state.count}</h2>
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            {state.error &&
                <span className='font-bold text-xl rounded-2xl p-4 bg-red-300 text-red-950'>{state.error}</span>}
        </div>
    );
};