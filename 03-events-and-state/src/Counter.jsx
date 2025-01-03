// For a component to remember some value
// and if that value will affect the display
// we'll use a state
import { useState } from 'react';  // useState is a hook
// a hook allows a component to have additional functionality

export default function Counter() {

    console.log("Calling Counter");
    // useState will allow the component to remember a value
    const [number, setNumber] = useState(99);
    // - useState will return an array of two values
    //  -- index 0: the current value of the state variable
    // -- index 1: a function to change the value of the state variable ---> setter function, mutator function
    // - the first parameter of useState is the initial value of the state variable
    //   WHEN THE COMPONENT RENDERS FOR THE FIRST TIME
    // A re-render (or redraw) of the component is done automatically when one of its owned state variable changes


    const increment = () => {
        // We CAN only mutate (i.e change) value of a state variable using its setter function
        setNumber(number+1);
    }

    return (<>
        <div style={{
            'border': '2px solid black',
            'margin': '10px',
            'padding': '10px',
            'width': '50px',
            'text-align': 'center'
        }}>
            {number}
        </div>
        {/* Event listener syntax: 
        
            <button on<EventName>={func} />
        */}
        <button onClick={increment}>+</button>
    </>)
}