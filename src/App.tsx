import './App.css'
import {UrHookTestWithInput} from "./components/UrHookTestWithInput.tsx";
import {UrHookTest} from "./components/UrHookTest.tsx";


function App() {


    return (
        <div className='flex flex-col gap-4'>
            {/*<UcbHookTest/>*/}
            {/*<DemoUc/>*/}
            <UrHookTest/>
            <UrHookTestWithInput/>
            {/*<UreducerHookTest/>*/}
        </div>

    )
}

export default App
