import React, {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    const increment = () => {setCount(c => c + 1)};
    const decrement = () => setCount(c => c - 1);
    const reset = () => setCount(c => c = 0);


    return(
        <div className='counter-div'>
            <p className='count-display'>{count}</p>
            <button className='counter-btn' onClick={decrement}>decrement</button>
            <button className='counter-btn' onClick={reset}>reset</button>
            <button className='counter-btn' onClick={increment}>increment</button>
        </div>
    );
}

export default Counter