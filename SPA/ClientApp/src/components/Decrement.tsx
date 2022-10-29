import {useState} from 'react';

export const Decrement = () => {
    let [counter, setCounter] = useState(0);
    const decrementCounter = () => setCounter(--counter);
    return (
        <div>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            <p aria-live="polite">Current count: <strong>{counter}</strong></p>

            <button className="btn btn-primary" onClick={decrementCounter}>Increment</button>
        </div>
    );
}
