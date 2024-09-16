import React, {useState} from 'react'

function UpdateFunction(){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c + 3); //"c" represents the previous count. we take the pending state to calc the next state.
        setCount(c => c + 3); //NOT the current state, update occurs later.
        setCount(c => c + 4); //passing in a updater function adds them to a queue.

    /*  setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1); # this wont work becaus React bunches together state updates for performace reasons
        */
    };
    const decrement = () => {
        setCount(c => c - 3);
        setCount(c => c - 3);
        setCount(c => c - 4);
    };
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

export default UpdateFunction