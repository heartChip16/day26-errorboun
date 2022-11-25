import React from 'react'
import { useReducer } from 'react';
import reducer from './reducerForCounter';


function CounterReducer() {
    const [count, dispatch] = useReducer(reducer, 0); //3rd parameter optional; function

    function increaseCount() {
        dispatch('increase_count');
    }
    function decreaseCount() {
        dispatch('decrease_count');
    }

    return <>
        <button onClick={increaseCount}>+</button>
        {count}
        <button onClick={decreaseCount}>-</button>
    </>
}

export default CounterReducer