import {memo} from "react";

interface Props {
    onChange: (value: string) => void;
}

const Search = ({onChange}: Props) => {
    console.log("Search rendered !")
    return (
        <input type='text' className='rounded-xl px-4' placeholder='SearchUsers'
               onChange={e => onChange(e.target.value)}/>
    );
};
//Checks if the props are diff from one render to the next
export default memo(Search)