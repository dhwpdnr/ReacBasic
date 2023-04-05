import React, {useState, useEffect} from 'react';
import './App.css';

const someInput = () => {
    const [value, setValue] = useState("");

    const handleChangeValue = (event) => {
        setValue(event.target.value);
    }

    return(
        <div className='input-container'>
            <label htmlFor="1">Name</label>
            <input id="1" type="text" value={value} onChange={handleChangeValue}/>
        </div>
    );
}

export default someInput;